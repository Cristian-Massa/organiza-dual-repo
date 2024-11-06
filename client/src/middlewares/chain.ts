import { NextMiddlewareResult } from "next/dist/server/web/types";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export type CustomMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse
) => NextMiddlewareResult | Promise<NextMiddlewareResult>;

type MiddlewareFactory = (middleware: CustomMiddleware) => CustomMiddleware;

export function chain(
  middlewares: MiddlewareFactory[],
  index = 0
): CustomMiddleware {
  const current = middlewares[index];
  if (current) {
    const next = chain(middlewares, index + 1);
    return current(next);
  }
  return (request: NextRequest, event: NextFetchEvent) => {
    return NextResponse.next();
  };
}
