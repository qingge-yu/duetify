import { Link } from 'react-router-dom'
import NewDuetPage from '../NewDuetPage/NewDuetPage'
import AllDuetsPage from '../AllDuetsPage/AllDuetsPage'
import './LoginPage.css'

export default function LoginPage() {
    return (
        <div className='LoginPage'>
            <div className='LoginPageBox'>
                <h1>Welcome to Duetify</h1>
                <h3>Somewhere you and your duet partner will find the best piece of music that fits your needs</h3>
                <Link to="/all" className="buttonLibrary">See Duet Library</Link>
                <Link to="/duets" className="buttonFind">Find Your Duet</Link>
            </div>
        </div>
    )
}