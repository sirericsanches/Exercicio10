import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { HeaderButtons, Item, HeaderButton } from 'react-navigation-header-buttons';
import ButtonHeader from '../components/ButtonHeader';

const ListContactView = () => {
  return (
      <View>
         <Text style={styles.contactListText}>Contatos</Text>
      </View>
  );
}

ListContactView.navigationOptions = dadosNav => {
    return {
        headerTitle: 'Adicionar/Listar contatos',
        headerRight:
            <HeaderButtons HeaderButtonComponent={ButtonHeader}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate("NovoContato") }} 
                />
            </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    contactListText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#00008B',
        marginTop: 30
    }
});

export default ListContactView;