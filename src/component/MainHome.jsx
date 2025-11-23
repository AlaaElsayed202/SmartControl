
import React from 'react'
import { NavLink } from 'react-router-dom';

export default function MainHome() {
  return (
    <>
 <nav className="bg-blue-900 text-amber-50 p-4 flex gap-5 justify-center items-center py-6 text-2xl">
      <NavLink
        to="/FanState"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-amber-400 underline" 
            : "font-bold text-amber-50 hover:text-white" 
        }
      >
        Fan
      </NavLink>

      <NavLink
        to="/Conditioner"
        className={({ isActive }) =>
          isActive
            ? "font-bold text-amber-400  underline"
            : "font-bold text-amber-50 hover:text-white"
        }
      >
        Conditioner
      </NavLink>
    </nav>

    
    </>
  );
}
