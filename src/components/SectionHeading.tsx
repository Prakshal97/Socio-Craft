import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ label, title, description, center = true }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary gradient-primary/10 bg-primary/5 rounded-full mb-4">
          {label}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-heading leading-tight max-w-3xl mx-auto">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
