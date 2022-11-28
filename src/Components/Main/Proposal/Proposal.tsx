import { FC } from 'react';
import Button from './Button/Button';
import Gift from './Gift/Gift';
import c from './Proposal.module.scss';

const Proposal: FC = () => {
	return (
		<div className={c.proposal}>
			<p className={c.title}>
				<span>Вместе с</span> бесплатной консультацией <span>мы дарим:</span>
			</p>
			<div className={c.container}>
				<div className={`${c.gifts} ${c.reverse}`}>
					<Gift title='Виджеты' content='30 готовых решений' mobileText='30 Виджетов' />
					<Gift title='Skype Аудит' content='отдела продаж и CRM системы' />
				</div>
				<div className={c.gifts}>
					<Gift title='Dashboard' content='с показателями вашего бизнеса' />
					<Gift title='35 дней' content='использования CRM' mobileText='Месяц аmoCRM' />
				</div>
			</div>
			<Button />
		</div>
	);
}

export default Proposal;