import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartQuantity, getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { AnimatePresence, motion } from 'framer-motion';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  // if (!totalCartQuantity) return null;

  return (
    <>
      <AnimatePresence>
        {totalCartQuantity ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base"
          >
            <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
              <span>{totalCartQuantity} pizzas</span>
              <span>{formatCurrency(totalCartPrice)}</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default CartOverview;
