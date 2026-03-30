import { tabsLeft, tabsRight } from "@/constants/data";
import { icons } from "@/constants/icons";
import { components } from "@/constants/theme";
import clsx from "clsx";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

const TabLayout = () => {
    const insets = useSafeAreaInsets();

    const TabIcon = ({ focused, icon }: TabIconProps) => {
        return (
            <View className="tabs-icon">
                <View className={clsx("tabs-pill", focused && "tabs-active")}>
                    <Image source={icon} className="tabs-glyph" />
                </View>
            </View>
        );
    };

    const TabAddIcon = ({ focused, icon }: TabIconProps) => {
        return (
            <View className="tabs-icon">
                <View
                    className={clsx(
                        "size-14 bg-[#C16249] items-center justify-center rounded-full bottom-6",
                        focused && "bg-[#C16249]/80",
                    )}
                >
                    <Image source={icon} className="size-7" />
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
                        <TabAddIcon focused={focused} icon={icons.add} />
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
