
function Loading({ message = 'Chargement...' }) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-3">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />

      <p className="text-sm text-slate-500">
        {message}
      </p>
    </div>
  )
}

export default Loading
