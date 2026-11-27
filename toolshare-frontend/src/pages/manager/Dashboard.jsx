import MainLayout from '../../components/layout/MainLayout'

import { useAuth } from '../../context/AuthContext'

function Dashboard() {
  const { user, logout } = useAuth()

  const links = [
    { path: '/manager', label: 'Tableau de bord' },
    { path: '/manager/equipment', label: 'Équipements' },
    { path: '/manager/reservations', label: 'Réservations' },
  ]

  return (
    <MainLayout
      user={user}
      links={links}
      onLogout={logout}
    >

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Espace gestionnaire
        </h1>

        <p className="mt-2 text-slate-500">
          Gérez les équipements et les réservations de votre magasin.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Équipements disponibles
          </p>

          <h2 className="mt-3 text-3xl font-bold text-green-600">
            18
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Réservations en cours
          </p>

          <h2 className="mt-3 text-3xl font-bold text-blue-600">
            7
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            En attente
          </p>

          <h2 className="mt-3 text-3xl font-bold text-orange-600">
            3
          </h2>
        </div>

      </div>

    </MainLayout>
  )
}

export default Dashboard