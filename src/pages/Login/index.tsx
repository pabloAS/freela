import React, { useCallback, useRef } from "react";
import { Alert, Image, KeyboardAvoidingView, ScrollView, Platform, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather"
import { useNavigation } from "@react-navigation/native"
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup';

import Button from "../../components/Button";
import Input from "../../components/Input";
import logoImg from '../../assets/lg/logo.png';
import logoFb from '../../assets/lgSocialMedia/lgFb/fb.png';
import logoG from '../../assets/lgSocialMedia/lgG/g.png';
import getValidationErrors from "../../util/getValidationErrors";

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  LoginSocialMedia,
  LoginSocialNetworksButtonFB,
  LoginSocialNetworksButtonTextFB,
  LoginSocialNetworksButtonG,
  LoginSocialNetworksButtonTextG
} from "./styles";

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null)
  const navigation = useNavigation();
  const handleLogin = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // await signIn({
      //   email: data.email,
      //   password: data.password,
      // });

      // history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais.',
      );
    }
  }, []);
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Login</Title>
            </View>
            <Form
              ref={formRef}
              onSubmit={handleLogin}
              >
              <Input
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='email-address'
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={()=>{
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="pasword"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => { formRef.current?.submitForm()}}
              />
              <Button onPress={() => navigation.navigate('Home')} >Entrar</Button>
            </Form>
            <ForgotPassword onPress={() => { }}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={() => navigation.navigate('Cadastro')}>
        <Icon name="log-in" size={20} style={{ color: '#fff' }} />
        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
      <LoginSocialMedia>
        <LoginSocialNetworksButtonFB onPress={() => { }}>
          <Image source={logoFb} />
          <LoginSocialNetworksButtonTextFB>Facebook</LoginSocialNetworksButtonTextFB>
        </LoginSocialNetworksButtonFB>
        <LoginSocialNetworksButtonG onPress={() => { }} >
          <Image source={logoG} />
          <LoginSocialNetworksButtonTextG>Google</LoginSocialNetworksButtonTextG>
        </LoginSocialNetworksButtonG>
      </LoginSocialMedia>
    </>
  );
};

export default Login;
