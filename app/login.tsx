import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import {} from "../components/Themed";
import globalstyles from "../assets/styles/styles";
import React from "react";

export default function LoginScreen() {
  const [cpf, onChangeCpf] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <SafeAreaView style={globalstyles.container}>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <Text style={styles.title}>Informe usuário e senha</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeCpf}
          placeholder="CPF"
          placeholderTextColor="#000"
          textAlign="center"
          inputMode="numeric"
          maxLength={11}
          value={cpf}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          placeholder="Senha"
          placeholderTextColor="#000"
          textAlign="center"
          inputMode="text"
          secureTextEntry={true}
          maxLength={11}
          value={password}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
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
    backgroundColor: "#E779F5",
    borderRadius: 50,
    paddingTop: 10,
    paddingBottom: 10,
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
  },
});
