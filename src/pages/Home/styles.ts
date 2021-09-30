import styled from "styled-components/native";
import {getStatusBarHeight} from "react-native-iphone-x-helper"

export const Container = styled.View`
 flex: 1;
 background: #eee;

`;

export const CantainerHeader = styled.View`
  width: 100%;
  height: 57px;
  align-items: center;
  background: #172b3e;
  padding:0 20px;
  flex-direction: row;
  justify-content: space-between;

`;

export const SearchButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const UserButton = styled.TouchableOpacity``;


export const TextConteudo = styled.Text`
  padding: 20px;
  color: #172B3E;
  font-size: 12px;
  font-family: 'Ubuntu-Medium';
`;

export const CardList = styled.View`


`;
