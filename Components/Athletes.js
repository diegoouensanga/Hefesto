import React from 'react'
import { TextInput, Image, ScrollView, Text, StyleSheet, View, TouchableOpacity, Button} from 'react-native'

class Athletes extends React.Component {

    render() {
        return(
            
            <View style={styles.main_container}>

                <TextInput
                    style={styles.textinput}
                    placeholder="Nom de l'athlète   Exemple : Daniels Laizans"
                    //onSubmitEditing={() => this._searchFilms()}
                    // Pour rechercher en appuyant sur le bouton 'OK' du clavier
                   // onChangeText={(text) => this._searchTextInputChanged(text)}

                />
                <Button style={styles.searchButton} title="Rechercher" />
            
            <ScrollView>


                <TouchableOpacity>
                 <Image
                    style={styles.image_athlete}
                    source={require('./daniels_laizans.png')}
                  />


                </TouchableOpacity>
            </ScrollView>




            </View>
                
        )
    }
}


const styles = StyleSheet.create({
    main_container: {

        //flex: 1
    },
    title: {
        marginTop: 30,
        fontWeight: "100"

    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 30,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
    },
    image: {
        marginTop : 100,
        marginLeft : 30,
        height : 300,
        width : 300,

    },
    searchButton: {
        height: 50,
        
    },
    image_athlete: {
        marginLeft: 5,
        marginTop: 20,
        height: 120,
        width: 120
        
    }
})

export default Athletes