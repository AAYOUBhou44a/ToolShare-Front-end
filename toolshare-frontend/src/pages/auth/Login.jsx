import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import authService from '../../services/authService'
import { useAuth } from '../../context/AuthContext'

function Login() {
  const navigate = useNavigate()

  const { login, isAuthenticated, user } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (isAuthenticated) {
    if (user?.role === 'admin') {
      return <Navigate to="/admin" replace />
    }

    if (user?.role === 'manager') {
      return <Navigate to="/manager" replace />
    }

    return <Navigate to="/client" replace />
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')
    setLoading(true)

    try {
      const response = await authService.login({
        email,
        password,
      })

      const userData = response.user
      const accessToken = response.token

      login(userData, accessToken)

      if (userData.role === 'admin') {
        navigate('/admin')
      } else if (userData.role === 'manager') {
        navigate('/manager')
      } else {
        navigate('/client')
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        'Email ou mot de passe incorrect.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            ToolShare
          </h1>

          <p className="mt-2 text-slate-500">
            Connectez-vous à votre compte
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Adresse email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemple@gmail.com"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Mot de passe
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Votre mot de passe"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>

        </form>

      </div>
    </div>
  )
}

export default Login