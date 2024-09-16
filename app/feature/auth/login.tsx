import { Button } from '~/components/Button';
import { kakaoSdk } from '~/modules/kakao';

export function LoginButton() {
  return <Button size="36" onClick={() => {
    kakaoSdk.login()
  }}>로그인</Button>
}