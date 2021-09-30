import React from "react";
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Perfil from "../../assets/images/perfil1.png"

import { Container, ContainerIfo, ContainerStart, TitleText, SubTitleText, EnderecoText } from './styles'

const Card: React.FC = () => {
  return (
    <Container>
      <Image source={Perfil} />
      <ContainerIfo>
        <TitleText>
          Eletricista Predial
        </TitleText>
        <SubTitleText>
          José Luiz
        </SubTitleText>
        <EnderecoText>
          Rua Manaus
        </EnderecoText>
        <ContainerStart>
          <Icon name="star" style={{color:'#172B3E'}} />
          <Icon name="star" style={{color:'#172B3E'}}/>
          <Icon name="star" style={{color:'#172B3E'}}/>
          <Icon name="star" style={{color:'#172B3E'}}/>
          <Icon name="star" style={{color:'#172B3E'}}/>
        </ContainerStart>
      </ContainerIfo>
    </Container>
  )
}

export default Card;
