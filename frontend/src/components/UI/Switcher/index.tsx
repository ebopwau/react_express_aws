import React from 'react'
//@ts-ignore
import styles from './Switcher.module.scss'

interface ISwitcher {
    onClick: () => void
}

export const Switcher = ({onClick}:ISwitcher) => {
    return (
        <button onClick={onClick} className={styles['switch']} />
    )
}
