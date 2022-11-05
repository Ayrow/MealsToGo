import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const Title = styled(Text)`
  padding: 16px;
`;

const RestaurantCard = styled(Card)`
  background-color: 'white';
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: 'white';
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
