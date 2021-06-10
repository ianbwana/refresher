import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>
        Ninja List | Home
      </title>
      <meta  name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At illum saepe
        libero, quisquam consequuntur officiis, deleniti, possimus ipsam sunt
        earum repudiandae. Vitae, nisi officiis quas excepturi modi earum illum
        odit recusandae nobis vel quidem sit doloribus maxime non impedit rem.
      </p>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At illum saepe
        libero, quisquam consequuntur officiis, deleniti, possimus ipsam sunt
        earum repudiandae. Vitae, nisi officiis quas excepturi modi earum illum
        odit recusandae nobis vel quidem sit doloribus maxime non impedit rem.
      </p>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At illum saepe
        libero, quisquam consequuntur officiis, deleniti, possimus ipsam sunt
        earum repudiandae. Vitae, nisi officiis quas excepturi modi earum illum
        odit recusandae nobis vel quidem sit doloribus maxime non impedit rem.
      </p>

      <Link href="/ninjas">
        <a  className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  );
}
