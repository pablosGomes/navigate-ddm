import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 50,
    backgroundColor: '#fff7ed',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#9a3412',
  },

  subtitulo: {
    fontSize: 15,
    marginBottom: 20,
    color: '#78716c',
  },

  lista: {
    paddingBottom: 20,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fdba74',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
  },

  emoji: {
    fontSize: 40,
    marginRight: 15,
  },

  info: {
    flex: 1,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  detalhe: {
    fontSize: 14,
    color: '#78716c',
  },

  botao: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default styles;
