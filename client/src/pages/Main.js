import React from 'react';
import { Logo } from './Logo';
import { MainStyled } from './Main.styled';
import { Map } from './Map';
import { UserInfo } from './UserInfo';

export const Main = ()=> {
    return(
        <MainStyled>
            <Logo/>
            <UserInfo/>
            <Map/>
        </MainStyled>
    )
}