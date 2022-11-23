import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div className={styles.container}>
      {articles.length > 0 &&
        articles.map((article, i) => (
          <div key={i}>
            <img
              src={article.urlToImage}
              alt={article.description}
              width={200}
            />
          </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  const apiKey = process.env.NEWS_API_KEY;
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );

    const data = await response.json();
    const articles = data.articles;

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    return {
      props: {
        articles: [],
      },
    };
  }
}
