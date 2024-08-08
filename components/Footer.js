import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View Style = {StyleSheet.Footer}>
            <Text>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    Footer: {
        flex: 2,
        backgroundColor: "#4169E1",
        justifyContent: 'center' ,
        alignItems: 'center',
    }

})