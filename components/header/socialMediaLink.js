import Link from "next/link";
import React from "react";

export default function SocialMediaLink(props) {
  const { icon, link } = props;

  return (
    <div className="social-media-link">
      <Link href={link} target="#">
        {icon}
      </Link>
    </div>
  );
}
