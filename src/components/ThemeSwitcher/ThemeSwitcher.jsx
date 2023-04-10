import { BsBrightnessHigh, BsMoonStars } from 'react-icons/bs';

export const ThemeSwitcher = ({ switchTheme, themeTitle }) => {
  
  return (
    <div>
      <button type="button" onClick={switchTheme}>
        {themeTitle === 'light' ? <BsBrightnessHigh size={30} /> : <BsMoonStars size={30} />}
      </button>
    </div>
  );
};
