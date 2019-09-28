import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity, Button, Image} from 'react-native'

class Moves extends React.Component {

    render() {
        return(
            <View >
                <View style={margintop = 30}>

                <Text style={fontSize = 40, fontWeight = 'bold', margintop = 30}>Moves</Text>
                </View>
            <TouchableOpacity style = {marginTop = 100}>
                
                <Image
                    style={styles.movesimages}
                    source={require('../Images/STATICS.png')}
                />

            </TouchableOpacity>

            <TouchableOpacity >
                
                <Image
                    style={styles.movesimages}
                    source={require('../Images/STRENGTH.png')}
                />


            </TouchableOpacity>

            <TouchableOpacity>
                
                <Image
                    style={styles.movesimages}
                    source={require('../Images/DYNAMICS.png')}
                />


            </TouchableOpacity>
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
    movesimages: {
        marginTop : 10,
        marginLeft : 2,
    
        height : 150,
        width : 355,

    }
})

export default Moves