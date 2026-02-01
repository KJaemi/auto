# AUTONOMOUS PCC Website (v2)

Next.js(App Router) + React + TailwindCSS + Framer Motion + Three.js 기반의 기업 홈페이지 템플릿입니다.  
(요구사항: Solutions / Technology / Company / IR / Community 포함)

## 1) 실행 방법 (Windows)

### (1) Node.js 설치 확인
- **터미널(명령 프롬프트/PowerShell)**에서 아래를 실행:
```bash
node -v
npm -v
```
버전이 출력되면 OK입니다.

### (2) 의존성 설치
프로젝트 폴더(여기)에서 실행:
```bash
npm install
```

### (3) 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000` 접속

## 2) PowerShell에서 `npm.ps1` 실행 오류가 날 때
PowerShell 정책 때문에 스크립트 실행이 막힐 수 있습니다. 아래 중 하나를 선택하세요.

### 방법 A) PowerShell을 관리자 권한으로 실행 후 (권장)
```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```
이후 다시:
```powershell
npm install
```

### 방법 B) CMD(명령 프롬프트) 사용
PowerShell 대신 **명령 프롬프트**를 열고 동일 명령 실행:
```cmd
npm install
npm run dev
```

## 3) 이미지가 잘리는 문제(해결됨)
- `MediaFrame` 컴포넌트에서 기본값을 **object-contain**으로 설정했습니다.
- 클릭 시 **Lightbox(원본 확대)**가 열립니다.

## 4) 실제 운영 시 추천
- Community 문의 폼(`/api/contact`)은 현재 **로그로만 저장**합니다.
  - 이메일 발송(Resend/SendGrid), Slack Webhook, Notion/CRM 등으로 쉽게 확장 가능합니다.
- `lib/site.ts`의 회사 정보(주소/연락처/소셜 링크)를 실제 값으로 업데이트하세요.

## 5) 배포
Vercel 기준:
```bash
npm run build
npm run start
```
또는 Vercel에 GitHub 연동 후 자동 배포

---
Made for AUTONOMOUS PCC
