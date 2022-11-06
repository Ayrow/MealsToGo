import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
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
