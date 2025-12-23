import { Routes, Route, Navigate } from 'react-router'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'
import ProtectedRoute from '@/components/core/protectedRoute'
import PublicRoute from '@/components/core/publicRoute'
import DashboardLayout from '@/components/core/dashboard/dashboard-layout'
import Login from '@/pages/auth/Login'
import Dashboard from '@/pages/dashboard'
import Register from './pages/auth/Register'

// Component to handle root path redirect
const RootRedirect = () => {
  const { isAuthenticated, isLoading } = useAuth()
  
  if (isLoading) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }
  
  return <Navigate to={isAuthenticated ? '/dashboard' : '/login'} replace />
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Root path - redirect based on auth status */}
        <Route path="/" element={<RootRedirect />} />
        
        {/* Unauthenticated routes (redirects to dashboard if already logged in) */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Authenticated routes (redirects to login if not authenticated) */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>

        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App