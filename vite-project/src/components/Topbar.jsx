// const Header = ((title)) => {
//     function Header()  {
//     return (
//         <header className="Header">
//             <h1>Title</h1>
//         </header>
//     )
// }

// export default Header;

import "./topbar.css"

export default function Topbar() {
  return (
    <div className='top'>
        <div className="topleft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-whatsapp-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
        </div>
        <div className="topcenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topright">
            <img className="topImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vR6epyhgJCVPScvMRvab6YCyqYe-tcw65w&usqp=CAU" alt="icon"/>
            <i className=" topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
        </div>
        
        
    </div>
  )
}
 