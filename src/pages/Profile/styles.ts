import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 57px;
  padding: 0 20px;
  flex-direction: row;
`;

export const ButtonBack = styled.TouchableOpacity`

`;
export const TextHeader = styled.Text`
  color: #fff;
  font-size: 17px;
  font-family: 'Ubuntu-Medium';
  margin-left: 120px;
`;

export const Avatar = styled.TouchableOpacity`
  margin-left: 156px;
  justify-content: center;
  align-items: center;
  background: #eee;
  width: 93px;
  height: 97px;
  border-radius: 5px;

`;

export const TextAvatar = styled.Text`



`;
export const ChangerAvatar = styled.View`
  top: 43px;
  right: 56px;

`;

export const InfoProfile = styled.View`
  height: 100%;
  top: 30px;
  background: #eee;
  padding: 40px 0 0 20px;
  border-radius: 10px ;
`;

export const TextName = styled.Text`
  color: #172b3e;
  font-size: 20px;
  font-family: 'Ubuntu-Regular';


`;

export const Phone = styled.Text`
  color: #172b3e;
  font-size: 20px;
  font-family: 'Ubuntu-Regular';
  top: 50px;
`;
export const Endereco = styled.Text`
  color: #172b3e;
  font-size: 20px;
  font-family: 'Ubuntu-Regular';
  top: 98px;
`;
export const Email = styled.Text`
  color: #172b3e;
  font-size: 20px;
  font-family: 'Ubuntu-Regular';
  top: 165px;

`;
export const Senha = styled.Text`
  color: #172b3e;
  font-size: 20px;
  font-family: 'Ubuntu-Regular';
  top: 221px;


`;

export const EditProfile = styled.View`
  position: absolute;
  flex: 1;


`;
export const ButtonEdit = styled.TouchableOpacity`
  top: 300px;
  left: 290px;

`;


export const CloseModal = styled.TouchableOpacity`
  left: 290px;
  bottom: 38px;

`;

export const ViewModal = styled.View`

 padding: 0 20px;
 width : 100%;
 border-radius : 5px ;
 background: #172b3e;

`;

export const TextModal = styled.Text`
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-family: 'Ubuntu-Regular';
  left: 95px;
  padding: 10px 0;


`;

export const SubText = styled.View`
  flex-direction: row;
  align-items: center;

`;
