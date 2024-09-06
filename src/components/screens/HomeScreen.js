import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MIcon_1 from "react-native-vector-icons/MaterialCommunityIcons"
import FIcon from "react-native-vector-icons/FontAwesome"

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.contianer}>
            <View>
                <Text style={styles.heading}>
                    Hello,
                </Text>
                <Text style={styles.heading_1}>
                    John doe
                </Text>

                <View>
                    <TouchableOpacity style={styles.menu}>
                        <MIcon_1 name='menu' style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.search_btn} onPress={() => navigation.navigate('Search')}>
                    <TextInput placeholder='Search Course ' style={styles.serach} placeholderTextColor={"#000"} />
                    <FIcon name='search' style={styles.icon_1} />
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={styles.categories}>
                    <View>
                        <TouchableOpacity style={styles.categories_1}>
                            <Text style={{ color: "#F2F2F2" }}>Copywriting</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.categories_2}>
                            <Text style={{ color: "#F2F2F2" }}>UI/UX</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.categories_3}>
                            <Text style={{ color: "#F2F2F2" }}>Branding</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.categories_4}>
                            <Text style={{ color: "#F2F2F2" }}>All Topik</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Image source={require('../../../assets/banner.png')} style={styles.banner} />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", left: 20, top: 80 }}>Popular Course </Text>
                    <View>
                        <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: "#FF4E6E" }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView horizontal style={{ height: 300 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View>
                            <TouchableOpacity style={styles.course} onPress={() => navigation.navigate('CourseDetails')}>
                                <TouchableOpacity style={styles.heart}>
                                    <FIcon name='heart-o' size={20} color={"#000"} style={styles.heart_1} />
                                </TouchableOpacity>
                                <Image source={require('../../../assets/course.png')} style={styles.image} />
                                <TouchableOpacity style={styles.col} onPress={() => navigation.navigate('CourseDetails')}>
                                    <Text style={styles.text}>
                                        UI/UX Design Principal
                                    </Text>
                                    <Text style={{ fontSize: 12, left: 15, top: 10, color: "#A4A2A2" }}>21 Sept - 27 Sept</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 12, left: 15, top: 20, color: "#000" }}>UI/UX Design</Text>
                                        <Text style={{ fontSize: 14, left: 95, top: 20, color: "#000", fontWeight: "bold" }}>Free</Text>
                                    </View>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.course_1} onPress={() => navigation.navigate('CourseDetails')}>
                                <Image source={require('../../../assets/course.png')} style={styles.image} />
                                <TouchableOpacity style={styles.col} onPress={() => navigation.navigate('CourseDetails')}>
                                    <Text style={styles.text}>
                                        UI/UX Design Principal
                                    </Text>
                                    <Text style={{ fontSize: 12, left: 15, top: 10, color: "#A4A2A2" }}>21 Sept - 27 Sept</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 12, left: 15, top: 20, color: "#000" }}>UI/UX Design</Text>
                                        <Text style={{ fontSize: 14, left: 95, top: 20, color: "#000", fontWeight: "bold" }}>Free</Text>
                                    </View>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.course_2} onPress={() => navigation.navigate('CourseDetails')}>
                                <Image source={require('../../../assets/course.png')} style={styles.image} />
                                <TouchableOpacity style={styles.col} onPress={() => navigation.navigate('CourseDetails')}>
                                    <Text style={styles.text}>
                                        UI/UX Design Principal
                                    </Text>
                                    <Text style={{ fontSize: 12, left: 15, top: 10, color: "#A4A2A2" }}>21 Sept - 27 Sept</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 12, left: 15, top: 20, color: "#000" }}>UI/UX Design</Text>
                                        <Text style={{ fontSize: 14, left: 95, top: 20, color: "#000", fontWeight: "bold" }}>Free</Text>
                                    </View>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.course_3} onPress={() => navigation.navigate('CourseDetails')}>
                                <Image source={require('../../../assets/course.png')} style={styles.image} />
                                <TouchableOpacity style={styles.col} onPress={() => navigation.navigate('CourseDetails')}>
                                    <Text style={styles.text}>
                                        UI/UX Design Principal
                                    </Text>
                                    <Text style={{ fontSize: 12, left: 15, top: 10, color: "#A4A2A2" }}>21 Sept - 27 Sept</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 12, left: 15, top: 20, color: "#000" }}>UI/UX Design</Text>
                                        <Text style={{ fontSize: 14, left: 95, top: 20, color: "#000", fontWeight: "bold" }}>Free</Text>
                                    </View>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
                <View>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", left: 20, top: 30 }}>For You </Text>

                        <View>
                            <TouchableOpacity style={styles.link_1} onPress={() => navigation.navigate('Login')}>
                                <Text style={{ color: "#FF4E6E" }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

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

            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    contianer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    heading: {
        fontSize: 16,
        color: "#3C3A36",
        top: 25,
        left: 20,
    },
    heading_1: {
        fontSize: 30,
        color: "#000",
        fontWeight: "bold",
        top: 25,
        left: 20,
    },
    menu: {
        borderWidth: 1,
        borderRadius: 50,
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        left: 350,
        top: -30,

    },
    icon: {
        fontSize: 32,
        color: "#000"
    },
    serach: {
        paddingLeft: 15
    },
    search_btn: {
        width: 350,
        borderWidth: 2,
        borderRadius: 20,
        left: 20,
        flexDirection: "row"
    },
    icon_1: {
        fontSize: 20,
        color: "#000",
        top: 14,
        left: 190,
    },
    categories: {
        width: 300,
        height: 25,
        top: 30,
        flexDirection: "row",
    },
    categories_1: {
        width: 105,
        height: 35,
        backgroundColor: "#FF4E6E",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        left: 10,
    },
    categories_2: {
        width: 75,
        height: 35,
        backgroundColor: "#FF4E6E",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        left: 15,
    },
    categories_3: {
        width: 105,
        height: 35,
        backgroundColor: "#FF4E6E",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        left: 20,
    },
    categories_4: {
        width: 100,
        height: 35,
        backgroundColor: "#FF4E6E",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        left: 25,
    },
    banner: {
        alignSelf: "center",
        top: 60,
        width: 380,
        left: 10,
    },
    link: {
        top: 80,
        left: 190,
    },
    link_1: {
        top: 30,
        left: 260,
    },
    course: {
        width: 240,
        height: 160,
        backgroundColor: "#8EC7FD",
        top: 100,
        left: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    course_1: {
        width: 240,
        height: 160,
        backgroundColor: "#8EC7FD",
        top: 100,
        left: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    course_2: {
        width: 240,
        height: 160,
        backgroundColor: "#8EC7FD",
        top: 100,
        left: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    course_3: {
        width: 240,
        height: 140,
        backgroundColor: "#8EC7FD",
        top: 100,
        left: 40,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },


    image: {
        alignSelf: "center",
        // top: 20,
        height: 100,
    },
    col: {
        backgroundColor: "#dbd9d9",
        width: 240,
        height: 100,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    text: {
        top: 10,
        left: 15,
        color: "#000",
        fontWeight: "bold"
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
    heart: {
        borderWidth: 1,
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        top: 10,
        left: 5

    },

})