import {
  BellAlertIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

const Header = ({ expanded, setExpanded }) => {
  return (
    <div className="h-14 p-3 w-full shadow-sm flex justify-between">
      <div className="fixed z-50">
        {expanded ? (
          <MinusCircleIcon
            onClick={() => setExpanded(false)}
            className="h-8 w-8 text-slate-600 shadow-lg cursor-pointer rounded-full"
          />
        ) : (
          <PlusCircleIcon
            onClick={() => setExpanded(true)}
            className="h-8 w-8 text-slate-600 shadow-lg cursor-pointer rounded-full"
          />
        )}
      </div>
      <div className="ml-auto flex gap-4">
        <UserIcon className="h-6 w-6 text-slate-600 cursor-pointer" />
        <BellAlertIcon className="h-6 w-6 text-slate-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
