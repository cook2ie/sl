# 🏢 SL Web Publishing (Personal Project)

기업 웹사이트를 클론코딩하며,  
레이아웃 구조 설계와 반응형 퍼블리싱에 집중한 프로젝트입니다.

---

## 🔗 Live Site

👉 [SL 클론코딩 바로가기](https://cook2ie.github.io/sl/)

---

## 🧩 Overview

- Swiper를 활용한 메인 비주얼 슬라이드 구현  
- PC 중심 레이아웃을 다양한 해상도에서 안정적으로 동작하도록 개선  
- 시멘틱 마크업 기반 구조 설계  

---

## 🛠 Tech Stack

- HTML / CSS / JavaScript  
- jQuery  
- Swiper.js  

---

## 👨‍💻 Key Points

- 메인 비주얼 영역을 `object-fit: cover` 기반으로 구현하여 고해상도에서도 자연스러운 화면 구성  
- `max-width`와 중앙 정렬 구조를 적용하여 다양한 해상도 대응  
- 슬라이드 및 UI 요소를 컴포넌트 단위로 구성하여 유지보수성 향상  

---

## 💡 What I Learned

- 고정 width(1920px) 기반 레이아웃이 32인치 및 4K 환경에서 깨지는 문제를 경험  
- 단순 위치 보정이 아닌, **컨테이너(`max-width`) 기반 레이아웃 설계의 중요성**을 이해  
- 이미지 요소를 단순 `<img>`가 아닌, **cover 기반으로 처리해야 하는 이유**를 체감  
- UI를 절대 위치가 아닌 **흐름과 구조 중심으로 설계하는 방식**으로 개선  

---

## 🔧 Refactoring

- 기존 `position` 중심 레이아웃 → `flex` 기반 구조로 개선  
- 슬라이드 이미지 처리 방식 개선 (`img` → cover 기반)  
- 고정 width 제거 및 유동 레이아웃으로 수정  
- 초기 로딩 시 헤더 UI 깨짐 현상(display 문제) 해결  

---

## 🚀 Improvement

- 실제 32인치 고해상도 환경에서 발생한 레이아웃 깨짐 문제를 분석하고 개선  
- 다양한 디바이스 환경에서도 일관된 UI를 유지할 수 있도록 구조 재설계  

---

## 📸 Preview

<img width="3805" height="1896" alt="image" src="https://github.com/user-attachments/assets/cb7bfb81-9d2b-4feb-be25-0d65af39d3bb" />

