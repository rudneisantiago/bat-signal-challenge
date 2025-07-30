import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../../styles/Home';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Call } from '../../models/call';

const router = useRouter()

const askHelp = () => {
  router.navigate('/Help')
}

export default function Home() {
  const call = useLocalSearchParams<Call>()

  return (
    <View style={styles.container}>
      {
        call.quem &&
        <View>
          <Text>{call.quem}</Text>
          <Text>{call.porQue}</Text>
          <Text>{call.algoMais}</Text>
        </View>
      }
      <Button title='Help por favor' onPress={askHelp} />
    </View>
  );
}