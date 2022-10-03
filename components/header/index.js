import React from "react";
import styles from "./styles/styles.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.headerLinks}>
        <li>
          <Link href={"/imageGallery"}>Image Gallery</Link>
        </li>
        <li>
          <Link href={"/testSWR"}>TestSWR</Link>
        </li>
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};
