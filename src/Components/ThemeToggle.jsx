import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useContextHook } from '../context';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useContextHook();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </section>
  );
};
export default ThemeToggle;
