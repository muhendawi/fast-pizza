import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';
import { AnimatePresence, motion } from 'framer-motion';

function Cart() {
  const cart = useSelector((store) => store.cart.cart);
  const { username } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }
  if (!cart.length) return <EmptyCart />;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="px-4 py-3"
        >
          <LinkButton to="/menu">&larr; Back to menu</LinkButton>

          <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
          <motion.ul className="mt-3 divide-y divide-stone-200 border-b">
            <AnimatePresence>
              {cart.map((item, index) => (
                <CartItem item={item} key={item.pizzaId} itemIndex={index} />
              ))}
            </AnimatePresence>
          </motion.ul>
          <div className="mt-6 space-x-2">
            <Button to="/order/new" type="primary">
              Order pizzas
            </Button>

            <Button type="secondary" onClick={handleClearCart}>
              Clear cart
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Cart;
