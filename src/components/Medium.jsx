import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch Medium articles from your Medium RSS feed
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@charugundlavipul')
      .then((response) => response.json())
      .then((data) => setArticles(data.items))
      .catch((error) => console.error('Error fetching Medium articles:', error));
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Articles</p>
        <h2 className={`${styles.sectionHeadTextLight} `}>Medium Articles.</h2>
        {/* <iframe src='https://widgets.sociablekit.com/medium-publication-feed/iframe/25516248' frameborder='0' width='100%' height='750'></iframe> */}
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {articles.map((article) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4" key={article.guid}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* <img src={article.thumbnail} alt={article.title} className="w-full h-48 object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{article.title}</h3>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(MediumArticles, 'mediumArticles');