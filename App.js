import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitle: 'Gusto Sipariş',
      headerTitleStyle: {
        fontSize: 30,         // Başlık boyutu
        fontWeight:'bold',   // Başlık kalınlığı
        color: 'black',     // Başlık rengi
      },
      headerStyle: {
        backgroundColor: '#F8F8F8', // Başlık arka plan rengi
      },
    }}>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});