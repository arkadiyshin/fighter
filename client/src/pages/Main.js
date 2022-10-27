import React from 'react';
import { Logo } from './Logo';
import { MainStyled } from './Main.styled';
import { Map } from './Map';
import { UserInfo } from './UserInfo';

export const Main = ()=> {
    return(
        <MainStyled>
            <Logo/>
            <div className='flex'>
                <UserInfo/>
                <Map/>
            </div>
        </MainStyled>
    )
}