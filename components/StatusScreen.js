import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

class StatusScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.statusText}>Service Up</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	statusText: {
		fontSize: 30,
	},
})

export default StatusScreen