import {useState, useEffect} from 'react'

const useLocalStorage = (key:any) => {
    const initialValue = localStorage.getItem(key) || null

    const [storage, setStorage] = useState(initialValue)

    useEffect(()=>{
        if(storage === null) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, storage)
        }
    }, [key, storage])
    return [storage, setStorage]
}

export default useLocalStorage