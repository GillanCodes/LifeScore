import { useSelector } from 'react-redux'
import { isEmpty } from '../Utils';
import Auth from './Auth/Auth';
import AppContainer from './App/AppContainer';


export default function Home() {

  const userData = useSelector((state:any) => state.userReducer);

  return (
    <>
      {!isEmpty(userData) ? (
        <AppContainer />
      ) : (
        <Auth />
      )}
    </>
  )
}
