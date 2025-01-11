import withPWA from "next-pwa";
import { Configuration } from "webpack";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export" as const,
  images: {
    unoptimized: true,
  },
  ...(isProd
    ? {
        basePath: "/metaswapllc",
        assetPrefix: "/metaswapllc",
      }
    : {}),
  // webpack: (config: Configuration, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   return config;
  // },
};

const pwaConfig = {
  dest: "public",
  disable: !isProd,
  register: true,
  scope: "/",
  sw: "service-worker.js",
};

export default withPWA(pwaConfig)(nextConfig);
// //Working Version no 404 error

// import WithPWA from "next-pwa";

// const withPWA = WithPWA({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
//   register: true,
//   scope: "/",
//   sw: "service-worker.js",
// });

// /**
//  * @type {import('next').NextConfig}
//  */
// // @ts-ignore
// const config = withPWA({
//   reactStrictMode: true,

//   /**
//    * If you are using `appDir` then you must comment the below `i18n` config out.
//    *
//    * @see https://github.com/vercel/next.js/issues/41980
//    */
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
// });

// export default config;
