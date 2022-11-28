import { FC } from 'react';
import c from './Links.module.scss';
import Logo from './Logo/Logo';

const Links: FC = () => {
	return (
		<ul className={c.links}>
			<Logo />
			<Link text='Услуги' />
			<Link text='Виджеты' />
			<Link text='Интеграции' />
			<Link text='Кейсы' />
			<Link text='Сертификаты' last />
		</ul>
	);
}

export default Links;

interface ILinkProps {
	text: string
	last?: boolean
}

const Link: FC<ILinkProps> = ({ text, last }) => {
	return (
		<li className={`${c.link} ${last ? c.last : ''}`}>
			<a href="/">
				{text}
			</a>
		</li>
	);
}