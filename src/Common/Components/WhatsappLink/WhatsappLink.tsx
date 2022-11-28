import { FC } from 'react';
import icon from 'assets/images/whatsapp_icon.svg';

interface IProps {
	phone: string
	alt?: string
	className?: string
}

const WhatsappLink: FC<IProps> = ({ alt, className, phone }) => {
	return (
		<a className={className} href={`https://wa.me/${phone.replace(/\s/g, "").replace(/-/g, "")}`}>
			<img src={icon} alt={alt} />
		</a>

	);
}

export default WhatsappLink;