import styles from './about.module.css'


export default function  RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
    <main className={styles.main}>
        {children}
    </main>
        </>
    )

}
