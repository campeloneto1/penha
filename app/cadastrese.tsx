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
import {} from "../components/Themed";
import globalstyles from "../assets/styles/styles";
import React from "react";

export default function CadastreseScreen() {
  const [nome, onChangeNome] = React.useState("");
  const [cpf, onChangeCpf] = React.useState("");
  const [telefone, onChangeTelefone] = React.useState("");

  return (
    <SafeAreaView style={globalstyles.container}>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <Text style={styles.title}>Cadastre-se</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNome}
          placeholder="Nome completo"
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="text"
          value={nome}
        />
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
          onChangeText={onChangeTelefone}
          placeholder="Telefone"
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="numeric"
          maxLength={11}
          value={telefone}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.butttonText}>Cadastrar</Text>
          </TouchableOpacity>
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
  cadastrese: {
    marginTop: "10%",
    fontSize: 25,
    fontWeight: "bold",
  },
});
