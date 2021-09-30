import styled,{css} from "styled-components/native";
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps{
  isFocused:Boolean
  isErroed:Boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  background: #fff;
  border-radius:5px;
  margin-bottom: 8px;
  bottom:35px;
  border-width:2px ;
  border-color: #172e3b;


  flex-direction: row;
  align-items: center;

  ${props => props.isErroed && css`
    border-color: #c53030;

  `}

  ${props => props.isFocused && css`
    border-color: #2069F8;

  `}
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #172B3E;
  font-size: 16px;
  font-family: 'Ubuntu-Regular';

`;



export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
