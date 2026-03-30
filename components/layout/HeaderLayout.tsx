import { icons } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

const HeaderLayout = () => {
    return (
        <View className="flex-row gap-4 items-center justify-between p-5">
            <View className="flex-row gap-4">
                <Image
                    source={require("@/assets/images/avatar.jpg")}
                    style={{ width: 44, height: 44, borderRadius: 25 }}
                    className="border-primary border-2"
                />
                <Text className="text-2xl font-sans-extra-bold mt-2">
                    The Serene Ledger
                </Text>
            </View>
            <Image source={icons.bell} className="items-center size-6" />
        </View>
    );
};

export default HeaderLayout;
