import { StyleSheet, Text, Pressable, View } from "react-native";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Card({ id, nome, descricao, icon, tipos }: any) {
  return (
    <Link
      href={{
        pathname: "/violencia",
        params: {
          id: id,
          nome: nome,
          descricao: descricao,
          icon: icon,
          tipos: tipos,
        },
      }}
      asChild
    >
      <Pressable>
        <View style={styles.cardBody}>
          <View style={styles.card}>
            <FontAwesome size={20} color={"#fff"} name={icon} />
          </View>
          <Text style={styles.cardTitle}>{nome}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  containerCards: {
    height: "auto",
    width: "100%",
    paddingBottom: 5,
    //justifyContent: "center",
    //alignItems: "center",
    // backgroundColor: "#000",
  },
  titleCards: {
    paddingTop: "5%",
    fontSize: 20,
    paddingBottom: 10,
  },
  cardBody: {
    alignItems: "center",
  },
  card: {
    width: 50,
    height: 50,
    borderRadius: 10,
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
    paddingTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#3d2963",
  },
  cardDescricao: {
    fontSize: 15,
  },
});
