import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <Stack initialRouteName="Home">
      <Stack.Screen name="Home" options={{ headerShown: false }} />
      <Stack.Screen name="Levels" options={{ headerShown: false }} />
      <Stack.Screen name="CheckIn" options={{ headerShown: false }} />
      <Stack.Screen name="Review" options={{ headerShown: false }} />
      <Stack.Screen name="GameScreen" options={{ headerShown: false }} />
      <Stack.Screen name="Questions" />
    </Stack>
  );
}