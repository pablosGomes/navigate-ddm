# PetAmigo — DDM | Navegação (14/10)

App React Native (Expo) com navegação entre **4 telas** usando React Navigation (Native Stack).

## Telas

| Tela | Pasta | Navega para |
| --- | --- | --- |
| Login | `screens/login` | Home |
| Home (lista de pets) | `screens/home` | Detalhes, Perfil |
| Detalhes (recebe o pet por parâmetro) | `screens/detalhes` | Perfil, voltar |
| Perfil | `screens/perfil` | Home, Login (Sair) |

Cada tela tem uma pasta própria com `NomeDaTela.js` e `Estilo.js`, como no arquivo de orientação.

## Como rodar

```bash
npm install
npm run web
```

## Bibliotecas de navegação

```bash
npx expo install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
```
