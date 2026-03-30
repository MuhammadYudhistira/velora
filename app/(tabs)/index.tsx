import HeaderLayout from "@/components/layout/HeaderLayout";
import { formatRupiah } from "@/lib/utils";
import { styled } from "nativewind";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <HeaderLayout />

            {/* Hero Section */}
            <View className="my-3 px-8">
                <Text className="text-sm text-primary-dark mb-2 text-center uppercase tracking-widest font-sans-medium">
                    current sanctuary wealth
                </Text>
                <Text className="text-2xl font-sans-extra-bold text-center tracking-tighter">
                    {formatRupiah(125000000000000)}
                </Text>
            </View>

            {/* Wallets */}
            <View className="my-8">
                <View className="flex-row justify-between items-center px-5">
                    <Text className="text-lg mb-2 font-sans-bold">Wallets</Text>
                    <Text className="text-base font-sans text-primary-dark">
                        Manage All
                    </Text>
                </View>
                <View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="p-4"
                    >
                        <View className="bg-card rounded-4xl p-4 mr-4 w-72 h-40 shadow-md"></View>
                        <View className="bg-primary-dark rounded-4xl p-4 mr-4 w-72 h-40 shadow-md"></View>
                        <View className="bg-secondary rounded-4xl p-4 w-72 h-40 shadow-md mr-8"></View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}
