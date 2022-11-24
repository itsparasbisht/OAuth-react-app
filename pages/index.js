import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ users, failed }) {
  console.log(users);

  if (failed) {
    return <h1 style={{ textAlign: "center" }}>Failed to get the users</h1>;
  }

  return (
    <div className={styles.container}>
      {users.length > 0 &&
        users.map((user) => (
          <Link href={`/user/${user.id}`} key={user.id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <h1>{user.name}</h1>
              <h3 style={{ marginLeft: "20px" }}>username - {user.username}</h3>
            </div>
          </Link>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    const users = await response.json();

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    return {
      props: {
        failed: true,
      },
    };
  }
}
