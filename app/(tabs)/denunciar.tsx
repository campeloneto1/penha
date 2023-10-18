import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useState, useEffect } from "react";
import RNPickerSelect from "react-native-picker-select";
import LayoutScreen from "../../components/Layout";
import { environment } from "../../environments/environment";
import { getSecureStore } from "../../services/session";
import { Cidade, Cidades } from "../../models/Cidade";
import { Estado, Estados } from "../../models/Estado";
import axios from "axios";

export default function DenunciarScreen() {
  const [token, setToken] = useState("");
  const [vitima, setVitima] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [estado, setEstado] = useState<Estado>();
  const [cidade, setCidade] = useState<Cidade>();
  const [estados, setEstados] = useState<Estados>();
  const [cidades, setCidades] = useState<Cidades>();
  const [acusado, setAcusado] = useState("");
  const [observacoes, setObservacoes] = useState("");

  // declare the data fetching function
  const fetchData = async () => {
    return await getSecureStore("token");
  };

  useEffect(() => {
    fetchData()
      .then((data) => {
        setToken(data);

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        axios
          .get(`${environment.url}/estados`, config)
          .then((response) => {
            //console.log("response.data");
            //@ts-ignore
            setEstados(response);
          })
          .catch((error) => {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
      })
      // make sure to catch any error
      .catch(console.error);
  });

  const buttonClickedHandler = () => {
    //console.log(estados);
  };

  const placeholder = {
    label: "Selecione o Estado",
    value: null,
    color: "#3d2963",
  };

  const placeholder2 = {
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
    <LayoutScreen title="Denunciar">
      <Pressable onPress={Keyboard.dismiss}>
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

          <RNPickerSelect
            placeholder={placeholder2}
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
              onPress={buttonClickedHandler}
            >
              <Text style={styles.butttonText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Pressable>
    </LayoutScreen>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginTop: "5%",
    // marginLeft: "3%",
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  inputAndroid: {
    marginTop: "5%",
    //marginLeft: "3%",
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 20,
  },
});

const styles = StyleSheet.create({
  backgorundColor: {
    backgroundColor: "#3d2963",
  },

  bold: {
    fontWeight: "bold",
  },

  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    marginTop: "5%",
    fontSize: 20,
  },

  containerMenu: {
    height: "auto",
    //marginLeft: "5%",
    width: "100%",
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
