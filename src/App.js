import './App.css';

//컴포넌트 불러오기
import Hello from './component/Hello';
import Event from './component/Event';
import State from './component/State';
import Welcome from './component/Welcome';
import Props from './component/Props';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';

//라우터 불러오기
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';

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
    // App 전체를 BrowserRouter로 감싸준다.
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* Switch외부는 모든 페이지에 공통적으로 노출된다.
        Switch내부는 URL에 따라 각각 다른 페이지를 보여준다 */}
        <Switch> 
          {/* '/'는 그냥 첫페이지를 의미 */}
          {/* 'exact'를 적용하면 URL이 정확히 일치할 때만 그 URL로 이동함
          'exact'를 적용하지 않은 경우 '/day'라고 쳐도 '/'가 포함되어 있기때문에 '/'경로로 이동하게 됨 */}
          <Route exact path="/">
            <DayList />
          </Route>
          {/* 다이다믹한 URL의 값을 처리할 때에는 
          ':'을 사용하면 'day'라는 변수로 경로의 값을 얻을 수 있다 */}
          <Route path="/day/:day">
            <Day />
          </Route>
          {/* 'path'를 따로 설정하지 않으면 잘못된 URL로 접근시 아래 페이지로 이동하게 됨 */}
          <Route>
            <EmptyPage/>
          </Route>
        </Switch>  
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
          <h1>---------------------------------------------</h1>
          <h1>TEST</h1>
          <Hello />
          <Welcome />
          <Event />
          <State />
          <Props age={10}/>
          <Props age={20}/>
      </div>
    </BrowserRouter>
  );
}

//"App"이란 이름으로 export
//index.js에서 import
export default App;
