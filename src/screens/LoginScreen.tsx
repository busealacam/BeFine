import React from "react";
import { Text, View } from "react-native";
import { Form } from '../component/Form';

export const LoginScreen = ({ navigation }: any) => {

    return (
        <View>
            <Form
                formType="login"
            />
            <Text style={{ textAlign: "center", marginTop: 10 }} onPress={() => navigation.navigate("Signup")}
            >Don't have an account ? Sign In</Text>
        </View>
    )
}