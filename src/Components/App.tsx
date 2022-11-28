import { FC } from 'react';
import c from './App.module.scss';
import Background from './Background/Background';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

const App: FC = () => {
	return (
		<div className={c.wrapper}>
			<Background />
			<div className={c.container}>
				<Header />
				<Main />
			</div>
			<div className={`${c.container}  ${c.footer}`}>
				<Footer />
			</div>
		</div >
	);
}

export default App;
