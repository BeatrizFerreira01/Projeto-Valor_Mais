import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente que recebe as informações do produto e calcula o novo valor
export default function Resultado({ nomeProduto, valorProduto, porcentagemAumento }) {
  const valor = parseFloat(valorProduto);           // Converte o valor original para número
  const aumento = parseFloat(porcentagemAumento);   // Converte o percentual de aumento para número
  const valorAumento = (valor * aumento) / 100;     // Calcula o valor do aumento
  const novoValor = valor + valorAumento;           // Calcula o novo valor do produto

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Nome: {nomeProduto}</Text>
      <Text style={styles.resultText}>Valor Original: R$ {valor.toFixed(2)}</Text>
      <Text style={styles.resultText}>Aumento: {aumento}%</Text>
      <Text style={styles.resultText}>Valor do Aumento: R$ {valorAumento.toFixed(2)}</Text>
      <Text style={styles.resultText}>Novo Valor: R$ {novoValor.toFixed(2)}</Text>
    </View>
  );
}

// Estilos do componente Resultado
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 5,
  },
});
