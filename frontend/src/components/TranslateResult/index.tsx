import React from "react";
//@ts-ignore
import styles from './TranslateResult.module.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Spinner} from "../UI/Spinner";

interface ITranslateResult {
    translateResult: string,
    isLoading: boolean
}

export const TranslateResult = ({translateResult, isLoading}:ITranslateResult) => {
    return (
        <div className={styles['result']}>
            {
                isLoading && <div className={styles['loader']}>
                    <Spinner />
                </div>
            }
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
                    defaultValue={isLoading? '' : translateResult}
                    disabled
                />
            </Box>
        </div>
    )
}