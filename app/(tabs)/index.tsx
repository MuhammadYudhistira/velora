import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-primary">
                Welcome to Nativewind!
            </Text>
            <Link
                href="/(auth)/sign-in"
                className="mt-4 text-lg text-secondary"
            >
                Sign In
            </Link>
            <Link
                href="/(auth)/sign-up"
                className="mt-2 text-lg text-secondary"
            >
                Sign Up
            </Link>
            <Link
                href={{
                    pathname: "/ledgers/[id]",
                    params: { id: "123" },
                }}
                className="mt-2 text-lg text-secondary"
            >
                View Ledger
            </Link>
        </SafeAreaView>
    );
}
