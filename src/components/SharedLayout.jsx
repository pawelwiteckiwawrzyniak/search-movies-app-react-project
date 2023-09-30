import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="movies">Movies</NavLink>
        </nav>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
