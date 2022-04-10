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
    Alert
} from 'react-native';
import { Header } from './songList';


const SongDetails = (props) => {
    const { songDetails } = props.route.params
    return <View style={{ flex: 1 }}>
        <Header text={songDetails.trackName || songDetails.artistName} />
        <ScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 30 }}>
                <Image style={{ height: 100, width: 100, borderRadius: 50 }} source={{ uri: songDetails.artworkUrl100 }} />
                <TouchableOpacity onPress={() => Alert.alert('', 'Play Preview')}>
                    <Text style={{ padding: 10, paddingBottom: 0, borderColor: 'blue' }}>Preview</Text>
                </TouchableOpacity>
            </View>
            <Details label={'Artist: '} value={songDetails.artistName} />
            <Details label={'Track: '} value={songDetails.trackName} />
            <Details label={'Collection: '} value={songDetails.collectionName} />
            <Details label={'Genre: '} value={songDetails.primaryGenreName} />
            <Details label={'Released: '} value={songDetails.releaseDate} />
            <View style={{ marginTop: 80, flexDirection: 'row', justifyContent: 'space-around' }}>
                {
                    songDetails.trackPrice && <TouchableOpacity style={{ backgroundColor: 'brown', padding: 10 }}>
                        <Text style={{ color: 'white' }}>Buy track @ {songDetails.currency} {songDetails.trackPrice} </Text>
                    </TouchableOpacity>
                }
                {
                    songDetails.collectionPrice && <TouchableOpacity style={{ backgroundColor: 'brown', padding: 10 }}>
                        <Text style={{ color: 'white' }}>Buy track @ {songDetails.currency} {songDetails.collectionPrice} </Text>
                    </TouchableOpacity>
                }
            </View>
        </ScrollView>
    </View>
}

const Details = ({ label, value }) => {
    if (!value) return null
    return <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, marginLeft: 30 }}>
        <Text>{label}</Text>
        <Text numberOfLines={1} style={{ maxWidth: 250 }}>{value}</Text>
    </View>
}

const styles = StyleSheet.create({
    borderBottomStyles: {
        borderBottomWidth: 0.2, borderColor: 'grey'
    }

});

export default SongDetails;
