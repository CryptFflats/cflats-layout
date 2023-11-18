import React, { useState, useEffect } from 'react';
import {
	ComponentHolder,
	MaxLabel,
	SwapSectionAmount,
	SwapSectionAmountWrapper,
	SwapSectionRow,
	SwapSectionTitle,
	SwapSectionWrapper
} from './styles';
import { SwapSectionProps } from './types';
import CflatsSigner from 'core/utils/contract/utils/CflatsSigner';
import BigNumber from 'bignumber.js';
import { getUsedToken } from '../Selector/Selector';
import { ZeroAddress, ethers } from 'ethers';
import { getExchangerContract } from 'core/utils/contract/utils/contracts';
import { ErrorMessage } from 'screens/Home/components/WlBoxModal/components/WlForm/styles';
import styles from './SwapSection.module.scss';


export const SwapSection = (props: SwapSectionProps) => {
	const { amount, title, TokenComponent, maxLabel, onChange } = props;
	const [getErrorMsg, setErroMsg] = useState('');

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = async e => {
		const value = e.target.value;
		

		if(isNaN(Number(value)) === true)
		{
			return;
		}
		

		const signer = await CflatsSigner.getSigner();
		const exchangerContract = await getExchangerContract(signer);
		const tokenUsed = getUsedToken();

		const balance = tokenUsed === ethers.ZeroAddress ? await CflatsSigner.getBalance() : await CflatsSigner.getBalance(tokenUsed);
		const decimals = tokenUsed.toLowerCase() !== ZeroAddress.toLowerCase() ? 6 : 18;


		const formatedValue = (new BigNumber(value)).multipliedBy(`1e${decimals}`);
		const minSwapAmount = (await exchangerContract.getExchangeInfo(tokenUsed))[2];

		if(formatedValue.isLessThan(minSwapAmount))
		{
			const formatedMinSwapAmount = (new BigNumber(minSwapAmount)).dividedBy(`1e${decimals}`);
			setErroMsg(`Minimal Exchange amount is ${formatedMinSwapAmount}`);
		}
		else if(formatedValue.isGreaterThan(balance.toString()))
		{
			setErroMsg(`Your balance is smaller than input value`);
		}
		else
		{
			setErroMsg('');
		}

		if(value !== '')
		{
			const amountsOut = await exchangerContract.getAmountsOut(tokenUsed, formatedValue.toString());
			const formatedAmountsOut = (new BigNumber(amountsOut.toString())).dividedBy(`1e${8}`);
			
			setInputTokensAmount(formatedAmountsOut.toString());
		}
		else
		{
			setInputTokensAmount('');
		}

		setTokensAmountIn(formatedValue.toString());
		
		onChange(value);
	};

	const handleMaxClick: React.MouseEventHandler<HTMLSpanElement> = async () => {
		const tokenUsed = getUsedToken();
		const balance = tokenUsed === ethers.ZeroAddress ? await CflatsSigner.getBalance() : await CflatsSigner.getBalance(tokenUsed);
		

		setTokensAmountIn(balance.toString());

		let decimals = 18;
		if(tokenUsed.toLowerCase() !== ZeroAddress.toLowerCase())
		{
			decimals = 6;
		}

		const signer = await CflatsSigner.getSigner();
		const exchangerContract = await getExchangerContract(signer);

		const formatedValue = (new BigNumber(balance.toString()));
		const minSwapAmount = (await exchangerContract.getExchangeInfo(tokenUsed))[2];

		if(formatedValue.isLessThan(minSwapAmount))
		{
			const formatedMinSwapAmount = (new BigNumber(minSwapAmount)).dividedBy(`1e${decimals}`);
			setErroMsg(`Minimal Exchange amount is ${formatedMinSwapAmount}`);
		}
		else
		{
			setErroMsg('');
		}
		

		const amountsOut = await exchangerContract.getAmountsOut(tokenUsed, balance.toString());
		const formatedAmountsOut = (new BigNumber(amountsOut.toString())).dividedBy(`1e${8}`);

		const formatedBalance = (new BigNumber(balance.toString())).dividedBy(`1e${decimals}`);
		setInputTokensAmount(formatedAmountsOut.toString());
		
		onChange(balance.toString() < '0.000001' ? '0' : `${formatedBalance.toFormat(5)}`);
	};


	return (
		<SwapSectionWrapper>
			<SwapSectionRow sx={{ mb: '8px' }}>
				<SwapSectionTitle>{title}</SwapSectionTitle>
				{maxLabel && <MaxLabel onClick={handleMaxClick}>max</MaxLabel>}
			</SwapSectionRow>
			<SwapSectionRow>
				<SwapSectionAmountWrapper>
					<SwapSectionAmount
						placeholder='0'
						value={amount}
						onChange={async e => handleChange(e)}
					/>
					<ErrorMessage className={styles["_err-msg"]}>{getErrorMsg}</ErrorMessage>
				</SwapSectionAmountWrapper>
				<ComponentHolder>
					<TokenComponent />
				</ComponentHolder>
			</SwapSectionRow>
		</SwapSectionWrapper>
	);
};


export function setInputTokensAmount(amount: string)
{
	tokensInputedAmount.amount = amount;
}

export function getInputTokensAmount()
{
	return tokensInputedAmount.amount;
}

const tokensInputedAmount = {
	amount: ''
}


export function setTokensAmountIn(amount: string)
{
	tokensAmountIn.amount = amount;
}

export function getTokensAmountIn()
{
	return tokensAmountIn.amount;
}

const tokensAmountIn = {
	amount: ''
}