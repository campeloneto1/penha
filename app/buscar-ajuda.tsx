import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import globalstyles from "../assets/styles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ModalScreen from "../components/Modal";

export default function BuscarAjudaScreen() {
  return (
    <ModalScreen title="Como buscar ajuda">
      <ScrollView style={styles.containerText}>
        <Text style={styles.text}>
          As mulheres devem procurar, em primeiro lugar, um{" "}
          <Text style={styles.bold}>
            Centro de Referência de Atendimento à Mulher (CRM)
          </Text>{" "}
          em sua cidade. Lá elas podem buscar orientações para entender melhor a
          situação pela qual estão passando, obter informações sobre a Lei Maria
          da Penha e de como romper o ciclo da violência. Dessa forma, as
          mulheres vão se empoderar e decidir o melhor momento de fazer a
          denúncia.
        </Text>
        <Text style={styles.text}>
          Nos locais em que não existe esse equipamento, é possível acionar o{" "}
          <Text style={styles.bold}>Ligue 180</Text>, um serviço disponibilizado
          pelo Governo Federal, que funciona 24 horas por dia durante todos os
          dias da semana. Por meio desse canal, a mulher pode saber onde existe
          um Centro de Referência de Atendimento à Mulher ou uma Delegacia
          Especializada no Atendimento à Mulher (DEAM), bem como conseguir
          outras informações que precisar. É possível também dirigir-se
          diretamente a uma DEAM, sobretudo se a mulher estiver sob ameaça ou
          sofrendo violência física.
        </Text>
        <Text style={styles.text}>
          Todos esses passos são muito importantes para quem é vítima da
          violência de gênero. E quando a mulher revela as agressões que sofre,
          ela dá um passo importante para quebrar o ciclo. Essa atitude, muitas
          vezes difícil, ajuda a diminuir o seu isolamento e solidão; por isso,
          deve ser apoiada e incentivada. O primeiro passo para o acolhimento da
          mulher em situação de violência é dar crédito aos seus relatos.
          Mensagens positivas e palavras de apoio vão dar segurança e melhorar a
          autoestima da vítima, podendo ser preciosas para encorajá-la a sair
          dessa situação: “Você não está sozinha”, “Eu me preocupo com você e,
          juntas, vamos buscar a sua segurança e bem-estar”, “Eu acredito em
          você”, “A sua vida é importante para nós”, “Nenhuma a menos”, “O que
          você deseja fazer? Como posso te ajudar?”.
        </Text>
        <Text style={styles.text}>
          Com a Lei Maria da Penha, não é preciso mais que as mulheres sofram
          caladas por anos.
        </Text>
        <Text style={styles.textDestaque}>
          UMA VIDA LIVRE DE VIOLÊNCIA DOMÉSTICA É POSSÍVEL E CERTAMENTE TERÁ UM
          NOVO SIGNIFICADO.
        </Text>
      </ScrollView>
    </ModalScreen>
  );
}

const styles = StyleSheet.create({
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
    height: "85%",
    width: "100%",
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
