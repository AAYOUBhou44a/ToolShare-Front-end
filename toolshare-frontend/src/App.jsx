import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { AuthProvider, useAuth } from './context/AuthContext'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Login from './pages/auth/Login'

import AdminDashboard from './pages/admin/Dashboard'
import ManagerDashboard from './pages/manager/Dashboard'
import ClientDashboard from './pages/client/Dashboard'

import ProtectedRoute from './components/common/ProtectedRoute'
import Unauthorized from './components/common/Unauthorized'

const queryClient = new QueryClient()

function HomeRedirect() {
  const { isAuthenticated, user } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (user?.role === 'ADMIN') {
    return <Navigate to="/admin" replace />
  }

  if (user?.role === 'manager') {
    return <Navigate to="/manager" replace />
  }

  return <Navigate to="/client" replace />
}

function AppRoutes() {
  return (
    <Routes>

      {/* Page de connexion */}
      <Route path="/login" element={<Login />} />

      {/* Page d'accès refusé */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Routes administrateur */}
      <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />
      </Route>

      {/* Routes gestionnaire */}
      <Route element={<ProtectedRoute allowedRoles={['manager']} />}>
        <Route
          path="/manager"
          element={<ManagerDashboard />}
        />
      </Route>

      {/* Routes client */}
      <Route element={<ProtectedRoute allowedRoles={['client']} />}>
        <Route
          path="/client"
          element={<ClientDashboard />}
        />
      </Route>

      {/* Page d'accueil */}
      <Route path="/" element={<HomeRedirect />} />

      {/* Route inconnue */}
      <Route path="*" element={<HomeRedirect />} />

    </Routes>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App