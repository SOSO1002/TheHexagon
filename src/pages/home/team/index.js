import ScrollAnimation from 'react-animate-on-scroll';
import './team.css'

const teamlist = [
  { img: 'images/queen.jpg', name: 'queen', level: 'founder' },
  { img: 'images/queen.jpg', name: 'queen', level: 'founder' },
  { img: 'images/queen.jpg', name: 'queen', level: 'founder' },
  { img: 'images/queen.jpg', name: 'queen', level: 'founder' },
]

const Team = () => {
  return (
    <div className="team-section" id='team'>
      <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
        <h1 className='section-title'>TEAM</h1>
      </ScrollAnimation>
      <div className="team-container">
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={1}>
          <div className="team-imagebottom">
            {
              teamlist.map((item, idx) => (
                <div className='team-card' key={idx}>
                  <center>
                    <img src={item.img} alt='no-data' />
                    <h2>{item.name}</h2>
                    <p>{item.level}</p>
                  </center>
                </div>
              ))
            }
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
}
export default Team;