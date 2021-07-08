import React, { Component } from 'react';
import{ NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator } from '@react-navigation/stack';

//importando as pastas/componentes
import Login from './src/pages/Login';
import Inicio from './src/pages/Inicio'; 
import InspecaoExterna1 from './src/pages/InspecaoExterna1'; 
import InspecaoExterna2 from './src/pages/InspecaoExterna2'; 
import InspecaoExterna3 from './src/pages/InspecaoExterna3'; 
import InspecaoExterna4 from './src/pages/InspecaoExterna4'; 
import InspecaoExterna5 from './src/pages/InspecaoExterna5'; 
import TelaConfirmacao from './src/pages/TelaConfirmacao'; 
import Conversoes from './src/pages/Conversoes'; 

//Criando a pilha de navegacao
const Stack = createStackNavigator();

//classe app(contem as telas criadas com infos sobre cores etc)
class App extends Component{

  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Login" component={Login}/>

          <Stack.Screen 
          name="Inicio" 
          component={Inicio}
          options={{
            title:'Inicio',
            headerStyle:{
              backgroundColor: '#214E88' },
            headerTintColor: '#FFF',
            headerShown: true,
          }}
          />
          
          <Stack.Screen 
          name="InspecaoExterna1" 
          component={InspecaoExterna1}
          options={{
            title:'Inspeção Externa 1',
            headerStyle:{
              backgroundColor: '#214E88' },
            headerTintColor: '#FFF',
            headerShown: true,
          }}
          />
        
          <Stack.Screen 
          name="InspecaoExterna2" 
          component={InspecaoExterna2}
          options={{
            title:'Inspeção Externa 2',
            headerStyle:{
              backgroundColor: '#214E88' },
            headerTintColor: '#FFF',
            headerShown: true,
          }}
          />
          
          <Stack.Screen 
          name="InspecaoExterna3" 
          component={InspecaoExterna3}
          options={{
            title:'Inspeção Externa 3',
            headerStyle:{
              backgroundColor: '#214E88' },
            headerTintColor: '#FFF',
            headerShown: true,
          }}
          />
        
          <Stack.Screen 
          name="InspecaoExterna4" 
          component={InspecaoExterna4}
          options={{
            title:'Inspeção Externa 4',
            headerStyle:{
              backgroundColor: '#214E88' },
            headerTintColor: '#FFF',
            headerShown: true,
          }}
          />
          
          <Stack.Screen 
          name="InspecaoExterna5" 
          component={InspecaoExterna5}
          options={{
            title:'Inspeção Externa 5',
            headerStyle:{
              backgroundColor: '#214E88' },
            headerTintColor: '#FFF',
            headerShown: true,
          }}
          />
          
          <Stack.Screen 
          name="TelaConfirmacao" 
          component={TelaConfirmacao}
          options={{
            title:'Revisão',
            headerStyle:{
              backgroundColor: '#214E88' },
            headerTintColor: '#FFF',
            headerShown: true,
          }}
          />

          <Stack.Screen 
          name="Conversoes" 
          component={Conversoes}
          options={{
            title:'Conversoes',
            headerStyle:{
              backgroundColor: '#214E88' },
            headerTintColor: '#FFF',
            headerShown: true,
          }}
          />

        </Stack.Navigator>
      </NavigationContainer> 
    );
  }
}

export default App;