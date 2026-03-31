import HeaderLayout from "@/components/layout/HeaderLayout";
import WalletCard from "@/components/WalletCard";
import { formatCurrencyParts, formatRupiah } from "@/lib/utils";
import {
    ArrowUpRight01Icon,
    BankIcon,
    ChampionIcon,
    Money01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { styled } from "nativewind";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
    const amount = 1789999999911.5;
    const { main, decimal } = formatCurrencyParts(amount);

    return (
        <SafeAreaView className="flex-1 bg-background">
            <HeaderLayout />

            <View className="my-6 px-4 items-center">
                <Text className="text-[10px] text-text-secondary uppercase tracking-[2px] font-sans-medium mb-2">
                    CURRENT SANCTUARY WEALTH
                </Text>
                <View className="flex-row items-baseline justify-center flex-wrap">
                    <Text className="text-4xl font-sans-extra-bold text-text-primary tracking-tighter">
                        {main}
                    </Text>
                    <Text className="text-2xl font-sans-extra-bold text-primary tracking-tighter">
                        {decimal}
                    </Text>
                </View>
                <View className="flex-row items-center bg-accent-green px-4 py-2 rounded-full mt-4">
                    <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={14}
                        color="#2D6A4F"
                    />
                    <Text className="text-tertiary text-xs font-sans-bold ml-1">
                        +4.2% from last month
                    </Text>
                </View>
            </View>

            <View className="my-4">
                <View className="flex-row justify-between items-end px-6 mb-4">
                    <Text className="text-2xl font-sans-bold text-text-primary">
                        Wallets
                    </Text>
                    <Text className="text-sm font-sans-medium text-danger">
                        Manage All
                    </Text>
                </View>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 24, paddingRight: 8 }}
                >
                    <WalletCard
                        bg="bg-white"
                        icon={Money01Icon}
                        bgIcon="bg-[#FDECE9]"
                        name="Petty Cash"
                        balance={formatRupiah(100000000000)}
                        iconColor="#A65D4A"
                        textColor="text-text-primary"
                    />
                    <WalletCard
                        bg="bg-[#A65D4A]"
                        icon={BankIcon}
                        bgIcon="bg-white/20"
                        name="Chase Savings"
                        balance={formatRupiah(184200000000)}
                        iconColor="white"
                        textColor="text-white"
                    />
                    <WalletCard
                        bg="bg-[#EBE8DE]"
                        icon={BankIcon}
                        bgIcon="bg-violet-100"
                        name="Chase Savings"
                        balance={formatRupiah(184200000000)}
                        iconColor="gray"
                        textColor="text-black"
                    />
                </ScrollView>

                <View className="my-4 px-6">
                    <View className="bg-text-muted/10 rounded-3xl p-6 shadow-sm mb-4">
                        <View className="flex-row items-center justify-between">
                            <View>
                                <Text className="font-sans-extra-bold text-xl">
                                    Retirement Villa
                                </Text>
                                <Text className="font-sans-light">
                                    Target : Dec 2028
                                </Text>
                            </View>
                            <View className="bg-accent-green p-4 rounded-full">
                                <HugeiconsIcon
                                    icon={ChampionIcon}
                                    size={20}
                                    color="#2D6A4F"
                                />
                            </View>
                        </View>
                        <View className="flex-row justify-between items-end my-3">
                            <Text className="text-lg font-sans-extra-bold text-text-primary">
                                {100}
                            </Text>
                            <Text className="text-lg font-sans-extra-bold text-primary-dark">
                                {50}%
                            </Text>
                        </View>

                        <View className="h-4 bg-border rounded-full mb-3">
                            <View
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${90}%` }}
                            />
                        </View>

                        <View className="items-end">
                            <Text className="text-text-secondary font-sans-medium text-sm">
                                Saved:{" "}
                                <Text className="text-text-primary font-sans-bold">
                                    {200}
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
