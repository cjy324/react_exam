import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import dummy from '../db/data.json';  //json-server로 API연결



export default function DayList(){

  const [days, setDays] = useState([])

  // useEffect() hook?
  // 어떤 상태 값이 바뀌었을때 동작하게 할 수 있는 함수
  // 어떤 상태 값이 변할때 다시 렌더링되는 방식
  // vue에서 watch?와 비슷한 개념?
  // useEffect(함수,매개변수2)
  // 두번째 매개변수를 넣어주지않아도 동작은 하지만 불필요하게 계속 함수가 호출됨
  // 두번째 매개변수를 넣어주면 그 매개변수의 값이 변할때만 함수가 호출됨
  useEffect(() => {
    //API 비동기 통신을 위해 'fetch()'를 적용
    fetch(`http://localhost:3001/days`)
    .then(res => {
      return res.json()
      //이렇게 하면 받은값(res)이 json으로 변환되고 promise를 반환함
    })
    .then(data => {
      setDays(data)
    })
  }, [])
  //이렇게 빈 배열을 두번째 매개변수로 넣어주게 되면
  //렌더링 후 처음 한번만 함수가 호출되어 불필요한 호출을 줄일 수 있음

  return(
    <>
      <ul className="list_day">
        {days.map(day => (
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