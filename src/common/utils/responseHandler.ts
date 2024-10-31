/**
1. GET
	•	200 OK: 요청이 성공적으로 처리되었고, 요청된 리소스가 반환됨.
	•	404 Not Found: 요청한 리소스가 존재하지 않음.

2. POST
	•	201 Created: 요청이 성공적으로 처리되어 새로운 리소스가 생성됨.
	•	400 Bad Request: 요청이 잘못되어 서버가 이해할 수 없음.
	•	500 Internal Server Error: 서버에서 예기치 않은 오류가 발생함.

3. PUT
	•	200 OK: 요청이 성공적으로 처리되어 리소스가 업데이트됨.
	•	204 No Content: 요청이 성공적으로 처리되었지만 반환할 콘텐츠가 없음.
	•	404 Not Found: 업데이트할 리소스가 존재하지 않음.

4. DELETE
	•	204 No Content: 요청이 성공적으로 처리되어 리소스가 삭제됨.
	•	404 Not Found: 삭제할 리소스가 존재하지 않음.

5. PATCH
	•	200 OK: 부분적으로 업데이트된 리소스가 반환됨.
	•	204 No Content: 요청이 성공적으로 처리되었지만 반환할 콘텐츠가 없음.
*/

import { NextResponse } from "next/server";

const statusMessages: Record<number, string> = {
  200: "OK",
  201: "Created",
  204: "No Content",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  500: "Internal Server Error",
};

type ResponseHandlerProps<T> = {
  status: number;
  data?: T;
  error?: unknown;
};
export const responseHandler = <T>({
  status,
  data,
  error,
}: ResponseHandlerProps<T>) => {
  if (error) console.error(error);

  const message = statusMessages[status] || "Unknown Response";
  if (data) {
    return NextResponse.json({ message, data }, { status });
  } else {
    return NextResponse.json({ message }, { status });
  }
};
