import React from "react";
import { Text } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Add = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Add</Text>
        </SafeAreaView>
    );
};

export default Add;
