import { BsBrightnessHigh, BsMoonStars } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/global/selectors';
import { toggleThemeTitle } from 'redux/global/slice';

export const ThemeSwitcher = () => {
  const themeTitle = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleThemeSwitch = e => {
    dispatch(toggleThemeTitle(themeTitle));
  };


  return (
    <div>
      <button type="button" onClick={handleThemeSwitch}>
        {themeTitle === 'light' ? <BsBrightnessHigh size={30} /> : <BsMoonStars size={30} />}
      </button>
    </div>
  );
};
