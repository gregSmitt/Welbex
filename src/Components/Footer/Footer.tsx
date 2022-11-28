import { FC } from 'react';
import c from './Footer.module.scss';
import FooterContacts from './FooterComponents/FooterContacts';
import FooterInfo from './FooterComponents/FooterInfo';
export type LinksType = { id: number, name: string, href?: string }[];

const Footer: FC = () => {
	const companyLinks: LinksType = [
		{ id: 1, name: 'Партнёрская программа' },
		{ id: 2, name: 'Вакансии' },
	]
	const menuLinks: LinksType = [
		{ id: 1, name: 'Расчёт стоимости' },
		{ id: 2, name: 'Услуги' },
		{ id: 3, name: 'Виджеты' },
		{ id: 4, name: 'Интеграции' },
		{ id: 5, name: 'Наши клиенты' },
	]
	const otherLinks: LinksType = [
		{ id: 1, name: 'Благодарность клиентов' },
		{ id: 2, name: 'Кейсы' },
		{ id: 3, name: 'Сертификаты' },
		{ id: 4, name: 'Блог на Youtube' },
		{ id: 5, name: 'Вопрос / Ответ' },
	]
	return (
		<footer className={c.footer}>
			<div className={c.container}>
				<FooterInfo title='О компании' links={companyLinks} className={c.company} />
				<FooterInfo title='Меню' links={menuLinks} className={c.menu} />
				<FooterInfo links={otherLinks} className={c.other} />
			</div>
			<FooterContacts />
		</footer>
	);
}

export default Footer;
