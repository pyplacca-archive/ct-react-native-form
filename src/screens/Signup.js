import React from 'react';
import { ScrollView, View, TextInput, Text, Pressable, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import firebase from "../config/firebase";


const variables = {
	primeColor: '#763dcc',
	spacing: 25
};

class SignupScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			email: '',
			password: '',
			password2: '',
			error: '',
			loading: false,
		};
	};

	signUp = () => {
		this.setState({loading: true});
		const cred = this.state;

		if (cred.password !== cred.password2) {
			this.setState(() => ({
				error: "Passwords do not match",
				loading: false
			}))
		} else {
			firebase
			.auth()
			.createUserWithEmailAndPassword(cred.email, cred.password)
			.then(({user}) => this.props.dispatch({
				type: 'SIGN_IN',
				payload: user
			}))
			.catch(err => this.setState({error: err.message}))
			.finally(() => this.setState({loading: false}))
		}
	}

	render () {
		return (
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{
					margin: variables.spacing * 2,
					color: variables.primeColor,
				}}
			>
				<Text style={{
					marginVertical: variables.spacing * 2,
					color: variables.primeColor,
					fontSize: 40,
					fontWeight: 'bold'
				}}>
					Sign up
				</Text>

				{/* error message display */}
				<Text style={{marginBottom: 20, color:'red'}}>{this.state.error}</Text>

				{/* form inputs */}
				<TextInput
					placeholder="Username"
					value={this.state.username}
					onChangeText={username => this.setState({username})}
					style={[
						styles.input,
						styles.text, {
							marginBottom: variables.spacing * 2
						}
					]}
				/>
				<TextInput
					placeholder="Email"
					value={this.state.email}
					onChangeText={email => this.setState({email})}
					style={[
						styles.input,
						styles.text, {
							marginBottom: variables.spacing * 2
						}
					]}
				/>
				<TextInput
					placeholder="Password"
					value={this.state.password}
					secureTextEntry={true}
					onChangeText={password => this.setState({password})}
					style={[
						styles.input,
						styles.text, {
							marginBottom: variables.spacing * 2
						}
					]}
				/>
				<TextInput
					placeholder="Password again"
					value={this.state.password2}
					secureTextEntry={true}
					onChangeText={password2 => this.setState({password2})}
					style={[styles.text, styles.input]}
				/>

				{/* Signup button */}
				<Pressable
					style={[
						styles.allCenter, {
							paddingVertical: 15,
							marginVertical: variables.spacing * 2,
							backgroundColor: variables.primeColor,
							borderRadius: 10,
						}
					]}
					onPress={this.signUp}
				>
					{
						this.state.loading ? (
							<ActivityIndicator color="#fff"/>
						) : (
							<Text style={{
								color: '#fff',
								fontSize: 20,
								fontWeight: 'bold',
							}}>
								SIGN UP
							</Text>
						)
					}
				</Pressable>

				{/* bottom text */}
				<View style={[
					styles.allCenter, {
						flexDirection: 'row',
					}
				]}>
					<Text style={styles.text}>You already have an account?</Text>
					<Pressable onPress={() => this.props.navigation.navigate('log-in')}>
						<Text style={[
							styles.text, {
								marginLeft: 7,
								color: variables.primeColor,
								fontWeight: 'bold'
							}
						]}>
							Log in
						</Text>
					</Pressable>
				</View>
			</ScrollView>
		)
	};
};

const styles = {
	text: {
		fontSize: 17,
	},

	input: {
		paddingBottom: 5,
		borderBottomColor: variables.primeColor,
		borderBottomWidth: 2,
	},

	allCenter: {
		justifyContent: 'center',
		alignItems: 'center',
	},
};


export default connect()(SignupScreen);
