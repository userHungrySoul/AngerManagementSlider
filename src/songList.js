/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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
    ActivityIndicator,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';


class SongsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            songsList: [],
            isLoading: true,
            refreshing: false
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        fetch('https://itunes.apple.com/search?term=Michael+jackson').then((response) => response.json()).then((result) => {
            console.log('result', result.results)
            this.setState({ songsList: result.results, isLoading: false, refreshing: false })
        }).catch((e) => {
            console.log('Error', e)
            this.setState({ songsList: [], isLoading: false, refreshing: false })
        })
    }

    onPressElement = (eachSong) => {
        this.props.navigation.navigate('SongDetails', { songDetails: eachSong })
    }

    renderItem = (eachSong) => {
        return <SongElements eachSong={eachSong} onPress={this.onPressElement} />
    }

    render() {
        const { songsList, isLoading } = this.state
        if (isLoading) {
            return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' />
                <Text style={{ padding: 10, fontSize: 16 }}>Please wait...</Text>
            </View>
        }
        return <View style={{ flex: 1 }}>
            <Header text='SONGS' />
            <FlatList
                data={songsList}
                renderItem={({ item }) => this.renderItem(item)}
                refreshing={this.state.refreshing}
                onRefresh={() => { this.setState({ refreshing: true }); this.fetchData() }}
            />
        </View>
    }
}

export const Header = ({ text }) => {
    return <View style={{ height: 70, backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center' }}>
        <SafeAreaView />
        <Text>{text}</Text>
    </View>
}

const SongElements = ({ eachSong, onPress }) => {
    return <TouchableOpacity key={'key-' + eachSong.trackId} onPress={() => onPress(eachSong)} style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#00000015' }}>
        <View style={{ flex: 2, padding: 15 }}>
            <Image style={{ height: 70, width: 70 }} source={{ uri: eachSong.artworkUrl100 }} />
        </View>
        <View style={{ flex: 8, flexDirection: 'column', padding: 15, paddingVertical: 20 }}>
            <View style={{ flex: 7 }}>
                <Text style={{ fontSize: 16 }} numberOfLines={2} ellipsizeMode='tail' >{eachSong.collectionName}</Text>
            </View>
            <View style={{ flex: 3, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12 }}>{eachSong.artistName}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 12 }}>{eachSong.collectionPrice}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    borderBottomStyles: {
        borderBottomWidth: 0.2, borderColor: 'grey'
    }

});

export default SongsList;
