import { View, Text, Button } from 'react-native';

import styles from './Estilo';

export default function Detalhes({ navigation, route }) {
  // Dados enviados pela tela Home via navigation.navigate('Detalhes', { pet })
  const { pet } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{pet.emoji}</Text>
      <Text style={styles.titulo}>{pet.nome}</Text>

      <Text style={styles.label}>Espécie</Text>
      <Text style={styles.valor}>{pet.especie}</Text>

      <Text style={styles.label}>Raça</Text>
      <Text style={styles.valor}>{pet.raca}</Text>

      <Text style={styles.label}>Idade</Text>
      <Text style={styles.valor}>{pet.idade}</Text>

      <Text style={styles.label}>Sobre</Text>
      <Text style={styles.valor}>{pet.descricao}</Text>

      <View style={styles.botao}>
        <Button
          title="Quero adotar"
          onPress={() => navigation.navigate('Perfil')}
          color="#ea580c"
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          color="#78716c"
        />
      </View>
    </View>
  );
}
