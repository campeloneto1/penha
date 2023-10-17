import { StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";
import globalstyles from "../assets/styles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ModalScreen({ title, children }: any) {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();

  return (
    <View style={globalstyles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
        {isPresented && (
          <Link href="../">
            <FontAwesome size={20} color={"#fff"} name={"window-close"} />
          </Link>
        )}
      </View>
      <View style={styles.containerText}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    height: 80,
    backgroundColor: "#3d2963",
    padding: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: "bold",
    color: "#3d2963",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  containerText: {
    height: "auto",
    width: "90%",
    marginLeft: "5%",
  },
  text: {
    fontSize: 15,
    marginTop: 10,
  },
  textDestaque: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#3d2963",
  },
});
