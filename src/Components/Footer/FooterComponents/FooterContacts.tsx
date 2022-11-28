import TelegramLink from 'Common/Components/TelegramLink/TelegramLink';
import ViberLink from 'Common/Components/ViberLink/ViberLink';
import WhatsappLink from 'Common/Components/WhatsappLink/WhatsappLink';
import { FC } from 'react';
import c from './FooterComponents.module.scss';


const FooterContacts: FC = () => {
	const phoneNumber = '+7 555 555-55-55';
	const username = 'funnymn';
	return (
		<ul className={c.contacts}>
			<li className={c.title}>Контакты</li>
			<li className={`${c.link} ${c.tel}`}>
				<a href={`tel:+${phoneNumber}`}>{phoneNumber}</a>
			</li>
			<li className={`${c.link} ${c.icons}`}>
				<TelegramLink className={c.margin} username={username} />
				<ViberLink className={c.margin} />
				<WhatsappLink phone={phoneNumber} />
			</li>
			<li className={`${c.link} ${c.addres}`}>
				Москва, Путевой проезд 3с1, к 902
			</li>
			<li className={`${c.link} ${c.copy}`}>
				©WELBEX 2022. Все права защищены.
			</li>
			<li className={`${c.link} ${c.policy}`}>
				<a href='/'>Политика конфиденциальности</a>
			</li>
		</ul>
	);
}

export default FooterContacts;
