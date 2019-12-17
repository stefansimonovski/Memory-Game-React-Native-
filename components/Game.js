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
        return (
            <View style={styles.mainWraper}>
                <Text style={styles.title}>
                    Game Page
                </Text>
                <Button
                    title='Home Page'
                    onPress={this.redirectToHome} 
                />
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
})
