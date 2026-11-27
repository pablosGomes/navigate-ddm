import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#fff7ed',
  },

  emoji: {
    fontSize: 100,
    textAlign: 'center',
    marginBottom: 10,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#9a3412',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#333',
  },

  valor: {
    fontSize: 16,
    marginBottom: 15,
    color: '#57534e',
  },

  botao: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default styles;
