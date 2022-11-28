import { FC } from 'react';
import Call from './Call/Call';
import c from './Main.module.scss';
import Proposal from './Proposal/Proposal';

const Main: FC = () => {
	return (
		<main className={c.main}>
			<Call />
			<Proposal />
		</main>
	);
}

export default Main;