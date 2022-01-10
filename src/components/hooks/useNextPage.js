import { useEffect, useState } from "react";
import Axios from 'axios';

function useNextPage(offset) {

    const [ movementList, setMovementList] = useState([])
    const [token,setToken] = useState(sessionStorage.getItem('token'))

    const user = JSON.parse(sessionStorage.getItem('user'))

    useEffect(() => {
        if(user) {
        Axios.get(`https://api.finerio.mx/api/users/${user.id}/movements`, {
                headers: {
                    Authorization: 'Bearer ' + token
                },
                params: {
                    deep: true,
                    offset: offset,
                    max: 10,
                    includeCharges: true,
                    includeDeposits: true,
                    includeDuplicates: true
                }
            })
            .then((response) => {
                setMovementList(prevMovementList => {
                    return [...prevMovementList, ...response.data.data]
                });
            })
        }
    }, [offset])

    return movementList
}
export default useNextPage