<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/font-kopubworld@1.0/batang.min.css" />

        <link href="../css/reset.css" rel="stylesheet" type="text/css" />
        <link href="../css/index.css" rel="stylesheet" type="text/css" />

        <!-- <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script> -->
        <title>Document</title>
    </head>
    <!-- --------------------------------------------------------------------------------------------- -->
    <body>
        <!-- --------------------------------------------------------------헤더-------------------------------------------------------------- -->
        <header class="top">
            <h1 style="display: none">상단</h1>
            <nav class="top-menu">
                <h2 style="display: none">상단메뉴</h2>
                <!--  -------------------------------로고------------------------------- -->
                <div class="logo">
                    <a href class="">
                        <img src="./assets/img/logo2.png" />
                        <span style="display: none">PortFolio</span>
                    </a>
                </div>
                <!-- -------------------------------메뉴바------------------------------- -->
                <div class="menu-bar">
                    <!-- ---------------home--------------- -->
                    <div class="home scroll">
                        <a href="#scroll1">
                            <span>Home</span>
                        </a>
                    </div>
                    <!-- ---------------about me--------------- -->
                    <div class="about scroll">
                        <a href="#scroll2">
                            <span>About Me</span>
                        </a>
                    </div>
                    <!-- ---------------skills--------------- -->
                    <div class="skill scroll">
                        <a href="#scroll3">
                            <span>Skills</span>
                        </a>
                    </div>
                    <!-- ---------------archiving--------------- -->
                    <div class="archive scroll">
                        <a href="#scroll4">
                            <span>Archiving</span>
                        </a>
                    </div>
                    <!-- ---------------projects--------------- -->
                    <div class="project scroll">
                        <a href="#scroll5">
                            <span>Projects</span>
                        </a>
                    </div>
                    <!-- ------------------------------ -->
                </div>
                <!-- menu-bar 끝 -->
            </nav>
            <!-- top-menu 끝 -->
        </header>
        <!-- -------------------------------내용------------------------------- -->
        <section class="content">
            <h1 style="display: none">주 내용</h1>

            <!-- --------------------------------------------------------------Intro-------------------------------------------------------------- -->

            <section class="intro" id="#scroll1">
                <h2 style="display: none">Introduce</h2>
                <section class="intro-content">
                    <h3 style="display: none">자기 소개</h3>
                    <div class="content-title">
                        <p>강한얼</p>
                        <p>웹 개발자 포트폴리오</p>
                    </div>
                    <hr />
                    <div class="content-content">
                        <p>안녕하세요.</p>
                        <p>신입 웹 개발자 강한얼입니다.</p>
                        <p>현재 수정 중인 페이지입니다.</p>
                    </div>
                </section>
            </section>

            <!-- --------------------------------------------------------------About Me-------------------------------------------------------------- -->

            <section class="about" id="#scroll2">
                <h2 style="display: none">About Me</h2>
                <section class="about-box">
                    <h3 style="display: none">인적 사항</h3>
                    <!-- -------------------------------인적 사항 제목부------------------------------- -->
                    <div class="about-title">
                        <p class="title">About Me</p>
                    </div>
                    <!-- -------------------------------인적 사항 내용부------------------------------- -->
                    <div class="about-content">
                        <!-- -------------------------------인적 사항 내용부 1------------------------------- -->
                        <div class="sub1">
                            <p class="name1">이름</p>
                            <p class="name2">강한얼</p>

                            <p class="birth1">생년월일</p>
                            <p class="birth2">1999.02.06</p>

                            <p class="address1">주소</p>
                            <p class="address2">서울특별시 영등포구</p>
                        </div>
                        <!-- -------------------------------인적 사항 내용부 2------------------------------- -->
                        <div class="sub2">
                            <p class="phone1">연락처</p>
                            <p class="phone2">010-9094-3145</p>

                            <p class="email1">이메일</p>
                            <p class="email2">skyaliqo0206@gmail.com</p>

                            <p class="education1">학력</p>
                            <p class="education2">유한대학교</p>
                            <p class="education3">컴퓨터 소프트웨어 공학과</p>
                        </div>
                    </div>
                    <!-- -------------------------------인적 사항 내용부 2 끝------------------------------- -->
                    <!-- -------------------------------인적 사항 배용부 끝------------------------------- -->
                </section>
            </section>

            <!-- --------------------------------------------------------------Skills-------------------------------------------------------------- -->

            <section class="skill" id="#scroll3">
                <h2 style="display: none">Skills</h2>
                <!-- -------------------------------기술------------------------------- -->
                <section class="skill-box">
                    <h3 style="display: none">기술</h3>
                    <!-- -------------------------------기술 제목부------------------------------- -->
                    <div class="skill-title">
                        <p class="title">Skills</p>
                    </div>
                    <!-- -------------------------------기술 내용부------------------------------- -->
                    <div class="skill-content">
                        <!-- -------------------------------프론트------------------------------- -->
                        <div class="front">
                            <p class="title">Front End</p>
                            <img class="stack" src="./assets/img/Skills/front/img.png" />
                            <!-- <img  class="" src="" /> -->
                        </div>
                        <!-- -------------------------------백------------------------------- -->
                        <div class="back">
                            <p class="title">Back End</p>
                            <div class="stack-box">
                                <img class="stack" src="./assets/img/Skills/back/java.png" />
                                <img class="stack" src="./assets/img/Skills/back/spring.png" />
                                <img class="stack" src="./assets/img/Skills/back/boot.png" />
                                <img class="stack" src="./assets/img/Skills/back/maria.png" />
                            </div>
                        </div>
                        <!-- -------------------------------형상관리------------------------------- -->
                        <div class="vc">
                            <p class="title">Version Control</p>
                            <img class="stack" src="./assets/img/Skills/version control/git.png" />
                            <img class="stack" src="./assets/img/Skills/version control/github2.png" />
                        </div>
                        <!-- -------------------------------자격증------------------------------- -->
                        <div class="cert">
                            <p class="title">Certification</p>
                            <img class="stack" src="./assets/img/Skills/certification/cert.png" />
                            <p class="cert-name">정보처리산업기사</p>
                            <!-- <img  class="" src="" /> -->
                        </div>
                    </div>
                </section>
            </section>

            <!-- --------------------------------------------------------------Archiving-------------------------------------------------------------- -->

            <section class="archive" id="#scroll4">
                <h2 style="display: none">Archiving</h2>
                <section class="archive-box">
                    <h3 style="display: none">아카이브</h3>
                    <div class="archive-title"><p class="title">Archiving</p></div>
                    <div class="archive-content">
                        <div class="archive-git">
                            <img class="img" src="./assets/img/Skills/version control/github2.png" />
                            <p class="content1">2024 이후 프로젝트 소스코드</p>
                            <a class="content2" href="https://github.com/PienHEK">https://github.com/PienHEK</a>
                            <p class="content3">2024 이전의 프로젝트 및 공부 코드</p>
                            <a class="content4" href="https://github.com/hydrian634">https://github.com/hydrian634</a>
                        </div>
                        <div class="archive-notion">
                            <img class="img" src="./assets/img/Skills/version control/notion.png" />
                            <p class="content1">프로젝트 문서</p>
                            <a class="content2" href="https://www.notion.so/skaya0206">
                                https://www.notion.so/skaya0206
                            </a>
                            <p class="content3">Tistory</p>
                            <a href="https://watchitover.tistory.com/" class="content4"
                                >https://watchitover.tistory.com/</a
                            >
                        </div>
                    </div>
                </section>
            </section>

            <!-- --------------------------------------------------------------Projects-------------------------------------------------------------- -->
            <section class="project" id="#scroll5">
                <h2 style="display: none">Projects</h2>
                <section class="project-box">
                    <h3 style="display: none">프로젝트</h3>
                    <!-- -------------------------------프로젝트 제목부------------------------------- -->
                    <div class="project-title">
                        <p class="title">Projects</p>
                    </div>
                    <!-- -------------------------------프로젝트 내용부------------------------------- -->
                    <div class="project-content">
                        <!-- -------------------------------프로젝트1------------------------------- -->
                        <section class="width-prj">
                            <h4 class="project-name">HomePEasy</h4>
                            <img class="prj-img" src="./assets/img/prjimg/HomePEasy/prjneople.png" />
                            <div class="content">
                                <p>홈페이지 빌더</p>
                                <a href="https://github.com/Juru99/HomePEasy">https://github.com/Juru99/HomePEasy</a>
                                <p>
                                    대학 졸업 작품으로 WIX, IMWEB 과 같이 사용자가 직접 자신의 사이트를 만들 수 있게
                                    도와주는 사이트입니다.
                                </p>
                                <p>
                                    개인 사업자나 일반 학생들이 무료로 이용할 수 있는 사이트가 필요하다고 생각되어
                                    만들게 되었습니다.
                                </p>
                                <p>
                                    HTML, JS, CSS, SPRING을 이용한 프로젝트로 Spring 구조를 이해할 수 있게 된
                                    프로젝트였습니다.
                                </p>
                            </div>
                        </section>
                        <!-- -------------------------------프로젝트2------------------------------- -->
                        <section class="height-prj">
                            <h4 class="project-name">음식점 테이블 주문 프로그램</h4>
                            <img class="prj-img" src="./assets/img/prjimg/TableOrder/1.png" />
                            <div class="content">
                                <p>유한대학교 C# 기말 과제 프로젝트</p>
                                <a href="https://github.com/minseong00/2jo">https://github.com/minseong00/2jo</a>
                                <p>
                                    대학 프로젝트로 T오더와 같이 사용자가 앉은 자리에서 메뉴를 주문하고 결제할 수 있는
                                    프로그램입니다.
                                </p>
                                <p>
                                    당시 외부 활동으로 인해 프로젝트에 많은 시간을 쓸 수 없었지만 팀원들과 지속적으로
                                    소통하여 프로젝트에 최대한 참여하였습니다.
                                </p>
                                <p>
                                    처음으로 Git을 이용하여 협업한 프로젝트로, 프로그래밍을 어떻게 하는 것인지 알 수
                                    있었던 프로젝트였습니다.
                                </p>
                            </div>
                        </section>
                        <!-- -------------------------------프로젝트3------------------------------- -->
                        <section class="height-prj">
                            <h4 class="project-name">맛잘알</h4>
                            <img class="prj-img" src="./assets/img/prjimg/matzalal/1.png" />
                            <div class="content">
                                <p>맛집 추천 웹사이트</p>
                                <p>
                                    <a href="">https://github.com/devhoody/MatzalalProject</a
                                    ><span style="color: #afafaf"> 비공개 설정으로 인한 이동 불가.</span>
                                </p>
                                <p>
                                    맛있는 것을 먹기 위해 인터넷을 검색하면 맛집이라고 광고하는 가게가 많지만 정작
                                    가보면 그저 그런, 혹은 맛이 없는 가게가 많습니다.
                                </p>
                                <p>
                                    그런 가게를 거르고 광고가 아닌 진짜 맛집들을 찾아 알려주기 위해 만든 사이트입니다.
                                </p>
                                <p>
                                    Spring Boot와 thymeleaf, postman은 써본 적이 없거나 사용한 지 오래되어 기억이 잘
                                    나지 않아 당황스러웠지만 인터넷 검색 및 국비 교육을 통해 탄탄한 기본을 배울 수
                                    있었습니다.
                                </p>
                                <p>
                                    github를 이용한 형상 관리를 하였으나 프로젝트 발표 직전에 제대로 알아차리지 못한
                                    오류들의 누적으로 인해 파일들이 손상되어 프로젝트 마무리를 제대로 하지 못해 아쉬움이
                                    크게 남았습니다.
                                </p>
                            </div>
                        </section>
                        <!-- -------------------------------프로젝트4------------------------------- -->
                        <section class="height-prj">
                            <h4 class="project-name">PortFolio</h4>
                            <img class="prj-img" src="./assets/img/prjimg/portFolio/1.png" />
                            <div class="content">
                                <p>포트폴리오</p>
                                <a href="https://github.com/PienHEK/PortFolio">https://github.com/PienHEK/PortFolio</a>
                                <p>포트폴리오 사이트. 현재 페이지. 2024/01/25 ~ 2024/</p>
                                <p>
                                    기본기 위주의 프로젝트입니다. 공부한 것들을 되새김질하고 미숙한 부분들에 익숙해지기
                                    위한 프로젝트입니다. Vue.js를 이용하여~
                                </p>
                                <p></p>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        </section>
        <!-- -------------------------------content 끝------------------------------- -->
        <footer class="footer">
            <div><p>2024.01.14</p></div>
        </footer>
    </body>
    <RouterView />
</template>

<style scoped>
@import "//cdn.jsdelivr.net/npm/font-kopubworld@1.0/batang.min.css";

body {
    font-family: "KopubWorldBatang";
    white-space: nowrap;
}
a {
    text-decoration-line: none;
    color: inherit;
}
/* -------------------------------헤더------------------------------- */
.top {
    /* display: flex;
    justify-content: center; */
    position: fixed;

    width: 100%;
    height: 90px;
    margin: 0 auto;

    background-color: #fff;
    border-radius: 0 0 10px 10px;
    /* 상단 메뉴바에 그림자 */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    z-index: 99;
}
.top {
    font-size: 1.1rem;
}

.top .top-menu {
    display: flex;
    flex-direction: row;

    align-items: flex-end;
    justify-content: center;

    gap: 20%;

    width: 100%;
    height: 80px;
    margin: auto;
}
.top .top-menu .logo {
    /* width: 100%; */
    height: 70px;
    color: transparent;
}
.top .top-menu .menu-bar {
    display: flex;
    flex-direction: row;
    gap: 40px;
}
.top .top-menu .menu-bar a:hover {
    color: #afafaf;
}
/* .top .top-menu .menu-bar .home {
}
.top .top-menu .menu-bar .about {
}
.top .top-menu .menu-bar .skill {
}
.top .top-menu .menu-bar .archive {
}
.top .top-menu .menu-bar .project {
} */
/* -------------------------------내용------------------------------- */
/* .content {
} */

.content .intro {
    position: relative;
    width: 100%;
    height: 1000px;
    /* top: 90px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.content .intro::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* content부터 bottom까지 이미지 표시를 위한 내용. */
    background: url("./assets/img/index.png") no-repeat center center;
    background-size: cover;
    background-blend-mode: multiply;
    opacity: 20%;
    z-index: 0;
}
/* --------------------------------------------------------------자기 소개-------------------------------------------------------------- */
.content .intro .intro-content {
    position: relative;

    display: flex;
    flex-direction: column;

    gap: 50px;

    align-items: center;
}
/* -------------------------------자기 소개 제목부------------------------------- */
.content .intro .intro-content .content-title {
    font-size: 64px;
}
/* -------------------------------자기 소개 내용부------------------------------- */
.content .intro .intro-content .content-content {
    font-size: 36px;
}
/* -------------------------------자기 소개 정렬------------------------------- */
.content .intro .intro-content div {
    display: flex;
    flex-direction: column;
    align-items: center;
}
/* -------------------------------자기 소개 구분부------------------------------- */
.content .intro .intro-content hr {
    border: none; /* 기본 테두리 제거 */
    height: 3px; /* 선의 높이 */
    background-color: #8b8b8b; /* 선의 색상 */
    width: 50px; /* 선의 너비 */
    margin: 0 auto; /* 좌우 마진 자동으로 설정하여 중앙 정렬 */
    position: absolute; /* 절대 위치 */
    left: 50%; /* 왼쪽에서 50% 떨어진 곳에 배치 */
    bottom: 40%; /* 아래에서 0px 떨어진 곳에 배치 */
    transform: translateX(-50%); /* X축 기준으로 -50% 이동하여 정확히 중앙에 배치 */
}
/* --------------------------------------------------------------인적 사항-------------------------------------------------------------- */
/* 내용부의 ~1, ~2는 인적 사항의 주제와 내용이다. ex)name1 = 이름, name2 = 홍길동 */
.content .about {
    width: 100%;
    height: 1000px;
    background-color: #f2f2f2;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.content .about .about-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 100px;
}
/* -------------------------------인적 사항 제목부------------------------------- */
.content .about .about-title {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 100%;
}
.content .about .about-title .title {
    font-size: 64px;
    border-bottom: 1px solid #8b8b8b;
}
/* -------------------------------인적 사항 내용부------------------------------- */
.content .about .about-content {
    /* display: grid;
    grid-template-columns: 5;
    grid-template-rows: 3; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    /* justify-content: center; */

    width: 100%;
}
/* -------------------------------인적 사항 내용부 1------------------------------- */
.content .about .about-content .sub1 {
    /* display: flex;
    flex-direction: row; */

    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 2;

    width: 70%;

    /* gap: 300px; */
}
/* -------------------------------이름------------------------------- */

.content .about .about-content .sub1 .name1 {
    font-size: 32px;
    font-weight: bold;

    grid-column: 1;
    grid-row: 1;
}
.content .about .about-content .sub1 .name2 {
    font-size: 36px;
    font-weight: lighter;

    grid-column: 1;
    grid-row: 2;

    /* justify-self: right; */
}
/* -------------------------------생년월일------------------------------- */

.content .about .about-content .sub1 .birth1 {
    font-size: 32px;
    font-weight: bold;

    grid-column: 3;
    grid-row: 1;
}
.content .about .about-content .sub1 .birth2 {
    font-size: 36px;
    font-weight: lighter;

    grid-column: 3;
    grid-row: 2;
}
/* -------------------------------주소------------------------------- */

.content .about .about-content .sub1 .address1 {
    font-size: 32px;
    font-weight: bold;

    grid-column: 5;
    grid-row: 1;
}
.content .about .about-content .sub1 .address2 {
    font-size: 36px;
    font-weight: lighter;

    grid-column: 5;
    grid-row: 2;
}
/* -------------------------------인적 사항 내용부 2------------------------------- */
.content .about .about-content .sub2 {
    /* display: flex;
    flex-direction: row; */

    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 3;

    width: 70%;

    /* gap: 150px; */
}
/* -------------------------------연락처------------------------------- */

.content .about .about-content .sub2 .phone1 {
    font-size: 32px;
    font-weight: bold;

    grid-column: 1;
    grid-row: 1;
}
.content .about .about-content .sub2 .phone2 {
    font-size: 36px;
    font-weight: lighter;

    grid-column: 1;
    grid-row: 2;
}
/* -------------------------------이메일------------------------------- */

.content .about .about-content .sub2 .email1 {
    font-size: 32px;
    font-weight: bold;

    grid-column: 3;
    grid-row: 1;
}
.content .about .about-content .sub2 .email2 {
    font-size: 36px;
    font-weight: lighter;

    grid-column: 3;
    grid-row: 2;
}
/* -------------------------------학력------------------------------- */

.content .about .about-content .sub2 .education1 {
    font-size: 32px;
    font-weight: bold;

    grid-column: 5;
    grid-row: 1;
}
.content .about .about-content .sub2 .education2 {
    font-size: 36px;
    font-weight: lighter;

    grid-column: 5;
    grid-row: 2;
}
.content .about .about-content .sub2 .education3 {
    font-size: 36px;
    font-weight: lighter;

    grid-column: 5;
    grid-row: 3;
}
/* --------------------------------------------------------------기술-------------------------------------------------------------- */
.content .skill {
    width: 100%;
    height: 1000px;
    background-color: #eff7f9;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.content .skill .skill-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 100px;
    align-items: center;
}
/* -------------------------------기술 제목부------------------------------- */
.content .skill .skill-box .skill-title {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 100%;
}
.content .skill .skill-box .skill-title .title {
    font-size: 64px;
    border-bottom: 1px solid #8b8b8b;
}
/* -------------------------------기술 내용부------------------------------- */
.content .skill .skill-box .skill-content {
    display: grid;
    grid-template-columns: 7;
    /* grid-template-rows: 1; */

    width: 70%;

    /* gap: 50px; */
}

/* -------------------------------프론트------------------------------- */
.content .skill .skill-box .skill-content .front {
    display: flex;
    flex-direction: column;

    align-items: center;
    grid-column: 1;

    gap: 30px;
}
.content .skill .skill-box .skill-content .front .title {
    font-size: 36px;
    font-weight: bold;
}
.content .skill .skill-box .skill-content .front .stack {
    width: 300px;
    height: 130px;
}
/* -------------------------------백------------------------------- */
.content .skill .skill-box .skill-content .back {
    display: flex;
    flex-direction: column;

    align-items: center;

    grid-column: 3;

    gap: 30px;
}
.content .skill .skill-box .skill-content .back .title {
    font-size: 36px;
    font-weight: bold;
}
.content .skill .skill-box .skill-content .back .stack-box {
    display: flex;
    flex-direction: column;
}
.content .skill .skill-box .skill-content .back .stack-box .stack {
    width: 300px;
    height: 130px;
}
/* -------------------------------형상관리------------------------------- */
.content .skill .skill-box .skill-content .vc {
    display: flex;
    flex-direction: column;

    align-items: center;

    grid-column: 5;

    gap: 30px;
}
.content .skill .skill-box .skill-content .vc .title {
    font-size: 36px;
    font-weight: bold;
}

.content .skill .skill-box .skill-content .vc .stack {
    width: 300px;
    height: 130px;
}

/* -------------------------------자격증------------------------------- */
.content .skill .skill-box .skill-content .cert {
    display: flex;
    flex-direction: column;

    align-items: center;

    grid-column: 7;

    gap: 30px;
}
.content .skill .skill-box .skill-content .cert .title {
    font-size: 36px;
    font-weight: bold;
}
.content .skill .skill-box .skill-content .cert .stack {
    width: 300px;
    height: 130px;
}
.content .skill .skill-box .skill-content .cert .cert-name {
    font-size: 32px;
    font-weight: bold;
}
/* --------------------------------------------------------------아카이브-------------------------------------------------------------- */
.content .archive {
    width: 100%;
    height: 1000px;
    background-color: #e7f4e1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.content .archive .archive-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 100px;
    align-items: center;
}
/* -------------------------------아카이브 제목부------------------------------- */
.content .archive .archive-box .archive-title {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 100%;
}
.content .archive .archive-box .archive-title .title {
    font-size: 64px;
    border-bottom: 1px solid #8b8b8b;
}
/* -------------------------------아카이브 내용부------------------------------- */
.content .archive .archive-box .archive-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    /* justify-content: center; */
}
.content .archive .archive-box .archive-content .archive-git {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto 37px 37px 37px 37px 37px;
    width: 100%;

    font-size: 24px;
    font-weight: lighter;

    justify-items: center;
    align-items: center;
}
.content .archive .archive-box .archive-content .img {
    grid-column: 2;
    grid-row: 1;
    width: 500px;
    height: 300px;
}
.content .archive .archive-box .archive-content .archive-git .content1 {
    grid-column: 2;
    grid-row: 2;

    font-weight: bold;
}
.content .archive .archive-box .archive-content .archive-git .content2 {
    grid-column: 2;
    grid-row: 3;
}
.content .archive .archive-box .archive-content .archive-git .content3 {
    grid-column: 2;
    grid-row: 5;

    font-weight: bold;
}
.content .archive .archive-box .archive-content .archive-git .content4 {
    grid-column: 2;
    grid-row: 6;
}
.content .archive .archive-box .archive-content .archive-notion {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto 37px 37px 37px 37px 37px;
    width: 100%;

    font-size: 24px;
    font-weight: lighter;

    justify-items: center;
    align-items: center;
}
.content .archive .archive-box .archive-content .archive-notion .img {
    grid-column: 1;
    grid-row: 1;
    width: 500px;
    height: 300px;
}
.content .archive .archive-box .archive-content .archive-notion .content1 {
    grid-column: 1;
    grid-row: 2;

    font-weight: bold;
}
.content .archive .archive-box .archive-content .archive-notion .content2 {
    grid-column: 1;
    grid-row: 3;
}
.content .archive .archive-box .archive-content .archive-notion .content3 {
    grid-column: 1;
    grid-row: 5;

    font-weight: bold;
}
.content .archive .archive-box .archive-content .archive-notion .content4 {
    grid-column: 1;
    grid-row: 6;
}
/* --------------------------------------------------------------프로젝트-------------------------------------------------------------- */
.content .project {
    width: 100%;
    height: 100%;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 5rem;
    margin-bottom: 5rem;
}
.content .project .project-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 100px;
    align-items: center;
}
/* -------------------------------프로젝트 제목부------------------------------- */
.content .project .project-box .project-title {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 100%;
}
.content .project .project-box .project-title .title {
    font-size: 64px;
    border-bottom: 1px solid #8b8b8b;
}
/* -------------------------------프로젝트 내용부------------------------------- */
.content .project .project-box .project-content {
    display: flex;
    flex-direction: column;
    width: 50%;
    white-space: normal;
    gap: 5rem;
}
/* -------------------------------프로젝트1------------------------------- */
.content .project .project-box .project-content .width-prj {
    display: grid;
    grid-template-columns: auto 2rem auto;
    grid-template-rows: auto auto;
    width: 100%;
}
.content .project .project-box .project-content .width-prj .prj-img {
    grid-column: 1;
    grid-row: 1/3;
    width: 500px;
    height: 550px;
    align-items: center;
}

.content .project .project-box .project-content .width-prj .project-name {
    grid-column: 3;
    grid-row: 1;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.content .project .project-box .project-content .width-prj .content {
    grid-column: 3;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
}

/* -------------------------------프로젝트2------------------------------- */
.content .project .project-box .project-content .height-prj {
    display: grid;
    grid-template-columns: auto 2rem auto;
    grid-template-rows: auto auto;
    width: 100%;
    align-items: center;
}
.content .project .project-box .project-content .height-prj .prj-img {
    grid-column: 1;
    grid-row: 1/3;
    width: 500px;
    height: 400px;
    align-items: center;
}
.content .project .project-box .project-content .height-prj .project-name {
    grid-column: 3;
    grid-row: 1;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.content .project .project-box .project-content .height-prj .content {
    grid-column: 3;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
}
/* -------------------------------프로젝트3------------------------------- */
/* .content .project .project-box .project-content .project3 {
    display: grid;
    grid-template-columns: auto 1rem auto;
    grid-template-rows: auto auto;
    width: 100%;
}
.content .project .project-box .project-content .project3 .prj-img {
    grid-column: 1;
    grid-row: 1/3;
    width: 400px;
    height: 300px;
    align-items: center;
}
.content .project .project-box .project-content .project3 .project-name {
    grid-column: 3;
    grid-row: 1;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.content .project .project-box .project-content .project3 .content {
    grid-column: 3;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
} */
/* -------------------------------프로젝트4------------------------------- */
/* .content .project .project-box .project-content .project4 {
    display: grid;
    grid-template-columns: auto 1rem auto;
    grid-template-rows: auto auto;
    width: 100%;
}
.content .project .project-box .project-content .project4 .prj-img {
    grid-column: 1;
    grid-row: 1/3;
    width: 400px;
    height: 300px;
    align-items: center;
}
.content .project .project-box .project-content .project4 .project-name {
    grid-column: 3;
    grid-row: 1;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.content .project .project-box .project-content .project4 .content {
    grid-column: 3;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
} */
/* --------------------------------------------------------------Footer-------------------------------------------------------------- */
.footer {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #858585;
}
/*  --------------------------------------------------------------반응형-------------------------------------------------------------- */
@media (max-width: 1070px) {
    .top .top-menu .logo {
        display: none;
    }
}
/* -------------------------------1921 이상의 해상도에서 사용되는 사이즈.------------------------------- */
@media (min-width: 1921px) {
    .content .intro {
        height: 1300px;
    }
    .content .about {
        height: 1300px;
    }
    .content .skill {
        height: 1300px;
    }
    .content .archive {
        height: 1300px;
    }
    .content .project {
        height: 100%;
    }
}
</style>
