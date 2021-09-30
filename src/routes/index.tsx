import React from "react";
import { createStackNavigator  } from '@react-navigation/stack'

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Profile from '../pages/Profile'

const Auth = createStackNavigator ();
const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator screenOptions={{
      headerShown:false,
      cardStyle:{backgroundColor:'#172B3E'}
    }}>
      <Auth.Screen name="Login" component={Login}/>
      <Auth.Screen name="Cadastro" component={Cadastro}/>
      <Auth.Screen name="Home" component={Home}/>
      <Auth.Screen name="Profile" component={Profile}/>

    </Auth.Navigator>
  )
}

export default AuthRoutes;
