import NextHead from "next/head";
import React, { Component } from "react";
import PROJECT_INFO from "CONSTANTS/PROJECT_INFO";
export class Head extends Component {
  render() {
    return (
      <NextHead>
        {/* ----  PROJECT CONFIG ---- */}
        {/* 
        <title>{`${PROJECT_INFO.name}`} </title>
 */}
        <title>{PROJECT_INFO.name.toUpperCase()}</title>
        <meta name="description" content={PROJECT_INFO.description} />
        <meta name="keywords" content={PROJECT_INFO.keywords()} />
        <link rel="icon" href={PROJECT_INFO?.icons?.head} />

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        {/* ----  PWA CONFIG ---- */}

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons.icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </NextHead>
    );
  }
}

export default Head;
