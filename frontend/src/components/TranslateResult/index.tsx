import React from "react";
//@ts-ignore
import styles from './TranslateResult.module.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface ITranslateResult {
    translateResult: string
}

export const TranslateResult = ({translateResult}:ITranslateResult) => {
    return (
        <div className={styles['result']}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={10}
                    defaultValue={translateResult}
                    disabled
                />
            </Box>
        </div>
    )
}