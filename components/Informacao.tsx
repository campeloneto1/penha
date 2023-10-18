import { StyleSheet, Text, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Informacao({ path, titulo, descricao }: any) {
  return (
    <Link
      style={styles.containerInformacao}
      href={{
        pathname: path,
        params: {},
      }}
      asChild
    >
      <Pressable>
        <Text style={styles.titleInformacao}>{titulo}</Text>
        <Text style={styles.textInformacao}>{descricao}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  containerInformacao: {
    borderColor: "#3d2963",
    borderTopWidth: 0.3,
    //borderBottomWidth: 0.3,
    width: "100%",
    height: "auto",
    //justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: "#000",
  },
  titleInformacao: {
    paddingTop: 5,
    fontSize: 20,
    paddingBottom: 5,
    fontWeight: "bold",
    color: "#3d2963",
  },
  textInformacao: {
    fontSize: 15,
    //color: "#3d2963",
    paddingBottom: 5,
  },
});
