import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack initialRouteName="introduction">
      <Stack.Screen name="Introduction" options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" options={{ headerShown: false }} />
      <Stack.Screen name="LogIn" options={{ headerShown: false }} />
      <Stack.Screen name="UserRegistration" options={{ headerShown: false }} />
      <Stack.Screen name="GuardianRegistration" options={{ headerShown: false }} />
    </Stack>
  );
}