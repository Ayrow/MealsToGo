import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  // const isAndroid = Platform.OS === 'android';
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style='auto' />
    </>
  );
}
