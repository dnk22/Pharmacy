import heart from 'assets/svg/icon-heart.svg';
import forward from 'assets/svg/icon-forward.svg';
import search from 'assets/svg/icon-search.svg';
import menu from 'assets/svg/menu.svg';

const icon = {
  forward,
  heart,
  search,
  menu,
};

export type IconProps = keyof typeof icon;
export default icon;
