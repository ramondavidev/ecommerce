import React, { Fragment, useEffect, useState } from 'react';

import Header from '../../components/header/header.component';

import './purchases.styles.scss';

import api from '../../utils/api';


const Purchases = () => {

    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        async function fetchMyApi() {
            const response = await api.get('/purchases');
            setPurchases(response.data);
        }
        fetchMyApi();
        
    }, []);

    console.log(purchases);
    return (
        <Fragment>
            <Header />
            purchase page
        </Fragment>
    )
}

export default Purchases;