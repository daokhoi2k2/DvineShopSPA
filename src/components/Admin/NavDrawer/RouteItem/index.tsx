import { ArrowIcon } from 'designs/icons/Drawer';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from 'redux/reducers';
import {
  ChildRoutes,
  IconRoute,
  RouteItemChild,
  RouteItemChildWrapper,
  RouteItemWrapper,
  RouteLink,
  ShowMoreRoutes,
  TitleRoute,
} from './styles';

interface IRouteItemComponent {
  route: any;
}

const RouteItem: React.FC<IRouteItemComponent> = (props) => {
  const isAdminDrawerNav = useSelector(
    (state: RootState) => state.config.isAdminNavDrawer
  );
  const path = useLocation();
  const { route } = props;
  const [isOpenChildRoute, setIsOpenChildRoute] = useState(() => {
    const result = route?.self?.findIndex((item: any) => {
      return item.path === path.pathname.toLowerCase();
    });

    return result !== -1 ? true : false;
  });
  return (
    <RouteItemWrapper>
      <RouteLink
        to={route.path}
        active={route.path === path.pathname.toLowerCase() ? 'true' : 'false'}
      >
        <IconRoute>{route.icon}</IconRoute>
        <TitleRoute isAdminDrawerNav={isAdminDrawerNav}>
          {route.title}
        </TitleRoute>
        {route.self && (
          <ShowMoreRoutes
            onClick={() => setIsOpenChildRoute(!isOpenChildRoute)}
            isOpenChildRoute={isOpenChildRoute}
            isAdminDrawerNav={isAdminDrawerNav}
          >
            <ArrowIcon className="w-4 h-4" />
          </ShowMoreRoutes>
        )}
      </RouteLink>
      {route.self && isOpenChildRoute && isAdminDrawerNav && (
        <ChildRoutes>
          {route.self.map((childRoute: any) => {
            return (
              <RouteItemChildWrapper
                active={
                  childRoute.path === path.pathname.toLowerCase() ? true : false
                }
                key={childRoute.path}
              >
                <RouteItemChild to={childRoute.path}>
                  <TitleRoute isAdminDrawerNav={isAdminDrawerNav}>
                    {childRoute.title}
                  </TitleRoute>
                </RouteItemChild>
              </RouteItemChildWrapper>
            );
          })}
        </ChildRoutes>
      )}
    </RouteItemWrapper>
  );
};

export default RouteItem;
