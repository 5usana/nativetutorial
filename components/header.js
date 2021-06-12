import React from 'react';
import { createPortal } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    }
});