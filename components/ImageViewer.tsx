import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

type Props = {
    imgSource: string;
}

export default function ImageViewer({ imgSource }: Props){

    return <Image source={imgSource} style={styles.image} />;
  
}

const styles = StyleSheet.create({

  image: {
    width: 300,
    height: 440,
    borderRadius: 18
  }

})