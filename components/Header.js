import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image'

export default function Header() {
    return (
        <View Style = {Styles.header}>
            <View style={styles.user}>
            <image  
                style={styles.avatar}
                source="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"
                />
                <text>Allana Santos</text>
                </View>
                <cgMenu style={styles.menu} />
        </View>
    )
}

const styles = StyleSheet.create ({
    Header: {
        flex: 1,
        //backgroundColor: "#6A5ACD",
        justifyContent: 'center' ,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    
    user:{
        flexDirection:'row',
        alignItems: 'center',
        gap: 10,
    },

    avatar: {
        width:80,
        height:50,
        borderRadius: 25,
    },

    name: {
        fontWeight: '600',
        fontSize: 18
    },
    menu: {
        width: 25,
        height: 25,
        padding: 10
    }
})