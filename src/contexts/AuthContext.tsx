import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  user: { id: string; email: string } | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ id: string; email: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing auth on mount (e.g., from localStorage)
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedAuth = localStorage.getItem('askmi-auth')
        if (storedAuth) {
          const authData = JSON.parse(storedAuth)
          setIsAuthenticated(true)
          setUser(authData.user)
        }
      } catch (error) {
        console.error('Error checking auth:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, _password: string) => {
    // TODO: Replace with actual API call
    // For now, this is a mock implementation
    // Password parameter is intentionally unused in mock implementation
    await new Promise((resolve) => setTimeout(resolve, 500))
    
    const userData = { id: '1', email }
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem('auth', JSON.stringify({ user: userData }))
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('auth')
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

