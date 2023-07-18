import { BigNumber, Contract, ethers, Signer } from 'ethers';
import Web3 from 'web3';
import { keccak256, parseEther } from 'ethers/lib/utils';
import { MerkleTree } from 'merkletreejs';

declare var window: any;

class CryptoflatsNFT {
	private readonly userAddress: string;
	private readonly contractAddress: string;
	private readonly abi: any;
	private readonly networkId = '16'; //0x13881 **** 16
	readonly _providerUrl = 'https://bsc-dataseed.binance.org/'; //https://bsc-dataseed.binance.org/ ****** https://rpc-mumbai.maticvigil.com/
	private readonly _provider = new ethers.providers.JsonRpcProvider(
		this._providerUrl
	);
	private readonly web3 = new Web3(
		window.ethereum || window.web3.currentProvider
	);
	private readonly _contractWeb3: any;
	private readonly _contractEthers: Contract;
	private readonly _prices = new Map<
		number,
		{ priceDiscount: string; priceFull: string }
	>();
	private readonly _gen: number;
	private readonly _freeListAddresses: string[];
	private readonly _discountListAddresses: string[];

	constructor(
		contractAddress: string,
		userAddress: string,
		gen: number,
		freeListAddresses: string[],
		discountListAddresses: string[],
		abi: any
	) {
		this.contractAddress = contractAddress;
		this.userAddress = userAddress;
		this.abi = abi;
		this._gen = gen;
		this._contractEthers = new Contract(
			contractAddress,
			this.abi,
			this._provider
		);
		this._contractWeb3 = new this.web3.eth.Contract(abi, contractAddress);
		this._discountListAddresses = discountListAddresses;
		this._freeListAddresses = freeListAddresses;
		this._prices.set(0, { priceDiscount: '0.1', priceFull: '0.15' });
		this._prices.set(1, { priceDiscount: '0.15', priceFull: '0.2' });
		this._prices.set(2, { priceDiscount: '0.3', priceFull: '0.4' });
		this._prices.set(3, { priceDiscount: '0', priceFull: '0' });
		this._prices.set(4, { priceDiscount: '0', priceFull: '0' });
		this._prices.set(5, { priceDiscount: '0', priceFull: '0' });
	}

	// Метод для смены сети
	private changeProvider = async () => {
		try {
			if (!window.ethereum) return;
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const network = await provider.getNetwork();
			const chainId = network ? network.chainId : null;

			// @ts-ignore
			if (chainId !== this.networkId) {
				await window.ethereum.request({
					method: 'wallet_addEthereumChain',
					params: [
						{
							chainId: '0x38', // Chain ID для Binance Smart Chain
							rpcUrls: ['https://bsc-dataseed.binance.org/'], // RPC-URL для Binance Smart Chain
							chainName: 'Binance Smart Chain',
							nativeCurrency: {
								name: 'BNB',
								symbol: 'BNB',
								decimals: 18
							},
							blockExplorerUrls: ['https://bscscan.com'] // Ссылка на блокэксплорер для Binance Smart Chain
						}
					]
				});
			}
		} catch (err: any) {
			throw new Error(err);
		}
	};

	private sortAddresses = (addresses: string[]) => {
		const sorted = addresses.sort();
		return sorted.filter((item, index) => sorted.indexOf(item) === index);
	}

	public connect = (signer: Signer): CryptoflatsNFT => {
		// @ts-ignore
		return this._contractEthers.connect(signer) as CryptoflatsNFT;
	};

	// Метод для проверки на White List со скидкой 0.1
	public isUserEarlyAccessWhiteList = async (): Promise<boolean> => {
		try {
			const merkleData = this.getMerkleTreeData(this._discountListAddresses);
			const proof = merkleData?.merkleProof;

			return await this._contractEthers.isUserEarlyAccessWhitelist(
				proof,
				this.userAddress
			);
		} catch (err: any) {
			throw new Error(err);
		}
	};

	// Метод для проверки на White List по полной стоимости
	public isUserFreePurchaseWhitelist = async (): Promise<boolean> => {
		try {
			// Приобретение - 0
			const merkleData = this.getMerkleTreeData(this._freeListAddresses);
			const proof = merkleData?.merkleProof;

			return await this._contractEthers.isUserFreePurchaseWhitelist(
				proof,
				this.userAddress
			);
		} catch (err: any) {
			throw new Error(err);
		}
	};

	public async addInNewFreePurchaseWhitelistRoot(addressesFromField: string[], addressesFromDB: string[]) {
		const addresses = [...addressesFromField, ...addressesFromDB];
		const sortedAddresses = this.sortAddresses(addresses)
		const merkleData = this.getMerkleTreeData(sortedAddresses);
		const freeListRoot = merkleData?.merkleRoot;
		return await this._contractWeb3.methods
			.setNewFreePurchaseWhitelistRoot(freeListRoot)
			.send({ from: this.userAddress});
	}

	public async addInNewEarlyAccessWhitelistRoot(addressesFromField: string[], addressesFromDB: string[]) {
		const addresses = [...addressesFromField, ...addressesFromDB];
		const sortedAddresses = this.sortAddresses(addresses);
		const merkleData = this.getMerkleTreeData(sortedAddresses);
		const discountListRoot = merkleData?.merkleRoot;
		return await this._contractWeb3.methods
			.setNewEarlyAccessWhitelistRoot(discountListRoot)
			.send({ from: this.userAddress});
	}

	public getPrice = async (): Promise<string> => {
		try {
			const isUserEarlyAccessWhiteList =
				await this.isUserEarlyAccessWhiteList();
			const isUserFreePurchaseWhitelist =
				await this.isUserFreePurchaseWhitelist();

			const prices = this._prices.get(this._gen);
			const discountPrice = parseEther(prices?.priceDiscount as string);
			const fullPrice = parseEther(prices?.priceFull as string);
			const freePrice = parseEther('0');

			const price: BigNumber = isUserFreePurchaseWhitelist
				? freePrice
				: isUserEarlyAccessWhiteList
				? discountPrice
				: fullPrice;

			return price.toString();
		} catch (err: any) {
			throw new Error(err);
		}
	};

	private getMerkleTreeData = (addresses: string[]) => {
		try {
			const leaves: string[] = addresses.map(account => keccak256(account));
			const merkleTree: MerkleTree = new MerkleTree(leaves, keccak256, {
				sort: true
			});
			const leaf = keccak256(this.userAddress);
			const merkleRoot = merkleTree.getHexRoot();
			const merkleProof = merkleTree.getHexProof(leaf);

			return {
				merkleRoot,
				merkleProof,
				leaf
			};
		} catch (err) {
			console.log(err);
		}
	};

	public mintGen = async (): Promise<any> => {
		try {
			await this.changeProvider();
			const price = await this.getPrice();

			const proofFreeList = await this.getMerkleTreeData(
				this._freeListAddresses
			)?.merkleProof;

			const proofDiscountList = await this.getMerkleTreeData(
				this._discountListAddresses
			)?.merkleProof;

			return await this._contractWeb3.methods
				.mint(proofFreeList, proofDiscountList)
				.send({ from: this.userAddress, value: price });
		} catch (err: any) {
			throw new Error(err);
		}
	};
}

export default CryptoflatsNFT;