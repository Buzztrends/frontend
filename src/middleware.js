import { NextResponse } from "next/server";

export function middleware(request){
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/_next")) return NextResponse.next();

    if(pathname !== '/login' && request.cookies.get('authToken') == undefined){
        // console.log('idhar aagaya');
        request.nextUrl.pathname = '/login';
        return NextResponse.redirect(request.nextUrl);
    } else if(pathname == '/login' && request.cookies.get('authToken') != undefined){
        // console.log('udhar aagaya');
        request.nextUrl.pathname = '/home';
        return NextResponse.redirect(request.nextUrl);
    }
}