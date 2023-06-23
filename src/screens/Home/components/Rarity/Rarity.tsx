import styles from './Rarity.module.scss'
import React, { useState } from 'react'
import classNames from 'classnames'
import CfImage from '../../../../components/CfImage/CfImage'
import { Box, Grid, useMediaQuery } from '@mui/material'
import {
	AboutFlats,
	Apartment,
	FlatInfo,
	Info,
	TabButton,
	TabButtons,
	TabContainer
} from './styles'
import TabPanel from './TabPanel'
import { useTheme } from '@mui/material/styles'
import { ITab } from './types'
import { useTranslations } from 'next-intl';

const Rarity = () => {
	const [tabId, setTabId] = useState<string>('rarity_01')
	const [value, setValue] = useState<number>(0)
	const theme = useTheme()
	const largeScreen = useMediaQuery(theme.breakpoints.up('lg'))
	const t = useTranslations('Home')
	const rarityData = ['rarity_01', 'rarity_02', 'rarity_03', 'rarity_04', 'rarity_05', 'rarity_06'];

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	const handleClick = (event: React.SyntheticEvent) => {
		const appMode = (event.target as HTMLButtonElement).getAttribute('data-id')
		if (appMode) setTabId(appMode.toString())
	}

	return (
		<section id={'rarity'}>
			<div className={styles.rarityAbout}>
				<div className={styles.container}>
					<h1 className={styles.title}>{t('rarity.title')}</h1>

					<p className={styles.text}>{t('rarity.about')}</p>

					<TabButtons value={value} onChange={handleChange}>
						{rarityData.map((tab: any, index) => (
							<TabButton
								data-id={t(`rarity.tabs.${tab}.id`)}
								key={`tab-button_${index}`}
								label={t(`rarity.tabs.${tab}.name`)}
								onClick={handleClick}
								className={classNames(tabId === t(`rarity.tabs.${tab}.id`) && t(`rarity.tabs.${tab}.class`))}
							/>
						))}
					</TabButtons>
				</div>
			</div>

			<Box sx={{ width: '100%' }}>
				{rarityData.map((tab, index) => {
					return (
						<TabPanel
							key={`rarity-tab_${index}`}
							image={t(`rarity.tabs.${tab}.background`)}
							value={value}
							index={index}
						>
							<TabContainer>
								<AboutFlats>{t(`rarity.tabs.${tab}.about_flats`)}</AboutFlats>

								<Grid
									container
									justifyContent={!largeScreen ? 'center' : 'space-between'}
									alignItems={'center'}
									//spacing={10}
									//wrap={'nowrap'}
									//direction={!largeScreen ? 'column' : 'row'}
								>
									<Grid
										item
										xs={12}
										lg={4}
										//sx={{ display: 'flex', justifyContent: 'center' }}
									>
										<Apartment
											className={'animate__animated animate__backInLeft'}
										>
											<CfImage src={t(`rarity.tabs.${tab}.img`)} alt={t(`rarity.tabs.${tab}.name`)} fluid />
										</Apartment>
									</Grid>

									<Grid item xs={12} lg={6}>
										<FlatInfo
											className={'animate__animated animate__backInRight'}
										>
											{['n1', 'n2', 'n3', 'n4', 'n5'].map((item, index) => {
												return (
													<Info key={`rarity-tab-info_${index}`}>
														<span className={'yellow'}>{t(`rarity.tabs.${tab}.tab_info.${item}`)}</span>
													</Info>
												)
											})}
										</FlatInfo>
									</Grid>
								</Grid>
							</TabContainer>
						</TabPanel>
					)
				})}
			</Box>
		</section>
	)
}

export default Rarity
