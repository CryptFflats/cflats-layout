'use client';

import styles from '../Layout.module.scss';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../../../../core/utils/animations/fadeInUp';
import CfImage from 'components/CfImage/CfImage';

const Contracts = () => {
	const t = useTranslations('Litepaper');

	return (
		<motion.section
			id='#contracts'
			className={styles['main-section']}
			viewport={{ once: true, amount: 0.5 }}
		>
			<motion.h2 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
			>
				{t('CONTRACTS.title')}
			</motion.h2>

			<motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_1') }} 
			/>

            <ul className={styles['mb-30']}>
				{['n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'n10'].map((item, index) => {
					return (
						<motion.li
							variants={fadeInUp}
							initial={'hidden'}
							whileInView='show'
							viewport={{ once: true, amount: 0.5 }}
							key={index}
						>
							<span>{t(`CONTRACTS.contract_names_list.${item}`)}</span>
							<a href={`https://etherscan.io/address/${t(`CONTRACTS.contract_addresses_list.${item}`)}`} target='_blank'>{t(`CONTRACTS.contract_addresses_list.${item}`)}</a>
						</motion.li>
					);
				})}
			</ul>

            <motion.h2
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.subtitle_1') }} 
			/>

            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_2') }} 
			/>

            <motion.div
				className={styles['mb-60']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<CfImage
					fluid
					src={'a51330f6-50ec-4b4e-4b76-94818dc38100/public'}
					alt={'Token Diagram Image'}
				/>
			</motion.div>

            

            {/* NFT */}
            <motion.h2
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.subtitle_3') }} 
			/>

            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_4') }} 
			/>



            {/* NFT WL BOX */}
            <motion.h2
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.subtitle_4') }} 
			/>

            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_5') }} 
			/>

            <motion.div
				className={styles['mb-60']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<CfImage
					fluid
					src={'0e310c78-d341-405e-a53e-591736094f00/public'}
					alt={'Whitelist Box Image'}
				/>
			</motion.div>



            {/* Territory */}
            <motion.h2
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.subtitle_5') }} 
			/>

            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_6') }} 
			/>




            {/* Territory */}
            <motion.h2
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.subtitle_6') }} 
			/>

            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_8') }} 
			/>



            
            {/* Exchanger */}
            <motion.h2
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.subtitle_2') }} 
			/>

            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_3') }} 
			/>

            <motion.div
				className={styles['mb-60']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<CfImage
					fluid
					src={'2644b22c-04ae-41da-5030-f49791daec00/public'}
					alt={'Diagram Exchanger Image'}
				/>
			</motion.div>


            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_7') }} 
			/>

            <motion.div
				className={styles['mb-60']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<CfImage
					fluid
					src={'7b5aef48-56d2-4c09-8471-59af4e781b00/public'}
					alt={'Diagram Exchanger Admin Image'}
				/>
			</motion.div>

            



            {/* Staking */}
            <motion.h2
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.subtitle_7') }} 
			/>

            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_9') }} 
			/>

            <motion.div
				className={styles['mb-60']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<CfImage
					fluid
					src={'d5182bcf-c967-49c3-cb82-ffebde1aa600/public'}
					alt={'Diagram Exchanger Image'}
				/>
			</motion.div>



             {/* Dapp */}
            <motion.h2
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.subtitle_8') }} 
			/>

            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_10') }} 
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
							{t(`CONTRACTS.contract_dapp_list.${item}`)}
						</motion.li>
					);
				})}
			</ul>

            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_11') }} 
			/>

            <motion.div
				className={styles['mb-60']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<CfImage
					fluid
					src={'713e6e9b-8641-40a5-a706-5388b7780900/public'}
					alt={'Diagram Dapp Attack Image'}
				/>
			</motion.div>


            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_12') }} 
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
							{t(`CONTRACTS.contract_dapp_defense_list.${item}`)}
						</motion.li>
					);
				})}
			</ul>

            <motion.p 
				initial={'hidden'}
				whileInView='show'
				variants={fadeInUp}
				viewport={{ once: true, amount: 0.5 }}
				dangerouslySetInnerHTML={{ __html: t.raw('CONTRACTS.text_13') }} 
			/>

            <motion.div
				className={styles['mb-60']}
				initial={'hidden'}
				whileInView='show'
				viewport={{ once: true, amount: 0.5 }}
				variants={fadeInUp}
			>
				<CfImage
					fluid
					src={'8620bc4c-3f1e-4403-63ae-027b8b1cc700/public'}
					alt={'Diagram Dapp Defense Image'}
				/>
			</motion.div>


		</motion.section>
	);
};

export default Contracts;
