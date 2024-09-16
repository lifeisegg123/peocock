import { CallbackQueue } from "~/utils/callback";

class KakaoSdk extends CallbackQueue {
  constructor() {
    super();
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
    script.integrity =
      "sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4";
    script.crossOrigin = "anonymous";

    script.onload = () => {
      console.log(window.ENV.KAKAO_APP_KEY);
      window.Kakao.init(window.ENV.KAKAO_APP_KEY);

      this.ready = true;
      this.flush();
    };
    document.body.appendChild(script);
  }

  login() {
    this.runOrEnqueue(() => {
      console.log(window.location.href + "auth/callback");
      window.Kakao.Auth.authorize({
        redirectUri: window.location.href + "auth/callback",
      });
    });
  }
}

export const kakaoSdk = new KakaoSdk();
