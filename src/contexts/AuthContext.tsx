'use client';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode}> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userData: string | null = localStorage.getItem('user');
        if (userData) {
          setUser(JSON.parse(userData));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
          {children}
        </AuthContext.Provider>
    );
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};