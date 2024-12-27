'use client';

import {
    isServer,
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query"
import {ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactNode } from "react";

function makeQueryClient(){
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000
            }
        }
    });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient(){
    if(isServer) return makeQueryClient();

    if(!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
}

interface IProviders {
    children: ReactNode
}

export default function Providers({children}: IProviders){
    const QueryClient = getQueryClient();
    return(
        <QueryClientProvider client={QueryClient}>
            {children} 
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    );
}