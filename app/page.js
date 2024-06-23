import Image from "next/image";
import React from 'react'
import LandingPage from "./landing page/page";
export default function Home() {
  return (<>
    <main className="flex min-h-screen flex-col items-center">
      <LandingPage />

    </main>
    </>
  );
}
