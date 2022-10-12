import { useReactCountdown } from "use-react-countdown";
import './countdown.css';

const Countdown = () => {
  let dateToEndCountdownAt = "April 22, 2022 00:00:00";
  const { days, hours, minutes, seconds } =
    useReactCountdown(dateToEndCountdownAt);
  return (
    <>
      <div className='countdown-group'>
        <div>{days}</div> :<div> {hours} </div>: <div>{minutes}</div> : <div>{seconds}</div>
      </div>
    </>
  );
}
export default Countdown