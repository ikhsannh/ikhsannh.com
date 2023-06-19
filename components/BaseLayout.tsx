// import Navigation from "./Navigation";
import Head from "next/head";
import { ReactNode } from "react";

export default function BaseLayout({ children }: { children: ReactNode }) {
return (
    <div>
       <Head>
        <title>Ikhsan N. Huda — Dev.</title>
        <meta name="description" content="Ikhsan N. Huda's personal website. A web developer based in Indonesia." />
        <meta name="keywords" content="Ikhsan N. Huda, Ikhsan, Huda, Ikhsan Huda, Web Developer, Frontend Developer, React Developer, Next.js Developer, Indonesia" />
        <meta name="author" content="Ikhsan N. Huda" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href='/favicon.ico' type="image/x-icon" />
      </Head>
    <div className="container mx-auto">
      {/* <Navigation /> */}
      {children}
    </div>
    </div>
  )
}

