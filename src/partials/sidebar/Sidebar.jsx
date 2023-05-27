import { Link, NavLink } from 'react-router-dom';
import {
  AdjustmentsHorizontalIcon,
  FaceSmileIcon,
  InboxStackIcon,
  SwatchIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

const Sidebar = ({ expanded }) => {
  const sideNavItems = [
    {
      link: '/dashboard',
      icon: AdjustmentsHorizontalIcon,
      name: 'Dashboard',
    },
    {
      link: '/customers',
      icon: UsersIcon,
      name: 'Customers',
    },
    {
      link: '/products',
      icon: SwatchIcon,
      name: 'Products',
    },
    {
      link: '/orders',
      icon: InboxStackIcon,
      name: 'Orders',
    },
  ];
  return (
    <div
      className={`${
        expanded ? 'w-[50%] lg:w-1/5 pl-3' : 'w-[0] md:w-12 md:pl-3'
      } transition-all ease duration-400 flex flex-col h-screen bg-gray-800`}
    >
      <div className={`${expanded ? 'pt-3' : 'pt-5'} h-14 w-full shadow-lg`}>
        <Link to="/" className="flex items-center">
          <FaceSmileIcon
            className={`${expanded ? 'h-10 w-10' : 'h-6 w-6'} text-slate-300`}
          />
        </Link>
      </div>
      <ul className="list-none p-0 m-0 flex flex-col gap-1 w-full mt-5">
        {sideNavItems &&
          sideNavItems.map((item, index) => {
            return (
              <li className="p-0 mx-0 my-1" key={index}>
                <NavLink
                  to={item.link}
                  activeClassName="active"
                  className="items-center flex gap-3 py-2"
                >
                  <div>
                    <item.icon className="h-6 w-6 text-slate-400 opacity-100" />
                  </div>

                  <span
                    className={`${
                      expanded
                        ? 'transition-all opacity-100 ease delay-150 duration-300'
                        : 'opacity-0'
                    } text-slate-400`}
                  >
                    {' '}
                    {item.name}{' '}
                  </span>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
