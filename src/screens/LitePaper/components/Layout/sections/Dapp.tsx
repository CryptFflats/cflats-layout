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
				className={styles['mb-20']}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_1') }}
			/>
			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/aptqmow.jpg'}
				/>
			</motion.div>

			<motion.p
				className={styles['mb-20']}
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/mjmbclr.jpg'}
				/>
			</motion.div>

			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/iifhcse.jpg'}
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
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_4') }}
			/>

			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/zrjfxke.jpg'}
				/>
			</motion.div>

			<motion.div
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/zbvmgov.jpg'}
				/>
			</motion.div>

			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/ziwoaud.jpg'}
				/>
			</motion.div>
			

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_6') }}
			/>

			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/hjesqqh.jpg'}
				/>
			</motion.div>

			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/lsihjqh.jpg'}
				/>
			</motion.div>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_9') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_10') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_11') }}
			/>
			
			<ul>
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
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_12') }}
			/>

			<ul>
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/xixsjpn.jpg'}
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
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_13') }}
			/>
			
			<ul>
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
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_14') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_15') }}
			/>

			<ul>
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
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_17') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_18') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_19') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_20') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_21') }}
			/>

			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/pwxtuvp.jpg'}
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
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_23') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_24') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_25') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_26') }}
			/>

			<motion.p
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
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_28') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_29') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_30') }}
			/>

			
			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/pwxtuvp.jpg'}
				/>
			</motion.div>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_31') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_32') }}
			/>

			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/ipxcmrx.jpg'}
				/>
			</motion.div>
			
			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/oamuneb.jpg'}
				/>
			</motion.div>
			
			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/ssuyfeg.jpg'}
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/zqaucnd.jpg'}
				/>
			</motion.div>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_34') }}
			/>

			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/auubvxt.jpg'}
				/>
			</motion.div>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_35') }}
			/>

			<motion.p
				variants={fadeInUp}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('DAPP.text_36') }}
			/>

			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/pmydbdi.jpg'}
				/>
			</motion.div>
			
			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/lhjymjm.jpg'}
				/>
			</motion.div>

			<motion.p
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
				className={styles['mb-20']}
			>
				<CflatsImage
					fluid
					alt={'Dapp image'}
					src={'https://image.delivery/image/crpzeel.jpg'}
				/>
			</motion.div>

			<motion.p
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
