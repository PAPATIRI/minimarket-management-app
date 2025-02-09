export interface AuthState {
  token: string | null;
  authenticated: boolean;
  loading: boolean;
}

export interface AuthContextType {
  authState: AuthState;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  checkToken: () => Promise<any>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

interface DataLoginResponse {
  token: string;
  name: string;
}
export interface LoginResponse {
  success: boolean;
  data: DataLoginResponse;
  message: string;
}
