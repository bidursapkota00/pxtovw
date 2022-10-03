import React from "react";
import styles from "./styles/style.module.css";
import Layout from "components/layout";
import Sidebar from "components/sidebar";

export const LayoutContainer = () => {
  return <div className={styles.layoutContainer}></div>;
};

LayoutContainer.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
