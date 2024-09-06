import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FIcon from "react-native-vector-icons/FontAwesome"

const Search = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <FIcon name="chevron-left" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.text}>Search</Text>

                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={styles.text_1}>cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.search_btn} onPress={() => navigation.navigate('Search')}>
                    <FIcon name='search' style={styles.icon_1} />
                    <TextInput placeholder='Search Course ' style={styles.serach} placeholderTextColor={"#000"} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    icon: {
        fontSize: 30,
        color: "#000",
        top: 40,
        left: 20,
    },
    text: {
        fontSize: 25,
        color: "#000",
        top: 40,
        left: 120,
    },
    text_1: {
        fontSize: 25,
        color: "#FF4E6E",
        top: 40,
        left: 190,
    },
    serach: {
        paddingLeft: 29
    },
    search_btn: {
        width: 350,
        borderWidth: 2,
        borderRadius: 20,
        left: 20,
        flexDirection: "row",
        top: 80,
    },
    icon_1: {
        fontSize: 20,
        color: "#000",
        top: 14,
        left: 10,
    },
})