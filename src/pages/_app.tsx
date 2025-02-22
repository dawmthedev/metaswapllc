// filepath: src/pages/_app.tsx
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

//working

// import { type AppType } from "next/dist/shared/lib/utils";

// import "@/styles/globals.css";
// import "@/styles/locomotive-scroll.css";

// import { DM_Sans } from "next/font/google";

// const dmSans = DM_Sans({
//   display: "swap",
//   subsets: ["latin"],
// });

// const MyApp: AppType = ({ Component, pageProps }) => {
//   return (
//     <div lang={"en"} className={dmSans.className}>
//       <Component {...pageProps} />
//     </div>
//   );
// };

// export default MyApp;
