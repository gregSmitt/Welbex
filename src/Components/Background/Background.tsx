import { FC } from 'react';
import c from './Background.module.scss';

const Background: FC = () => {
	return (
		<div className={c.bacgrpund}>
			<div className={c.sphere_one}></div>
			<div className={c.sphere_two}></div>
			<div className={c.sphere_three}></div>
			<div className={c.light_one}></div>
			<div className={c.light_two}></div>
			<div className={c.light_three}></div>
			<div className={c.glass}></div>
			<div className={c.noice}>
			</div>
		</div >
	);
}

export default Background;