import { useEffect, useState } from 'react';

const UseCheckRole = email => {
    const [useRole, setUseRole] = useState(false);

    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/allusers?email=${email}`)
            .then(res => res.json())
            .then(data =>{
                setUseRole(data?.role)
            })
        }
    }, [email])
    return [useRole]
};

export default UseCheckRole;