import { Pressable, Text, View } from "react-native";

export default function Principal(props: any) {
    return (
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Principal</Text>
            <Pressable onPress={() => { 
                props.navigation.navigate('Cadastro')
            }}>
                <Text>Ir para Cadastro</Text>
            </Pressable>
        </View>
    )
}