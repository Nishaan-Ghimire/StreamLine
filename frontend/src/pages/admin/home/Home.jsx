import './home.scss'
import Sidebar from '../../../components/sidebar/Sidebar'
import Navbar from '../../../components/adminNavbar/Navbar'
import Widget from '../../../components/widgets/Widget'
import Featured from '../../../components/Featured/Featured'
import Chart from '../../../components/chart/Chart' 
import TableList from '../../../components/tablelist/TableList'
const Home = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homeContainer">
     <Navbar/>
     <div className="widgets">
      <Widget type="user"/>
      <Widget type="order"/>
      <Widget type="earning"/>
      <Widget type="balance"/>
     </div>
      <div className="charts">
        <Featured/>
        <Chart aspect={2/1} title="Profit and User traffic chart(in million)"/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transaction</div>
        <TableList/>
      </div>
    </div>
    </div>
  )
}

export default Home
