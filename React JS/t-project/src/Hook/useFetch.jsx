import React, { useEffect, useState } from 'react'

const useFetch = (url, cb = null) => {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (!cb) {
                    setState(data)
                } else {
                    cb(data)
                }
            })
            .catch(err => console.log(err))
    }, [])
    return [state, setState]
}

export default useFetch