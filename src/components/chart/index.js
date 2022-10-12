import { useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './chart.css'
const Piechart = () => {
  useEffect(() => {
    
  }, [])
  return (
    <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
      <div>
        <canvas id="myChart" width="1600" height="400"></canvas>
      </div>
    </ScrollAnimation>
  );
}
export default Piechart