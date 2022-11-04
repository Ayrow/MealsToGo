import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'some restaurant',
    icon,
    photos = [
      'https://cdn.sortiraparis.com/images/1004/91874/582754-photos-le-cafe-de-l-homme.jpg',
    ],
    address = '100 some random street',
    isOpenNowe = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: 'white' },
  cover: { padding: 20, backgroundColor: 'white' },
});

export default RestaurantInfo;
