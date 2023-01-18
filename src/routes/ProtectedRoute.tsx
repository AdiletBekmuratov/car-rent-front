import { Navigate, Outlet } from 'react-router-dom';
import { ReactElement, FC } from 'react';

interface IProtectedRouteProps {
  children: ReactElement;
  isAllowed: boolean;
  redirectPath?: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({
  isAllowed,
  redirectPath = '/landing',
  children
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
