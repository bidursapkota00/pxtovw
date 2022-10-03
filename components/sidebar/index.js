import Link from 'next/link'
import styles from './style.module.css'

export default function Sidebar() {
    return (
        <nav className={styles.nav}>
            <input className={styles.input} placeholder="Search..." />
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/dashboard">
                <a>Dashboard</a>
            </Link>
        </nav>
    )
}