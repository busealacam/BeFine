import React from "react";
import { Text, View } from "react-native";
import { Form } from '../component/Form';

export const SignUpScreen = ({ navigation }: any) => {
    return (
        <View>
            <Form
                formType="signin"
            />
            <Text style={{ textAlign: "center", marginTop: 10 }} onPress={() => navigation.navigate("Login")}
            >Have an account ? Log in.</Text>
        </View>
    )
}