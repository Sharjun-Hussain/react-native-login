import { Link } from "expo-router";
import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    TouchableOpacity,
    Button,
    Pressable,
  } from "react-native";
  export default function FirstScreen() {
    return (
      <>
        <View style={style.container}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require("@/assets/images/logo.png")}
          />
          <Text style={style.heading}>Inzeedo</Text>
          <Text style={style.subheading}>Leading Tech News Site</Text>
          <TouchableOpacity>
            <View>
            <Link style={style.button} href="/login" >   Login </Link>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
  
  const style = StyleSheet.create({
    uppercontainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "green",
    },
    container: {
      flex: 1,
      backgroundColor: "#2F0743",
      paddingTop: Platform.OS === "android" ? 25 : 0,
      paddingHorizontal: 20,
      paddingBottom: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    heading: {
      fontSize: 30,
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    subheading: {
      fontSize: 20,
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
  
    button: {
      backgroundColor: "white",
      width: 200,
      height: 50,
      color: "black",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      marginTop: 20,
      marginBottom: 20,
      borderColor: "black",
      fontWeight: "bold",
      fontSize: 20,
      borderRadius: 50,
    },
  });
  