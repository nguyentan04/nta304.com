import { Link } from 'react-router-dom';
import { ROUTES } from 'src/constants';

const LinkMenu = () => {
  return (
    <ul className="menu menu-vertical p-0 lg:menu-horizontal">
      <li className="flex items-center px-2 text-white">
        <Link className="h-12" to={ROUTES.APP.path}>
          {ROUTES.APP.name}
        </Link>
      </li>
    </ul>
  );
};

export default LinkMenu;
