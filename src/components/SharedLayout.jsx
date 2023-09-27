import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
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
      <Outlet />
    </div>
  );
};
