/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, Context } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SongsList from './src/songList';
import SongDetails from './src/songDetails';
import Splash from './src/Splash';
import { Component } from 'react';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import clone from 'clone';
import { arrayExpression } from '@babel/types';
import { TextInput } from 'react-native-gesture-handler';
import { Slider } from '@miblanchard/react-native-slider';
import CircularProgress from './CircularProgress';

const Stack = createNativeStackNavigator();

const CIRCLE_SIZE = 100

// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
//                 <Stack.Screen name="SongsList" component={SongsList} options={{ headerShown: false }} />
//                 <Stack.Screen name="SongDetails" component={SongDetails} options={{ headerShown: false }} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 6
        }
    }

    // render() {
    //     return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //         <Text>testing</Text>
    //     </View>
    // }
    render() {
        return <View style={{ flex: 1, backgroundColor: '#144d6e', paddingHorizontal: 20, paddingVertical: 20 }}>
            <SafeAreaView />
            <ProgressBar number={5} />
            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={Styles.textColor}>RESCUE SESSION: ANGER % FRUSTATION</Text>
                <Text style={Styles.textColor} >X</Text>
            </View>
            <Text style={[Styles.textColor, { flex: 1, fontSize: 24 }]}>Pick the level your anger & frustation right now</Text>
            <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center', marginVertical: 30 }}>
                <View style={Styles.dashedBorderView}>
                    <View style={{ backgroundColor: 'white', borderRadius: 65, height: 100, width: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <CircularProgress percent={this.state.count * 10}>
                            <View style={{ backgroundColor: '#406378', height: 90, width: 90, borderRadius: 45, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ backgroundColor: '#78d0d6', borderRadius: 30, height: 60, width: 60, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={[Styles.textColor, { fontSize: 20 }]}>{this.state.count}</Text>
                                </View>
                            </View>
                        </CircularProgress>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, paddingBottom: 20, marginHorizontal: 30 }}>
                <Slider
                    value={this.state.count}
                    minimumValue={0}
                    minimumTrackTintColor={'#78d0d6'}
                    maximumValue={10}
                    maximumTrackTintColor={'white'}
                    thumbTintColor={'#78d0d6'}
                    onValueChange={count => this.setState({ count: parseInt(count) })}
                />
            </View>
            <TouchableOpacity style={{ backgroundColor: 'white', alignSelf: 'center', justifyContent: 'center', paddingVertical: 10, width: '95%', height: 50, borderRadius: 50, marginVertical: 20 }}>
                <Text style={{ textAlign: 'center' }}>Next</Text>
            </TouchableOpacity>
        </View>
    }
}

const ProgressBar = ({ number }) => {
    return <View style={{ flex: 0.5, alignItems: 'center', flexDirection: 'row', width: '100%' }}>
        {
            Array(number).fill(5).map((each, index) => {
                return <View key={each + index} style={{ borderWidth: 2, borderColor: index == 0 ? 'white' : 'lightgrey', flex: number, borderRadius: 20, marginRight: 5 }} />
            })
        }
    </View>
}

const Styles = StyleSheet.create({
    textColor: { color: 'white' },
    dashedBorderView: { borderWidth: 2.5, borderColor: 'lightgrey', borderStyle: 'dashed', borderRadius: 75, height: 150, width: 150, alignItems: 'center', justifyContent: 'center' }
})



export default App;

