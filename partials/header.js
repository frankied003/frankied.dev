import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      <Link href={"/"}>
        <div className="image-container">
          <Image
            src={"/assets/logo.png"}
            fill
            className="logo"
            alt="Frankied.dev Logo"
          />
        </div>
      </Link>
    </div>
  );
}
