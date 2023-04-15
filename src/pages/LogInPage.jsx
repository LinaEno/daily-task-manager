import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { login } from 'redux/auth/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from 'redux/auth/authSelectors';
import css from './RegistrationPage/Registration.module.css';
import sun from '../img/login/sun-min.png';
import forest from '../img/login/forest-min.png';
import cloud2 from '../img/login/cloud5.png';
import cloud1 from '../img/login/cloud1-min.png';
import balloon1 from '../img/login/balloon1-min.png';
import balloon2 from '../img/login/balloon2-min.png';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    navigate('/');
  };

  const [mousePos, setMousePos] = useState({});

  const sunX = mousePos.x * 3;
  const sunY = mousePos.y * 5;

  const cloud1Y = mousePos.y * 5;

  const cloud2X = mousePos.x * 20;
  const cloud2Y = -mousePos.y * 5;

  const balloon1X = -mousePos.x * 4;
  const balloon1Y = -mousePos.y * 20;

  const balloon2X = mousePos.x * 8;
  const balloon2Y = mousePos.y * 30;

  useEffect(() => {
    const handleMouseMove = event => {
      setMousePos({ x: event.clientX / 1000, y: event.clientY / 1000 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={css.container__login}>
            <div id={css['scene']}>
              <div
                className={css.layer}
                style={{
                  transform: `translate3d(${sunX}rem, ${sunY}rem, 0rem)`,
                  willChange: 'transform',
                }}
              >
                <img
                  className={css.image}
                  src={sun}
                  alt="landscape"
                  height={'100%'}
                />
              </div>
              <div className={css.layer}>
                <img
                  className={css.image}
                  src={forest}
                  alt="landscape"
                  height={'100%'}
                />
              </div>
              <div
                className={css.layer}
                style={{
                  transform: `translate3d(0rem, ${cloud1Y}rem, 0rem)`,
                  willChange: 'transform',
                }}
              >
                <img
                  className={css.image}
                  src={cloud1}
                  alt="landscape"
                  height={'100%'}
                />
              </div>
              <div
                className={css.layer}
                style={{
                  transform: `translate3d(${cloud2X}rem, ${cloud2Y}rem, 0rem)`,
                  willChange: 'transform',
                }}
              >
                <img
                  className={css.image}
                  src={cloud2}
                  alt="landscape"
                  height={'100%'}
                />
              </div>
              <div
                className={css.layer}
                style={{
                  transform: `translate3d(${balloon1X}rem, ${balloon1Y}rem, 0rem)`,
                  willChange: 'transform',
                }}
              >
                <img
                  className={css.image}
                  src={balloon1}
                  alt="landscape"
                  height={'100%'}
                />
              </div>
              <div
                className={css.layer}
                style={{
                  transform: `translate3d(${balloon2X}rem, ${balloon2Y}rem, 0rem)`,
                  willChange: 'transform',
                }}
              >
                <img
                  className={css.image}
                  src={balloon2}
                  alt="landscape"
                  height={'100%'}
                />
              </div>
            </div>
          </div>
          <div className={css.box__register}>
            <div className={css.register}>
              <h2>Log in</h2>
              <form
                className={css.register__form}
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className={css.register__inputbox}>
                  <input
                    className={css.login__input}
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label className={css.register__label}> E-mail</label>
                </div>
                <div className={css.register__inputbox}>
                  <input
                    className={css.login__input}
                    type="password"
                    name="password"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                  <label className={css.register__label}> Password </label>
                </div>

                <button className={css.login__button} type="submit">
                  Log in
                </button>
                <p className={css.register__link}>
                  Have not an account?{' '}
                  <Link
                    to={'/register'}
                    style={{ color: '#660c39', fontWeight: '700' }}
                  >
                    Create account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
