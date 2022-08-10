import { StyleSheet } from 'react-native';
import { palette } from "../styles/color"

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
    color: palette.blue,
  },
  titleOuter: {
    marginTop: 60,
    marginBottom: 20,
  },
  listOuter: {
    backgroundColor: palette.white,
    paddingLeft: 18,
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
    backgroundColor: palette.blue,
    borderRadius: 12,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    color: palette.gray,
    borderBottomColor: palette.gray,
  },
  block: {
    height: 280,
  },
});
