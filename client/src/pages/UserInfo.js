import React from 'react';
import { Avatar } from './Avatar';
import { Skills } from './Skills';

export const UserInfo = ()=> {
    return(
        <div>
            <div>
                <Avatar/>
            </div>
            <div>
                UserName
            </div>
            <div>
                Level
            </div>
            <div>
                <Skills/>
            </div>

        </div>
    )
}