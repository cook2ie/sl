# 🏢 SL Web Publishing (Personal Project)

기업 웹사이트를 클론코딩하며,  
레이아웃 구조 설계와 반응형 퍼블리싱에 집중한 프로젝트입니다.

---

## 🔗 Live Site

👉 [SL 클론코딩 바로가기](https://cook2ie.github.io/sl/)

---

## 🧩 Overview

- Swiper를 활용한 메인 비주얼 슬라이드 구현
- PC 중심 레이아웃을 다양한 해상도에서도 안정적으로 동작하도록 개선
- 시멘틱 마크업 기반 구조 설계

---

## 🛠 Tech Stack

- HTML / CSS / JavaScript
- jQuery
- Swiper.js

---

## 👨‍💻 Key Points

- 메인 비주얼 영역을 `object-fit: cover` 기반으로 구현하여 고해상도에서도 자연스러운 화면 구성
- `max-width`와 중앙 정렬 구조를 적용해 다양한 해상도에 대응
- 슬라이드 및 UI 요소를 컴포넌트 단위로 구성해 유지보수성 향상

---

## 🔧 Refactoring

- 기존 `position` 중심 레이아웃을 `flex` 기반 구조로 개선
- 슬라이드 이미지 처리 방식을 `img` 중심에서 cover 기반으로 수정
- 고정 width를 제거하고 유동적인 레이아웃 구조로 변경
- 초기 로딩 시 헤더 UI가 깨지는 현상(display 문제) 해결

---

## 📸 Preview

<img width="3805" height="1896" alt="image" src="https://github.com/user-attachments/assets/cb7bfb81-9d2b-4feb-be25-0d65af39d3bb" />

---

## 💡 What I Learned

- 고정 width(1920px) 기반 레이아웃이 32인치 및 4K 환경에서 쉽게 깨질 수 있다는 점을 직접 경험했습니다.
- 단순한 위치 보정보다 **컨테이너(`max-width`) 기반 레이아웃 설계가 더 중요하다는 점**을 이해했습니다.
- 이미지 요소는 단순 삽입보다 **cover 기반 처리 방식이 다양한 해상도 대응에 더 효과적이라는 점**을 체감했습니다.
- UI를 절대 위치 중심이 아닌 **흐름과 구조 중심으로 설계하는 방식의 중요성**을 배웠습니다.
