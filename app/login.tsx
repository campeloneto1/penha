import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Keyboard,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import globalstyles from "../assets/styles/styles";
import React from "react";
import { get, post } from "../services/services";
import { Login } from "../models/Login";

export default function LoginScreen() {
  const [cpf, onChangeCpf] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const doLogin = async () => {
    var data: Login;

    //try {
    //   const response = await fetch(
    //     "http://10.9.168.179/apipenha/public/api/login",
    //     {
    //       method: "POST",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   )
    //     .then((response) => response.json())
    //     .then((json) => {
    //       //const json = json.json();
    //       console.log(json);
    //     });
    // } catch (error) {
    //   console.log(error);
    // }

    const returnlogin = await post(
      "http://10.9.168.179/apipenha/public/api/login"
    );

    console.log(returnlogin);
  };

  return (
    <SafeAreaView style={globalstyles.container}>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <Text style={styles.title}>Informe usuário e senha</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeCpf}
          placeholder="CPF"
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="numeric"
          maxLength={11}
          value={cpf}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          placeholder="Senha"
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="text"
          secureTextEntry={true}
          maxLength={11}
          value={password}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              doLogin();
            }}
          >
            <Text style={styles.butttonText}>Entrar</Text>
          </TouchableOpacity>
          {/*   <Link href="/(tabs)" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.butttonText}>Entrar</Text>
            </Pressable>
          </Link>*/}
        </View>

        <View style={styles.containerCadastrese}>
          <Text style={styles.text}>Ou</Text>
          <Link href="/cadastrese" asChild>
            <Pressable>
              <Text style={styles.cadastrese}>Cadastre-se</Text>
            </Pressable>
          </Link>
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: "5%",
    width: "90%",
    backgroundColor: "transparent",
  },
  bold: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    marginTop: "20%",
    color: "#3d2963",
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    marginTop: "20%",
  },
  containerButton: {
    marginTop: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#3d2963",
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
    //E779F5

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  butttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },

  containerCadastrese: {
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cadastrese: {
    marginTop: "10%",
    fontSize: 25,
    fontWeight: "bold",
    color: "#3d2963",
  },
});
