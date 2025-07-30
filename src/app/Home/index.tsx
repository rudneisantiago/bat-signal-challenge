import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "../../styles/HomeStyle";
import batsinal from "../../../assets/batsignal.png";
import { useState } from "react";

export function Home() {
  const [hidden, setHidden] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, hidden ? styles.hidden : null]}>
        <Image style={styles.image} source={batsinal} />
      </View>
      <TouchableOpacity>
        <Text style={styles.button}>Batmaaan, Heeelp 🦇</Text>
      </TouchableOpacity>
    </View>
  );
}
