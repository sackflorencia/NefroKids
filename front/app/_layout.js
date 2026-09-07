import { useEffect, useState } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import AuthService from "../../../back/services/AuthService";

export default function RootLayout() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const authService = new AuthService();
    const unsubscribe = authService.subscribeAuthChanges
      ? authService.subscribeAuthChanges((currentUser) => {
          setUser(currentUser);
          setLoading(false);
        })
      : authService.subscribeToAuthChanges((currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      // Si no hay usuario, lo mandamos al intro de auth
      router.replace("/(auth)/Introduction");
    } else if (user && inAuthGroup) {
      // Si ya hay usuario, lo mandamos a las pestañas principales
      router.replace("/(tabs)/home");
    }
  }, [user, loading, segments]);

  if (loading) {
    return null;
  }

  return <Slot />;
}