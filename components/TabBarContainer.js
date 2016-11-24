import React from 'react'
import {
	Text,
	View,
	StyleSheet
} from 'react-native'

import Tabs from 'react-native-tabs'
import TabBarItem from './TabBarItem'

const TabBarContainer = (props) => (
	<Tabs iconStyle={{height:72}} style={styles.tabContainer}>
		<TabBarItem name="web" label="Web Server" icon="server" />
		<TabBarItem name="db" label="DB Server" icon="database" />
		<TabBarItem name="mail" label="Mail Server" icon="envelope-o"/>

	</Tabs>
)
const styles = StyleSheet.create({
	tabContainer: {
		backgroundColor: '#343434',
		borderTopWidth: 1,
		borderTopColor: '#262626',
		height: 96,
	}
})
export default TabBarContainer