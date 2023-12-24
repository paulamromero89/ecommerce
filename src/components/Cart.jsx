import { useContext, useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";
type current = {
  title: string;
  quantity: number;
  price: number;
}
export const ShoppingCart = () => {
  const contextValue = useContext(CartContext);
  if (contextValue === null) {
    return <div>Loading...</div>;
  }
  const { cart, setCart } = contextValue;
  const quantity: number = cart.reduce((acumulacion: number, current: current): number => {
    return acumulacion + current.quantity;
  }, 0)


  const totalPrice = cart.reduce((acumulador: number, current: current): number => {
    return acumulador + (current.quantity * current.price);
  }, 0);
  const [visible, setVisible] = useState(false)
  // const end = document.getElementById('end');
  // setEndToggle(!endToggle)

  // if(!endToggle){
  //   end.classList.remove('hidden');
  // }else{
  //   end.classList.add('hidden')
  // }

  return (
    <section className="min-h-screen">
      <div className='w-5/6 mx-auto my-10 rounded-2xl bg-slate-300 p-4'>
        <div>
          <h2 className="text-xl font-bold pb-4 max-md:text-center">Items in cart: {quantity}</h2>
        </div>
        <div>
          {cart.map((item) => {

            return (
              <div key={item.id} className=" flex mx-auto py-4 max-md:flex-col">
                <div className="">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full m-auto object-fit w-20 h-20"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex items-center w-11/12 ml-8 justify-between max-md:flex-col">
                  <div className="flex"><p>Quantity:</p><span></span><p className="font-bold ml-2">{item.quantity}</p></div>
                  <div className="flex mx-4"><p> Product: </p><p className="font-bold ml-2">{item.title}</p></div>
                  <div className=" flex"><p>Price:</p><p className="font-bold ml-2">{item.price * item.quantity}$</p></div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-xl font-bold pt-4 text-right max-md:text-center">
          Total: {totalPrice.toFixed(2)} $
        </div>
        <div className="flex justify-center w-52 mx-auto">
          <button className='block mx-auto bg-yellow-200 p-2 rounded-md mt-6 font-bold hover:bg-yellow-300' onClick={() => setVisible(!visible)}>
            Checkout
          </button>
          <button className="block mx-auto bg-yellow-200 p-2 rounded-md mt-6 font-bold hover:bg-yellow-300" onClick={() => setCart([])}>
            Clear Cart
          </button>
        </div>
      </div>
      <p className={`text-center mt-20 text-xl ${visible ? '' : 'hidden'}`} id="end">Thanks for using my app</p>
    </section>
  )
}