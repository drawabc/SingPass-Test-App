import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Dashboard from "../components/Dashboard.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test App</title>
        <meta name="description" content="SingPass Test App" />
      </Head>
      <Dashboard></Dashboard>
    </div>
  );
}
