import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  StatusBar,
} from "react-native";
import globalstyles from "../../assets/styles/styles";
import { Link } from "expo-router";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
//import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  const [textButton, OnChangeTextButton] = useState("Pedir Ajuda");

  const buttonClickedHandler = () => {
    OnChangeTextButton("Ajuda solicitada");
    console.log("You have been clicked a button!");
    // do something
  };

  const violencias = [
    {
      id: 1,
      nome: "Física",
      descricao:
        "Entendida como qualquer conduta que ofenda a integridade ou saúde corporal da mulher.",
      icon: "warning",
    },
    {
      id: 2,
      nome: "Psicológica",
      descricao:
        "É considerada qualquer conduta que: cause dano emocional e diminuição da autoestima; prejudique e perturbe o pleno desenvolvimento da mulher; ou vise degradar ou controlar suas ações, comportamentos, crenças e decisões.",
      icon: "hand",
    },
    {
      id: 3,
      nome: "Sexual",
      descricao:
        "Trata-se de qualquer conduta que constranja a presenciar, a manter ou a participar de relação sexual não desejada mediante intimidação, ameaça, coação ou uso da força.",
      icon: "hand",
    },
    {
      id: 4,
      nome: "Patrimonial",
      descricao:
        "Entendida como qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades.",
      icon: "hand",
    },
    {
      id: 5,
      nome: "Moral",
      descricao:
        "É considerada qualquer conduta que configure calúnia, difamação ou injúria.",
      icon: "hand",
    },
  ];

  const Card = ({ nome, descricao, id, icon }: any) => (
    <View style={styles.cardBody}>
      <View style={styles.card}>
        <FontAwesome size={24} color={"#fff"} name={"warning"} />
      </View>
      <Text style={styles.cardTitle}>{nome}</Text>
      {/* <Text style={styles.cardDescricao}>{descricao}</Text> */}
    </View>
  );

  return (
    <View style={globalstyles.container}>
      <StatusBar animated={true} barStyle={"light-content"} hidden={false} />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Olá</Text>
        <Text style={styles.appname}>Maria da Penha</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.containerCards}>
          <Text style={styles.titleCards}>Tipos de violência:</Text>
          <FlatList
            horizontal
            data={violencias}
            renderItem={({ item }) => (
              <Card nome={item.nome} descricao={item.descricao} />
            )}
          />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onLongPress={buttonClickedHandler}
            delayLongPress={3000}
          >
            <Text style={styles.butttonText}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
    height: "20%",
    justifyContent: "flex-end",
    paddingBottom: 10,
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
  containerCards: {
    height: "45%",
    width: "100%",
    //justifyContent: "center",
    //alignItems: "center",
    // backgroundColor: "#000",
  },
  titleCards: {
    paddingTop: "5%",
    fontSize: 20,
  },
  cardBody: {
    alignItems: "center",
  },
  card: {
    width: 60,
    height: 60,
    borderRadius: 100,
    color: "#fff",
    marginHorizontal: 10,
    backgroundColor: "#3d2963",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7.49,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardDescricao: {
    fontSize: 15,
  },
  containerButton: {
    height: "40%",
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
    width: 250,
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
