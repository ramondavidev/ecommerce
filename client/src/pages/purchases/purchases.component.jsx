import React, { Fragment, useEffect, useState } from 'react';

import Header from '../../components/header/header.component';

import Purchase from '../../components/purchase/purchase.component';
import Footer from '../../components/footer/footer.component';

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
            {
                purchases.map(purchase => (
                    <Purchase purchase={purchase} key={purchase._id} />
                ))
            }
            <Footer />
        </Fragment>
    )
}

export default Purchases;