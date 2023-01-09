import Image from "next/image"

import styles from '../styles/About.module.css'
export default function About(){
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>lorem, ipsum dolar sit amet concester adicipiks. In rellat impedit neque kt lorem, ipsum dolar sit amet concester adicipiks. In rellat impedit neque kt</p>
            < Image src='/images/charizard.png' width="300" height="300" alt="Charizard"/>
        </div>
    )
}
