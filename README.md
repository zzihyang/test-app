*리액트 실습

1.Node.js 설치

2.리액트 설치
    [방법1] create-react-app (CRA 설치)

    설치중 에러
    npm ERR! code ENOENT

    해결방법
    npm -g install create-react-app
    npx create-react-app my-app

    [방법2] vite 설치

    3.VS코드 확장프로그램 설치
    ES7+ React/Redux/React-Native snippets

    rfce
    rafce(화살표함수)


========================================================

*GIT 파일 올리기

0. GIT에 새로운 레파지토리 생성하기---------------------------------


1. 저장소 생성 및 연결---------------------------------

$ git init

//원격 저장소와 연결
$ git remote add origin [원격저장소 주소] 

//브랜치 이름 바꾸기
$ git branch -m master main 


2.파일 업로드---------------------------------

//원격 저장소의 파일 가져오기
$ git pull (또는 git pull origin [브랜치 이름])

//파일을 staging area에 추가하기
//전체파일이라면 . , 일부 파일이라면 [파일/디렉토리 이름]
$ git add . 

$ git commit -m "commit message"

$ git push (또는 git push origin [브랜치 이름])


3.추가적인 명령어---------------------------------

//연결된 원격 저장소 확인
$ git remote -v 

//기존 원격 저장소와의 연결 삭제
$ git remote rm origin 

//현재 브랜치 이름 확인
$ git branch 

//브랜치 기본(default)이름 설정
$ git config --global init.defaultBranch [브랜치 이름] 

//현재 브랜치에서 변경된 파일 목록 확인
$ git status

//add한 파일 모두 취소
$ git rm --cached -r .

//특정 파일만 add 취소
$ git rm --cached [파일]

$ git push -u origin main