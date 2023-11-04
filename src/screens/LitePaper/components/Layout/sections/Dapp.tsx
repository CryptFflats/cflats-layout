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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/1270513b-8e13-42fb-896a-f0a342679100/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/cc318342-e7b6-4d48-4eaa-908858fd0000/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/6c0463da-88c2-44ab-4b0b-d34459111d00/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/e022caa8-1457-4843-65f7-54af92498e00/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/6c0463da-88c2-44ab-4b0b-d34459111d00/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/4d8bd6a4-5eb7-44e7-888e-ccfe37fe1f00/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/01ab50df-a5fa-4077-5613-2c22e4fc0b00/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/f7946a35-c8b8-4778-610d-3af0e9fcd100/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/4fe93778-f0d8-4946-0129-07e90cc9ab00/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/31bd506a-183c-4674-2928-b0eb4e453800/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/b2bf2b10-f18d-416b-ca31-471ab68fdc00/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/89d5d8ea-5a11-4d96-ad4b-e5ac4c6b4300/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/83c2ea61-3c78-4a93-f227-f71e19530b00/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/48bc0b05-d688-4ab8-5208-0e1eed09ca00/public'}
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
					src={'https://imagedelivery.net/HmgqhtdzVbRs-_BPsHnYHg/d713928c-38cf-4504-6f13-2ad871581200/public'}
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
