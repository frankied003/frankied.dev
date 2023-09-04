import Head from "next/head";
import React from "react";

export default function Metadata() {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>Frankied.dev</title>
      <meta name="title" content="Frankied.dev" />
      <meta
        name="description"
        content="My name is Frankie DiGiacomo and I am a Full-Stack Developer, UI/UX Designer, and a Data Scientist. Contact me for availability."
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://frankied.dev/" />
      <meta property="og:title" content="Frankied.dev" />
      <meta
        property="og:description"
        content="My name is Frankie DiGiacomo and I am a Full-Stack Developer, UI/UX Designer, and a Data Scientist. Contact me for availability."
      />
      <meta
        property="og:image"
        content="https://www.frankied.dev/assets/introduction/frankied_char.webp"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://frankied.dev/" />
      <meta property="twitter:title" content="Frankied.dev" />
      <meta
        property="twitter:description"
        content="My name is Frankie DiGiacomo and I am a Full-Stack Developer, UI/UX Designer, and a Data Scientist. Contact me for availability."
      />
      <meta
        property="twitter:image"
        content="https://www.frankied.dev/assets/introduction/frankied_char.webp"
      />
    </Head>
  );
}
