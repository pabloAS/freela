import styled from 'styled-components/native';
import{Platform} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  background: #172b3e;
  align-items: center;
  justify-content: center;
  padding: 0 20px ${Platform.OS === 'android' ? 85 : 40}px;

`;
export const Title = styled.Text`
  bottom: 45px;
  font-size: 24px;
  color: #fff;
  font-family: 'Ubuntu-Medium';
  margin: 64px 0 24px;
`;
export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;
export const ForgotPasswordText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'Ubuntu-Regular';

`;
export const CreateAccountButton = styled.TouchableOpacity`
  background: #172b3e;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

`;
export const LoginSocialMedia = styled.View`
  background: #172b3e;

  flex-direction:row ;
  padding: 0 20px;
  justify-content: space-between;
`;
export const CreateAccountButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Ubuntu-Regular';
  margin-left: 16px;

`;
export const LoginSocialNetworksButtonFB = styled.TouchableOpacity`

  left: 0;
  bottom: 0;
  right: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const LoginSocialNetworksButtonTextFB = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Ubuntu-Regular';
  margin-left: 16px;
`;

export const LoginSocialNetworksButtonG = styled.TouchableOpacity`
  left: 0;
  bottom: 0;
  right: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const LoginSocialNetworksButtonTextG = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Ubuntu-Regular';
  margin-left: 16px;


`;
