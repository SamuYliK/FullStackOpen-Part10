import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';
import AppBarTab from './AppBarTab';
import useSignInCheck from '../hooks/useSignInCheck';

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
  const { user } = useSignInCheck();
  
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scroll}
        horizontal
      >
        <AppBarTab text='Repositories' link='/' />
        <AppBarTab 
          text={ user ? 'Sign out' : 'Sign in' }
          link={ user ? '/signout' : '/signin' } 
        />
      </ScrollView>
    </View>
  );
}

export default AppBar;