import styles from './SocialIcons.module.scss'
import { socialIconsData } from './SocialIcons.data'
import classNames from 'classnames'
import { FC } from 'react'

interface SocialIconsProps {
	className?: string
}
const SocialIcons: FC<SocialIconsProps> = ({ className }) => {
	return (
		<ul className={classNames(styles.socialIcons, className)}>
			{socialIconsData.map((socialIcon, index) => {
				return (
					<li className={styles.socialIcon} key={index}>
						<a target={'_blank'} href={socialIcon.path}>{socialIcon.icon}</a>
					</li>
				)
			})}
		</ul>
	)
}

export default SocialIcons
