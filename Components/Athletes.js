import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native'

class Athletes extends React.Component {

    render() {
        return(
            <Text style={styles.title}> Athletes here </Text>
        )
    }
}


const styles = StyleSheet.create({
    title: {
        marginTop: 30,
        fontWeight: "100"

    },
    image: {
        marginTop : 100,
        marginLeft : 30,
        height : 300,
        width : 300,

    }
})

export default Athletes