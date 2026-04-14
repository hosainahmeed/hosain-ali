import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();
  
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">{error.status}</h1>
        <h2 className="text-2xl font-semibold mb-4">{error.statusText}</h2>
        <p className="text-gray-600 mb-8">{error.data?.message || "Something went wrong"}</p>
        <a 
          href="/" 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Home
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Error</h1>
      <p className="text-gray-600 mb-8">An unexpected error occurred</p>
      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-auto max-w-2xl">
        {error instanceof Error ? error.message : String(error)}
      </pre>
      <a 
        href="/" 
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Go Home
      </a>
    </div>
  );
}
