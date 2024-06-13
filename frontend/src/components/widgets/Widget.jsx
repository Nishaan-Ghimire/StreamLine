import './widget.scss'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const Widget = ({type}) => {
  let data;
  switch(type){
    case "user":
      data = {
        title: "SIGNUPS",
        isMoney: false,
        link: "See all users",
        icon: <Person2Icon className="icon" 
        style={{
      color:'rgba(238, 76, 76, 0.849)',
      backgroundColor: 'rgb(241, 225, 225)'
    }}/>,
      };
      break;
    case "order":
      data = {
        title: "EP SEND",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartIcon className="icon" style={{
          color:'rgb(94, 226, 94)',
          backgroundColor: 'rgb(241, 225, 225)'
        }}/>,
      };
      break;
    case "earning":
      data = {
        title: "Revenue Collected",
        isMoney: true,
        link: "View net earning",
        icon: <AttachMoneyIcon className="icon" style={{
          color:'rgb(72, 72, 224)',
          backgroundColor: 'rgb(241, 225, 225)'
        }}/>,
      };
      break;
    case "balance":
      data = {
        title: "Current Balance",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletIcon className="icon" style={{
          color:'rgb(62, 243, 243)',
          backgroundColor: 'rgb(241, 225, 225)'
        }}/>,
      };
      break;
      default:
        break;
  }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney?'$':''}200</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <TrendingUpIcon/>
          8.5%
        </div>
  {data.icon}
      </div>
    </div>
  )
}

export default Widget
