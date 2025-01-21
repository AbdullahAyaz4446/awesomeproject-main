import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calculator from './src/mamhaleema/Calculator'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginForm from './src/screens/Loginform'
import Home from './src/screens/Home'
import { Card, RadioButton } from 'react-native-paper'
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
import Parkingapp from './src/Sirnoman/ Parkingapp';
import Billcalcultor from './src/Sirnoman/Billcalcultor'
import Social from './src/Sirnoman/Socialapp'
import Car from './src/Sirnoman/Car'
import Carsqllite from './src/Sirnoman/Carsqllite'
import Longpress from './src/Sirnoman/Longpress'
import Homescreen from './src/AssignmentNotebiiksqllite.js/Homescreen'
import Notepad from './src/AssignmentNotebiiksqllite.js/Notepad'
import Eidit from './src/AssignmentNotebiiksqllite.js/Eidit'
import Loginformnotes from './src/AssignmentNotebiiksqllite.js/Loginformnotes'
import SignUpnotepad from './src/AssignmentNotebiiksqllite.js/Signupformnotes'
import Dataformwithimag from './src/Sirnoman/Dataformwithimag'
import Showdata from './src/Api/Showdata'





const Stack=createNativeStackNavigator();
const App = () => {

  return (


    // <Dataformwithimag/>
 <NavigationContainer>
  <Stack.Navigator>

  <Stack.Screen 
      name="Login" 
      component={Loginformnotes}
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Signup" 
      component={SignUpnotepad}
      options={{ headerShown: false }} 
    />
   
     <Stack.Screen 
      name="Home" 
      component={Homescreen}
      options={{ headerShown: false }} 
    />
      <Stack.Screen 
      name="Notepad" 
      component={Notepad}
      options={{ headerShown: false }} 
    />
     <Stack.Screen 
      name="Eidit" 
      component={Eidit}
      options={{ headerShown: false }} 
    />
   

  </Stack.Navigator>
</NavigationContainer> 

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

