const HotSelling = () => {
  const hotProducts = [
    {
      productName: 'Mamba WristWatch',
      productImage:
        'https://images.unsplash.com/photo-1614703418052-d5b893d495bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80',
      productPrice: '350,000',
      productDesc:
        'A stylish, classy wristwatch for men with high taste and good sense of fashion.',
      qtySold: '150',
      position: 1,
      movedUp: true,
    },
    {
      productName: 'T - Shirt',
      productImage:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      productPrice: '8,000',
      productDesc:
        'Comfortable and free on the skin, easy to wash, durable and Original.',
      qtySold: '110',
      position: 2,
      movedUp: null,
    },
    {
      productName: 'Women Dress',
      productImage:
        'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80',
      productPrice: '15,400',
      productDesc:
        'For ladies and women alike. Soft, light and can be worn anytime of the day.',
      qtySold: '100',
      position: 3,
      movedUp: false,
    },
    {
      productName: 'Sneakers',
      productImage:
        'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2581&q=80',
      productPrice: '17,000',
      productDesc:
        'Unisex design. Durable, light, easy to wash and can be worn anytime of the day.',
      qtySold: '870',
      position: 4,
      movedUp: false,
    },
  ];
  return (
    <ul className="w-full">
      {hotProducts &&
        hotProducts.map((item, index) => (
          <li className="pb-2 sm:pb-3 border-b-2 my-2" key={index}>
            <div className="flex">
              <div className="hidden md:block">
                <img
                  className="w-24 h-24 object-cover"
                  src={item.productImage}
                  alt={item.productName}
                />
              </div>
              <div className="w-[65%] md:ml-3">
                <p className="text-md font-semibold text-slate-600 truncate">
                  {item.productName}
                </p>
                <p className="text-sm font-medium text-slate-600 truncate">
                  {item.productDesc}
                </p>
                <p className="text-sm text-slate-500 truncate dark:text-gray-400 truncate">
                  Price: # {item.productPrice}
                </p>
              </div>
              <div className="ml-auto flex flex-col items-center gap-3">
                <p className="text-sm text-slate-500 truncate dark:text-gray-400 truncate">
                  Qty Sold: {item.qtySold}
                </p>
                {item.movedUp === true ? (
                  <span className="block text-green-500 font-bold">&#94;</span>
                ) : item.movedUp === false ? (
                  <span className="rotate-180 block text-red-500 font-bold">
                    &#94;
                  </span>
                ) : (
                  <span className="block text-slate-500 font-bold">&#45;</span>
                )}
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default HotSelling;
