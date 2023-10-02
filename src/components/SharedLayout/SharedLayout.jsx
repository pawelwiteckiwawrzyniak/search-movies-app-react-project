import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './SharedLayout.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    color: rgb(0, 201, 201);
  }
`;

export const SharedLayout = () => {
  return (
    <div>
      <div className={css.header}>
        <nav className={css.nav}>
          <StyledLink to="/goit-react-hw-05-movies/" className={css.link}>
            Home
          </StyledLink>
          <StyledLink to="movies" className={css.link}>
            Movies
          </StyledLink>
        </nav>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
