import React from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity, Button} from 'react-native'

class Training extends React.Component {

    render() {
        return(


            <View>


        <Text style={styles.title}> Training section coming soon </Text>
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

export default Training