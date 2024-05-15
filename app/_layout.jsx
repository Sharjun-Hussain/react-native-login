import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#2F0743" },
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerTitleStyle: "bold",
      }}
    >
        <Stack.Screen name="index"  />
        <Stack.Screen name="login" options={{headerShown:false}} />
        <Stack.Screen name="firstscreen" options={{headerShown:false}} />
    </Stack>
  );
}
