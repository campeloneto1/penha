import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme, StatusBar } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3d2963",
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "transparent",
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="denunciar"
        options={{
          title: "Denunciar",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="warning" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
        }}
      />
    </Tabs>
  );
}

/*
 headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          */
