import React, {useState} from 'react'
//@ts-ignore
import styles from './App.module.scss'
import {Selector} from "./components/Selector";
import {TextArea} from "./components/TextArea";
import {TranslateResult} from './components/TranslateResult'
import {IrequestData} from './types/App.props'

export const App = () => {
  const [requestData, setRequestData] = useState<IrequestData>({
        from: 'ru',
        to: 'en',
    });
  const [translateResult, setTranslateResult] = useState<string>('')

  const changeLanguage = (key:string) => (language:string) => {
      setRequestData({
          ...requestData,
          [key]: language
      })
  }

  return (
      <div className={styles['translate']}>
        <div className={styles['translate__wrapper']}>
            <Selector
                changeLanguage={changeLanguage('from')}
                language={requestData.from}
            />

            <TextArea
                setTranslateResult={setTranslateResult}
                requestData={requestData}
            />
        </div>
          <div className={`${styles['translate__wrapper']} ${styles['translate__wrapper_divider']}`}>div</div>
        <div className={styles['translate__wrapper']}>
            <Selector
                changeLanguage={changeLanguage('to')}
                language={requestData.to}
            />

            <TranslateResult
                translateResult={translateResult}
            />
        </div>
      </div>
  )}
