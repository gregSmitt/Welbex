import { FC } from 'react';
import { LinksType } from '../Footer';
import c from './FooterComponents.module.scss';

interface IProps {
	title?: string
	links: LinksType
	className?: string
}

const FooterInfo: FC<IProps> = ({ title, links, className }) => {
	const linksArr = links.map((link, i, arr) =>
		<li
			key={link.id}
			className={`${c.link} ${(i === arr.length - 1) ? c.last : ''}`}
		>
			<a href={link.href} >{link.name}</a>
		</li>)
	return (
		<ul className={`${c.info} ${className}`}>
			<li className={c.title}>{title}&nbsp;</li>
			{linksArr}
		</ul>
	);
}

export default FooterInfo;
