'use client';

import styles from '../Layout.module.scss';
import CfImage, { CflatsImage } from '../../../../../components/CfImage/CfImage';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';

const Dapp = () => {
	const t = useTranslations('Litepaper');

	return (
		<motion.section
			id='#dapp'
			className={styles['main-section']}
			viewport={{ once: true, amount: 0.5 }}
		>
			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('DAPP.title1')}
			</motion.h2>

			<motion.p 
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_1') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/313c55af-5510-4cc5-c470-dabbfb915500/public'}
				/>
			</motion.div>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_2') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/3ef57ce0-60fe-4788-ade1-da855a66fe00/public'}
				/>
			</motion.div>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_3') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-60']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/98c385d4-89fd-4dea-870e-c2594f0be100/public'}
				/>
			</motion.div>


			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('DAPP.title2')}
			</motion.h2>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_4') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_5') }}
			/>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-10']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/92c7b32c-0205-40c2-5158-4bcf1e87b500/public'}
				/>
			</motion.div>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/6cd24da4-cc32-488e-eb11-89d576897900/public'}
				/>
			</motion.div>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_5_1') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/c87998c0-60f7-4d2c-75d7-f48e05adc500/public'}
				/>
			</motion.div>
			

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_6') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_7') }}
			/>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/9e4ddbbb-f3da-4cb5-888a-c905175f0200/public'}
				/>
			</motion.div>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_8') }}
			/>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/3b40c20f-8c45-4056-10db-96786fdc8900/public'}
				/>
			</motion.div>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_9') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_10') }}
			/>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_11') }}
			/>
			
			<ul className={styles['mb-30']}>
				{['n1', 'n2', 'n3'].map((item, index) => {
					return (
						<motion.li
							variants={fadeInUp}
							initial={'hidden'}
							whileInView='show'
							viewport={{ once: true, amount: 0.5 }}
							key={index}
						>
							<span>{t(`DAPP.list_1.${item}`)}</span>
							{t(`DAPP.list_1_1.${item}`)}
						</motion.li>
					);
				})}
			</ul>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_12') }}
			/>

			<ul className={styles['mb-30']}>
				{['n1', 'n2', 'n3', 'n4', 'n5'].map((item, index) => {
					return (
						<motion.li
							variants={fadeInUp}
							initial={'hidden'}
							whileInView='show'
							viewport={{ once: true, amount: 0.5 }}
							key={index}
						>
							<span>{t(`DAPP.list_2.${item}`)}</span>{t(`DAPP.list_2_2.${item}`)}
						</motion.li>
					);
				})}
			</ul>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-60']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/c8ceea79-a4ff-45d7-6fc8-23fb874ae700/public'}
				/>
			</motion.div>


			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('DAPP.title3')}
			</motion.h2>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_13') }}
			/>
			
			<ul className={styles['mb-30']}>
				{['n1', 'n2', 'n3'].map((item, index) => {
					return (
						<motion.li
							variants={fadeInUp}
							initial={'hidden'}
							whileInView='show'
							viewport={{ once: true, amount: 0.5 }}
							key={index}
						>
							<span>{t(`DAPP.list_3.${item}`)}</span>{t(`DAPP.list_3_3.${item}`)}
						</motion.li>
					);
				})}
			</ul>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_14') }}
			/>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_15') }}
			/>

			<ul className={styles['mb-30']}>
				{['n1', 'n2', 'n3'].map((item, index) => {
					return (
						<motion.li
							variants={fadeInUp}
							initial={'hidden'}
							whileInView='show'
							viewport={{ once: true, amount: 0.5 }}
							key={index}
						>
							<span>{t(`DAPP.list_4.${item}`)}</span>{t(`DAPP.list_4_4.${item}`)}
						</motion.li>
					);
				})}
			</ul>

			<motion.p
				className={styles['mb-60']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_16') }}
			/>



			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('DAPP.title4')}
			</motion.h2>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_17') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_18') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_19') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_20') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_21') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_22') }}
			/>
			
			
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-60']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/ba295b5b-c92c-4784-270b-34a5f9185c00/public'}
				/>
			</motion.div>




			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('DAPP.title5')}
			</motion.h2>
			
			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_23') }}
			/>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_24') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_25') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_26') }}
			/>

			<motion.p
				className={styles['mb-60']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_27') }}
			/>





			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('DAPP.title6')}
			</motion.h2>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_28') }}
			/>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_29') }}
			/>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_30') }}
			/>

			
			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.img_helper_1') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/b1c1a902-cf8a-4cca-2511-f82823be7f00/public'}
				/>
			</motion.div>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_31') }}
			/>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_32') }}
			/>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.img_helper_2') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-10']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/f8d7157d-9501-48b1-f150-ed704fd30400/public'}
				/>
			</motion.div>
			
			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.img_helper_3') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-10']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/a722503f-3dc9-4b42-82a1-bd52a2b89400/public'}
				/>
			</motion.div>
			
			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.img_helper_4') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-60']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/cf657f6c-780b-46c8-fb90-2d498acdf600/public'}
				/>
			</motion.div>



			<motion.h2
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('DAPP.title7')}
			</motion.h2>
			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_33') }}
			/>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/a8d88961-35f6-4a61-fa02-9bd1cb9b4b00/public'}
				/>
			</motion.div>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_34') }}
			/>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.img_helper_5') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/136ac41e-b201-489b-1f59-bcf4f5e8f600/public'}
				/>
			</motion.div>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_35') }}
			/>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_36') }}
			/>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.img_helper_6') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-10']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/6f657318-7e74-4d45-4b78-064a30b70f00/public'}
				/>
			</motion.div>
			
			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.img_helper_7') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={''}
				/>
			</motion.div>

			<motion.p
				className={styles['mb-10']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.img_helper_8') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-30']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/91f08cc2-9891-4caa-c715-a33c29c4e600/public'}
				/>
			</motion.div>

			<motion.p
				className={styles['mb-30']}
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_37') }}
			/>



		</motion.section>
	);
};

export default Dapp;
