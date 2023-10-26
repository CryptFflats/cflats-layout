import { EvmChain } from "@moralisweb3/evm-utils";
import { Contract, JsonRpcSigner } from "ethers";
import CflatsSigner from "./CflatsSigner";
import { 
    MINT_GEN_ZERO_ADDRESS,
    MINT_GEN_FIRST_ADDRESS,
    MINT_GEN_SECOND_ADDRESS,
    MINT_GEN_THIRD_ADDRESS,
    MINT_GEN_FOURTH_ADDRESS,
    MINT_GEN_FIFTH_ADDRESS,
} from "core/utils/constance";

import CflatsGenZeroAbi from '../../../../core/abi/gen_zero.json';
import CflatsGenAbi from '../../../../core/abi/gen_zero.json';

export async function getTokenContract(signer: JsonRpcSigner) 
{
    changeNetworkToEthereumIfNeeded();
    
}


export async function getNftContract(genNumber: number, signer: JsonRpcSigner) 
{
    changeNetworkToEthereumIfNeeded();

    const contractAddress = 
        genNumber === 0 ? MINT_GEN_ZERO_ADDRESS : 
        genNumber === 1 ? MINT_GEN_FIRST_ADDRESS : 
        genNumber === 2 ? MINT_GEN_SECOND_ADDRESS : 
        genNumber === 3 ? MINT_GEN_THIRD_ADDRESS : 
        genNumber === 4 ? MINT_GEN_FOURTH_ADDRESS :  MINT_GEN_ZERO_ADDRESS;

    const contractAbi = genNumber === 0 ? CflatsGenZeroAbi : CflatsGenAbi;

    return new Contract(contractAddress, contractAbi, signer);
}


async function changeNetworkToEthereumIfNeeded() 
{
    // change network to eth if other network selected
	if(await CflatsSigner.getCurrentNetworkId() !== 1n){
		await CflatsSigner.changeNetwork(EvmChain.ETHEREUM);
	}
} 