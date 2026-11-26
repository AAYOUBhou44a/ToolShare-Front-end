import { Link } from 'react-router-dom'

function Unauthorized() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
      <h1 className="text-6xl font-bold text-red-600">
        403
      </h1>

      <h2 className="mt-4 text-2xl font-bold text-slate-800">
        Accès refusé
      </h2>

      <p className="mt-2 text-center text-slate-500">
        Vous n'avez pas les autorisations nécessaires pour accéder à cette page.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Retour à l'accueil
      </Link>
    </div>
  )
}

export default Unauthorized