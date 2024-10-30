import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { deleteItem } from './cartSlice';
import { motion } from 'framer-motion';

function CartItem({ item, itemIndex }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function handleDeleteCartItem() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <motion.li
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ delay: itemIndex * 0.05 }}
      className="py-3 sm:flex sm:items-center sm:justify-between"
    >
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={handleDeleteCartItem}>
          Delete
        </Button>
      </div>
    </motion.li>
  );
}

export default CartItem;
