import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LayoutScreen from "../../components/Layout";
//import { Text, View } from '../../components/Themed';

export default function IndexScreen() {
  const [textButton, OnChangeTextButton] = useState("Pedir Ajuda");

  const buttonClickedHandler = () => {
    OnChangeTextButton("Ajuda solicitada");
    console.log("You have been clicked a button!");
    // do something
  };

  type Violencia = {
    id: number;
    nome: string;
    descricao: string;
    tipos: Array<string>;
    icon: string;
  };

  const violencias: Array<Violencia> = [
    {
      id: 1,
      nome: "Física",
      descricao:
        "Entendida como qualquer conduta que ofenda a integridade ou saúde corporal da mulher.",
      tipos: [
        "Espancamento",
        "Atirar objetos, sacudir e apertar os braços;",
        "Estrangulamento ou sufocamento;",
        "Lesões com objetos cortantes ou perfurantes;",
        "Ferimentos causados por queimaduras ou armas de fogo;",
        "Tortura",
      ],
      icon: "hand-stop-o",
    },
    {
      id: 2,
      nome: "Psicológica",
      descricao:
        "É considerada qualquer conduta que: cause dano emocional e diminuição da autoestima; prejudique e perturbe o pleno desenvolvimento da mulher; ou vise degradar ou controlar suas ações, comportamentos, crenças e decisões.",
      tipos: [
        "Ameaças;",
        "Constragimento;",
        "Humilhação;",
        "Isolamento (Proibir de estudar e viajar ou de falar com amigos e parentes);",
        "Vigilância constante;",
        "Perseguição contumaz;",
        "Insultos;",
        "Chantagem;",
        "Exploração;",
        "Limitação do direito de ir e vir;",
        "Ridicularização;",
        "Tirar a liberdade de crença;",
        "Distocer e omitir fatos para deixa a mulher em dúvida sobre a sua memória e sanidade",
      ],
      icon: "podcast",
    },
    {
      id: 3,
      nome: "Sexual",
      descricao:
        "Trata-se de qualquer conduta que constranja a presenciar, a manter ou a participar de relação sexual não desejada mediante intimidação, ameaça, coação ou uso da força.",
      tipos: [
        "Estupro;",
        "Obrigar a mulher a fazer atos sexuais que causam desconforto ou repulsa;",
        "Impedir o uso de métodos contraceprivos ou forçar a mulher a abortar;",
        "Forçar matrimônio, gravidez ou prostituição por meio de coação, chantagem, suborno ou manipulação;",
        "Limitar ou anular o exercício dos direitos sexuais e reprodutivos da mulher",
      ],
      icon: "male",
    },
    {
      id: 4,
      nome: "Patrimonial",
      descricao:
        "Entendida como qualquer conduta que configure retenção, subtração, destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos ou recursos econômicos, incluindo os destinados a satisfazer suas necessidades.",
      tipos: [
        "Controlar o dinheiro;",
        "Deixar de pagar pensão alimentícia;",
        "Destruição de documentos pessoais;",
        "Furto, extorsão ou dano;",
        "Estelionato;",
        "Privar de bens, valores ou recursos econômicos;",
        "Causar danos propositais a objetos da mulher ou dos quais ela goste",
      ],
      icon: "home",
    },
    {
      id: 5,
      nome: "Moral",
      descricao:
        "É considerada qualquer conduta que configure calúnia, difamação ou injúria.",
      tipos: [
        "Acusar a mulher de traição;",
        "Emitir juízos morais sobre a conduta;",
        "Fazer críticas mentirosas;",
        "Expor a vida íntima;",
        "Rebaixar a mulher por meio de xingamentos que incidem sobre a sua índole;",
        "Desvalorizar a vítima pelo seu modo de se vestir",
      ],
      icon: "commenting",
    },
  ];

  const Card = ({ nome, descricao, id, icon, tipos }: any) => (
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

  const Item = ({ titulo, descricao, path }: any) => {
    return (
      <Link
        style={styles.containerItem}
        href={{
          pathname: path,
          params: {},
        }}
        asChild
      >
        <Pressable>
          <Text style={styles.titleItem}>{titulo}</Text>
          <Text style={styles.textItem}>{descricao}</Text>
        </Pressable>
      </Link>
    );
  };

  return (
    <LayoutScreen title="Maria da Penha" subtitle="Olá">
      <View style={styles.containerCards}>
        <Text style={styles.titleCards}>Tipos de violência:</Text>
        <FlatList
          horizontal
          data={violencias}
          renderItem={({ item }) => (
            <Card
              nome={item.nome}
              descricao={item.descricao}
              icon={item.icon}
              tipos={item.tipos}
              id={item.id}
            />
          )}
        />
      </View>
      <View>
        <Item
          titulo="Ciclo da violência"
          descricao="Saiba identificar as três principais fases do ciclo e entenda como
              ele funciona."
          path="/ciclo-violencia"
        />

        <Item
          titulo="Como buscar ajuda"
          descricao="As mulheres devem procurar, em primeiro lugar, um Centro de Referência de Atendimento à Mulher (CRM) em sua cidade."
          path="/buscar-ajuda"
        />

        <Item
          titulo="Resumo da lei"
          descricao="Saiba quais são os principais dispositivos da Lei n. 11.340/2006 e os direitos garantidos pela legislação que protege as mulheres contra a violência doméstica e familiar."
          path="/resumo-lei"
        />
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onLongPress={buttonClickedHandler}
          delayLongPress={3000}
        >
          <Text style={styles.butttonText}>{textButton}</Text>
        </TouchableOpacity>
      </View>
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
  containerItem: {
    borderColor: "#3d2963",
    borderTopWidth: 0.3,
    //borderBottomWidth: 0.3,
    width: "100%",
    height: "auto",
    //justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: "#000",
  },
  titleItem: {
    paddingTop: 5,
    fontSize: 20,
    paddingBottom: 5,
    fontWeight: "bold",
    color: "#3d2963",
  },
  textItem: {
    fontSize: 15,
    //color: "#3d2963",
    paddingBottom: 5,
  },

  containerButton: {
    paddingBottom: 15,
    paddingTop: 15,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#000",
  },
  text: {
    fontSize: 20,
    marginTop: "5%",
  },
  button: {
    borderRadius: 100,
    width: 250,
    height: 50,
    backgroundColor: "#3d2963",
    justifyContent: "center",

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
