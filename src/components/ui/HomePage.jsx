"use client";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";
import LoaderUi from "./LoaderUi";

export default function HomePage() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("/api/categories");
                if (!res.ok) throw new Error("Failed to fetch categories");
                const data = await res.json();
                setCategories(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white px-6 py-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-900">
                    Choose a <span className="text-blue-600">Quiz Category</span>
                </h1>

                {loading && <p className="text-center text-gray-500"><LoaderUi/></p>}
                {error && <p className="text-center text-red-500">Error: {error}</p>}

                {!loading && !error && (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.12,
                                },
                            },
                        }}
                    >
                        {categories.map((cat) => (
                            <CategoryCard key={cat.id} category={cat} />
                        ))}
                    </motion.div>
                )}
            </div>
        </main>
    );
}
