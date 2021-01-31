import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import AppNavigator from "./src/AppNavigator";


function App () {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<AppNavigator/>
			</PersistGate>
		</Provider>
	);
};

export default App;
