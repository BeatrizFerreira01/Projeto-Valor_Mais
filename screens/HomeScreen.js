import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Resultado from '../components/Resultado';

// Tela principal onde o usuário digita as informações do produto
export default function HomeScreen() {
  // Cria variáveis para guardar os dados digitados
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorProduto, setValorProduto] = useState('');
  const [porcentagemAumento, setPorcentagemAumento] = useState('');
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // Função que valida os campos e ativa o resultado
  const calcularAumento = () => {
    if (!nomeProduto || !valorProduto || !porcentagemAumento) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    setMostrarResultado(true);
  };

  return (
    <View style={styles.container}>
      
      {/* Logo do aplicativo */}
      <View style={styles.imageBackground}>
        <Image
          source={{
            uri: 'https://img.freepik.com/vetores-premium/logotipo-da-calculadora_10250-2607.jpg',
          }}
          style={styles.imagem}
        />
      </View>

      {/* Título da aplicação */}
      <Text style={styles.titulo}>Valor+</Text>

      {/* Campo para o usuário digitar o nome do produto */}
      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        placeholderTextColor="#888"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />

      {/* Campo para digitar o valor original */}
      <TextInput
        style={styles.input}
        placeholder="Valor do Produto"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={valorProduto}
        onChangeText={setValorProduto}
      />

      {/* Campo para digitar o percentual de aumento */}
      <TextInput
        style={styles.input}
        placeholder="Porcentagem de Aumento"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={porcentagemAumento}
        onChangeText={setPorcentagemAumento}
      />

      {/* Botão que chama a função de calcular */}
      <TouchableOpacity style={styles.button} onPress={calcularAumento}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {/* Exibe o resultado do cálculo */}
      {mostrarResultado && (
        <Resultado
          nomeProduto={nomeProduto}
          valorProduto={valorProduto}
          porcentagemAumento={porcentagemAumento}
        />
      )}
    </View>
  );
}

// Estilos para a tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF', // Fundo da Tela
  },
  imageBackground: {
    backgroundColor: '#FFFFFF', // Fundo branco para a imagem
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  imagem: {
    width: 250,
    height: 130,
    borderRadius: 8, // Deixa a imagem com cantos arredondados
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333', // Título da aplicação
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc', // Borda dos inputs
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f9f9f9', // Fundo dos inputs
    color: '#333333', // Texto interno dos inputs
  },
  button: {
    backgroundColor: '#FF9800', // Botão
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
