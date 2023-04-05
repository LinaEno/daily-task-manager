import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import css from './Page404.module.css';

function PageNotFound404() {
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <div className={css.wrapper}>
      <div>
        <div className={css.starsec}></div>
        <div className={css.starthird}></div>
        <div className={css.starfourth}></div>
        <div className={css.starfifth}></div>
      </div>

      <div className={css.lamp__wrap}>
        <div className={css.lamp}>
          <div className={css.cable}></div>
          <div className={css.cover}></div>
          <div className={css.incover}>
            <div className={css.bulb}></div>
          </div>
          <div className={css.light}></div>
        </div>
      </div>

      <div className={css.error}>
        <p className={css.number}>404</p>
        <h1 className={css.title}>Page Not Found</h1>
        <button className={css.btn}>
          <NavLink className={css.link} to={'/'}>
            Go back
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default PageNotFound404;
