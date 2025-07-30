import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from '../../styles/Help';
import { useRouter } from 'expo-router';

export default function Help() {
  const [call, setCall] = useState({
    quem: '',
    porQue: '',
    algoMais: ''
  })

  const router = useRouter()

  const callBatSignal = () => {
    router.push({ pathname: '/Home', params: call })
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text>Quem pede?</Text>
        <TextInput
          style={styles.inputText}
          value={call.quem}
          onChangeText={(e) => setCall({ ...call, quem: e })}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Por que?</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          maxLength={100}
          style={[styles.inputText, styles.inputMultline]}
          value={call.porQue}
          onChangeText={(e) => setCall({ ...call, porQue: e })}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Algo mais?</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          maxLength={100}
          style={[styles.inputText, styles.inputMultline]}
          value={call.algoMais}
          onChangeText={(e) => setCall({ ...call, algoMais: e })}
        />
      </View>
      <TouchableOpacity onPress={callBatSignal}>
        <Text>Chamar o Batman 🦇</Text>
      </TouchableOpacity>
    </View>
  );
}