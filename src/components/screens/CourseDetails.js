import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FIcon from "react-native-vector-icons/FontAwesome"

const CourseDetails = ({ navvigation }) => {
    return (
        <View style={styles.contianer}>
            <View style={{ flexDirection: "row" }}>
                <View>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('HomeScreen')}>
                        <FIcon name="chevron-left" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.heading}>
                        UI/UX Design
                    </Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#8EC7FD", width: "80%", height: 250, left: 30, borderRadius: 30, top: 30, }}>
                <Image source={require('../../../assets/course.png')} style={styles.img} />

            </View>
            <View style={styles.text_1}>
                <Text style={{ fontWeight: 'bold', }}> Free </Text>
            </View>

            <View>



            </View>
        </View>
    )
}

export default CourseDetails

const styles = StyleSheet.create({
    contianer: {
        width: "100%",
        height: "100%",
        backgroundColor: "fff",
    },

    back: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#000",
        top: 20,
        left: 30,
    },

    icon: {
        fontSize: 20,
        alignSelf: "center",
        top: 12,
        color: "#000"
    },

    heading: {
        top: 30,
        left: 100,
        fontSize: 22,
        fontWeight: "bold",
        color: "#000"
    },
    text_1: {

        justifyContent: 'center',
        alignItems: 'center',
        left: 270,
        top: 40,
        backgroundColor: '#FF4E6E',
        width: 70,
        borderRadius: 20,

    },
    img: {
        left: 20,
        width: 250,
        height: 200,
    }

})