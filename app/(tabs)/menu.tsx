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
import LayoutScreen from "../../components/Layout";

export default function MenuScreen() {
  return (
    <LayoutScreen title="Menu">
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
    </LayoutScreen>
  );
}

const styles = StyleSheet.create({
  backgorundColor: {
    backgroundColor: "#3d2963",
  },
  bold: {
    fontWeight: "bold",
  },
  containerMenu: {
    height: "auto",
    //marginLeft: "5%",
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
    fontSize: 17,
    //fontWeight: "bold",
    color: "#3d2963",
  },
});
