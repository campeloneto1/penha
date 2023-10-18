import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import LayoutScreen from "../../components/Layout";
import { getSecureStore } from "../../services/session";
import { User } from "../../models/User";
import Card from "../../components/Card";
import Informacao from "../../components/Informacao";

export default function IndexScreen() {
  const [textButton, OnChangeTextButton] = useState("Pedir Ajuda");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();

  // declare the data fetching function
  const fetchData = async () => {
    return await getSecureStore("user");
  };

  useEffect(() => {
    // call the function
    fetchData()
      .then((data) => {
        setUser(data);
        //console.log(user);
      })
      // make sure to catch any error
      .catch(console.error);
  });

  const buttonClickedHandler = () => {
    OnChangeTextButton("Ajuda solicitada");
    //console.log(user.perfil);
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

  return (
    <>
      {user && (
        <LayoutScreen title={user.nome} subtitle="Olá">
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
            <Informacao
              titulo="Ciclo da violência"
              descricao="Saiba identificar as três principais fases do ciclo e entenda como
              ele funciona."
              path="/ciclo-violencia"
            />

            <Informacao
              titulo="Como buscar ajuda"
              descricao="As mulheres devem procurar, em primeiro lugar, um Centro de Referência de Atendimento à Mulher (CRM) em sua cidade."
              path="/buscar-ajuda"
            />

            <Informacao
              titulo="Resumo da lei"
              descricao="Saiba quais são os principais dispositivos da Lei n. 11.340/2006 e os direitos garantidos pela legislação que protege as mulheres contra a violência doméstica e familiar."
              path="/resumo-lei"
            />
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onLongPress={buttonClickedHandler}
              delayLongPress={1000}
            >
              <Text style={styles.butttonText}>{textButton}</Text>
            </TouchableOpacity>
          </View>
        </LayoutScreen>
      )}
    </>
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
