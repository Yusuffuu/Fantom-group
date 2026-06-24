import React from 'react';

export default function TopNavBar() {
  return (
    <div className="w-full bg-slate-950 text-slate-400 text-xs py-2 px-4 border-b border-slate-900 hidden sm:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side utilities indicator */}
        <div className="flex items-center space-x-4">
          <span className="tracking-wide text-fantom-green font-medium">Corporate Network Status: Operational</span>
        </div>
        {/* Right Side support link indicators */}
        <div className="flex items-center space-x-4">
          <a href="mailto:info@fantomgroup.com" className="hover:text-white transition-colors">Support Desk</a>
          <span>|</span>
          <span className="text-slate-500">Nairobi, KE</span>
        </div>
      </div>
    </div>
  );
}