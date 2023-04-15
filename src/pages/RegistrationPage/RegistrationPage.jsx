import { useEffect, useState } from 'react';
import { Await, Link, useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { createAccount } from 'redux/auth/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import css from './Registration.module.css';
import moon from '../../img/register/moon.png';
import forest from '../../img/register/forest.png';
import cloud3 from '../../img/register/cloud3.png';
import cloud2 from '../../img/register/cloud2.png';
import cloud1 from '../../img/register/cloud1.png';
import balloon1 from '../../img/register/balloon1.png';
import balloon2 from '../../img/register/balloon2.png';
import { selectLoading } from 'redux/auth/authSelectors';
import { toast } from 'react-toastify';

export function RegistrationPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [file, setFile] = useState(null);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleCreateAccount = async e => {
    e.preventDefault();
    try {
      await dispatch(
        createAccount({ email, password, userName, file })
      ).unwrap();
      navigate('/');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const [mousePos1, setMousePos1] = useState({});
  const [mousePos2, setMousePos2] = useState({});
  const [mousePos3, setMousePos3] = useState({});
  const [mousePos4, setMousePos4] = useState({});
  const [mousePos5, setMousePos5] = useState({});
  const [mousePos6, setMousePos6] = useState({});

  useEffect(() => {
    const handleMouseMove = event => {
      setMousePos1({ x: event.clientX / 500, y: -(event.clientY / 400) });
      setMousePos2({ x: -(event.clientX / 400), y: event.clientY / 300 });
      setMousePos3({ x: event.clientX / 200, y: -(event.clientY / 200) });
      setMousePos4({ x: -(event.clientX / 200), y: event.clientY / 400 });
      setMousePos5({ x: event.clientX / 300, y: event.clientY / 200 });
      setMousePos6({ x: event.clientX / 500, y: -event.clientY / 400 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className={css.container}>
        <div id={css['scene']}>
          <div
            className={css.layer}
            style={{
              transform: `translate(${mousePos1.x}rem, ${mousePos1.y}rem)`,
            }}
          >
            <img
              className={css.image}
              src={moon}
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
              transform: `translate(0rem, ${mousePos2.y}rem)`,
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
              transform: `translate(0rem, ${mousePos3.y}rem)`,
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
              transform: `translate(${mousePos4.x}rem, 0rem)`,
            }}
          >
            <img
              className={css.image}
              src={cloud3}
              alt="landscape"
              height={'100%'}
            />
          </div>
          <div
            className={css.layer}
            style={{
              transform: `translate(0rem, ${mousePos5.y}rem)`,
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
              transform: `translate(${mousePos6.x}rem, ${mousePos6.y}rem)`,
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
        {loading ? (
          <Loader />
        ) : (
          <div className={css.register}>
            <h2>Registration</h2>
            <form className={css.register__form} onSubmit={handleCreateAccount}>
              <div className={css.register__inputbox}>
                <input
                  className={css.register__input}
                  type="text"
                  name="userName"
                  required
                  onChange={e => setUserName(e.target.value)}
                />
                <label className={css.register__label}>Name</label>
              </div>
              <div className={css.register__inputbox}>
                <input
                  className={css.register__input}
                  type="text"
                  name="email"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
                <label className={css.register__label}>E-mail</label>
              </div>

              <div className={css.register__inputbox}>
                <input
                  className={css.register__input}
                  type="password"
                  name="password"
                  required
                  onChange={e => setPassword(e.target.value)}
                />
                <label className={css.register__label}>Password</label>
              </div>

              <input
                className={css.register__input}
                type="file"
                onChange={e => setFile(e.target.files[0])}
              />
              {/* <label className={css.register__label}>Add foto</label> */}
              <button className={css.register__button} type="submit">
                Registration
              </button>
              <p className={css.register__link}>
                Already have an account ?{' '}
                <Link
                  to={'/login'}
                  style={{ color: '#2c3c99', fontWeight: '700' }}
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
