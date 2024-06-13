import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {name:"january",profit:'70',traffic: '20'},
  {name:"february",profit:'72',traffic: '30'},
  {name:"march",profit:'89',traffic: '31'},
  {name:"april",profit:'23',traffic: '15'},
  {name:"may",profit:'45',traffic: '25'},
  {name:"june",profit:'30',traffic: '27'}
];


const Chart = ({aspect,title}) => {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
     <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="profit" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="traffic" stroke="#82ca9d" />
         
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
