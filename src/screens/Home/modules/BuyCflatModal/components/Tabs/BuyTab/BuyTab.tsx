import { SwapSection, getInputTokensAmount, getTokensAmountIn } from '../../SwapSection/SwapSection';
import { CustomBlueBottom, TabWrapper } from './styles';
import { TabPanelProps } from '../types';
import { CenterBtnWrapper } from '../../BuyCflatForm/styles';
import { CustomOption, Selector, TokenDesc, getUsedToken } from '../../Selector/Selector';
import { memo, useEffect, useState } from 'react';
import CflatsSigner from 'core/utils/contract/utils/CflatsSigner';
import { getExchangerContract } from 'core/utils/contract/utils/contracts';
import { ZeroAddress } from 'ethers';

const cflat: TokenDesc = {
	id: 'CFLAT',
	img: {
		src: 'b4ccd4e2-f087-4476-4d98-9ceb09db9e00/public',
		alt: 'CFLAT'
	},
	label: 'CFLAT',
	value: 'cflat',
	address: '0x',
};

const MemoCflatToken = memo(() => (
	<CustomOption token={cflat} style={{ paddingRight: '8px' }} />
));

export const BuyTab = (props: TabPanelProps) => {
	const { value, index } = props;
	const [payValue, setPayValue] = useState<number | string>('');
	const [receiveValue, setReceiveValue] = useState<number | string>('');

	const handleBuy: React.MouseEventHandler<HTMLButtonElement> = async () => {
		try {
			const tokenUsed = getUsedToken();
			const signer = await CflatsSigner.getSigner();
			const exchangerContract = await getExchangerContract(signer);

			if(tokenUsed.toLowerCase() === ZeroAddress)
			{
				const tx = await exchangerContract.swapExactEthForTokens({value: getTokensAmountIn()});
				await tx.wait();
				alert(tx);
			}
			else
			{
				const tx = await exchangerContract.swapExactTokensForTokens(tokenUsed, getTokensAmountIn);
				await tx.wait();
				alert(tx);
			}
		} catch (error) {}
	};

	useEffect(() => {
		const handleInputedTokensAmount = async () =>
		{
			setReceiveValue(getInputTokensAmount());
		}

		handleInputedTokensAmount();
	})

	return (
		<>
			{value === index && (
				<>
					<TabWrapper role='tabpanel' hidden={value !== index}>
						<SwapSection
							amount={payValue as number}
							title='You pay'
							maxLabel
							TokenComponent={Selector}
							onChange={setPayValue}
						/>
						<SwapSection
							amount={receiveValue as number}
							title='You receive'
							{...props}
							TokenComponent={MemoCflatToken}
							onChange={setReceiveValue}
						/>
					</TabWrapper>
					<CenterBtnWrapper>
						<CustomBlueBottom onClick={handleBuy}>BUY TOKENS</CustomBlueBottom>
					</CenterBtnWrapper>
				</>
			)}
		</>
	);
};
