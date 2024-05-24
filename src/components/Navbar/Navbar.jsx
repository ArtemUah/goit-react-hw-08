import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthorizationNav from "../AuthorizationNav/AuthorizationNav";
import css from '../Navbar/Navbar.module.css';
import bgPicture from '../../assets/Bg.jpg';

export default function NavBar () {
    const isLogged = useSelector(selectIsLoggedIn);

    return (<div className={css.container} style={{backgroundImage: `url(${bgPicture})`}}>
        <Navigation />
        {isLogged ? <UserMenu/> : <AuthorizationNav/>}
    </div>)
}