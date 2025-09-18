import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';

const Learn = () => {
        const articles = [
          {
            title: "What is Cryptocurrency?",
            description: "Understand the basics of crypto, blockchain, and how digital currencies work.",
            link: "#",
          },
          {
            title: "How to Start Investing in Crypto",
            description: "A beginner’s guide to buying, holding, and securing crypto assets.",
            link: "#",
          },
          {
            title: "Top 10 Crypto Terms You Must Know",
            description: "A glossary of essential terms every trader and investor should know.",
            link: "#",
          },
          {
            title: "Understanding Blockchain Technology",
            description: "Learn how blockchain works and its applications beyond cryptocurrency.",
            link: "#",
          },
          {
            title: "Crypto Trading Strategies for Beginners",
            description: "Explore different trading strategies to maximize your crypto investments.",
            link: "#",
          },
          {
            title: "The Future of Cryptocurrency",
            description: "Insights into the future trends and potential of digital currencies.",
            link: "#",
          },  
        ];
      
        return (
            <div>
                <Navbar/>
          <div className="min-h-screen bg-gray-900 text-white px-8 py-12">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-black mb-8 text-center tracking-tight text-white">📘 Learn Crypto with NexoTrack</h1>
              <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
                Stay informed. Learn the fundamentals and trends shaping the crypto world.
              </p>
      
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 border border-gray-600 shadow-xl p-8 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 rounded-2xl"
                  >
                    <h2 className="text-2xl font-bold mb-4 text-white">{article.title}</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">{article.description}</p>
                    <a
                      href={article.link === "#" ? "https://www.tradingview.com/news/crypto/" : article.link}
                      className="text-gray-400 hover:text-white hover:underline font-bold text-lg transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More →
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-20">
              <h2 className="text-4xl font-black text-center mb-6 text-white">Join Our Community</h2>
              <p className="text-xl text-gray-300 text-center mb-10 max-w-2xl mx-auto">
                Connect with fellow crypto enthusiasts and stay updated with the latest news.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://discord.gg/nexotrack"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 transition-all duration-300 shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 text-lg rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Discord
                </a>
              </div>

            </div>
          </div>
          <Footer/>
          </div>
        );
      }

export default Learn
