import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';


import Login from './pages/Login';
import Tela1 from './pages/Tela1';
import Tela2 from './pages/Tela2';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
      
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
          tabBarStyle:{
            backgroundColor: '#ff7200',
          }
        }}
        >
            <Tab.Screen name="Login"
                component={Login} 
                options={{
                  headerStyle:{backgroundColor:'#ff7200'},
                  headerTintColor: '#fff',
                  headerTitleStyle:{fontSize:25,fontWeight:'bold'},
                tabBarIcon:()=>(
                <Icon name="login"
                size={30} 
                color={'#fff'}
                />
                ),
              }}
              
            />
            <Tab.Screen name="Tela1"
                component={Tela1} 
                options={{
                  headerStyle:{backgroundColor:'#ff7200'},
                  headerTintColor: '#fff',
                  headerTitleStyle:{fontSize:25,fontWeight:'bold',alignSelf:'center'},
                tabBarIcon:()=>(
                <Icon name="mail"
                size={30} 
                color={'#fff'}
                />
                ),
              }}
              />
               <Tab.Screen name="Tela2"
                component={Tela2} 
                options={{
                  headerStyle:{backgroundColor:'#ff7200'},
                  headerTintColor: '#fff',
                  headerTitleStyle:{fontSize:25,fontWeight:'bold',alignSelf:'center'},
                tabBarIcon:()=>(
                <Icon name="inbox"
                size={30} 
                color={'#fff'}
                />
                ),
              }}
              
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }




  /*options={{
    tabBarLabel: 'Home',
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home" color={color} size={size} />
    ),
  }}*/