import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin: 10px 0;
  font-size: 25px;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  color: #eee;
  margin: 10px 0;
  font-size: 16px;
  padding: 10px 50px;
  border-radius: 10px;
  background: #607D8B;
`;

export const ButtonContainer = styled.View`
  margin-top: 15px;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 15px 80px;
  border-radius: 10px;
  background: #607D8B;
`;

export const BtnText = styled.Text`
  color: #eee;
  font-size: 16.5px;
`;

export const DataButton = styled.TouchableOpacity`
  margin-top: 10px;
  margin-right: 50px;
  padding: 15px 15px;
  border-radius: 10px;
  background: #009688;
`;

export const DataBtnText = styled.Text`
  color: #eee;
  font-size: 16.5px;
`;

export const DelButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 15px 15px;
  border-radius: 10px;
  background: #E53935;
`;

export const DelBtnText = styled.Text`
  color: #eee;
  font-size: 16.5px;
`;