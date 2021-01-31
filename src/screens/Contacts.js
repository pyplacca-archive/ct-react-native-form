import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from 'react-native';
import ContactItem from '../components/Contact';


const styleVars = {
	iconSize: 25,
	gap: 20,
	textNormal: 16,
	textLarge: 20,
	colorBlue: '#44abee',
	colorGrey: '#979797'
}

const contacts = [
	{
		name: 'Ann Neal',
		number: '402-467-4633',
		profileImage: require('../assets/images/profiles/ann.jpg')
	},
	{
		name: 'Eva Bergman',
		number: '417-799-0717',
		profileImage: require('../assets/images/profiles/eva.jpg')
	},
	{
		name: 'Lisa Oneil',
		number: '304-274-6289',
		profileImage: require('../assets/images/profiles/lisa.jpg')
	},
	{
		name: 'Jeffrey Bowles',
		number: '662-810-3548',
		profileImage: require('../assets/images/profiles/jeff.png')
	},
	{
		name: 'Wanda Granger',
		number: '336-398-4366',
		profileImage: require('../assets/images/profiles/wanda.jpg')
	},
	{
		name: 'Debbie Hyde',
		number: '347-830-7156',
		profileImage: require('../assets/images/profiles/debbie.jpg')
	},
]

function ContactsScreen () {
	return (
		<View
			style={{
				paddingVertical: styleVars.gap / 2
			}}
		>
			<StatusBar style="light"/>
			<FlatList
				data={contacts}
				renderItem={({item}) => <ContactItem {...item} />}
				keyExtractor={item => item.number}
			/>
		</View>
	)
};

export default ContactsScreen;
