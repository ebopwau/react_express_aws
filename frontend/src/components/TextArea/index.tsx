import React, {useEffect, useState} from 'react'
//@ts-ignore
import styles from "./TextArea.module.scss";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import api from '../../api'
import {ITextArea, Iresponse} from './TextArea.props'


export const TextArea = ({setTranslateResult, requestData, toggleLoading}:ITextArea) => {
    const [value, setValue] = useState<string>('');

    const valueHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        if (!value) {
            setTranslateResult('')
            return
        }

        const debounce = setTimeout(() => {
            toggleLoading(true);

            const params = {
                from: requestData.from,
                to: requestData.to,
                value
            };

            api.translate(params).then((data:Iresponse) => {
              setTranslateResult(data.TranslatedText)
              toggleLoading(false)
            })
        },900)

        return () => clearTimeout(debounce)
    }, [value])

    return (
        <div className={styles['text']}>
            <Box
                component="form"
                sx={{'& .MuiTextField-root': { width: '100%' }}}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={10}
                    defaultValue={value}
                    placeholder={'Введите текст'}
                    onChange={valueHandler}
                />
            </Box>
        </div>
    )
}