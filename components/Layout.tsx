import { StyleSheet, Text, View, StatusBar } from "react-native";
import globalstyles from "../assets/styles/styles";
//import { Text, View } from '../../components/Themed';

export default function LayoutScreen({ children, title, subtitle }: any) {
  return (
    <View style={globalstyles.container}>
      <StatusBar animated={true} barStyle={"light-content"} hidden={false} />
      <View style={styles.containerTitle}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {title.split(" ").length > 1 && (
          <Text style={styles.title}>{`${title.split(" ")[0]} ${
            title.split(" ")[title.split(" ").length - 1]
          }`}</Text>
        )}
        {title.split(" ").length == 1 && (
          <Text style={styles.title}>{title}</Text>
        )}
        {/* <Text style={styles.title}>{title}</Text> */}
      </View>
      <View style={styles.containerChildren}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgorundColor: {
    backgroundColor: "#3d2963",
  },

  containerTitle: {
    backgroundColor: "#3d2963",
    paddingLeft: "5%",
    height: "13%",
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
  subtitle: {
    fontSize: 18,
    marginTop: "5%",
    color: "#fff",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  containerChildren: {
    height: "100%",
    marginLeft: "5%",
    width: "90%",
    backgroundColor: "transparent",
  },
});
