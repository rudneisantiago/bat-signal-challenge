import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "../../styles/HomeStyle";
import batsinal from "../../../assets/batsignal.png";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Home() {
  const [hidden, setHidden] = useState(true);

  const askForHelp = () => {
    const router = useRouter();
    router.navigate("/Help");
  };

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, hidden ? styles.hidden : null]}>
        <Image style={styles.image} source={batsinal} />
      </View>
      <TouchableOpacity onPress={askForHelp}>
        <Text style={styles.button}>Batmaaan, Heeelp 🦇</Text>
      </TouchableOpacity>
    </View>
  );
}
