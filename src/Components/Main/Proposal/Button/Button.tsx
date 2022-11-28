import { FC } from 'react';
import c from './Button.module.scss';

const Button: FC = () => {
	return (
		<div className={c.container}>
			<button className={c.consult}>Получить консультацию</button>
		</div>
	);
}

export default Button;