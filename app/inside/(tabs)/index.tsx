import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View>
      <Link href={'inside/standalone'}>
      <Text>Open Standalone</Text>
      </Link>
    </View>
  )
}

export default Index