import { useEffect, useState } from 'react';

const UseCheckRole = email => {
    const [useRole, setUseRole] = useState(false);
    const [isloading, setLoading] = useState(true)

    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/user?email=${email}`)
            .then(res => res.json())
            .then(data =>{
                setUseRole(data?.role)
                setLoading(false)
            })
        }
    }, [email])
    return [useRole, isloading]
};

export default UseCheckRole;