// filepath: src/pages/_error.tsx
import type { NextPageContext } from "next";
import Error from "next/error";

interface ErrorProps {
  statusCode: number;
}

const MyError = ({ statusCode }: ErrorProps) => {
  return <Error statusCode={statusCode} />;
};

MyError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default MyError;
