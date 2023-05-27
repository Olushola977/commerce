import { EyeIcon } from '@heroicons/react/24/solid';

const NewCustomers = () => {
  const newCustomers = [
    {
      name: 'Neil Sims',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'neilsims@smile.com',
    },
    {
      name: 'Bonnie Green',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'bonniegreen@smile.com',
    },
    {
      name: 'Michael Gough',
      img: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
      email: 'michaelgough@smile.com',
    },
    {
      name: 'Neil Sims',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'neilsims@smile.com',
    },
    {
      name: 'Bonnie Green',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      email: 'bonniegreen@smile.com',
    },
    {
      name: 'Michael Gough',
      img: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
      email: 'michaelgough@smile.com',
    },
  ];
  return (
    <ul className="w-full">
      {newCustomers &&
        newCustomers.map((item, index) => (
          <li className="pb-2 sm:pb-3 border-b-2 my-2" key={index}>
            <div className="flex items-center justify-between">
              <div className="hidden md:block">
                <img
                  className="w-16 h-16 object-cover rounded"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="w-[80%]">
                <p className="text-sm font-medium text-slate-600 truncate">
                  {item.name}
                </p>
                <p className="text-sm text-slate-500 truncate dark:text-gray-400 truncate">
                  {item.email}
                </p>
              </div>
              <div>
                <EyeIcon className="w-5 h-5 text-slate-400 cursor-pointer" />
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default NewCustomers;
