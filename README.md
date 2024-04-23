## 🛠 주요 기술 스택

### **Node.js & Express**

- 백엔드 서버 구축에 사용. Express는 웹 애플리케이션의 라우팅과 미들웨어 기능을 쉽게 구현할 수 있도록 도와줍니다.

### **Next.js**

- SSR(Server-Side Rendering)을 지원하는 React 프레임워크. SEO 최적화와 성능 향상을 위해 사용.

### **Apollo Server**

- GraphQL 서버를 쉽게 구축할 수 있는 툴킷. Express와 통합되어 API 서버로 사용.

### **GraphQL**

- 데이터 쿼리와 조작을 위한 런타임. Apollo Server와 함께 사용하여 효율적인 데이터 관리를 가능하게 함.

### **Redux & React Redux**

- 상태 관리 라이브러리. React 앱에서 UI 상태를 중앙에서 관리.

### **Redux-Saga**

- Redux 애플리케이션에서 사이드 이펙트(비동기 로딩 등)를 관리하기 위한 미들웨어.

### **Material-UI**

- React 컴포넌트 라이브러리. Google의 Material Design을 기반으로 구현.

### **TypeScript**

- JavaScript에 타입을 추가하여 안정성을 높이고 버그를 줄이는 프로그래밍 언어.

## ⚠️ 설치 주의사항

### **Peer Dependencies**

- 프로젝트는 `npm install --legacy-peer-deps` 명령어를 사용하여 설치해야 합니다. NPM 버전 7 이상에서 변경된 peer dependencies 정책 때문에 이 옵션을 사용하는 것이 좋습니다.

### **Yarn 사용 시 주의**

- Yarn을 사용할 경우 일부 의존성에서 문제가 발생할 수 있습니다. 특히 `@graphql-codegen/cli` 같은 패키지에서 호환성 문제가 있으므로, npm을 사용하는 것을 추천합니다.

## 🚀 개발 환경 설정

```bash
# 개발 모드에서 서버 실행
npm run dev


# 프로덕션 환경 실행
npm start

# ESLint를 통한 코드 스타일 및 오류 체크
npm run lint
```

이 정보를 README.md 파일에 포함시키면 프로젝트 참여자 및 사용자가 필요한 정보를 쉽게 접근하고 설정할 수 있습니다. 필요한 추가 정보는 프로젝트 문서에 계속 업데이트해야 합니다.
