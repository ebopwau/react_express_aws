import axios, {AxiosResponse} from "axios";
import {Iresponse} from '../components/TextArea/TextArea.props'

interface Iparams {
    from: string,
    to: string,
    value: string
}

export default {
    translate: function (obj:Iparams) {
        return new Promise((resolve: (value: Iresponse) => void, reject) => {
            axios.post('/api', obj).then((data:AxiosResponse) => {
                resolve(data?.data?.message)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}