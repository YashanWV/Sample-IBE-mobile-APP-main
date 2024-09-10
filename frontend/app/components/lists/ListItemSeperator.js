import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../config/colors';

function ListItemSeperator() {
    return (
        <View style={styles.container} />
    )
}

const styles = StyleSheet.create({
    container: {

        width: '100%',

        height: 1,
        backgroundColor: colors.listseperators
    }
})

export default ListItemSeperator;