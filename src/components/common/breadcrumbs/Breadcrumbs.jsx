import styles from "./Breadcrumbs.module.css"

export default function Breadcrumbs({ items }) {
    return (
        <nav className={styles.breadcrumbs}>
            {items.map((item, i) => (
                <span key={i}>
                    {item}
                    {i !== items.length - 1 && (
                        <span className={styles.separator}> &gt; </span>
                    )}
                </span>
            ))}
        </nav>
    );
}