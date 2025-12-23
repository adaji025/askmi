import { Routes, Route, Navigate } from 'react-router'
import { AuthProvider } from '@/contexts/AuthContext'
import ProtectedRoute from '@/components/core/protectedRoute'
import PublicRoute from '@/components/core/publicRoute'
import Login from '@/pages/auth/Login'
import Dashboard from '@/pages/dashboard'
import Register from './pages/auth/Register'

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        
        {/* Unauthenticated routes (redirects to dashboard if already logged in) */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Route>

        {/* Authenticated routes (redirects to login if not authenticated) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}

export default App