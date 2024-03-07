import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const Title = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.title}>Login</Text>
  </View>
);

const ExpedienteInput = ({ expediente, setExpediente }) => (
  <TextInput
    style={styles.input}
    placeholder="Expediente"
    keyboardType='numeric'
    multiline={false}
    maxLength={6}
    value={expediente}
    onChangeText={(text) => {
      setExpediente(text);
    }}
  />
);

const PasswordInput = ({ password, setPassword }) => (
  <TextInput 
    style={styles.input}
    placeholder= 'Password'
    multiline={false}
    secureTextEntry={true}
    value={password}
    onChangeText={(text)=> {
      setPassword(text);
    }}
  />
);

const App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    if (expediente.length === 6 && password.length >= 8) {
      Alert.alert('Login exitoso!');
    } else {
      if (password.length < 8) {
        Alert.alert('Password debe ser mayor a 8 caracteres');
      }
      Alert.alert('Datos incorrectos');
    }
  };
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.inputsContainer}>
        <ExpedienteInput expediente={expediente} setExpediente={setExpediente} />
        <PasswordInput password={password} setPassword={setPassword} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleSubmit} />  
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputsContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default App;

