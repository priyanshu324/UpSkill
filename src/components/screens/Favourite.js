import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FIcon from "react-native-vector-icons/FontAwesome"

const Favourite = () => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                    <FIcon name="chevron-left" style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.text}>Search</Text>

            </View>
            <View style={styles.bg}>
                <FIcon name='heart-o' style={styles.icon_1} />
            </View>
            <View>
                <ScrollView style={{ height: 800 }}>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <TouchableOpacity style={styles.course_4} onPress={() => navigation.navigate('CourseDetails')}>
                                    <Image source={require('../../../assets/course.png')} style={styles.image} />
                                    <TouchableOpacity style={styles.col_1} onPress={() => navigation.navigate('CourseDetails')}>
                                        <Text style={styles.text_1}>
                                            UI/UX Design Principal
                                        </Text>
                                        <Text style={{ fontSize: 12, left: 5, top: 10, color: "#A4A2A2" }}>21 Sept - 27 Sept</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 12, left: 5, top: 20, color: "#000" }}>UI/UX Design</Text>
                                        </View>
                                        <Text style={{ fontSize: 14, left: 5, top: 30, color: "#000", fontWeight: "bold" }}>Free</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.course_5} onPress={() => navigation.navigate('CourseDetails')}>
                                    <Image source={require('../../../assets/course.png')} style={styles.image_1} />
                                    <TouchableOpacity style={styles.col_2} onPress={() => navigation.navigate('CourseDetails')}>
                                        <Text style={styles.text_1}>
                                            UI/UX Design Principal
                                        </Text>
                                        <Text style={{ fontSize: 12, left: 5, top: 10, color: "#A4A2A2" }}>21 Sept - 27 Sept</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 12, left: 5, top: 20, color: "#000" }}>UI/UX Design</Text>
                                        </View>
                                        <Text style={{ fontSize: 14, left: 5, top: 30, color: "#000", fontWeight: "bold" }}>Free</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View>
                        <View style={{ flexDirection: "row", height: 700 }}>
                            <View>
                                <TouchableOpacity style={styles.course_6} onPress={() => navigation.navigate('CourseDetails')}>
                                    <Image source={require('../../../assets/course.png')} style={styles.image} />
                                    <TouchableOpacity style={styles.col_3} onPress={() => navigation.navigate('CourseDetails')}>
                                        <Text style={styles.text_1}>
                                            UI/UX Design Principal
                                        </Text>
                                        <Text style={{ fontSize: 12, left: 5, top: 10, color: "#A4A2A2" }}>21 Sept - 27 Sept</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 12, left: 5, top: 20, color: "#000" }}>UI/UX Design</Text>
                                        </View>
                                        <Text style={{ fontSize: 14, left: 5, top: 30, color: "#000", fontWeight: "bold" }}>Free</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.course_7} onPress={() => navigation.navigate('CourseDetails')}>
                                    <Image source={require('../../../assets/course.png')} style={styles.image_1} />
                                    <TouchableOpacity style={styles.col_4} onPress={() => navigation.navigate('CourseDetails')}>
                                        <Text style={styles.text_1}>
                                            UI/UX Design Principal
                                        </Text>
                                        <Text style={{ fontSize: 12, left: 5, top: 10, color: "#A4A2A2" }}>21 Sept - 27 Sept</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={{ fontSize: 12, left: 5, top: 20, color: "#000" }}>UI/UX Design</Text>
                                        </View>
                                        <Text style={{ fontSize: 14, left: 5, top: 30, color: "#000", fontWeight: "bold" }}>Free</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>

            </View>

        </View>
    )
}

export default Favourite

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "fff",
    },
    icon: {
        fontSize: 30,
        color: "#000",
        top: 30,
        left: 20,
    },
    text: {
        fontSize: 25,
        color: "#000",
        left: 160,
        fontWeight: "bold",
    },
    icon_1: {
        fontSize: 25,
        color: "#fff",
        alignSelf: "center",
        top: 10,
    },
    bg: {
        backgroundColor: "#FF4E6E",
        borderRadius: 50,
        borderWidth: 2,
        width: 50,
        height: 50,
        left: 350,
        top: -40,
        borderColor: "#fff",
    },

    course_4: {
        width: 176,
        height: 180,
        backgroundColor: "#FF4E6E",
        top: 50,
        left: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    course_5: {
        width: 176,
        height: 180,
        backgroundColor: "#9C9EFC",
        top: 50,
        left: 40,
        borderTopLeftRadius: 25,
    },
    col_1: {
        backgroundColor: "#dbd9d9",
        width: 176,
        height: 120,
        top: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    col_2: {
        backgroundColor: "#dbd9d9",
        width: 176,
        height: 120,
        top: 10,
        borderBottomLeftRadius: 15,
    },
    text_1: {
        top: 10,
        left: 5,
        color: "#000",
        fontWeight: "bold",
    },

    image_1: {
        alignSelf: "center",
        top: 20,
        height: 100,
        left: -10,
    },
    course_6: {
        width: 176,
        height: 180,
        backgroundColor: "#FF4E6E",
        top: 120,
        left: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    course_7: {
        width: 176,
        height: 180,
        backgroundColor: "#9C9EFC",
        top: 120,
        left: 40,
        borderTopLeftRadius: 25,
    },
    col_3: {
        backgroundColor: "#dbd9d9",
        width: 176,
        height: 115,
        top: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    col_4: {
        backgroundColor: "#dbd9d9",
        width: 176,
        height: 115,
        top: 10,
        borderBottomLeftRadius: 15,
    },
})