import { FC } from 'react';
import c from './Contacts.module.scss';
import WhatsappLink from 'Common/Components/WhatsappLink/WhatsappLink';
import ViberLink from 'Common/Components/ViberLink/ViberLink';
import TelegramLink from 'Common/Components/TelegramLink/TelegramLink';

const Contacts: FC = () => {
	const phoneNumber = '+7 555 555-55-55';
	const username = 'funnymn';
	return (
		<ul className={c.contacts}>
			<li className={c.tel}>
				<a href={`tel:+${phoneNumber}`}>{phoneNumber}</a>
			</li>
			<li className={c.icon}>
				<TelegramLink username={username} />
			</li>
			<li className={c.icon}>
				<ViberLink />
			</li>
			<li className={`${c.icon} ${c.whatsapp}`}>
				<WhatsappLink phone={phoneNumber} />
			</li>
		</ul>
	);
}

export default Contacts;