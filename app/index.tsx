import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
	return (
		<View>
			<Link href={'modal'}>
				<Text>Open Modal</Text>
			</Link>
      <Link href={'inside'}>
				<Text>Open Tabs</Text>
			</Link>
		</View>
	);
};

export default Index;
