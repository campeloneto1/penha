import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import globalstyles from "../../assets/styles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function MenuScreen() {
  return (
    <View style={globalstyles.container}>
      <StatusBar animated={true} barStyle={"light-content"} hidden={false} />
      <View style={styles.containerTitle}>
        <Text style={styles.appname}>Menu</Text>
      </View>
      <ScrollView style={styles.containerMenu}>
        <Link
          href={{
            pathname: "/(tabs)",
            params: {},
          }}
          asChild
        >
          <Pressable>
            <View style={styles.itemMenu}>
              <FontAwesome size={30} color={"#3d2963"} name={"home"} />
              <Text style={styles.textMenu}>Início</Text>
            </View>
          </Pressable>
        </Link>
        <Link
          href={{
            pathname: "/denunciar",
            params: {},
          }}
          asChild
        >
          <Pressable>
            <View style={styles.itemMenu}>
              <FontAwesome size={30} color={"#3d2963"} name={"warning"} />
              <Text style={styles.textMenu}>Denunciar</Text>
            </View>
          </Pressable>
        </Link>
      </ScrollView>
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
});
