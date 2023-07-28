"use client"

import styles from './CheckWlMenu.module.scss'
import { useState } from 'react';
import Buttons from './Buttons';
import GenZero from './GenZero';
import GenFirst from './GenFirst';

const CheckWlMenu = () => {
	const [type, setType] = useState<typeMenu>('buttons')

	return (
		<ul className={styles.wlMenu}>
			{type == 'buttons' && <Buttons onOpenZero={() => setType('genZero')} onOpenFirst={() => setType('genFirst')} />}
			{type === 'genZero' && <GenZero onClose={() => setType('buttons')} />}
			{type === 'genFirst' && <GenFirst onClose={() => setType('buttons')} />}
		</ul>
	);
};

export default CheckWlMenu;

type typeMenu = 'buttons' | 'genZero' | 'genFirst'