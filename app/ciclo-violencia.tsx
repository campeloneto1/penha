import { StyleSheet, Text, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ModalScreen from "../components/Modal";

const ciclos = [
  {
    id: 1,
    fase: "Fase 1",
    titulo: "Aumento da tensão",
    texto:
      "Nesse primeiro momento, o agressor mostra-se tenso e irritado por coisas insignificantes, chegando a ter acessos de raiva. Ele também humilha a vítima, faz ameaças e destrói objetos. A mulher tenta acalmar o     agressor, fica aflita e evita qualquer conduta que possa “provocá-lo”.     As sensações são muitas: tristeza, angústia, ansiedade, medo e desilusão     são apenas algumas. Em geral, a vítima tende a negar que isso está     acontecendo com ela, esconde os fatos das demais pessoas e, muitas     vezes, acha que fez algo de errado para justificar o comportamento     violento do agressor ou que “ele teve um dia ruim no trabalho”, por     exemplo. Essa tensão pode durar dias ou anos, mas como ela aumenta cada     vez mais, é muito provável que a situação levará à Fase 2",
  },
  {
    id: 2,
    fase: "Fase 2",
    titulo: "Ato de violência",
    texto:
      "Esta fase corresponde à explosão do agressor, ou seja, a falta de controle chega ao limite e leva ao ato violento. Aqui, toda a tensão acumulada na Fase 1 se materializa em violência verbal, física, psicológica, moral ou patrimonial. Mesmo tendo consciência de que o agressor está fora de controle e tem um poder destrutivo grande em relação à sua vida, o sentimento da mulher é de paralisia e impossibilidade de reação. Aqui, ela sofre de uma tensão psicológica severa (insônia, perda de peso, fadiga constante, ansiedade) e sente medo, ódio, solidão, pena de si mesma, vergonha, confusão e dor. Nesse momento, ela também pode tomar decisões − as mais comuns são: buscar ajuda, denunciar, esconder-se na casa de amigos e parentes, pedir a separação e até mesmo suicidar-se. Geralmente, há um distanciamento do agressor.",
  },
  {
    id: 3,
    fase: "Fase 3",
    titulo: "Arrependimento e comportamento carinhoso",
    texto:
      "Também conhecida como “lua de mel”, esta fase se caracteriza pelo arrependimento do agressor, que se torna amável para conseguir a reconciliação. A mulher se sente confusa e pressionada a manter o seu relacionamento diante da sociedade, sobretudo quando o casal tem filhos. Em outras palavras: ela abre mão de seus direitos e recursos, enquanto ele diz que “vai mudar”. Há um período relativamente calmo, em que a mulher se sente feliz por constatar os esforços e as mudanças de atitude, lembrando também os momentos bons que tiveram juntos. Como há a demonstração de remorso, ela se sente responsável por ele, o que estreita a relação de dependência entre vítima e agressor. Um misto de medo, confusão, culpa e ilusão fazem parte dos sentimentos da mulher. Por fim, a tensão volta e, com ela, as agressões da Fase 1.",
  },
];

const Ciclo = ({ titulo, texto, fase }: any) => {
  return (
    <View style={styles.containerTextDescricao}>
      <Text style={styles.tituloDescricao}>
        <Text style={styles.bold}>{fase}:</Text> {titulo}
      </Text>

      <Text style={styles.textDescricao}>{texto}</Text>
    </View>
  );
};

export default function CicloViolenciaScreen() {
  return (
    <ModalScreen title="Ciclo da violência">
      <View style={styles.containerImg}>
        <Image
          style={styles.imageCiclo}
          source={require("../assets/images/ciclo-violencia.png")}
        />
      </View>

      <FlatList
        style={styles.list}
        data={ciclos}
        renderItem={({ item }) => (
          <Ciclo
            titulo={item.titulo}
            texto={item.texto}
            fase={item.fase}
            id={item.id}
          />
        )}
      />
    </ModalScreen>
  );
}

const styles = StyleSheet.create({
  containerImg: {
    alignItems: "center",
  },
  imageCiclo: {
    height: 250,
    width: 300,
  },
  bold: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  containerText: {
    padding: 25,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: "#3d2963",
  },
  list: {
    height: "55%",
  },
  containerTextDescricao: {
    marginTop: 10,
  },
  tituloDescricao: {
    fontSize: 20,
    color: "#3d2963",
  },
  textDescricao: {
    textAlign: "auto",
    paddingTop: 5,
    fontSize: 15,
    //color: "#3d2963",
    width: 350,
  },
});
