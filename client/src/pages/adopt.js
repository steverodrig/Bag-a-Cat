import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Adwrap from "../component/Adwrap";
import Footer from "../component/footer";
function Adopt() {

    const { isAuthenticated, loginWithRedirect } = useAuth0();

    if (!isAuthenticated) {
        // eslint-disable-next-line no-unused-expressions
        return (
            loginWithRedirect()
        )
    } return isAuthenticated && (
        <div>
            <Adwrap />
            <Footer />
        </div>
    )
}

export default Adopt;