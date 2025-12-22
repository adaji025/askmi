import { Routes, Route, Navigate } from 'react-router'
import { AuthProvider } from '@/contexts/AuthContext'
import ProtectedRoute from '@/components/core/ProtectedRoute'
import PublicRoute from '@/components/core/PublicRoute'
import Home from '@/pages/Home'
import Login from '@/pages/auth/Login'
import Dashboard from '@/pages/dashboard'

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        
        {/* Unauthenticated routes (redirects to dashboard if already logged in) */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
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