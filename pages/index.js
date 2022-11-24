import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div className={styles.container}>
      {articles.length > 0 &&
        articles.map((article, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
              padding: "20px",
            }}
          >
            <img
              src={
                article.urlToImage
                  ? article.urlToImage
                  : "https://www.inkling.com/wp-content/uploads/2021/06/SD-default-image.png"
              }
              alt={article.description}
              width={400}
            />
            <p
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                width: "400px",
              }}
            >
              {article.title}
            </p>
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
