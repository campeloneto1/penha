import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Pressable,
} from "react-native";
import globalstyles from "../assets/styles/styles";
import { Link } from "expo-router";

export default function IndexScreen() {
  return (
    <SafeAreaView style={globalstyles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Seja bem-vinda ao</Text>
        <Text style={styles.appname}>Penha</Text>

        <Text style={styles.text}>
          Uma iniciativa do Governo do Estado do{" "}
          <Text style={styles.bold}>Ceará</Text> para trazer mais segurança a
          população vítima de violência doméstica.
        </Text>

        <Link href="/login" asChild style={styles.containerButton}>
          <Pressable style={styles.button}>
            <Text style={styles.butttonText}>Fazer login</Text>
          </Pressable>
        </Link>
      </View>
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
    fontSize: 40,

    marginTop: "20%",
  },
  appname: {
    fontSize: 50,
    fontWeight: "bold",
  },
  text: {
    marginTop: "10%",
    fontSize: 25,
  },
  containerButton: {
    marginTop: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    width: "100%",
    backgroundColor: "#000",
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
});
