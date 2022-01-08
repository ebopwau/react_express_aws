import React from "react";
//@ts-ignore
import styles from './Selector.module.scss'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import {languages as langData} from "../../constants/languages";

interface ISelector {
    changeLanguage: (arg0:string) => void,
    language: string
}

interface Ilanguages {
    key: string,
    text: string
}

export const Selector = ({changeLanguage, language}:ISelector) =>  {

    const handleChange = (value:string) => {
        changeLanguage(value);
    };

    return (
        <div className={styles['selector']}>
            <Box>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"

                    value={language}
                    label="Language"
                    onChange={(e) => handleChange(e.target.value)}
                >
                    {langData.map((language:Ilanguages) => {
                        return (
                        <MenuItem
                            key={language.key}
                            value={language.key}
                        >
                            {language.text}
                        </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            </Box>
        </div>
    )
}
