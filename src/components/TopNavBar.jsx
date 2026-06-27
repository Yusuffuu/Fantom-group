import React from 'react';

export default function TopNavBar() {
  return (
    <div className="w-full bg-fantomBlue text-white text-sm py-2 px-4 border-b border-slate-900 hidden sm:block">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        {/* Left Side utilities indicator */}
        <div className="flex items-center space-x-4">
          <img src="./mappin.svg" className="w-8 h-8" />
          <span className="tracking-wide text-fantom-green font-medium">Ruaraka Square, Thika Road, Nairobi</span>
        </div>
        {/* Right Side support link indicators */}
        <div className="flex items-center space-x-4">
          <a href="mailto:info@fantomgroup.com" className="hover:text-white transition-colors">Support Desk</a>
          <span>|</span>
          <span className="text-white">Nairobi, KE</span>
        </div>
      </div>
    </div>
  );
}