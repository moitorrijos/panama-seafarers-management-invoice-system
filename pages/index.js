import Head from "next/head"
import styles from "./index.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Panama Seafarers Management | Invoice System</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.login}>
        <img className={styles.logo} src="/logo-psm.svg" alt="Logo PSM" />
        <h1>Invoice System</h1>
        <form className={styles.loginForm}>
          <label>
            Usuario
          </label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">
            Password
          </label>
          <input type="password" name="password" id="password" />
          <input type="submit" value="Log in" />
        </form>
        <p>
          This software is intended for use exclusively for Panama Seafarers
          Management staff as administrators may see fit. It is
          the intelectual property of{" "}
          <a
            href="https://moitorrijos.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Juan Moisés Torrijos
          </a>
          . All rights reserved © {new Date().getFullYear()}.
        </p>
      </div>
    </div>
  )
}
