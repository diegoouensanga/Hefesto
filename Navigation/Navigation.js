import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation"
//Pour exporter et utiliser une navigation dans l'appli, il faut utiliser un container


import React from 'react'
import Athletes from '../Components/Athletes'
import Moves from '../Components/Moves'
import Competitions from '../Components/Competitions'
import Training from '../Components/Training'

import { StyleSheet, Image } from 'react-native'

const HomeTabNavigator = createBottomTabNavigator({
    Competitions: {
        screen: Competitions,
        navigationOptions: {
            tabBarIcon:() => {
                return <Image
                    source={require('../Images/podium.png')}
                    style={styles.icon}/>
            }
        }
    },
    Athletes: {
        screen: Athletes,
        navigationOptions: {
            tabBarIcon:() => {
                return <Image
                    source={require('../Images/athlete.png')}
                    style={styles.icon}/>
            }
        }
    },
    Moves: {
        screen: Moves,
        navigationOptions: {
            tabBarIcon:() => {
                return <Image
                    source={require('../Images/frontlever.png')}
                    style={styles.icon}/>
            }
        }
    },
    Training: {
        screen: Training,
        navigationOptions: {
            tabBarIcon:() => {
                return <Image
                    source={require('../Images/training.png')}
                    style={styles.icon}/>
            }
        }
    }



    }, {
    tabBarOptions: {
        showLabel: true,
        showIcon: true,
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF'
    }

})

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default createAppContainer (HomeTabNavigator)