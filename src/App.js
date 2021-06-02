import './App.css';
import Hello from './component/Hello';
import Event from './component/Event';
import Welcome from './component/Welcome';

//함수형 컴포넌트
//모든 컴포넌트는 대문자로 시작해야 함
function App() {

  //테스트 객체 생성
  // const name = "World";
  // const naver = {
  //   name: "네이버",
  //   url: "https://naver.com"
  // }

  //함수가 리턴하는 것을 JSX라 함(아래 로직)
  //JSX(JacaScript XML)
  //HTML과 유사한 개념
  return (
    <div className="App">
      {/* 태그안에 스타일을 넣기 위해선 객체로 작성해야 함 */}
      {/* <h1
        style={
          {
          color: "red",
          backgroundColor: "gray"
        }
      }
      >
        Hello, {name}.
        <p>{2+3}</p>
      </h1>
      <a href={naver.url} target="_blank">{naver.name}</a> */}

      <Hello />
      <Welcome />
      <Event />
    </div>
  );
}

//"App"이란 이름으로 export
//index.js에서 import
export default App;
