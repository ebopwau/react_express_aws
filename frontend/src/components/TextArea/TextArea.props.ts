export interface ITextArea {
    setTranslateResult: any,
    requestData: any,
    toggleLoading: (arg0: boolean) => void
}

export interface Iresponse {
    SourceLanguageCode: string
    TargetLanguageCode: string
    TranslatedText: string
}