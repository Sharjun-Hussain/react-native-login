import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { FIREBASE_AUTH } from "../firebaseconfig";

const login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPasword] = useState("");
  const [Loading, setLoading] = useState(false)
  const auth = FIREBASE_AUTH
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerlogintext}>Login Here</Text>

      <View style={{ marginBottom: 10 }}>
        <Text style={styles.inputlabel}>Email</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={Email}
        />
      </View>
      <View>
        <Text style={styles.inputlabel}>Password</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(newText) => setPasword(newText)}
          defaultValue={Password}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
      <Text style={{ color: "white" }}>Don't Have an account</Text>
      <Pressable>
        <Text> <Link style={{color:"yellow"}} href="/signup">SingUp Here</Link></Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F0743",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  textinput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    marginBottom: 10,
    marginVertical: 10,
    borderCurve: "round",
    borderRadius: 7,
    color: "white",
  },
  headerlogintext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 20,
    padding: 10,
  },
  inputlabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "start",
    marginBottom: -5,
  },
  button: {
    backgroundColor: "#41295a",
    width: 300,
    height: 50,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    borderColor: "black",
    fontWeight: "bold",
    fontSize: 20,
    borderRadius: 7,
  },
});
