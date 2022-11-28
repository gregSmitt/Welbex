import { FC } from 'react';
import c from './Gift.module.scss';

interface IProps {
	title: string
	content: string
	mobileText?: string
}

const Gift: FC<IProps> = ({ title, content, mobileText }) => {
	return (
		<div className={c.gift}>
			<p className={c.title}>{title}</p>
			<span className={c.content}>
				{content}
			</span>
			<p className={c.mobile}>{mobileText ? mobileText : title}</p>
		</div>
	);
}

export default Gift;