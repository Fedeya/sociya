import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect
} from 'react';

interface AuthState {
  token?: string;
  auth: boolean;
  setToken: Dispatch<SetStateAction<string | undefined>>;
}

export const AuthContext = createContext({} as AuthState);

const AuthProvider: React.FC<{ token?: string }> = ({
  children,
  token: initToken
}) => {
  const [token, setToken] = useState(initToken);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (!token) {
      setAuth(false);
      return;
    }

    if (token) {
      setAuth(true);
      return;
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        auth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
