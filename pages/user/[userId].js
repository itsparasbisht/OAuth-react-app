import { useRouter } from "next/router";
import React from "react";

function User({ user }) {
  const router = useRouter();
  const userId = router.query.userId;

  console.log(user);

  return (
    <div>
      {user && (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h3>{user.phone}</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(user.address, null, 4)}
          </p>
        </div>
      )}
    </div>
  );
}

export default User;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: {
        userId: `${user.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
