
//state는 컴포넌트가 갖고 있는 속성 값
//state값이 변하면 자동으로 리엑트가 감지하고 ui를 자동으로 바꿔줌(화면이 자동 업데이트 됨)

import { useState } from "react";

export default function State (){

  //useState를 사용해야 한다.
  const [name, setName] = useState("초기값");

  //함수 적용방식 1
  function changeName1(){
    const newName = name === "Mike" ? "Jane" : "Mike";
    setName(newName)
  };
  //함수 적용방식 2
  function changeName2(){
    setName(name === "Mike" ? "Jane" : "Mike")
  };

  return(
    <div>
      <h1>state</h1>
      <h3>state는 컴포넌트가 갖고 있는 속성 값</h3>
      <p>{name}</p>
      {/* 함수 적용방식 1 */}
      <button onClick={changeName1}>ChangeName(1)</button>
      {/* 함수 적용방식 2 */}
      <button onClick={changeName2}>ChangeName(2)</button>
      {/* 함수 적용방식 3 */}
      <button onClick={() => {
        setName(name === "Mike" ? "Jane" : "Mike")
      }}>ChangeName(3)</button>
    </div>
  )
};

/* '=', '==', '==='의 차이??
'=' : value의 값
예) number=2;

'==' : value와 value를 비교
예) a=2, b=3 일 때, a==b  =>  false;

'===' : value와 type까지 비교
예) a=2 일 때, a===2는 true, a==="2"는 false;
*/