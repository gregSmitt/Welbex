import { FC } from 'react';
import c from './Call.module.scss';

const Call: FC = () => {
	return (
		<div className={c.call}>
			<h1 className={c.title}>Зарабатывайте больше <span>с WELBEX</span></h1>
			<p className={c.slogan}>Развиваем и контролируем продажи за вас</p>
		</div>
	);
}

export default Call;