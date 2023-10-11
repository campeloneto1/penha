import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import globalstyles from "../assets/styles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import ModalScreen from "../components/Modal";

export default function BuscarAjudaScreen() {
  return (
    <ModalScreen title="Resumo da lei">
      <ScrollView style={styles.containerText}>
        <View style={styles.containerText3}>
          <Text style={styles.text}>
            A <Text style={styles.bold}>Lei Maria da Penha</Text> foi sancionada
            em 7 de agosto de 2006 pelo presidente Luiz Inácio Lula da Silva.
            Com 46 artigos distribuídos em sete títulos, ela cria mecanismos
            para prevenir e coibir a violência doméstica e familiar contra a
            mulher em conformidade com a Constituição Federal (art. 226, § 8°) e
            os tratados internacionais ratificados pelo Estado brasileiro
            (Convenção de Belém do Pará, Pacto de San José da Costa Rica,
            Declaração Americana dos Direitos e Deveres do Homem e Convenção
            sobre a Eliminação de Todas as Formas de Discriminação contra a
            Mulher).
          </Text>
        </View>
        <View style={styles.containerText2}>
          <Text style={styles.text}>
            O <Text style={styles.bold}>Título I</Text> determina em quatro
            artigos a quem a lei é direcionada, ressaltando ainda a
            responsabilidade da família, da sociedade e do poder público para
            que todas as mulheres possam ter o exercício pleno dos seus
            direitos.
          </Text>
        </View>
        <View style={styles.containerText2}>
          <Text style={styles.text}>
            Já o <Text style={styles.bold}>Título II</Text> vem dividido em dois
            capítulos e três artigos: além de configurar os espaços em que as
            agressões são qualificadas como violência doméstica, traz as
            definições de todas as suas formas (física, psicológica, sexual,
            patrimonial e moral).
          </Text>
        </View>
        <View style={styles.containerText2}>
          <Text style={styles.text}>
            Quanto ao <Text style={styles.bold}>Título III</Text>, composto de
            três capítulos e sete artigos, tem-se a questão da assistência à
            mulher em situação de violência doméstica e familiar, com destaque
            para as medidas integradas de prevenção, atendimento pela autoridade
            policial e assistência social às vítimas.
          </Text>
        </View>
        <View style={styles.containerText2}>
          <Text style={styles.text}>
            O <Text style={styles.bold}>Título IV</Text>, por sua vez, possui
            quatro capítulos e 17 artigos, tratando dos procedimentos
            processuais, assistência judiciária, atuação do Ministério Público
            e, em quatro seções (Capítulo II), se dedica às medidas protetivas
            de urgência, que estão entre as disposições mais inovadoras da Lei
            n. 11.340/2006.
          </Text>
        </View>
        <View style={styles.containerText2}>
          <Text style={styles.text}>
            No <Text style={styles.bold}>Título V</Text> e seus quatro artigos,
            está prevista a criação de Juizados de Violência Doméstica e
            Familiar contra a Mulher, podendo estes contar com uma equipe de
            atendimento multidisciplinar composta de profissionais
            especializados nas áreas psicossocial, jurídica e da saúde,
            incluindo-se também destinação de verba orçamentária ao Judiciário
            para a criação e manutenção dessa equipe.
          </Text>
        </View>
        <View style={styles.containerText2}>
          <Text style={styles.text}>
            O <Text style={styles.bold}>Título VI</Text> prevê, em seu único
            artigo e parágrafo único, uma regra de transição, segundo a qual as
            varas criminais têm legitimidade para conhecer e julgar as causas
            referentes à violência de gênero enquanto os Juizados de Violência
            Doméstica e Familiar contra a Mulher não estiverem estruturados.
          </Text>
        </View>
        <View style={styles.containerText2}>
          <Text style={styles.text}>
            Por fim, encontram-se no <Text style={styles.bold}>Título VII</Text>{" "}
            as disposições finais. São 13 artigos que determinam que a
            instituição dos Juizados de Violência Doméstica e Familiar contra a
            Mulher pode ser integrada a outros equipamentos em âmbito nacional,
            estadual e municipal, tais como casas-abrigo, delegacias, núcleos de
            defensoria pública, serviços de saúde, centros de educação e
            reabilitação para os agressores etc. Dispõem ainda sobre a inclusão
            de estatísticas sobre a violência doméstica e familiar contra a
            mulher nas bases de dados dos órgãos oficiais do Sistema de Justiça
            e Segurança, além de contemplarem uma previsão orçamentária para o
            cumprimento das medidas estabelecidas na lei. Um dos ganhos
            significativos trazidos pela lei, conforme consta no art. 41, é a
            não aplicação da Lei n. 9.099/1995, ou seja, a violência doméstica
            praticada contra a mulher deixa de ser considerada como de menor
            potencial ofensivo.
          </Text>
        </View>
      </ScrollView>
    </ModalScreen>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
    color: "#3d2963",
  },

  containerText: {
    height: "85%",
    width: "100%",
  },
  containerText2: {
    marginTop: 10,
    borderLeftWidth: 3,
    borderColor: "#3d2963",
    paddingLeft: 5,
  },
  containerText3: {
    marginTop: 10,
  },
  text: {
    fontSize: 15,
  },
  textDestaque: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#3d2963",
  },
});
