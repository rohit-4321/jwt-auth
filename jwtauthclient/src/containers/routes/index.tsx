import { useRoutes } from 'react-router-dom';
import { LogIn } from '../LogIn';
import SignUp from '../SignUp';

export const Routers = () => {
  const element = useRoutes([
    { path: '/', element: <LogIn /> },
    { path: '/signUp', element: <SignUp /> }
  ]);
  return element;
};

export default Routers;
