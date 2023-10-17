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
import axios from "axios";
import { environment } from "../environments/environment";
import { MaskedTextInput } from "react-native-mask-text";
import { setSecureStore } from "../services/session";
import { router } from "expo-router";

export default function LoginScreen() {
  const [cpf, onChangeCpf] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const doLogin = async () => {
    const data = {
      cpf: cpf,
      password: password,
    };
    //console.log(environment.url);
    axios.post(`${environment.url}/login`, data).then((response) => {
      //console.log(response.data);
      setSecureStore("token", response.data.token);
      setSecureStore("user", JSON.stringify(response.data.user));
      router.replace("/(tabs)");
    });
  };

  return (
    <SafeAreaView style={globalstyles.container}>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <Text style={styles.title}>Informe usuário e senha</Text>

        <MaskedTextInput
          textAlign="center"
          inputMode="numeric"
          placeholderTextColor="#3d2963"
          placeholder="CPF"
          mask="999.999.999-99"
          onChangeText={(text, rawText) => {
            onChangeCpf(rawText);
          }}
          style={styles.input}
        />

        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeCpf}
          placeholder="CPF"
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="numeric"
          maxLength={11}
          value={cpf}
        /> */}

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
    fontSize: 20,
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
