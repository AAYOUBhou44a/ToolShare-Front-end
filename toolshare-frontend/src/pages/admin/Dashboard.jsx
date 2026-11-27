import MainLayout from '../../components/layout/MainLayout'

import { useAuth } from '../../context/AuthContext'

function Dashboard() {
  const { user, logout } = useAuth()

  const links = [
    { path: '/admin', label: 'Tableau de bord' },
    { path: '/admin/stores', label: 'Magasins' },
    { path: '/admin/managers', label: 'Gestionnaires' },
    { path: '/admin/equipment', label: 'Équipements' },
    { path: '/admin/reservations', label: 'Réservations' },
  ]

  return (
    <MainLayout
      user={user}
      links={links}
      onLogout={logout}
    >

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Tableau de bord
        </h1>

        <p className="mt-2 text-slate-500">
          Bienvenue dans votre espace administrateur.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Magasins
          </p>

          <h2 className="mt-3 text-3xl font-bold text-blue-600">
            12
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Gestionnaires
          </p>

          <h2 className="mt-3 text-3xl font-bold text-green-600">
            8
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Équipements
          </p>

          <h2 className="mt-3 text-3xl font-bold text-purple-600">
            45
          </h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Réservations
          </p>

          <h2 className="mt-3 text-3xl font-bold text-orange-600">
            28
          </h2>
        </div>

      </div>

    </MainLayout>
  )
}

export default Dashboard