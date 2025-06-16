import React from 'react';
import { SideBarDesktop } from '../molecules/sidebar/SideBarDesktop';
import { SideBarMobile } from '../molecules/sidebar/SideBarMobile';

export const SideBar: React.FC = () => {
    return (
        <div>
            <SideBarDesktop />
            <SideBarMobile />
        </div>
    );
};
