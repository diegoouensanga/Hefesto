import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity, Button, Image} from 'react-native'

class Competitions extends React.Component {

    render() {
        return(
            <View>
                <Text style={styles.title}> Competitions section coming soon </Text>
                <Image
                    style={styles.image}
                    source={require('../Images/under_construction_sign.jpg')}
                />


            </View>
        )
    }
}


const styles = StyleSheet.create({
    title: {
        marginLeft: 40,
        marginTop: 30,
        fontWeight: "700",
        fontSize: 40

    },
    image: {
        marginTop : 100,
        marginLeft : 30,
        height : 300,
        width : 300,

    }
})

export default Competitions