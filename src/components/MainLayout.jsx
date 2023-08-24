import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';
import SubTitle from './SubTitle'

const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <SubTitle />
      <Navs />
      <Outlet />
    </div>
  );
};

export default MainLayout;
