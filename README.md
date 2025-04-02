# Vanilla-ES5

Vanilla JavaScript와 Tailwind CSS를 사용한 프론트엔드 프로젝트입니다.

## 기술 스택

- JavaScript (ES5)
- Tailwind CSS
- Grunt
- PostCSS
- Autoprefixer

## 시작하기

### 사전 요구사항

- Node.js (v14 이상)
- npm (v6 이상)

### 설치

```bash
# 프로젝트 클론
git clone [repository-url]

# 프로젝트 디렉토리로 이동
cd Vanilla-ES5

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
# 개발 서버 실행
npm run dev
```

개발 서버는 다음 기능을 제공합니다:

- Live Reload
- Tailwind CSS 자동 컴파일
- JavaScript 번들링
- HTML 템플릿 처리
- 프록시 서버 (API 요청)

### 프로덕션 빌드

```bash
# 프로덕션 빌드
npm run build
```

빌드 과정:

1. dist 폴더 정리
2. JavaScript 번들링
3. HTML 템플릿 처리
4. Tailwind CSS 및 PostCSS 처리
5. HTML 파일 처리
6. JavaScript 압축
7. CSS 압축
8. 이미지 최적화
9. 폰트 파일 복사
10. 최종 빌드 압축

## 프로젝트 구조

```
Vanilla-ES5/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── images/
│   ├── pages/
│   ├── partials/
│   ├── style.css
│   └── **/*.js
├── dist/
├── Gruntfile.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Tailwind CSS 사용하기

1. `src/style.css`에 Tailwind 지시문 추가:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. HTML 파일에서 Tailwind 클래스 사용:

```html
<div class="flex items-center justify-center">
	<h1 class="text-2xl font-bold">Hello World</h1>
</div>
```

## 환경 변수 설정

1. `.env.development` 파일 생성 (개발 환경)
2. `.env.production` 파일 생성 (프로덕션 환경)

필요한 환경 변수:

- `NODE_ENV`: 실행 환경 (development/production)
- `API_SERVER`: API 서버 주소

## 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
