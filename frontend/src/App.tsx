import React, {useState} from 'react'
//@ts-ignore
import styles from './App.module.scss'
import {Selector} from "./components/Selector";
import {TextArea} from "./components/TextArea";
import {TranslateResult} from './components/TranslateResult'
import {Switcher} from './components/UI/Switcher'
import {IrequestData} from './types/App.props'

export const App = () => {
  const [requestData, setRequestData] = useState<IrequestData>({
        from: 'ru',
        to: 'en',
    });
  const [translateResult, setTranslateResult] = useState<string>('');
  const [isLoading, toggleLoading] = useState<boolean>(false)


    const changeLanguage = (key:string) => (language:string) => {
      setRequestData({
          ...requestData,
          [key]: language
      })
  }

  const toggleLanguages = () => {
      setRequestData({
          from: requestData.to,
          to: requestData.from
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
                toggleLoading={toggleLoading}
            />
        </div>
          <div className={`${styles['translate__wrapper']} ${styles['translate__wrapper_divider']}`}>
              <Switcher
                onClick={toggleLanguages}
              />
          </div>
        <div className={styles['translate__wrapper']}>
            <Selector
                changeLanguage={changeLanguage('to')}
                language={requestData.to}
            />

            <TranslateResult
                translateResult={translateResult}
                isLoading={isLoading}
            />
        </div>
      </div>
  )}
