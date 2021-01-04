import React, { useState, useEffect } from "react";
import AppCard from "../component/AppCard";
import API from "../utils/API";
import { Link } from "react-router-dom"
import "../component/Cards.css"
import Footer from "../component/footer";
import "../component/admin.css";


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
  
    <div className='cards__admin'>
    <h1>Admin page</h1>
    <Link to={`/catpost`}>Add a cat for adoption.</Link>
    <div className='cards__container'>
        <div className='cards__wrapper'>

            {apps.length > 0 ? (
                <ul className='cards__items'>
                    {apps.map(app => {
                        return (
                        
                            <div className='admin__wrapper'>
                            <AppCard 
                                id={app._id}
                                catID={app.catID}
                                name={app.name}
                                email={app.email}
                                phone={app.phone}
                            />                           
                            </div>
                            
        
                        );
                    })}
                </ul>
            ): (
                <h3>No applicants to review. Have some coffee!</h3>
            )}
                   
        </div>
    </div>
    <Footer />
    </>
    )
}

export default Admin;