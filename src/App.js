import './App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [5, 14, 8, 5, 11, 3],
      backgroundColor: [
        'rgba(0, 255, 0, 0.5)', //lime
        'rgba(0, 250, 154, 0.5)',
        'rgba(154, 205, 50, 0.5)',
        'rgba(143, 188, 143, 0.5)',
        'rgba(173, 255, 47, 0.5)',
        'rgba(205, 92, 92, 0.5)',
      ],
      borderColor: [
        'rgba(0, 255, 0, 1)',
        'rgba(0, 250, 154, 1)',
        'rgba(154, 205, 50, 1)',
        'rgba(143, 188, 143, 1)',
        'rgba(173, 255, 47, 1)',
        'rgba(205, 92, 92, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function App() {

  return (
    <div className="parent">
    <h1>Pie Chart</h1>
      <Pie data={data} />
  </div>
  
  );  
}

export default App;
