import styles from './confirm.module.css';

const Confirm = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Confirmation success!</h1>
            <p className={styles.text}>Your account successfully confirmed.</p>
            <p className={styles.text}>Go to login page!</p>
            <a className={styles.btn} href='./login'>Visit login page</a>
        </main>
    );
};

export default Confirm;
