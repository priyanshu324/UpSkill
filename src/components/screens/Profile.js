import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FIcon from "react-native-vector-icons/FontAwesome"
import MIcon_1 from "react-native-vector-icons/MaterialCommunityIcons"
import MIcon from "react-native-vector-icons/MaterialIcons"

const Profile = ({ navigation }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                    <FIcon name="chevron-left" style={styles.icon} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: "bold", color: "#000", left: 170 }}>Profile</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.bg}>
                        <MIcon_1 name='account-edit-outline' style={styles.icon_1} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.profile}>
                <View style={styles.profile_bg}>
                    <TouchableOpacity style={styles.bg_1}>
                        {/* img */}
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.bg_2}>
                    <FIcon name='camera' style={styles.icon_2} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", left: 190, top: -20 }}>John</Text>
            </View>

            <View style={styles.main}>
                <View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.bg_3}>
                            <MIcon name='notifications-none' style={styles.icon_3} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#000", left: 30, top: 10 }}>Notifications</Text>

                        <Switch
                            trackColor={{ false: '#767577', true: '#5BA092' }}
                            thumbColor={isEnabled ? '#F8F2EE' : '#F8F2EE'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={styles.switch}
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold", top: 40 }}>
                        Account information
                    </Text>
                </View>
                <View style={styles.main_1}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.bg_4}>
                            <FIcon name='user-o' style={styles.icon_3} />
                        </TouchableOpacity>

                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", left: 30, top: 10 }}>Name</Text>
                            <Text style={{ fontSize: 14, color: "#000", left: 30, top: 10 }}>John</Text>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <FIcon name="chevron-right" style={styles.icon_4} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.main_2}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.bg_5}>
                            <MIcon name='notifications-none' style={styles.icon_3} />
                        </TouchableOpacity>

                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", left: 30, top: 10 }}>Email</Text>
                            <Text style={{ fontSize: 14, color: "#000", left: 30, top: 10 }}>Johndoe@gmail.com</Text>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <FIcon name="chevron-right" style={styles.icon_5} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.main_3}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.bg_6}>
                            <MIcon name='notifications-none' style={styles.icon_3} />
                        </TouchableOpacity>

                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000", left: 30, top: 10 }}>Password</Text>
                            <Text style={{ fontSize: 14, color: "#000", left: 30, top: 10 }}>changed 2 weeks ago</Text>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <FIcon name="chevron-right" style={styles.icon_6} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <View>
                <TouchableOpacity>
                    <Text style={{ fontSize: 20, left: 160, top: 30, color: "#000" }}>
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    icon: {
        fontSize: 30,
        color: "#000",
        top: 30,
        left: 20,
    },
    bg: {
        backgroundColor: "#FF4E6E",
        borderRadius: 50,
        width: 50,
        height: 50,
        left: 350,
        top: -35,
    },
    icon_1: {
        color: "#fff",
        alignSelf: "center",
        fontSize: 30,
        top: 8,
    },
    profile: {
        borderWidth: 7,
        borderColor: "#FF4E6E",
        borderRadius: 50,
        width: 85,
        height: 85,
        alignSelf: "center"
    },
    profile_bg: {
        borderColor: "#F5F7FE",
        borderWidth: 3,
        width: 65,
        height: 65,
        borderRadius: 50,
    },
    bg_1: {
        backgroundColor: "#C7C7C7",
        width: 65,
        height: 65,
        borderRadius: 50,
    },
    bg_2: {
        backgroundColor: "#5B9EE1",
        width: 35,
        height: 35,
        borderRadius: 50,
        left: 190,
        top: -25,
    },
    icon_2: {
        fontSize: 15,
        color: "#fff",
        alignSelf: "center",
        top: 8,
    },
    main: {
        width: 350,
        height: 385,
        left: 30,
        // backgroundColor: "#000",
    },
    bg_3: {
        backgroundColor: "#FF4E6E",
        width: 45,
        height: 45,
        left: 20,
        top: 10,
        borderRadius: 50,
    },
    icon_3: {
        fontSize: 25,
        color: "#fff",
        alignSelf: "center",
        top: 5,
    },
    row: {
        borderRadius: 20,
        borderColor: "#BEBAB3",
        borderWidth: 2,
        top: 30,
        height: 70,
        width: 330,
        left: 10,
        flexDirection: "row",
    },
    switch: {
        left: 100,
    },
    main_1: {
        top: 30,
    },
    main_2: {
        top: 40,
    },
    main_3: {
        top: 50,
    },
    bg_4: {
        backgroundColor: "#FF4E6E",
        width: 45,
        height: 45,
        left: 20,
        top: 10,
        borderRadius: 50,
    },
    bg_5: {
        backgroundColor: "#FF4E6E",
        width: 45,
        height: 45,
        left: 20,
        top: 10,
        borderRadius: 50,
    },
    bg_6: {
        backgroundColor: "#FF4E6E",
        width: 45,
        height: 45,
        left: 20,
        top: 10,
        borderRadius: 50,
    },
    icon_4: {
        left: 190,
        fontSize: 20,
        color: "#000",
        top: 20,
    },
    icon_5: {
        left: 90,
        fontSize: 20,
        color: "#000",
        top: 20,
    },
    icon_6: {
        left: 90,
        fontSize: 20,
        color: "#000",
        top: 20,
    },
});