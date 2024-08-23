interface AuthState {
  loading: boolean;
  token: boolean;
}
type AuthAction =
  | { type: 'SET_TOKEN'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'LOGOUT' };

interface AuthContextType extends AuthState {
  logout: () => void;
  setToken: (isAuthenticated: boolean) => void;
  login: (username: string, password: string) => void;
  loading: boolean;
}
