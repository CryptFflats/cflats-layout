import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'

export const useWalletAddressHook = () => {
	const [addressWallet, setAddressWallet] = useState<string>('')
	const { address } = useAccount()

	useEffect(() => {
		if (address === undefined) return setAddressWallet('')

		const firstPart: string = address.substring(0, 9)
		const secondPart: string = address.substring(address.length - 4)
		const result: string = `${firstPart}...${secondPart}`

		setAddressWallet(result)
	}, [address])

	return addressWallet
}
