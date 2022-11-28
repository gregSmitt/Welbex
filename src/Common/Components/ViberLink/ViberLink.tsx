import { FC } from 'react';
import icon from 'assets/images/viber_icon.svg';

interface IProps {
	alt?: string
	className?: string
	href?: string
}

const ViberLink: FC<IProps> = ({ alt, className, href }) => {
	return (
		<a className={className} href={href ? href : '/'}>
			<img src={icon} alt={alt} />
		</a>
	);
}

export default ViberLink;