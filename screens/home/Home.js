import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from './Estilo';
import pets from '../../data/pets';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pets para adoção</Text>
      <Text style={styles.subtitulo}>Toque em um pet para ver os detalhes</Text>

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detalhes', { pet: item })}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.detalhe}>
                {item.especie} · {item.raca}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.botao}>
        <Button
          title="Meu perfil"
          onPress={() => navigation.navigate('Perfil')}
          color="#ea580c"
        />
      </View>
    </View>
  );
}
