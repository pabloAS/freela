import React,{} from "react";
import { Image } from "react-native";
import {  useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Feather';

import Card from "../../components/Card";
import logoP from '../../assets/lgP/lgPequeno.png'

import { Container, CantainerHeader, SearchButton, TextConteudo, UserButton, CardList } from './styles'



const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <CantainerHeader>
        <Image source={logoP} />
        <SearchButton >
          <Icon name="search" size={25} style={{ color: '#fff', marginLeft: 170 }} />
        </SearchButton>
        <UserButton onPress={()=>navigation.navigate('Profile')}>
          <Icon name="user" size={25} style={{ color: '#fff' }} />
        </UserButton>
      </CantainerHeader>
      <TextConteudo>Profissionais Anunciados</TextConteudo>
      <CardList>
        <Card/>
      </CardList>



    </Container>
  );
};

export default Home;
