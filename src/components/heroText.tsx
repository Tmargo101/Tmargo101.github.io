import { motion } from "framer-motion";

export function HeroText() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-24 px-4">
            <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
            Full‑Stack Web & React Developer
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg max-w-xl">
            Passionate about building clean, responsive web applications.
            </motion.p>
        </section>
    )
}