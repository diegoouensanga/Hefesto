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


                <TouchableOpacity style={styles.touchable_athlete}>
                 <Image
                    style={styles.image_athlete}
                    source={require('D:\Hefesto\Images\athletes\daniels_laizans.png')}
                  />
                  <View style = {flexDirection = 'row'}>
                  <Text>Daniels Laizans</Text>
                  <Text>Latvia</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable_athlete}>
                 <Image
                    style={styles.image_athlete}
                    source={require('D:\Hefesto\Images\athletes\andrea_larosa.png')}
                  />
                  <View style = {flexDirection = 'row'}>
                  <Text>Andrea Larosa</Text>
                  <Text>Italia</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable_athlete}>
                 <Image
                    style={styles.image_athlete}
                    source={require('D:\Hefesto\Images\athletes\ikhwan_sw.png')}
                  />
                  <View style = {flexDirection = 'row'}>
                  <Text>Engku Mohd Ikhwan</Text>
                  <Text>Malaysia</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable_athlete}>
                 <Image
                    style={styles.image_athlete}
                    source={require('D:\Hefesto\Images\athletes\san_gohan.png')}
                  />
                  <View style = {flexDirection = 'row'}>
                  <Text>San Gohan</Text>
                  <Text>France</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable_athlete}>
                 <Image
                    style={styles.image_athlete}
                    source={require('D:\Hefesto\Images\athletes\viktor_kamenov.png')}
                  />
                  <View style = {flexDirection = 'row'}>
                  <Text>Viktor Kamenov</Text>
                  <Text>Bulgaria</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable_athlete}>
                 <Image
                    style={styles.image_athlete}
                    source={require('D:\Hefesto\Images\athletes\kostya_shapoval.png')}
                  />
                  <View style = {flexDirection = 'row'}>
                  <Text>Kostya Shapoval</Text>
                  <Text>Russia</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable_athlete}>
                 <Image
                    style={styles.image_athlete}
                    source={require('D:\Hefesto\Images\athletes\dan_rosenberg.png')}
                  />
                  <View style = {flexDirection = 'row'}>
                  <Text>Dan Rosenberg</Text>
                  <Text>Israël</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable_athlete}>
                 <Image
                    style={styles.image_athlete}
                    source={require('D:\Hefesto\Images\athletes\eryc_ortiz.png')}
                  />
                  <View style = {flexDirection = 'row'}>
                  <Text>Eryc Ortiz</Text>
                  <Text>France</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable_athlete}>
                 <Image
                    style={styles.image_athlete}
                    source={require('D:\Hefesto\Images\athletes\melnik_style.png')}
                  />
                  <View style = {flexDirection = 'row'}>
                  <Text>Melnik style</Text>
                  <Text>Ukrainia</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable_athlete}>
                 <Image
                    style={styles.image_athlete}
                    source={require('D:\Hefesto\Images\athletes\thomas_kurganov.png')}
                  />
                  <View style = {flexDirection = 'row'}>
                  <Text>Thomas Kurganov</Text>
                  <Text>USA</Text>
                  </View>
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
    touchable_athlete:{
        flexDirection: 'row',
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