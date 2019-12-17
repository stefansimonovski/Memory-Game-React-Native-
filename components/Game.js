import React, { Component } from 'react';
import { Text, StyleSheet, Picker, View, Dimensions, TouchableOpacity, Button } from 'react-native';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default class Game extends Component {
    state = {
        selectedV: '12'
    }
    onPress = () => {
        alert("hello")
    }
    redirectToHome = () => {
        const { history } = this.props
        if(history) history.push('/')
        else alert('no history')
    }
    render () {
        const { history } = this.props
        return (
            <View style={styles.mainWraper}>
                <View style={styles.secondWraper}>
                    <View style={styles.header}>
                        <Text>Time: {60}</Text>
                        <Text>Flips: {0}</Text>
                        <TouchableOpacity>
                            <Text>Help!</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainCardWraper}>
                        <View style={styles.cardWraper}></View>
                        <View style={styles.cardWraper}></View>
                        <View style={styles.cardWraper}></View>
                        <View style={styles.cardWraper}></View>

                        <View style={styles.cardWraper}></View>
                        <View style={styles.cardWraper}></View>
                        <View style={styles.cardWraper}></View>
                        <View style={styles.cardWraper}></View>

                        <View style={styles.cardWraper}></View>
                        <View style={styles.cardWraper}></View>
                        <View style={styles.cardWraper}></View>
                        <View style={styles.cardWraper}></View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 50,
        textAlign: 'center',
        paddingTop: 100,
    },
    mainWraper: {
        width: width,
        height: height,
        alignItems: 'center'
    },
    secondWraper: {
        flex: 1,
        width: 200,
        paddingTop: 100,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        maxHeight: 50
    },
    mainCardWraper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: 200

    },
    cardWraper: {
        width: 40,
        height: 40,
        backgroundColor: 'black'
    }
})
