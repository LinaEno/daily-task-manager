import { ContainerHome } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import css from './Pen.module.css';

const HomePage = () => (
  <ContainerHome>
    <div id={css['rectangle']}>
    Please sign in or sign up to start!
          <span></span>
        </div>
        <div class={css.pen}>
          <div class={css.bodypen}>
            <div class={css.whitestripe}></div>
            <div class={css.blackstripe}></div>
          </div>
          <div class={css.headpen}>
            <div class={css.mine}></div>
          </div>
        </div>
    <Loader />
  </ContainerHome>
);

export default HomePage;
