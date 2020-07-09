import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const ContactInput = (props) => {

let [ name, setName ] = useState('');
let [ number, setNumber ] = useState('');

  return (
    <View style={styles.insertContact}> 
        <View style={styles.sectionTextInput}>
            <Text style={{ alignSelf: 'center' }}>Insira o nome:</Text>
            <TextInput style={styles.nameTextInput} onChangeText={name => setName(name)} value={name} placeholder="Exemplo: Joao" />
        </View>
        <View style={styles.sectionTextInput}>
            <Text style={{ alignSelf: 'center' }}>Insira o número:</Text>
            <TextInput maxLength={11} style={styles.numberTextInput} onChangeText={number => setNumber(number)} value={number} placeholder="Exemplo: 11945790465" />
        </View>
        <View style={{ marginBottom: 10 }} > 
          <Button color="#FF7343" title="Adicionar contato" onPress={() => props.onAddContact(name, number) }/>
        </View>
        <View>
          <Button color="#e54373" title="Limpar Contatos" onPress={() => props.onDeleteAll() }/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    insertContact: {
      justifyContent: 'space-around'
    },
    numberTextInput: {
      padding: 30,
      borderWidth: 1,
      borderColor: 'transparent',
      borderBottomColor: 'grey',
      marginLeft: 20,
      marginBottom: 10
    },
    nameTextInput: {
      padding: 10,
      borderWidth: 1,
      borderColor: 'transparent',
      borderBottomColor: 'grey',
      marginLeft: 30
    },
    sectionTextInput: {
      flexDirection: 'row',
      padding: 20
    }
  });
export default ContactInput;