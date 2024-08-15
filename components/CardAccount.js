import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'

export default function CardAccount () {
    return(
        <View style={styles.card}>
            <Image
                style={styles.logo}
                source="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" />
            <View style={styles.content}>
                <Text style={styles.service}>Gmail</Text>
                <Text style={styles.username}>karolineallana17@gmail.com</Text>
            </View>
        </View>
    )
}