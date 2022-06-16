import React, { useState } from 'react';
import { MemberCard } from '../components/MemberCard';
import { Layout } from '../layout/Layout';
import { VscAdd } from 'react-icons/vsc';
import { MdManageAccounts } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { routes } from '../Routes/Routes';
import { ButtonCard } from '../widgets/ButtonCard';


export const Administrator = () =>{

    const navigate = useNavigate();

    const options = [
        {
            title: 'Manage Members',
            action: ()=> navigate(routes.manageMembers),
            icon: MdManageAccounts
        },
    ];

    return(
        <Layout>
            <div className="administrator-container">
                <ButtonCard onClick={()=> navigate(routes.manageMembers)} title={'Manage Members'} manage />
                <ButtonCard onClick={()=> navigate(routes.teams)} title={'Manage Teams'} team />
            </div>
        </Layout>
    )
}