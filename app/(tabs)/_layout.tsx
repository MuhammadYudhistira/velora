import { tabsLeft, tabsRight } from "@/constants/data";
import { components } from "@/constants/theme";
import { Add02Icon, Wallet01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { clsx } from "clsx";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

const TabLayout = () => {
    const insets = useSafeAreaInsets();

    const TabIcon = ({ focused, icon }: TabIconProps) => {
        return (
            <View className="tabs-icon">
                <View className={clsx("tabs-pill", focused && "tabs-active")}>
                    <HugeiconsIcon
                        icon={icon || Wallet01Icon}
                        size={24}
                        color={"black"}
                        strokeWidth={2}
                    />
                </View>
            </View>
        );
    };

    const TabAddIcon = ({ focused, icon }: TabIconProps) => {
        return (
            <View className="tabs-icon">
                <View
                    className={clsx(
                        "size-14 bg-primary items-center justify-center rounded-full bottom-6",
                        focused && "bg-primary/80",
                    )}
                >
                    <HugeiconsIcon
                        icon={icon || Wallet01Icon}
                        size={24}
                        color={"black"}
                        strokeWidth={2}
                    />
                </View>
            </View>
        );
    };

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarLabelStyle: {
                    top: -4,
                    fontSize: 8,
                    color: "#000000",
                },
                tabBarStyle: {
                    position: "absolute",
                    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    backgroundColor: "#FFFEFC",
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarItemStyle: {
                    paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
                },
                tabBarIconStyle: {
                    width: tabBar.iconFrame,
                    height: tabBar.iconFrame,
                    alignItems: "center",
                },
            }}
        >
            {tabsLeft.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={tab.icon} />
                        ),
                    }}
                />
            ))}
            <Tabs.Screen
                name={"add"}
                options={{
                    title: "Add",
                    tabBarIcon: ({ focused }) => (
                        <TabAddIcon focused={focused} icon={Add02Icon} />
                    ),
                }}
            />
            {tabsRight.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={tab.icon} />
                        ),
                    }}
                />
            ))}
        </Tabs>
    );
};

export default TabLayout;
