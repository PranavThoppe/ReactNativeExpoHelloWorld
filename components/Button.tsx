import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";


type Props = {
    label: string;
}

export default function ImageViewer({ label }: Props){
  return (
    <View style={styles.buttonContainer}>
        <Pressable
            style={styles.buttonContainer}
            onPress={() => alert("You pressed a button.")}
        >
            <Text style={styles.buttonLabel}>{label}</Text>    
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

  image: {
    width: 300,
    height: 440,
    borderRadius: 18
    },
    buttonLabel: {
        color: "white",
        fontSize: 16,

    },
    buttonIcon: {
        paddingRight: 8,
    },
    button: {
        borderRadius: 10,
        width: "100%",
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
    }
})