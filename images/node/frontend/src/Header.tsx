import React from 'react';
import styles from './Header.module.css';

function Header() {
	return (
		<header className={styles.Header}>
			<div className={styles.left}>
				<input className={styles.formatRadio} type="checkbox"/>
				<label className={styles.formatLabel}>24 Hour Time</label>

			</div>

			<div className={styles.right}>
				
			</div>

		</header>
	);
}

export default Header;
