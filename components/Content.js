import { StyleSheet, Text, View } from 'react-native'

export  default function Content() {
    return (
        <View Style = {StyleSheet.Content}>
            <Text>Footer</Text>
        </View>
    )
}


const styles = StyleSheet.create ({
    Content: {
        flex: 5,
        backgroundColor: "#545656",
        justifyContent: 'center' ,
        alignItems: 'center',
    }
})