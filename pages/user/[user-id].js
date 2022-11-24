import { useRouter } from "next/router";
import React from "react";

function User() {
  const router = useRouter();
  console.log(router);

  return <div>User</div>;
}

export default User;
