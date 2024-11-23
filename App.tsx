import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calculator from './src/mamhaleema/Calculator'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginForm from './src/screens/Loginform'
import Home from './src/screens/Home'
import { RadioButton } from 'react-native-paper'
import Radiobutton from './src/Sirnoman/Radiobutton'
import SignUpform from './src/screens/SignUpform'
import Login from './src/mamhaleema/Employee'
import Dropdown from './src/Sirnoman/EmployeeData'
import Quiz from './src/Sirnoman/Quiz'
import Homeform from './src/Sirnoman/Homeform'
import Addroute from './src/Sirnoman/Addroute'
import Serach from './src/Sirnoman/Serach'
import Ticket from './src/Sirnoman/Ticket'
import Stations from './src/Sirnoman/Stations'
import Anvoice from './src/Sirnoman/Anvoice'
import Employee from './src/Sirnoman/EmployeeData'
import Mobileadd from './src/mamhaleema/Mobileadd'
import Showmobilestock from './src/mamhaleema/Showmobilestock'
import Sqllitefile from './src/Sirnoman/Sqllitefile'
import Resturentmenu from './src/Sirnoman/Resturentmenu'





const Stack=createNativeStackNavigator();
const App = () => {

  return (
  <Sqllitefile/>
  
//  <NavigationContainer>
//   <Stack.Navigator >
//     <Stack.Screen name='Home' component={Homeform}
//      options={{ 
//       headerTitle: 'Home', 
//       headerStyle: { backgroundColor: '#3498db' },
//       headerTintColor: '#fff',
//       headerTitleStyle: { fontWeight: 'bold' }, }
//     }
//     />
//     <Stack.Screen name='Addroute' component={Addroute}
//      options={{ 
//       headerTitle: 'Add Route', 
//       headerStyle: { backgroundColor: '#3498db' },
//       headerTintColor: '#fff',
//       headerTitleStyle: { fontWeight: 'bold' }, }
//     }/>
//     <Stack.Screen name='Serach' component={Serach}
//      options={{ 
//       headerTitle: 'Serach Buses', 
//       headerStyle: { backgroundColor: '#3498db' },
//       headerTintColor: '#fff',
//       headerTitleStyle: { fontWeight: 'bold' }, }
//     }/>
//     <Stack.Screen 
//   name="Ticket" 
//   component={Ticket} 
//   options={{ 
//     headerTitle: 'Book Ticket', 
//     headerStyle: { backgroundColor: '#3498db' },
//     headerTintColor: '#fff',
//     headerTitleStyle: { fontWeight: 'bold' }, 
//   }} 
// />
// <Stack.Screen 
//   name="Stations" 
//   component={Stations} 
//   options={{ 
//     headerTitle: 'Select Terminal', 
//     headerStyle: { backgroundColor: '#3498db' },
//     headerTintColor: '#fff',
//     headerTitleStyle: { fontWeight: 'bold' }, 
//   }} 
// />
// <Stack.Screen 
//   name="Anvoice" 
//   component={Anvoice} 
//   options={{ headerTitle: 'Anvoice',
//     headerStyle: { backgroundColor: '#3498db' },
//     headerTintColor: '#fff',
//     headerTitleStyle: { fontWeight: 'bold' }, 
//    }} 
// />

//   </Stack.Navigator>
//  </NavigationContainer>



//  <NavigationContainer>
//   <Stack.Navigator >

  
  
//     <Stack.Screen name='Mobileadd' component={Mobileadd}
//      options={{ 
//       headerTitle: 'MobileShop', 
//       headerStyle: { backgroundColor: '#3498db' },
//       headerTintColor: '#fff',
//       headerTitleStyle: { fontWeight: 'bold' }, }
//     }/>
//     <Stack.Screen 
//   name='Showmobilestock'
//   component={Showmobilestock} 
//   options={{ 
//     headerTitle: 'Mobile Stock', 
//     headerStyle: { backgroundColor: '#3498db' },
//     headerTintColor: '#fff',
//     headerTitleStyle: { fontWeight: 'bold' }, 
//   }} 
// />


//   </Stack.Navigator>
//  </NavigationContainer>





  );
}
export default App;

