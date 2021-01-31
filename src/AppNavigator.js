import React from "react";
import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
import { LoginScreen, SignupScreen, HomeScreen } from "./screens";
import firebase from './config/firebase';


const Stack = createStackNavigator();

function AppNavigator (props) {
	console.log(props)
	const logOut = () => {
		firebase
		.auth()
		.signOut()
		.then(props.dispatch({type: "SIGN_OUT"}))
	}
	return (
		<NavigationContainer>
			{
				// authentication screens
				!props.signedIn ? (
					<Stack.Navigator
						screenOptions={{headerShown:false}}
					>
						<Stack.Screen name="log-in" component={LoginScreen}/>
						<Stack.Screen name="sign-up" component={SignupScreen}/>
					</Stack.Navigator>
			) : (
				// home screen
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: '#763dcc',
						},
						headerRightContainerStyle: {
							paddingHorizontal: 30
						}
					}}
				>
					<Stack.Screen
						name="home"
						component={HomeScreen}
						options={{
							title: null,
							headerRight: () => (
								<Pressable onPress={logOut}>
									<Text style={{color:"#fff"}}>Sign Out</Text>
								</Pressable>
							)
						}}
					/>
				</Stack.Navigator>
			)
		}
	</NavigationContainer>
	)
};

export default connect(state => state)(AppNavigator);
