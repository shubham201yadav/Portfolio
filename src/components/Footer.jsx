import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-400">
          © {currentYear} Shubham Yadav. All rights reserved.
        </p>
        <p className="text-sm mt-2 font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-fuchsia-600">
          Built with ❤️ by Shubham Yadav
        </p>
      </div>
    </footer>
  );
}
