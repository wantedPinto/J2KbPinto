import { Route, Routes } from 'react-router-dom';
import { Main } from 'screens/main';
import { SignUp } from 'screens/signup';
import { SignIn } from 'screens/signin';
import { Header } from 'components/common/Header';

export default function Routers() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/signIn" element={<SignIn />} />
			</Routes>
		</>
	);
}
