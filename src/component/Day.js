import dummy from '../db/data.json';
// URL에 포함된 값을 얻기 위해 react-router-dom에서 제공하는 'useParams'를 사용
import { useParams } from 'react-router-dom';
import Word from './Word';

export default function Day(){

  //1번 방식
  //const day = useParams().day;  
  //2번 방식
  const {day} = useParams();
                                                          //숫자로 형변환
  const wordList = dummy.words.filter(word => word.day === Number(day));

  return(
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map(word => (
            //'Word'컴포넌트에 word값과 key값을 props로 전달
            <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  )
}