// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { BackHandler } from 'react-native';
// import { Button } from 'react-native-elements';
// import { HomeScreen, GainsScreen, BillsScreen, StatisticsScreen, AddGain, AddBill } from './pages/index';
// import { colors, fonts } from './styles';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerTitleAlign: 'center',
//           headerStyle: {
//             backgroundColor: colors.lighter
//           },
//           headerTitleStyle: {
//             fontWeight: 'bold',
//             color: colors.primary,
//             fontSize: fonts.bigger
//           },
//           headerRight: () => (
//             <Button
//               onPress={() => { BackHandler.exitApp(); }}
//               icon={<Icon name="exit-run" size={25} color={colors.dark} />}
//               buttonStyle={{ backgroundColor: colors.lighter }}
//             />
//           )
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Carteira do Julio', }}
//         />
//         <Stack.Screen
//           name="Gains"
//           component={GainsScreen}
//           options={{ title: 'Ganhos do Julião' }}
//         />
//         <Stack.Screen
//           name="AddBill"
//           component={AddBill}
//           options={{ title: 'Registrar Gasto' }}
//         />
//         <Stack.Screen
//           name="AddGain"
//           component={AddGain}
//           options={{ title: 'Registrar Viagem' }}
//         />
//         <Stack.Screen
//           name="Bills"
//           component={BillsScreen}
//           options={{ title: 'Gastos do Julião' }}
//         />
//         <Stack.Screen
//           name="Statistics"
//           component={StatisticsScreen}
//           options={{ title: 'Relatórios do Julião' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import Providers from './navigation/index';

const App = () => {
  return <Providers />;
}

export default App;