import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, ExternalLink, Send, Twitter, Check } from 'lucide-react';

const CONTRACT_ADDRESS = "G9EazLYv1cVjkGU9eFoMQbFW3b5k8gSVzj8E55QBpump";

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-neon selection:text-black font-sans">
      {/* Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-green/40 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-light-green/20 rounded-full blur-[100px] opacity-40"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src="https://i.ibb.co/SD3HnsJG/TYOXLOGO.png" alt="$TYOX Logo" className="w-10 h-10 rounded-full border border-brand-neon/30" referrerPolicy="no-referrer" />
          <span className="font-bold text-xl tracking-wider text-brand-neon">$TYOX</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://x.com/the_year_of_x?s=21" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://t.me/THE_YEAR_OF_X" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Send className="w-5 h-5" />
          </a>
          <a href="https://join.pump.fun/HSag/zqtir1am" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-brand-neon text-black font-bold rounded-full hover:bg-brand-neon/80 transition-colors">
            Buy on Pump.fun
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-20 pb-32 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-brand-neon/20 blur-3xl rounded-full"></div>
          <img 
            src="https://i.ibb.co/SD3HnsJG/TYOXLOGO.png" 
            alt="THE YEAR OF X" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-brand-neon/50 shadow-[0_0_50px_rgba(0,255,65,0.3)] relative z-10 object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter uppercase"
        >
          The Year of <span className="text-brand-neon">X</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl"
        >
          A time when innovation collided with determination. X marked the spot for breakthroughs in tech, crypto, and sustainability.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full max-w-md mx-auto"
        >
          <a 
            href="https://join.pump.fun/HSag/zqtir1am" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-brand-neon text-black font-bold rounded-xl hover:bg-[#00cc33] transition-all hover:scale-105 active:scale-95"
          >
            Buy on Pump.fun <ExternalLink className="w-5 h-5" />
          </a>
          <a 
            href="https://dexscreener.com/solana/61TkZUcepnsusB445fpyT5EYByA8qq4LDYeAv1ofE6jL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-brand-green border border-brand-neon/30 text-white font-bold rounded-xl hover:bg-brand-light-green transition-all hover:scale-105 active:scale-95"
          >
            DexScreener <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Contract Address */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-2 w-full max-w-2xl"
        >
          <span className="text-sm text-gray-500 uppercase tracking-widest font-bold">Token Contract Address</span>
          <div 
            onClick={handleCopy}
            className="flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-xl p-4 cursor-pointer hover:bg-white/10 transition-colors group"
          >
            <span className="font-mono text-sm md:text-base text-gray-300 truncate mr-4">
              {CONTRACT_ADDRESS}
            </span>
            <button className="p-2 bg-brand-neon/10 text-brand-neon rounded-lg group-hover:bg-brand-neon group-hover:text-black transition-colors shrink-0">
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </main>

      {/* About Section */}
      <section className="relative z-10 bg-brand-green/20 border-y border-brand-neon/10 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase">About <span className="text-brand-neon">$TYOX</span></h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                It was the Year of X - a time when innovation collided with determination.
              </p>
              <p>
                X marked the spot for breakthroughs in tech, crypto, and sustainability. $TYOX is more than just a memecoin; it's a movement celebrating the era of exponential growth and the relentless pursuit of the extraordinary.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a href="https://t.me/THE_YEAR_OF_X" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-neon hover:text-white transition-colors font-bold">
                Join Community <Send className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src="https://i.ibb.co/k6cb0qP8/TYi-MG2.jpg" alt="TYOX Image 1" className="rounded-2xl w-full h-48 object-cover border border-white/10 hover:border-brand-neon/50 transition-colors" referrerPolicy="no-referrer" />
            <img src="https://i.ibb.co/27PS1vVf/TYi-MG1.jpg" alt="TYOX Image 2" className="rounded-2xl w-full h-48 object-cover border border-white/10 hover:border-brand-neon/50 transition-colors mt-8" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative z-10 py-24 px-6 max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 uppercase"
        >
          The <span className="text-brand-neon">X</span> Files
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-brand-neon/50 transition-colors"
          >
            <img src="https://i.ibb.co/VcpTHMGN/TYi-MG4.jpg" alt="TYOX Image 3" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 hover:border-brand-neon/50 transition-colors"
          >
            <img src="https://i.ibb.co/5hWXwwv4/TYi-MG3.jpg" alt="TYOX Image 4" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/SD3HnsJG/TYOXLOGO.png" alt="$TYOX Logo" className="w-8 h-8 rounded-full grayscale opacity-50" referrerPolicy="no-referrer" />
            <span className="font-bold text-gray-500">© 2024 THE YEAR OF X. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://tyoxsol.xyz" className="text-gray-500 hover:text-brand-neon transition-colors font-mono text-sm">tyoxsol.xyz</a>
            <a href="https://x.com/the_year_of_x?s=21" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-neon transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://t.me/THE_YEAR_OF_X" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-neon transition-colors">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
