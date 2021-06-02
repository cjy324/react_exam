import World from "./World";
import styles from './Hello.module.css';


/* 컴포넌트 생성 1번 방식 */
// const Hello = function () {
//   return <p>Hello?????????</p>;
// };

// export default Hello;



/* 컴포넌트 생성 2번 방식 */
// const Hello = () => {
//   return <p>Hello!!!!!!!!</p>;
// };

// export default Hello;



/* 컴포넌트 생성 3번 방식 */
export default function Hello(){
  return (
// CSS 작성법
// 1. 태그에 style로 인라인으로 바로 작성하는 방법
// 2. index.css, App.css 처럼 파일을 만들어 작성하는 방법
// (결국 CSS가 통합되어 버리기 때문에 각 컴포넌트별로 관리가 어렵다(같은 class 이름이면 오버라이딩 되어 버림))
// 3. App.module.css, Hello.module.css 처럼 각 컴포넌트별 css파일을 만들어 작성하는 방법
// (2번 방법의 문제점 해결)

    // 이 방법은 css 3번 방법으로 한 것
    <div className={styles.box}>
      <h1>Hello</h1>
      <World />
      <World />
    </div>
  ) 
};
