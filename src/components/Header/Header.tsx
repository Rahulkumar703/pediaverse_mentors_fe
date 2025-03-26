import { Search } from "lucide-react";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="bg-white shadow-sm flex items-center justify-between px-6 py-4">
      {children}
      <div className="flex items-center gap-4 sm:w-1/2 w-2/3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search students..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </header>
  );
}
