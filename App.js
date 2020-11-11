import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/Login'

export default function App() {
	return (
		<View>
			<StatusBar style="auto" />
			<LoginScreen />
		</View>
	);
}
