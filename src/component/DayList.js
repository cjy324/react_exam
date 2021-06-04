import { Link } from 'react-router-dom';
import dummy from '../db/data.json';

export default function DayList(){
  return(
    <>
      <ul className="list_day">
        {dummy.days.map(day => (
          <li key={day.id}>
            {/* Link는 랜더링 시 a태그(+ href)로 랜더링된다 */}
            <Link to={`/day/${day.day}`}>
              Day {day.day}
            </Link>
          </li>
        ))}
        
      </ul>
    </>
  )
};