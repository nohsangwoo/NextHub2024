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

### README.md에 포함할 기술 스택 설명

아래는 프로젝트에서 사용된 주요 기술 스택에 대한 설명입니다. 이 설명은 README.md 파일에 포함할 수 있으며, 프로젝트의 구조와 사용된 기술들에 대한 이해를 돕기 위한 것입니다.

---

### **Express with Next.js Integration**

- 이 프로젝트는 **Express.js**를 기반으로 **Next.js**를 통합하여 사용하고 있습니다. Express 서버는 Next.js의 서버사이드 렌더링(SSR) 기능과 라우팅을 보완하고, Next.js에서 직접 처리하기 어려운 서버 로직을 처리하기 위해 사용됩니다.

### **GraphQL Code Generator**

- **GraphQL Code Generator**를 사용하여 GraphQL 스키마에서 자동으로 TypeScript 타입 정의와 리졸버를 생성합니다. 이 도구는 API 설계를 기반으로 정확한 타입 안전성을 제공하며, 개발 과정에서 타입 관련 에러를 최소화하는 데 큰 도움을 줍니다.

### **GraphQL Tools (Load-Files and Merge)**

- **GraphQL Tools**의 `loadFiles`와 `merge` 모듈을 사용하여, 프로젝트 디렉터리 내의 모든 GraphQL type definitions (`.graphql` 파일)과 resolvers (`.ts` 파일)을 자동으로 로드하고 합칩니다. 이를 통해 개별 파일로 분리된 GraphQL 스키마와 리졸버를 하나의 실행 가능한 스키마로 통합하여 관리의 효율성을 높입니다.

### **React Query (TanStack Query)**

- **React Query** (이제 **TanStack Query**로 알려져 있음)는 서버 상태 관리를 위한 라이브러리로 사용됩니다. 이 도구는 서버로부터 데이터를 비동기적으로 불러오고, 캐싱, 동기화를 자동으로 처리하여 사용자 경험을 향상시킵니다. 데이터가 최신 상태인지 확인하고 필요한 경우에만 서버에 재요청을 보내는 기능도 포함되어 있습니다.

### **Apply prisma**

- **Prisma**는 ORM(Object-Relational Mapping) 라이브러리로, 데이터베이스 스키마를 코드로 정의하고, TypeScript로 타입을 정의할 수 있습니다. Prisma를 사용하면 데이터베이스 스키마 변경 시 자동으로 마이그레이션을 처리하고, 타입 안정성을 보장할 수 있습니다.

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
