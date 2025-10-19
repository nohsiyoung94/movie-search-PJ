// Vue 애플리케이션의 진입점 파일
import { createApp } from 'vue' // Vue 3 애플리케이션 생성 함수
import App from './App.vue' // 루트 컴포넌트
import router from './routes' // Vue Router 설정
import store from './store' // Vuex 스토어 설정
import loadImage from './plugins/loadImage' // 이미지 로딩 플러그인

// ❌ 기존에 있던: import 'bootstrap/scss/bootstrap.scss'  (삭제)
// ✅ 공용 SCSS만 한 번 (컴포넌트에서 중복 로드 방지)
import '~/scss/main.scss'

// Vue 애플리케이션 생성 및 설정
createApp(App)
    .use(router) // 라우터 플러그인 등록 (페이지 이동 기능)
    .use(store) // Vuex 스토어 등록 (전역 상태 관리)
    .use(loadImage) // 이미지 로딩 플러그인 등록 ($loadImage 전역 메서드)
    .mount('#app') // #app 요소에 Vue 애플리케이션 마운트

