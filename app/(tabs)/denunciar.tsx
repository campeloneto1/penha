import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Platform,
  Pressable,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Link } from "expo-router";
import globalstyles from "../../assets/styles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";

export default function DenunciarScreen() {
  const [vitima, setVitima] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [acusado, setAcusado] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const buttonClickedHandler = () => {
    console.log("You have been clicked a button!");
    // do something
  };

  const placeholder = {
    label: "Selecione a Cidade",
    value: null,
    color: "#3d2963",
  };

  const sports = [
    {
      label: "Football",
      value: "football",
    },
    {
      label: "Baseball",
      value: "baseball",
    },
    {
      label: "Hockey",
      value: "hockey",
    },
  ];

  return (
    <View style={globalstyles.container}>
      <StatusBar animated={true} barStyle={"light-content"} hidden={false} />
      <View style={styles.containerTitle}>
        <Text style={styles.appname}>Denunciar</Text>
      </View>
      <ScrollView style={styles.containerMenu}>
        <TextInput
          style={styles.input}
          onChangeText={setVitima}
          placeholder="Vítima"
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="text"
          value={vitima}
        />
        <TextInput
          style={styles.input}
          onChangeText={setRua}
          placeholder="Rua"
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="text"
          value={rua}
        />
        <TextInput
          style={styles.input}
          onChangeText={setNumero}
          placeholder="Número"
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="text"
          value={numero}
        />
        <TextInput
          style={styles.input}
          onChangeText={setBairro}
          placeholder="Bairro"
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="text"
          value={bairro}
        />

        <RNPickerSelect
          placeholder={placeholder}
          items={sports}
          onValueChange={(value) => {
            console.log(value);
          }}
          style={pickerSelectStyles}
        />

        <TextInput
          style={styles.input}
          onChangeText={setAcusado}
          placeholder="Acusado"
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="text"
          value={acusado}
        />

        <TextInput
          multiline
          numberOfLines={4}
          style={styles.input}
          onChangeText={setObservacoes}
          placeholder="Observações"
          placeholderTextColor="#3d2963"
          textAlign="center"
          inputMode="text"
          value={observacoes}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onLongPress={buttonClickedHandler}
            delayLongPress={3000}
          >
            <Text style={styles.butttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginLeft: "4%",
    width: "93%",
    alignItems: "center",
    height: 40,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#000",
    color: "#000",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    marginLeft: "5%",
    width: "100%",
    alignItems: "center",
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#000",
    color: "#000",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  backgorundColor: {
    backgroundColor: "#3d2963",
  },
  container: {
    marginLeft: "5%",
    width: "90%",
    backgroundColor: "transparent",
  },
  containerTitle: {
    backgroundColor: "#3d2963",
    paddingLeft: "5%",
    height: "15%",
    justifyContent: "flex-end",
    paddingBottom: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7.49,
    elevation: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    marginTop: "5%",
    color: "#fff",
  },
  appname: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    marginTop: "5%",
  },

  containerMenu: {
    height: "auto",
    marginLeft: "5%",
    width: "90%",
  },
  itemMenu: {
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textMenu: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#3d2963",
  },

  containerButton: {
    paddingBottom: 15,
    paddingTop: 15,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#000",
  },
  text: {
    fontSize: 20,
    marginTop: "5%",
  },
  button: {
    borderRadius: 100,
    width: "100%",
    height: 50,
    backgroundColor: "#3d2963",
    justifyContent: "center",

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
});
