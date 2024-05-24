import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from './AppBar.module.css';
import bgPicture from '../../assets/Bg.jpg';

export default function AppBar () {
    const isLogged = useSelector(selectIsLoggedIn);

    return (<div className={css.container} style={{backgroundImage: `url(${bgPicture})`}}>
        <Navigation />
        {isLogged ? <UserMenu/> : <AuthNav/>}
    </div>)
}