import { useAuth } from "@/context/AuthContext";
import { Redirect, usePathname } from "expo-router";

export function withAuth(next: () => React.ReactElement) {
  return function AuthMIddleware() {
    const { authState } = useAuth();
    const pathname = usePathname();

    if (authState.loading) {
      return <Redirect href={"/loading-screen"} />;
    }

    if (!authState.authenticated && pathname.startsWith("/(auth)")) {
      return next();
    }

    if (
      !authState.authenticated &&
      !pathname.startsWith("/(auth)") &&
      pathname !== "/loading-screen"
    ) {
      return <Redirect href={"/(auth)/login"} />;
    }

    if (authState.authenticated && pathname.startsWith("/(auth)")) {
      return <Redirect href={"/(karyawan)"} />;
    }

    return next();
  };
}
