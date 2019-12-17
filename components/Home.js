import React, { Component } from 'react';
import { Text, StyleSheet, Picker, View, Dimensions, TouchableOpacity } from 'react-native';

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

export default class Home extends Component {
    redirectToGame = () => {
        const { history } = this.props
        if(history) history.push('/game')
        else alert('no history')
    }
    render () {
        return (
            <View style={styles.mainWraper}>
                <Text style={styles.title}>
                    Welcome To Memory Game!
                </Text>
                <Text style={styles.subTitle}>
                    Please select number of Fields and click Start
                </Text>
                <View style={styles.selectorContainer}>
                    <Picker
                        selectedValue='12'
                        style={styles.selector}
                        onValueChange={ (itemValue) => {
                            this.setState({selectedV: itemValue})
                        }
                    }>
                        <Picker.Item label="12" value='12' />
                        <Picker.Item label="16" value="16" />
                        <Picker.Item label="20" value="20" />
                        <Picker.Item label="24" value="24" />
                    </Picker>    
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.startBtn}
                        onPress={ this.redirectToGame }
                    >
                        <Text style={styles.btnText}>Start</Text>
                    </TouchableOpacity>
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
    selectorContainer: {
        width: width,
        flex: 1,
        maxHeight: 120,
        alignItems: 'center',
        paddingTop: 40
    },
    selector: {
        height: 50, 
        width: 100,
    },
    subTitle: {
        maxWidth: width / 2,
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 50
    },
    startBtn: {
        width: 50,
        height: 50
    },
    btnText: {
        fontSize: 20
    },
    mainWraper: {
        width: width,
        height: height,
        alignItems: 'center'
    },
    btnContainer: {
        width: width,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})
