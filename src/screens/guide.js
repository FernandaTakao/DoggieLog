import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import StylesGuide from "../styles/stylesGuide";
import StylesMenu from "../styles/stylesMenu";
import MenuPrincipalIcones, {
  MenuPrincipalRotulos,
} from "../components/menuPrincipal";

const Guide = () => {
  return (
    <View style={StylesGuide.container}>
      <View style={StylesGuide.containerCima}>
        <Text
          style={{ color: "#2A3F00", fontFamily: "RobotoMedium", fontSize: 25 }}
        >
          Manual
        </Text>
      </View>
      <View style={StylesGuide.containerMeio}>
        <Image
          source={require("../../assets/image/ornamento.png")}
          style={StylesGuide.enfeite}
        />
        <ScrollView
          style={StylesGuide.scrollview}
          showsVerticalScrollIndicator={false}
        >
          <Text style={StylesGuide.titulo}>Quem somos?{"\n"}</Text>
          <Text style={StylesGuide.texto}>
            Um aplicativo destinado ao monitoramento de rotina de cães. Nosso
            objetivo é oferecer a você um espaço onde registrar os detalhes do
            dia a dia do seu amigo, de maneira a obter um conjunto de
            informações capazes de mensurar o possível nível de bem-estar dele.
            Se seu cão tem dormido menos que o normal, você poderá verificar
            isso em “Principal”, na seção dos relatórios.{"\n"}
            {"\n"}Quanto mais você registrar a quantidade de alimento e água
            ingeridos pelo seu pet, o total de tempo praticando atividades
            físicas, as horas dormidas, o humor predominante e eventuais
            anomalias no xixi e no cocô, mais precisos serão os relatórios
            gerados. Relatórios estes com base nos quais você poderá decidir se
            é hora de visitar o veterinário, por exemplo. E que tal mostrar a
            ele seu DoggieLog com várias informações valiosas coletadas ao longo
            dos dias?{"\n"}
            {"\n"}O bem-estar e a saúde dos cães é o motivo pelo qual estamos
            aqui, oferecendo uma ferramenta mapeadora e inteligente. Junte-se a
            nós e otimize a manutenção da integridade do seu cãozinho.{"\n"}
          </Text>
          <Text style={StylesGuide.titulo}>Como usar o DoggieLog?{"\n"}</Text>
          <Text style={StylesGuide.texto}>
            Não se preocupe, posso te garantir que é fácil, você logo se
            acostuma! Está vendo este menu no pé da tela? O ícone do meio, esse
            em vermelho e verde, vai te levar para o monitoramento diário de
            hoje; lá, você pode relatar o dia do seu pet.{"\n"}
            {"\n"}À esquerda dele, vemos os registros, onde você tem à
            disposição um bloco de notas para adicionar observações, listas de
            comprar para uma ida ao pet shop, datas de banho e tosa e o que mais
            for de seu desejo.{"\n"}
            {"\n"}Mais à esquerda, o ícone em forma de casinha representa a tela
            principal. Nela, você poderá editar o perfil do seu cachorro e
            visualizar relatórios semanais.{"\n"}
            {"\n"}Olhemos agora para a direita do ícone de monitoramento diário,
            para a área do calendário. Tão importante quanto os relatórios
            quinzenais, o calendário guarda todo o histórico de monitoramento do
            seu cão. Caso queira buscar informações de um dia em específico,
            basta clicá-lo e acessar tudo que foi registrado.{"\n"}
            {"\n"}Por último, mas não menos importante, temos esta seção. Sempre
            que você tiver dúvidas, não hesite em voltar aqui!
          </Text>
          <Text style={[StylesGuide.titulo, { color: "#901000" }]}>
            Aviso{"\n"}
          </Text>
          <Text style={[StylesGuide.texto, { color: "#901000" }]}>
            Este aplicativo não tem a pretensão de fazer diagnósticos, tampouco
            de apontar falhas na saúde do animal de maneira categórica. O
            DoggieLog visa a coletar dados, com base nos quais gera relatórios e
            estimativas, sendo assim uma ferramenta de auxílio. Caso seu cão
            apresente qualquer comportamento anômalo, jamais deixe de levá-lo a
            um profissional capacitado para atendê-lo.{"\n"}
            {"\n"}
          </Text>
        </ScrollView>
      </View>
      <MenuPrincipalIcones />
      <MenuPrincipalRotulos />
    </View>
  );
};

export default Guide;
