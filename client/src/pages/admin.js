import React, { useState, useEffect } from "react";
import AppCard from "../component/AppCard";
import API from "../utils/API";
import "../component/Cards.css"

function Admin() {

    const [apps, setApps] = useState([]);

    function loadApps() {
        API.getApps()
        .then(res =>
            setApps(res.data)
            )
            .catch(err => console.log(err));
    }

    useEffect(() => {
        loadApps()
    }, [])

    return (
    <>
    <h1>Admin page</h1>
    <div className='cards__container'>
        <div className='cards__wrapper'>

            {apps.length > 0 ? (
                <ul className='cards__items'>
                    {apps.map(app => {
                        return (
                            <AppCard 
                                catID={app.catID}
                                name={app.name}
                                email={app.email}
                                phone={app.phone}
                            />
                        );
                    })}
                </ul>
            ): (
                <h3>No applicants to review. Have some coffee!</h3>
            )}
        </div>
    </div>
    </>
    )
}

export default Admin;