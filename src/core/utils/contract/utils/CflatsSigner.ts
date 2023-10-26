import { EvmChain } from "@moralisweb3/evm-utils";
import { BrowserProvider, JsonRpcSigner, Contract, JsonRpcProvider, BigNumberish } from "ethers";


export default class CflatsSigner {
    private static _ethereum = (window as any).ethereum;
    public static readonly MAINNET = '0x'+(1).toString(16);
    public static readonly TESTNET = '0x'+(80001).toString(16);


    public static async hasWallet()
    {
        return this._ethereum === undefined ? false : true;
    }


    public static async isConnected(){
        try{
            const accounts = await this._ethereum.request({method: 'eth_accounts'});       
            if (accounts.length > 0) {
                return true
            }
        } catch(e){}

        return false;
    }


    public static async connectWallet() {
        await this._ethereum.request({ method: 'eth_requestAccounts' });
    }
    
    public static async changeNetwork(chain: EvmChain)
    {
        const chainId = chain.name === "Mumbai" ? this.TESTNET : this.MAINNET;


        if (this._ethereum.networkVersion !== chainId) {
            try {
                await this._ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: chainId }]
                });
            } catch (err: any) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                    await this._ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{
                            iconUrls: ["https://polygonscan.com/images/brandassets/PolygonScan-logo-circle.jpg"],
                            chainName: chain.name,
                            chainId: chainId,
                            nativeCurrency: chain.currency,
                            rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
                            blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
                        }]
                    });
                }
            }
        }
    }

    public static async getSigner(): Promise<JsonRpcSigner>
    {
        if((await this.hasWallet()) === false){
            throw "CflatsSigner: Install metamask first!";
        }

        const provider = await this.getCurrentProvider();
        return await provider.getSigner();
    }


    public static async getBalance(contractAddress?: string): Promise<BigNumberish>
    {
        let balance: BigNumberish = 0n;

        if(contractAddress === undefined){
            const provider = await this.getCurrentProvider();
            balance = await provider.getBalance((await this.getSigner()).address);
        }
        else{
            // TODO
        }

        return balance;
    }


    public static async getCurrentProvider(): Promise<BrowserProvider> {
        return new BrowserProvider(this._ethereum);
    }

    public static async getCurrentNetworkId(): Promise<bigint> {
        let chainIdBI = - 1n;
        try{
            const provider = await this.getCurrentProvider();
            const { chainId } = await provider.getNetwork();
            chainIdBI = chainId;
        } catch(e){
            console.error("Connect wallet first");
        } finally{
            return chainIdBI;
        }
    }


}
