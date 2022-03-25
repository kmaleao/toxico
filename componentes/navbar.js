import styles from '../styles/navbar.module.css'


export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <img src='/radioativo.jpg'width={70}heigth={70}></img>
         <h1>Radioativo</h1>
        </div>
    )
}