import { useState } from "react"

// App.js로 부터 props를 받음
export default function Props(props){

  // 넘겨받은 props의 값은 이 컴포넌트 내에선 바꿀 수 없음
  // 따라서 state로 설정하고 state값을 바꾸는 방식으로 바꿔줘야 함
  let [age, setAge] = useState(props.age);
  const msg = age > 19 ? '성인입니다.' : '미성년자입니다.';

  return(
    <div>
      <h1>props</h1>
      <h4>다른 컴포넌트로부터 전달되는 속성값</h4>
      {/* 전달받은 props안의 속성 age의 값을 가져옴 */}
      <p>props의 Age = {props.age}</p>
      {/* state 내의 age 값을 바꿈 */}
      <p>state의 Age = {age}/{msg}</p>
      <button onClick={() => {
        setAge(age + 1)
      }}>ageUp</button>
      <button onClick={() => {
        setAge(age - 1)
      }}>ageDown</button>
      <button onClick={() => {
        setAge(age = props.age)
      }}>ageReset</button>
    </div>
  )
};