import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-6">
      <h2 className="text-5xl font-bold mb-4">404</h2>
      <p className="text-xl mb-6">
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#0097a3c3] text-white rounded cursor-pointer transition"
      >
        Go Home
      </Link>
    </div>
  );
}
