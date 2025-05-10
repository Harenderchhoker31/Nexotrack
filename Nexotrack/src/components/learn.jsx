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
        ];
      
        return (
            <div>
                <Navbar/>
          <div className="min-h-screen bg-black text-white px-6 py-10">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-center">📘 Learn Crypto with NexoTrack</h1>
              <p className="text-gray-400 text-center mb-10">
                Stay informed. Learn the fundamentals and trends shaping the crypto world.
              </p>
      
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
                  >
                    <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                    <p className="text-gray-400 mb-4">{article.description}</p>
                    <a
                      href={article.link}
                      className="text-blue-500 hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer/>
          </div>
        );
      }

export default Learn
