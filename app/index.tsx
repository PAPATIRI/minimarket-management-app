import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/context/AuthContext";

export default function RootPage() {
  const { authState } = useAuth();

  if (authState.loading) {
    return <Redirect href={"/loading-screen"} />;
  }

  return authState.authenticated ? (
    <Redirect href={"/(karyawan)"} />
  ) : (
    <Redirect href={"/(auth)/login"} />
  );
}
