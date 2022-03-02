import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import GlobalStyle from 'assets/styles/global-styled';
import { persistStore } from 'redux-persist';
import store from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<GlobalStyle />
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
