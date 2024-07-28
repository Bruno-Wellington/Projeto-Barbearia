import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native';
import { ProvedorUsuario } from './data/contexts/ContextoUsuario';
import { ProvedorAgendamento } from './data/contexts/ContextoAgendamento';

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <ProvedorUsuario>
            <ProvedorAgendamento>
                <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Mobile</Text>
                </View>
            </ProvedorAgendamento>
        </ProvedorUsuario>
    )
}