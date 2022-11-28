import { FC } from 'react';
import icon from 'assets/images/tg_icon.svg';

interface IProps {
	username: string
	alt?: string
	className?: string
}

const TelegramLink: FC<IProps> = ({ username, alt, className }) => {
	return (
		<a className={className} href={`tg://resolve?domain=${username}`}>
			<img src={icon} alt={alt} />
		</a>
	);
}

export default TelegramLink;