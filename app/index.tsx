import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import globalstyles from "../assets/styles/styles";
import { Link } from "expo-router";
//import { Text, View } from "../components/Themed";

export default function IndexScreen() {
  return (
    <SafeAreaView style={globalstyles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Seja bem-vinda ao</Text>
        <Text style={styles.appname}>Penha</Text>

        <Text style={styles.text}>
          Uma iniciativa do Governo do Estado do
          <Text style={styles.bold}> Ceará</Text> para trazer mais segurança a
          população vítima de violência doméstica.
        </Text>

        <Text style={styles.textEmergencia}>
          Em caso de emergência, ligue <Text style={styles.text180}>180</Text>
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
    color: "#3d2963",
  },
  title: {
    fontSize: 40,
    marginTop: "20%",
  },
  appname: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#3d2963",
  },
  text: {
    marginTop: "10%",
    fontSize: 25,
  },
  textEmergencia: {
    marginTop: "60%",
    fontSize: 20,
    textAlign: "center",
  },
  text180: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3d2963",
  },
  logo: {
    width: 205,
  },
  containerButton: {
    marginTop: "20%",
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
});
