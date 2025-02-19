import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";



const PlaceholderImage = require("../../assets/images/background-image.png")

export default function Index() {
  return (
    <View style={styles.container} >  
      
      <View style = {styles.imageContainer}>
        <ImageViewer imgSource ={PlaceholderImage} />
      </View>

      <View>
        <Button label="Choose a photo"/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  text: {
    color: "white"
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "white"
  },

  imageContainer: {
    flex: 1,justifyContent: "center"
  }
})