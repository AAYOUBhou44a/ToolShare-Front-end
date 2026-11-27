import MainLayout from '../../components/layout/MainLayout'

import { useAuth } from '../../context/AuthContext'

function Dashboard() {
  const { user, logout } = useAuth()

  const links = [
    { path: '/client', label: 'Accueil' },
    { path: '/client/equipment', label: 'Équipements' },
    { path: '/client/reservations', label: 'Mes réservations' },
  ]

  return (
    <MainLayout
      user={user}
      links={links}
      onLogout={logout}
    >

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Bienvenue sur ToolShare
        </h1>

        <p className="mt-2 text-slate-500">
          Trouvez et réservez les équipements dont vous avez besoin.
        </p>
      </div>

      <div className="rounded-xl bg-white p-8 shadow-sm">

        <h2 className="text-xl font-bold text-slate-800">
          Commencer une réservation
        </h2>

        <p className="mt-2 text-slate-500">
          Consultez les équipements disponibles dans nos magasins et choisissez
          celui qui correspond à vos besoins.
        </p>

        <button
          onClick={() => window.location.href = '/client/equipment'}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Voir les équipements
        </button>

      </div>

    </MainLayout>
  )
}

export default Dashboard