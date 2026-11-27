import { View, Text, TextInput, Button, Image } from 'react-native';

import styles from './Estilo';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Meu perfil</Text>
      <Text style={styles.subtitulo}>Seus dados para a adoção</Text>

      <Text style={styles.label}>Nome</Text>

      <TextInput placeholder="Digite seu nome" style={styles.input} />

      <Text style={styles.label}>Telefone</Text>

      <TextInput
        placeholder="(11) 99999-9999"
        style={styles.input}
        keyboardType="phone-pad"
      />

      <View style={styles.botao}>
        <Button
          title="Voltar para a Home"
          onPress={() => navigation.navigate('Home')}
          color="#ea580c"
        />
      </View>

      <View style={styles.botao}>
        <Button
          title="Sair"
          onPress={() => navigation.popToTop()}
          color="#78716c"
        />
      </View>
    </View>
  );
}
