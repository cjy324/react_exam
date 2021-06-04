//import dummy from '../db/data.json';   //json-server로 API연결로 dummy 필요 x
// URL에 포함된 값을 얻기 위해 react-router-dom에서 제공하는 'useParams'를 사용
import { useParams } from 'react-router-dom';
import Word from './Word';
import { useEffect, useState } from 'react';

export default function Day(){

  //1번 방식
  //const day = useParams().day;  
  //2번 방식
  const {day} = useParams();
  //json-server로 API연결로 dummy 필요 x                     //숫자로 형변환
  // const wordList = dummy.words.filter(word => word.day === Number(day));

  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setWords(data)
    })
  }, [day])

  return(
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map(word => (
            //'Word'컴포넌트에 word값과 key값을 props로 전달
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  )
}