import styles from '../ProfileSidevar/ProfileSidebar.module.scss'
import { useWalletAddressHook } from '../../../../../../core/hooks/useWalletAddress.hook'
import { Tooltip } from '@mui/material'
import { useState } from 'react'
import { useAccount } from 'wagmi'

const Address = () => {
	const { address } = useAccount()
	const [copyText, setCopyText] = useState<string>('Copy')
	const smallAddress = useWalletAddressHook()

	const copyAddess = () => {
		if (!address) return
		navigator.clipboard
			.writeText(address)
			.then(() => {
				setCopyText('Copied!')
				setTimeout(() => setCopyText('Copy'), 2000)
			})
			.catch(error => {})
	}

	return (
		<div className={styles.address}>
			<Tooltip title={copyText} placement={'top'} arrow>
				<p onClick={copyAddess}>{smallAddress}</p>
			</Tooltip>
		</div>
	)
}

export default Address
