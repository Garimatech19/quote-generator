import { useState, useEffect } from "react";
import { FaHeart, FaList,FaCopy, FaSun, FaMoon, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const QuoteGenerator = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetchQuote();
  }, [page]);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/quotes?limit=1&skip=${(page - 1) * 1}`);
      const data = await res.json();
      setQuote(data.quotes[0]);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
    setLoading(false);
  };

  const fetchRandomQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
    setLoading(false);
  };

  const toggleFavorite = (selectedQuote: Quote) => {
    const exists = favorites.some((fav) => fav.id === selectedQuote.id);
    const updatedFavorites = exists
      ? favorites.filter((fav) => fav.id !== selectedQuote.id)
      : [...favorites, selectedQuote];
    setFavorites(updatedFavorites);
    // localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const copyToClipboard = (quoteText: string) => {
    navigator.clipboard.writeText(`${quoteText}`);
    alert("Quote copied!");
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-purple-300 to-purple-600 text-black"} p-6`}>
      <h1 className="text-4xl font-bold mb-8 p-5 ">Welcome to the Quote Generator!🥳</h1>
      <div className="absolute top-4 right-4">
        <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-300" />}
        </button>
      </div>

      <div className="absolute top-4 left-4">
        <button onClick={() => setDrawerOpen(!drawerOpen)} className="text-xl">
          <FaList />
        </button>
      </div>
      
      {drawerOpen && (
        <div className="fixed left-0 top-0 h-full w-64 bg-orange-300 dark:bg-gray-800 dark:text-blue shadow-lg p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-orange-500 ">My Favorite Quotes❤️ </h3>
            <button onClick={() => setDrawerOpen(false)} className="text-orange-500 text-xl">
              <FaTimes />
            </button>
          </div>
          <ul>
            {favorites.map((fav) => (
              <li key={fav.id} className="py-2 border-b border-gray-300 dark:border-gray-600">{fav.quote} - {fav.author}</li>
            ))}
          </ul>
          {favorites.length > 0 && (
            <button onClick={() => setFavorites([])} className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg w-full">
              Clear Favorites
            </button>
          )}
        </div>
      )}

      <div className="max-w-2xl mx-auto text-center">
        {loading && <p className="text-center">Loading...</p>}

        {quote && (
          <motion.div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg">
            <p className="italic text-gray-900 dark:text-gray-200 text-lg">{quote.quote}</p>
            <h3 className="font-semibold mt-2 text-gray-900 dark:text-gray-300">- {quote.author}</h3>
            <div className="flex justify-center gap-2 mt-4">
              <button 
                onClick={() => toggleFavorite(quote)} 
                className={`text-xl transition-colors duration-300 ${favorites.some((fav) => fav.id === quote.id) ? "text-red-500" : "text-gray-400"}`}>
                <FaHeart />
              </button>
              <button onClick={() => copyToClipboard(`${quote.quote} - ${quote.author}`)} className="text-gray-500">
                <FaCopy />
              </button>
            </div>
          </motion.div>
        )}

        <div className="flex justify-between mt-6">
          <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Previous</button>
          <button onClick={() => setPage((prev) => prev + 1)} className="bg-gray-500 text-white px-4 py-2 rounded-lg">Next</button>
        </div>

        <button onClick={fetchRandomQuote} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 w-full">
          Generate Random Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;

