# 📱 Valor+

**Valor+** é um aplicativo mobile desenvolvido em **React Native** com **Expo**, que ajuda o usuário a calcular rapidamente o novo valor de um produto após um aumento percentual.

---

## 🧐 Objetivo
Permitir que o usuário:
- Insira o **nome do produto**;
- Informe o **valor atual** do produto;
- Digite o **percentual de aumento** desejado;
- Visualize o **novo valor** do produto, incluindo o valor do aumento e todos os detalhes do cálculo.

---

## 📜 Funcionalidades
- Formulário simples com validação de campos;
- Cálculo automático do novo valor;
- Visual moderno e responsivo;
- Tela de resultado clara e organizada.

---

## 🚀 Como Executar o Projeto

### 📌 Pré-requisitos
Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### 🔻 Instalação
```bash
git clone https://github.com/BeatrizFerreira01/APP-Valor_Mais.git
cd APP-Valor_Mais
npm install
```

### ▶️ Executar
```bash
expo start
```

Abra o aplicativo **Expo Go** no seu celular e escaneie o QR Code para visualizar.

---

## 📂 Estrutura do Projeto
```
valorplus-atualizador/
│-- App.js                # Arquivo principal que chama a HomeScreen
│-- app.json              # Configurações do projeto
│-- index.js              # Ponto de entrada do aplicativo
│-- package.json          # Dependências
│
├── assets/               # Imagens e ícones
│   ├── calculadora_logo.png
│   └── ...
│
├── components/           # Componentes reutilizáveis
│   └── Resultado.js
│
└── screens/              # Telas principais
    └── HomeScreen.js
```

---

## 🛠️ Tecnologias Utilizadas
- **React Native**
- **Expo**
- **JavaScript**

---

## 🎨 Layout
| Formulário de Entrada         | Resultado Final                |
|-------------------------------|---------------------------------|
| Nome do Produto               | Nome: Produto X                |
| Valor: R$100                  | Valor Original: R$100,00       |
| Aumento: 10%                  | Aumento: 10%                   |
| ▶️ Novo Valor: R$110,00     | Valor do Aumento: R$10,00      |

---

## 📚 Licença
Este projeto está sob a Licença MIT. Sinta-se livre para usar e modificar conforme desejar.

---

## 👩‍💻 Autora
Desenvolvido por **Beatriz Ferreira Cruz** 💡

---
