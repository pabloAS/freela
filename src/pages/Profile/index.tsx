import React, { useCallback, useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import Modal from 'react-native-modal'

import { useNavigation } from "@react-navigation/native"


import Icon from "react-native-vector-icons/Feather"

import editImg from "../../assets/editar.png"
import Button from "../../components/Button";

import {
  Container,
  Header,
  ButtonBack,
  TextHeader,
  Avatar,
  TextAvatar,
  ChangerAvatar,
  InfoProfile,
  TextName,
  Phone,
  Email,
  Endereco,
  Senha,
  ButtonEdit,
  EditProfile,
  CloseModal,
  ViewModal,
  TextModal,
  SubText

} from './styles'
import Input from "../../components/Input";

interface AlterProfileFormData {
  name: string;
  phone: string;
  endereco: [];
  email: string;
  password: string;
}

const Profile: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const navigation = useNavigation();
  const handelChangeProfile = useCallback(() => {

  }, []);
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [])
  return (
    <Container>
      <Header>
        <ButtonBack onPress={handleGoBack}>
          <Icon name="arrow-left" size={20} style={{ color: '#fff' }} />
        </ButtonBack>
        <TextHeader>
          Meu Perfil
        </TextHeader>
      </Header>
      <Avatar>
        <TextAvatar>
          Alterar Foto
        </TextAvatar>
        <ChangerAvatar>
          <Icon name="camera" size={20} color={'#eee'} />
        </ChangerAvatar>
      </Avatar>
      <InfoProfile>
        <TextName>
          <Icon name="user" size={20} />
          Pablo Almeida
        </TextName>
        <Phone>
          <Icon name="phone" size={20} />
          (51)991104993
        </Phone>
        <Endereco>
          <Icon name="map-pin" size={20} />
          Rua Manaus, Canoas
        </Endereco>
        <Email>
          <Icon name="mail" size={20} />
          pablo@gmail.com
        </Email>
        <Senha>
          <Icon name="lock" size={20} />
          ******
        </Senha>
        <ButtonEdit onPress={() => { setVisible(true) }}>
          <Image source={editImg} />
        </ButtonEdit>
      </InfoProfile>
      <EditProfile>
        <Modal isVisible={visible} onBackdropPress={() => { setVisible(false) }}>

          <ViewModal >
            <TextModal>Editar Perfil</TextModal>
            <CloseModal onPress={() => { setVisible(false) }}>
              <Icon name="x" size={28} color={'#fff'} />
            </CloseModal>
            <SubText>
              <Icon name="user" size={20} color="#fff" />
              <TextInput placeholder="Nome" style={{ color: '#fff' }} />
            </SubText>
            <SubText>
              <Icon name="phone" size={20} color="#fff" />
              <TextInput placeholder="Telefone" style={{ color: '#fff' }} />
            </SubText>
            <SubText>
              <Icon name="map-pin" size={20} color="#fff" />
              <TextInput placeholder="Endereço" style={{ color: '#fff' }} />
            </SubText>
            <SubText>
              <Icon name="mail" size={20} color="#fff" />
              <TextInput placeholder="E-mail" style={{ color: '#fff' }} />
            </SubText>
            <SubText>
              <Icon name="lock" size={20} color="#fff" />
              <TextInput placeholder="Senha" style={{ color: '#fff' }} />
            </SubText>
          </ViewModal>
        </Modal>
      </EditProfile>

    </Container>
  )
}

export default Profile
