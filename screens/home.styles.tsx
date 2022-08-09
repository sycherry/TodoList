import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0145A6',
  },
  titleOuter: {
    marginTop: 60,
    marginBottom: 20,
  },
  listOuter: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  listLeft: {
    maxWidth: '68%',
  },
  textOuter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#0145A6',
    borderRadius: 12,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    color: '#666',
    borderBottomColor: '#666',
  },
  block: {
    height: 280,
  },
});
