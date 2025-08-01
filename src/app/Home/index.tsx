import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "../../styles/HomeStyle";
import batsinal from "../../../assets/batsignal.png";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Call } from "../../models/call";

export default function Home() {
  const [imageHidden, setImageHidden] = useState(true);
  const [textHidden, setTextHidden] = useState(true);

  const router = useRouter();
  const { algoMais, porQue, quem } = useLocalSearchParams<Call>();

  useEffect(() => {
    if (quem) {
      setTextHidden(false);

      setTimeout(() => {
        setImageHidden(false);
        setTextHidden(true);
      }, 5000);
    }
  }, []);

  const askForHelp = () => {
    router.navigate("/Help");
  };

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, imageHidden ? styles.hidden : null]}>
        <Image style={styles.image} source={batsinal} />
      </View>
      {quem && !textHidden && (
        <View style={styles.textContainer}>
          <Text style={styles.text}>Batman 🦇, {quem} está pedindo ajuda</Text>
          <Text style={styles.text}>{porQue}</Text>
          <Text style={styles.text}>{algoMais}</Text>
        </View>
      )}
      {textHidden && (
        <TouchableOpacity onPress={askForHelp}>
          <Text style={styles.button}>Batmaaan, Heeelp 🦇</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
