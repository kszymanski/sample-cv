import React from 'react';
import { Header } from 'semantic-ui-react'
import './style.css'

const PersonalDetails = () => (
    <div className='personal-details'>
        <Header size='large'>ZENON MARTYNIUK</Header>
        <Header size='medium'>Date of birth</Header>
        <div>18/08/1994</div>
        <Header size='medium'>Address</Header>
        <div>ul. Bojkowska 37A</div>
        <div>44-100 Gliwice</div>
        <Header size='medium'>Telephone</Header>
        <div>500 500 500</div>
        <Header size='medium'>Email</Header>
        <div>zenon.martyniuk@buziaczek.pl</div>
    </div>
)

export default PersonalDetails;