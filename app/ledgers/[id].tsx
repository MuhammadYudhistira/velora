import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const LedgerDetail = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View>
            <Text>ledgerDetail: {id}</Text>
            <Link href="/">Go back to ledgers</Link>
        </View>
    );
};

export default LedgerDetail;
