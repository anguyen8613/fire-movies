import Link from 'next/link';
import Image from 'next/image';

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