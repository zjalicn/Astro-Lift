import { motion } from "framer-motion";

export const GradientBorder = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className={`p-[1px] rounded-xl bg-gradient-to-r from-primary/50 via-primary to-primary/50 ${className}`}
  >
    {children}
  </motion.div>
);
