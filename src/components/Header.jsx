import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Welcome
          <br />
          to SellDome
        </h1>

        <p>
          Your Ultimate Fashion Marketplace
          <br />
          Discover. Connect. Create.
        </p>

        <button>Get Started</button>
      </header>
    </>
  );
}

export default Header;
