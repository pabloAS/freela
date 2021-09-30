import styled from 'styled-components/native';
import {Platform} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  background: #172b3e;

  align-items: center;
  justify-content: center;
  padding: 0 20px ${Platform.OS === 'android' ? 120 : 40}px;
`;
export const Title = styled.Text`
  bottom: 35px;
  font-size: 24px;
  color: #fff;
  font-family: 'Ubuntu-Medium';
  margin: 64px 0 24px;
`;

export const InputCep = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: #fff;
  border-radius:5px;
  margin-bottom: 8px;
  bottom:35px;
  flex-direction: row;
  align-items: center;



`;


export const BackToLogin = styled.TouchableOpacity`
  background: #172b3e;

  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

`;
export const BackToLoginText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Ubuntu-Regular';
  margin-left: 16px;

`;
