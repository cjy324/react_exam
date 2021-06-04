# React 기초 NOTE

## 링크
https://www.youtube.com/watch?v=daoy5RHYmEA&list=PLZKTXPmaJk8J_fHAzPLH8CJ_HO_M33e7-&index=14


## package.json 명령어 모음
 - "start": "react-scripts start", 개발자모드로 실행
 - "build": "react-scripts build", 배포
 - "test": "react-scripts test", 테스트
 - "eject": "react-scripts eject" 내부설정 파일을 꺼낼때 사용?

## CSS 작성법
1. 태그에 style로 인라인으로 바로 작성하는 방법
2. index.css, App.css 처럼 파일을 만들어 작성하는 방법(결국 CSS가 통합되어 버리기 때문에 각 컴포넌트별로 관리가 어렵다(같은 class 이름이면 오버라이딩 되어 버림))
3. App.module.css, Hello.module.css 처럼 각 컴포넌트별 css파일을 만들어 작성하는 방법(2번 방법의 문제점 해결)


## '=', '==', '==='의 차이??
'=' : value의 값
예) number=2;

'==' : value와 value를 비교
예) a=2, b=3 일 때, a==b  =>  false;

'===' : value와 type까지 비교
예) a=2 일 때, a===2는 true, a==="2"는 false;

## state
 - state는 컴포넌트가 갖고 있는 속성 값
 - state값이 변하면 자동으로 리엑트가 감지하고 ui를 자동으로 바꿔줌(화면이 자동 업데이트 됨)

## props
 - 상위 컴포넌트의 속성값

## useEffect()
 - state값이 바뀌었을때 동작하게 할 수 있는 함수
 - state값이 변할때 다시 렌더링되는 순서
 - vue에서 watch?와 비슷한 개념?

## json-server API 연결 명령어
json-server --watch ./src/db/data.json --port 3001





-----------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
