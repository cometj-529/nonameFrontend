"use client";

import { useRouter } from "next/navigation";
import useSWR from "swr";

export default function Logout() {
  const router = useRouter();

  const fetcher = (...args) =>
    fetch(...args, { credentials: "include" }).then((res) => res.json());

  const { data, err } = useSWR(`${process.env.API_SERVER}/logout`, fetcher);

  return <h3>로그아웃 페이지</h3>;
}
