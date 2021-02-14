# electron-api-demo

**Electron 을 API Demo를 실행 하려면 다음과 같이 따라하시면 됩니다.**

이 프로그램은 electronjs 응용 프로그램 기반에 [api-demo Guide](https://github.com/wooyoungkwak/electronjs-api-demo.git) 을 적용한 최소한의 응용 프로그램 입니다. 

다음의 파일들은 Electron 응용 프로그램의 기본 요소입니다:
- `package.json` - 앱의 기본 파일을 가리키고 세부 정보 및 종속성을 나열합니다.
- `main.js` - render HTML 윈도우 브라우저를 생성하고 프로그램을 실행합니다. 프로그램의 **main 프로세스** 입니다.
- `index.html` - render 웹 페이지 입니다. 프로그램의 **renderer 프로세스** 입니다.

## 사용법

repository 를 복사 하고 실행 하려면  [Git](https://git-scm.com) 과 [Node.js](https://nodejs.org/en/download/) 과 [npm](http://npmjs.com) 이 설치 되어 있어야 합니다. 
다음 명령어를 순차적으로 실행 하세요:
```bash 
# repository 에서 복사
git clone https://github.com/wooyoungkwak/electronjs-bootstrap-demo.git
# repository 폴더 이동
cd electronjs-bootstrap-demo
# 의존성 파일 설치
npm install
# app 실행
npm start
```

## 더 많은 electronjs 에 대해 배우려면 다음 URL 을 참조 하세요.

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## 라이센스

[EMPTY FILE](LICENSE.md)
