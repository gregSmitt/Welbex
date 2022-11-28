import { FC } from 'react';
import c from './Logo.module.scss';
import logo from '../../../../assets/images/logo_welbex.svg';

const Logo: FC = () => {
	return (
		<li className={c.logo}>
			<a href='/' >
				<img className={c.image} src={logo} alt="Welbex's logo" />
				<p className={c.text}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
			</a>
		</li>
	);
}

export default Logo;