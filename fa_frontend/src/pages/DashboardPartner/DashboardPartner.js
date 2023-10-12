import React from 'react';
import { Outlet } from 'react-router-dom';


import Layout from '../Layout/Layout'

import styles from "../../Assests/css/pages/dashboardpartner/dashboardpartner.module.scss"

function DashboardPartner() {
    return (
        <Layout> 
            <Outlet />
        </Layout>
    );
}

export default DashboardPartner;