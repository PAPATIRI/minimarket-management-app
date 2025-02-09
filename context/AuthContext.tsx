import {
  AuthContextType,
  AuthProviderProps,
  AuthState,
  LoginResponse,
} from "@/utils/types";
import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import api from "@/utils/api";

const defaultAuthContext: AuthContextType = {
  authState: {
    token: null,
    authenticated: false,
    loading: true,
  },
  login: async () => {},
  logout: async () => {},
  checkToken: async () => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    authenticated: false,
    loading: true,
  });

  useEffect(() => {
    loadToken();
  }, []);

  const loadToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("userToken");

      setAuthState({
        token: token,
        authenticated: !!token,
        loading: false,
      });
    } catch (error) {
      console.log("Error loading token", error);
      setAuthState({
        token: null,
        authenticated: false,
        loading: false,
      });
    }
  };

  const checkToken = async () => {
    const token = await SecureStore.getItemAsync("userToken");
    console.log("Current stored token:", token);
  };

  const login = async (
    email: string,
    password: string
  ): Promise<LoginResponse> => {
    setAuthState((prev) => ({ ...prev, loading: true }));

    try {
      const response = await api.post<LoginResponse>("/login", {
        email,
        password,
      });

      const token = response.data.data.token;
      await SecureStore.setItemAsync("userToken", token);

      setAuthState({
        token: token,
        authenticated: true,
        loading: false,
      });
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An error occured during login");
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await api.post("/logout");
    } catch (error) {
      console.error("Error during logout", error);
    } finally {
      await SecureStore.deleteItemAsync("userToken");
      setAuthState({
        token: null,
        authenticated: false,
        loading: false,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, checkToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
