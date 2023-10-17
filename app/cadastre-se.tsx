import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Keyboard,
  Pressable,
} from "react-native";
import globalstyles from "../assets/styles/styles";
import React from "react";
import { MaskedTextInput } from "react-native-mask-text";
import axios from "axios";
import { environment } from "../environments/environment";
import { router } from "expo-router";
//@ts-ignore
import { Toast } from "toastify-react-native";

export default function CadastreseScreen() {
  const [nome, onChangeNome] = React.useState("");
  const [cpf, onChangeCpf] = React.useState("");
  const [telefone, onChangeTelefone] = React.useState("");

  const [textNome, onChangeTextNome] = React.useState("Nome Completo");
  const [textCpf, onChangeTextCpf] = React.useState("CPF");
  const [textTelefone, onChangeTextTelefone] = React.useState("Telefone");

  function cadastrar() {
    if (nome && cpf && telefone && cpf.length == 11 && telefone.length == 11) {
      const data = {
        cpf: cpf,
        nome: nome,
        telefone: telefone,
      };
      //console.log(environment.url);
      axios
        .post(`${environment.url}/cadastrese`, data)
        .then((response) => {
          //console.log(response.data);
          //Toast.success("Usuário cadastrado com sucesso!");
          //router.replace("/login");
        })
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status == 500) {
            Toast.warn("Pessoa já cadastrada!");
          }
        });
    } else {
      if (!nome) {
        onChangeTextNome("Nome é obrigatório");
      }
      if (!cpf) {
        onChangeTextCpf("CPF é obrigatório");
      }
      if (!telefone) {
        onChangeTextTelefone("Telefone é obrigatório");
      }

      if (cpf && cpf.length < 11) {
        Toast.info("CPF deve conter 11 caracteres!");
      }

      if (telefone && telefone.length < 11) {
        Toast.info("O telefone deve conter 11 caracteres!");
      }
    }
  }

  return (
    <SafeAreaView style={globalstyles.container}>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.title}>Cadastre-se</Text>
        </View>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNome}
          onBlur={() => {
            if (!nome) {
              onChangeTextNome("Nome é obrigatório");
            }
          }}
          placeholder={textNome}
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="text"
          value={nome}
        />

        <MaskedTextInput
          value={cpf}
          onBlur={() => {
            if (!cpf) {
              onChangeTextCpf("CPF é obrigatório");
            }
          }}
          textAlign="center"
          inputMode="numeric"
          placeholderTextColor="#3d2963"
          placeholder={textCpf}
          mask="999.999.999-99"
          onChangeText={(text, rawText) => {
            onChangeCpf(rawText);
          }}
          style={styles.input}
        />

        <MaskedTextInput
          value={telefone}
          onBlur={() => {
            if (!telefone) {
              onChangeTextTelefone("Telefone é obrigatório");
            }
          }}
          textAlign="center"
          inputMode="numeric"
          placeholderTextColor="#3d2963"
          placeholder={textTelefone}
          mask="(99) 9 9999-9999"
          onChangeText={(text, rawText) => {
            onChangeTelefone(rawText);
          }}
          style={styles.input}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              cadastrar();
            }}
          >
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
