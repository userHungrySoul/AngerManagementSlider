/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';


const SongDetails = (props) => {
    const resetNavigation = () => {
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'SongsList' },
                ],
            })
        );
    }
    useEffect(
        () => {
            let setTimer = setTimeout(() => resetNavigation(), 3000);
            return () => {
                clearTimeout(setTimer);
            };
        },
        []
    );
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 32, paddingBottom: 20 }}>MindHouse</Text>
        <Text>Loading, Please wait...</Text>
    </View>
}

export default SongDetails;
