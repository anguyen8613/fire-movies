import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/fire-logo.jpg'

const NavBar = ({account}) => {
    return (
        <div className="navbar">

            <div className="account-info">
                <p>Welcome {account.username}</p>
                <img className="avatar" src={account.avatar.url}/>
            </div>
        </div>
    )
}

export default NavBar