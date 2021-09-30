import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  height: 50px;
  background: #ffff;
  border-radius: 5px;
  margin-top: 8px;
  bottom:35px;

  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-family: 'Ubuntu-Medium';
  font-size: 18px;
  color:#172b3e;
`;
