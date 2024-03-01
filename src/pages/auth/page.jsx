import React from 'react'
import dynamic from "next/dynamic";
import Loading from "@/components/loading/Loading";

export default function page() {
  const Login = dynamic(() => import("@/components/auth/page"), {
    loading: () => <Loading />,
  });
  return (
    <Login/>
  )
}
