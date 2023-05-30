import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome My Home Page',
  description: 'Generated by create next app',
  
}


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Pages</h1>
      <button className={styles.btn}>
        <Link href='/about'>About Page</Link>
      </button>
    </main>
  )
}
