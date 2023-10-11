import { StyleSheet, Text, View, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import globalstyles from "../assets/styles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ModalScreen from "../components/Modal";

export default function ViolenciaScreen() {
  const params = useLocalSearchParams();
  const Item = ({ item }: any) => {
    return (
      <View style={styles.containerTextDescricao}>
        <Text style={styles.textDescricao}>
          <FontAwesome size={15} color={"#3d2963"} name={"angle-right"} />{" "}
          {item}
        </Text>
      </View>
    );
  };

  return (
    <ModalScreen title={"Violência " + params.nome}>
      <View style={styles.containerText}>
        <Text style={styles.text}>{params.descricao}</Text>
        <Text style={styles.tituloDescricao}>
          Tipos de violência {params.nome}:
        </Text>
        <FlatList
          //@ts-ignore
          data={params.tipos.split(";,")}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    </ModalScreen>
  );
}

const styles = StyleSheet.create({
  containerText: {
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: "#3d2963",
  },
  containerTextDescricao: {
    marginTop: 10,
    width: "90%",
  },
  tituloDescricao: {
    fontSize: 20,
    color: "#3d2963",
  },
  textDescricao: {
    fontSize: 15,
    //color: "#3d2963",
  },
});
