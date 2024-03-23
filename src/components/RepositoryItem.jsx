import { View, StyleSheet } from 'react-native';
import RepositoryItemStatistics from './RepositoryItemStatistics';
import RepositoryItemBasicInfo from './RepositoryItemBasicInfo';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.backgroundColors.repositoryItem,
    display: 'flex',
    flexDirection: 'column'
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryItemBasicInfo item={item} />
      <RepositoryItemStatistics item={item} />
    </View>
  );
};

export default RepositoryItem;