import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View Style = {StyleSheet.Header}>
            <Text>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    Header: {
        flex: 1,
        backgroundColor: "#6A5ACD",
        justifyContent: 'center' ,
        alignItems: 'center',
    }

})