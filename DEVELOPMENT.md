# 포트폴리오 웹사이트 개발 가이드

## 📦 설치

```bash
npm install
```

## 🚀 실행

### 개발 서버
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드
```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
portfolio_app/
├── content/              # 콘텐츠 데이터 (JSON)
│   ├── profile.json      # 프로필 정보
│   ├── skills.json       # 기술 스택
│   ├── experience.json   # 경력 사항
│   └── projects.json     # 프로젝트
├── public/
│   └── resume.pdf        # 이력서 PDF
├── src/
│   ├── app/
│   │   ├── globals.css   # 글로벌 스타일 및 CSS 변수
│   │   ├── layout.tsx    # 루트 레이아웃
│   │   └── page.tsx      # 메인 페이지
│   ├── components/
│   │   ├── sections/     # 섹션 컴포넌트
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   ├── Header.tsx    # 헤더/네비게이션
│   │   ├── Footer.tsx    # 푸터
│   │   ├── Section.tsx   # 공통 섹션 래퍼
│   │   └── ThemeProvider.tsx  # 다크모드 Provider
│   └── types/
│       └── content.ts    # 타입 정의
└── README.md
```

## 🎨 콘텐츠 수정 방법

### 1. 프로필 정보 수정
`content/profile.json` 파일을 수정하세요:
- 이름, 직함, 소개 등 개인 정보
- 이메일, GitHub, LinkedIn 링크

### 2. 기술 스택 수정
`content/skills.json` 파일을 수정하세요:
- 카테고리별로 기술 추가/삭제
- level: 1(기초), 2(숙련), 3(전문가)

### 3. 경력 사항 수정
`content/experience.json` 파일을 수정하세요:
- 회사, 역할, 기간, 성과, 스택

### 4. 프로젝트 수정
`content/projects.json` 파일을 수정하세요:
- 프로젝트 정보, 문제-해결-성과, 링크

### 5. 이력서 파일 교체
`public/resume.pdf` 파일을 본인의 이력서로 교체하세요.

## 🎨 디자인 커스터마이징

### 색상 변경
`src/app/globals.css` 파일에서 CSS 변수를 수정하세요:

```css
@theme inline {
  --color-primary: #3b82f6;      /* 메인 컬러 */
  --color-accent: #8b5cf6;       /* 액센트 컬러 */
  --color-background: #ffffff;   /* 배경 */
  /* ... */
}
```

### 섹션 간격 조정
```css
--section-padding: 6rem;          /* 섹션 상하 간격 */
--container-max-width: 75rem;     /* 최대 컨테이너 너비 */
```

## 🌙 다크모드

다크모드는 자동으로 지원됩니다:
- 시스템 설정을 감지하여 자동 적용
- 헤더의 토글 버튼으로 수동 전환 가능
- 로컬스토리지에 사용자 선택 저장

## 🚀 배포

### Vercel (권장)
1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 Import
3. 자동 배포 완료

### Netlify
1. GitHub에 코드 푸시
2. [Netlify](https://netlify.com)에서 Import
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📝 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Inter (Google Fonts)

## 🎯 주요 기능

✅ 반응형 디자인 (모바일 ~ 데스크톱)
✅ 다크모드 지원 (자동 + 수동 토글)
✅ 스무스 스크롤 및 섹션 하이라이트
✅ 프로젝트 필터링 및 상세 모달
✅ 경력 사항 접기/펼치기
✅ 연락 폼 (유효성 검증)
✅ SEO 최적화
✅ 접근성 (WCAG 준수)

## 📄 라이선스

MIT License


