import { FC } from 'react';
import c from './Header.module.scss';
import Links from './Links/Links';
import Contacts from './Contacts/Contacts';

const Header: FC = () => {
	return (
		<header className={c.header}>
			<Links />
			<Contacts />
		</header>
	);
}

export default Header;