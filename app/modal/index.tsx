import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const ModalIndex = () => {
	return (
		<View>
			<Link href={'/modal/second'}>
				<Text>Open second modal</Text>
			</Link>
		</View>
	);
};

export default ModalIndex;
