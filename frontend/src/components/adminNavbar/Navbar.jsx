import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
  // const {dispatch} = useContext(DarkModeContext);
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" name="search" placeholder='Search...'/>
                <SearchOutlinedIcon/>
            </div>
            <div className="items">
                <div className="item">
                <LanguageIcon className='icon' />
                English
                </div>
       
                <div className="item">
                <DarkModeIcon className='icon' onClick={()=>{
                  // dispatch({type: "TOGGLE"});
                  console.log("Testing")
                }}/>
                </div>
                
                <div className="item">
                <FullscreenExitIcon className='icon' />
                </div>
                
                <div className="item">
                <NotificationsIcon className='icon' />
                <div className="counter">1</div>
                </div>
                
                <div className="item">
                <ChatBubbleIcon className='icon' />
                <div className="counter">2</div>
                </div>
                
                <div className="item">
                <FormatListBulletedIcon className='icon' />
                </div>
                <div className="item">
               <img src="https://images.pexels.com/photos/1386599/pexels-photo-1386599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" className='avatar' />
                </div>
                
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
