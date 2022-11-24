import { useRouter } from "next/router";
import React from "react";

function User() {
  const router = useRouter();

  const userId = router.query.userId;

  return <div>User - {userId}</div>;
}

export default User;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
    `https://jsonplaceholder.typicode.com/posts/${params.userId}`
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
