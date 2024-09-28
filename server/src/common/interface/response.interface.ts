import type { HttpStatus } from "@nestjs/common";
import { never } from "rxjs";

export type TextResponse = | {success: string; error?: never} | {success?: never; error: string}


export interface Response<T> {
    status: HttpStatus;
    response: T;
    payload?: unknown;
}
