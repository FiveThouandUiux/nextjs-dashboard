import { Montserrat, Lusitana, Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';

// 변수형 폰트는 굵기 지정안함
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

// 변수형이 아닌경우, weight 지정 필수
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const pretendard = localFont({
  src: [
    { path: '../../public/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/Pretendard-Medium.woff', weight: '500' },
    { path: '../../public/Pretendard-Bold.woff', weight: '700' },
  ],
  display: 'swap',
});