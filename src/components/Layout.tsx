import React, { ReactNode } from "react";
import { Music } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-8 border-blue-500 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border-8 border-red-500 animate-spin-slow-reverse"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full border-4 border-yellow-500"></div>
        <div className="absolute top-2/3 left-1/4 w-48 h-48 rounded-full border-4 border-green-500"></div>
      </div>
      
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 md:px-8 flex justify-center">
        <div className="flex items-center space-x-2 text-blue-900">
          <Music size={32} className="text-red-500" />
          <h1 className="text-2xl md:text-3xl font-bold">
            桑田佳祐 vs サザンオールスターズ クイズ
          </h1>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600">
        <p>© 2025 日本の音楽クイズ・アプリ</p>
      </footer>
    </div>
  );
};

export default Layout;