import {
    IconSvgObject,
    MoreHorizontalCircle01Icon,
    Wallet01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { clsx } from "clsx";
import React from "react";
import { Text, View } from "react-native";

type WalletCardProps = {
    bg: string;
    name: string;
    balance: string;
    icon: IconSvgObject;
    bgIcon: string;
    iconColor: string;
    textColor: string;
};

const WalletCard = ({
    bg,
    name,
    balance,
    icon,
    bgIcon,
    iconColor,
    textColor,
}: WalletCardProps) => {
    return (
        <View
            className={clsx(
                "flex-col rounded-[40px] px-7 py-6 mr-4 w-70 h-45 shadow-sm mb-4",
                bg,
            )}
        >
            <View className="flex-row items-start justify-between">
                <View
                    className={clsx(
                        bgIcon,
                        "p-4 rounded-full items-center justify-center",
                    )}
                >
                    <HugeiconsIcon
                        icon={icon || Wallet01Icon}
                        size={20}
                        color={iconColor}
                        strokeWidth={2}
                    />
                </View>
                <HugeiconsIcon
                    icon={MoreHorizontalCircle01Icon}
                    size={24}
                    color={
                        bg === "bg-white" ? "#E5E5E5" : "rgba(255,255,255,0.4)"
                    }
                />
            </View>

            <View className="flex-1 justify-end">
                <Text
                    className={clsx(
                        "text-base font-sans-medium opacity-70",
                        textColor,
                    )}
                >
                    {name}
                </Text>
                <Text
                    className={clsx(
                        "font-sans-extra-bold text-[19px] tracking-tighter mt-1",
                        textColor,
                    )}
                >
                    {balance}
                </Text>
            </View>
        </View>
    );
};

export default WalletCard;
