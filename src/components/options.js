import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Dropdown from './dropdown';
import ReportRectangle from './ReportRectangle'; // Importe os componentes de relatório aqui

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Função para renderizar o componente de relatório com base na opção selecionada
  const renderReportComponent = () => {
    switch (selectedOption) {
      case 'option1':
        return <ReportRectangle title="Comida e Água" content="Calorias: 500 / Água: 1L" />;
      case 'option2':
        return <ReportRectangle title="Xixi e Cocô" content="Anomalias: 2" />;
      case 'option3':
        return <ReportRectangle title="Sono e Humor" content="Humor: Bom / Sono: 8 horas" />;
      case 'option4':
        return <ReportRectangle title="Atividade Física" content="Exercícios: 3" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Dropdown setSelectedOption={setSelectedOption} /> {/* Passa a função para atualizar o estado */}
      {renderReportComponent()} {/* Renderiza o componente de relatório com base na opção selecionada */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;