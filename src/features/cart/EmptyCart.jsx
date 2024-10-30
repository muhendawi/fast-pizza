import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-4 py-3"
    >
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-5 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </motion.div>
  );
}

export default EmptyCart;
