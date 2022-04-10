import React from 'react';
import { View, StyleSheet } from 'react-native';

const CIRCLE_SIZE = 100
/**
* Override styles that get passed from props
**/
propStyle = (percent, base_degrees) => {
    const rotateBy = base_degrees + (percent * 3.6);
    return {
        transform: [{ rotateZ: `${rotateBy}deg` }]
    };
}

renderThirdLayer = (percent) => {
    if (percent > 50) {
        /**
        * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
        * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
        * before passing to the propStyle function
        **/
        return <View style={[styles.secondProgressLayer, propStyle((percent - 50), 45)]}></View>
    } else {
        return <View style={styles.offsetLayer}></View>
    }
}

const CircularProgress = ({ percent, children }) => {
    let firstProgressLayerStyle;
    if (percent > 50) {
        firstProgressLayerStyle = propStyle(50, -135);
    } else {
        firstProgressLayerStyle = propStyle(percent, -135);
    }

    return (
        <View style={styles.container}>
            <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
            {renderThirdLayer(percent)}
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderWidth: 5,
        borderRadius: CIRCLE_SIZE / 2,
        borderColor: '#144d6e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstProgressLayer: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderWidth: 5,
        borderRadius: CIRCLE_SIZE / 2,
        position: 'absolute',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: 'white',
        borderTopColor: 'white',
        transform: [{ rotateZ: '-135deg' }]
    },
    secondProgressLayer: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        position: 'absolute',
        borderWidth: 5,
        borderRadius: CIRCLE_SIZE / 2,
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: 'white',
        borderTopColor: 'white',
        transform: [{ rotateZ: '45deg' }]
    },
    offsetLayer: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        position: 'absolute',
        borderWidth: 5,
        borderRadius: CIRCLE_SIZE / 2,
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: '#144d6e',
        borderTopColor: '#144d6e',
        transform: [{ rotateZ: '-135deg' }]
    }
});


export default CircularProgress;