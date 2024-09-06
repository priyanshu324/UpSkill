import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FIcon from "react-native-vector-icons/FontAwesome"

const CourseDetails = ({ navigation }) => {
    return (
        <View style={styles.contianer}>
            <View style={{ flexDirection: "row" }}>
                <View>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home')}>
                        <FIcon name="chevron-left" style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.heading}>
                        UI/UX Design
                    </Text>
                </View>
            </View>
            <View>
                <Image source={require('../../../assets/banner2.png')} style={styles.img} />
            </View>
            <View>
                <TouchableOpacity style={styles.text_1}>

                    <Text style={{ fontWeight: 'bold', color: "#fff" }}> Free </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.text_2}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
                    About the course
                </Text>
            </View>
            <Text style={{ color: "#000", left: 20, top: 60, fontSize: 14 }}>
                Dive into the world of UI/UX design with
            </Text>
            <Text style={{ color: "#000", left: 20, top: 60, fontSize: 14 }}>
                our comprehensive online course. Learn the principles,
            </Text>
            <Text style={{ color: "#000", left: 20, top: 60, fontSize: 14 }}>
                tools, and techniques that will empower you to create
            </Text>
            <Text style={{ color: "#000", left: 20, top: 60, fontSize: 14 }}>
                user-friendly, visually appealing digital experiences.
            </Text>
            <Text style={{ color: "#000", left: 20, top: 60, fontSize: 14 }}>
                From wireframing to user testing, this course covers it
            </Text>
            <Text style={{ color: "#000", left: 20, top: 60, fontSize: 14 }}>
                all, helping you become a skilled UI/UX designer.
            </Text>

            <View style={{ flexDirection: "row" }}>
                <View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ fontSize: 14, color: "#fff" }}>10+ Video</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn_1}>
                        <Text style={{ fontSize: 14, color: "#fff" }}>10+ Video</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn_2}>
                        <Text style={{ fontSize: 14, color: "#fff" }}>10+ Video</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.btn_3}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
                        Get Course
                    </Text>
                </TouchableOpacity>
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
        width: 320,
        height: 250,
        alignSelf: "center",
        top: 30,
        borderRadius: 30,
    },
    text_2: {
        left: 20,
        top: 50,
    },
    btn: {
        width: 100,
        height: 40,
        backgroundColor: "#FF4E6E",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        top: 90,
        left: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    btn_1: {
        width: 100,
        height: 40,
        backgroundColor: "#FF4E6E",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        top: 90,
        left: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    btn_2: {
        width: 100,
        height: 40,
        backgroundColor: "#FF4E6E",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        top: 90,
        left: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    btn_3: {
        backgroundColor: "#FF4E6E",
        width: 270,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        top: 140,
        left: 60,
    }

})