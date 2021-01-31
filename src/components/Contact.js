import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icons from '../assets/images/icons';


const styleVars = {
	iconSize: 25,
	gap: 20,
	textNormal: 16,
	textLarge: 20,
	colorBlue: '#44abee',
	colorGrey: '#979797'
}

function ContactItem ({name, number, profileImage}) {
	return (
		<View style={styles.container}>
			<Image source={profileImage} style={styles.dp}/>
			<View style={styles.label}>
				<Text style={styles.title}>{name}</Text>
				<Text style={{fontSize: textNormal}}>{number}</Text>
			</View>
			{
				[Icons.phone, Icons.sms, Icons.menuVertical].map(
					(icon, i) => <Image source={icon} style={styles.icon} key={i}/>
				)
			}
		</View>
	)
};

const { iconSize, gap, textNormal, textLarge } = styleVars;
const dpSize = 60

const styles = StyleSheet.create({

	container: {
		flexDirection: 'row',
		paddingHorizontal: gap,
		paddingVertical: Math.ceil(gap / 1.5),
		alignItems: 'center',
	},

	dp: {
		width: dpSize,
		height: dpSize,
		borderRadius: dpSize,
	},

	label: {
		marginHorizontal: gap,
		// marginRight: gap,
		flexGrow: 1,
	},

	title: {
		fontWeight: 'bold',
		fontSize: textLarge,
	},

	icon: {
		width: iconSize,
		height: iconSize,
		marginHorizontal: gap / 2,
	}
})

export default ContactItem;
