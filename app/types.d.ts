import "@types/kakao-js-sdk";

declare global {
  interface Window {
    ENV: {
      KAKAO_APP_KEY: string;
    };
  }
}
