import { useEffect, useState } from "react";
import reduxStore from "store/reduxStore";

const Header = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const subscribe = () => {
      reduxStore.subscribe(() => {
        let list = reduxStore.getState().items;
        setCount(list.length);
      });
    }
    subscribe()
  }, []);

  return (
    <div className="flex justify-between border-b pb-8" style={{border: '5px dashed blue'}}>
      <h1 className="font-semibold text-4xl">Shopping Cart</h1>
      <h2 className="font-semibold text-4xl">{count} Items</h2>
    </div>
  );
};

export default Header;
