import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.backgroundColors.appBar,
    flexDirection: 'row',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'space-around',
    marginRight: 5,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scroll}
        horizontal
      >
        <AppBarTab text='Repositories' link='/' />
        <AppBarTab text='Sign in' link='/signin' />
      </ScrollView>
    </View>
  );
}

export default AppBar;
