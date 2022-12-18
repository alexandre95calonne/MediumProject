import { Global } from "../styles/Header.styled"
import { Link } from 'react-router-dom';
import Home from '../Screens/Home'
import CreateArticle from "../Screens/CreateArticle";

export default function Header() {


    return (
        <Global>
            <img src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="medium-logo"/>
            <ul>
                <li><Link to="/">Articles</Link></li>
                {
                    localStorage.getItem('token') && <li><Link to="/create-article">Create an article</Link></li>
                }

                {
                    !localStorage.getItem('token') &&
                    <ul><li><Link to="/sign-in">Sign in</Link></li>
                    <li><Link to="/sign-up">Sign up</Link></li></ul>
                    
                }
            </ul>
        </Global>
    )
}