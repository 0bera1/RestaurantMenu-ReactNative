import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './Screens/FoodOverviewScreen';
import FoodDetailScreen from './Screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavsScreen from './Screens/FavsScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FavContextProvider from './store/favContext';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        drawerInactiveTintColor: '#3B3B3B', // Pasif butonların ikon rengi

      })}>
      <Drawer.Screen name="Kategoriler" component={CategoriesScreen}
        options={{
          title: 'Tüm Kategoriler',
          drawerActiveTintColor: '#ff6347', // Aktif olan butonun ikon rengi

          drawerIcon: ({ focused }) =>
            <MaterialIcons name="list" size={24}
              color={focused ? '#ff6347' : '#3B3B3B'} // Aktifse kırmızı, değilse gri 
            />
        }}
      />
      <Drawer.Screen name="Favoriler" component={FavsScreen}
        options={{
          drawerActiveTintColor: '#ff6347', // Aktif olan butonun ikon rengi
          drawerIcon: ({ focused }) =>
            <MaterialIcons name="favorite" size={24}
              color={focused ? '#ff6347' : '#3B3B3B'} // Aktifse kırmızı, değilse gri 
            />
        }} />
    </Drawer.Navigator>)
}

export default function App() {
  return (

    <NavigationContainer>
      <FavContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'black',
            contentStyle: { backgroundColor: '#f0f0f0' }
          }}
        >
          <Stack.Screen name='Drawer' component={DrawerNavigator} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Kategoriler" component={CategoriesScreen}
            options={{ title: 'Tüm Kategoriler' }} />
          <Stack.Screen name="Yemeğe Genel Bakış" component={FoodOverviewScreen}
          />
          <Stack.Screen name='Yemek Detay' component={FoodDetailScreen} />
        </Stack.Navigator>
      </FavContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
