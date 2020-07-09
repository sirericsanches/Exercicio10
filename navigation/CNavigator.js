import { createStackNavigator } from 'react-navigation-stack';
import ListContactView from '../views/ListContactView';
import NewContactView from '../views/NewContactView';
import { createAppContainer } from 'react-navigation';


const CNavigator = createStackNavigator({
    ListaDeContatos: ListContactView,
    NovoContato: NewContactView
});

export default createAppContainer(CNavigator);
