import NavLinks from 'components/NavLinks';
import React from 'react';
import { DashboardLayoutProps } from 'types/props';
import { IsLessThan } from 'utils';
import { SidebarContainer, SidebarMobile, SidebarTitle } from './styles';

const Sidebar: React.VFC<DashboardLayoutProps> = ({
  isSidebarOpened,
  handleSidebarOpened,
}) => {
  const isLessThan768 = IsLessThan(768);

  return isLessThan768 ? (
    <SidebarMobile
      isSidebarOpened={isSidebarOpened}
      onClick={handleSidebarOpened}
    >
      <SidebarContainer>
        <NavLinks />
      </SidebarContainer>
    </SidebarMobile>
  ) : (
    <SidebarContainer>
      <SidebarTitle>Crypto app</SidebarTitle>
      <NavLinks />
    </SidebarContainer>
  );
};

export default Sidebar;
