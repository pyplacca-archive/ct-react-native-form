import React from 'react';
import {store} from "./store";
import { Provider } from "react-redux";
import { NavigationContainer } from "react-navigation/native";
import { createStackNavigator } from "react-navigation/stack";
// import { PersistGate } from "redux/persist/"

const Stack = createStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
};
