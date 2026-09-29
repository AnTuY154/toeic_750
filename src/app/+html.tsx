import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

const base = '/toeic_750';

export default function Root({ children }: PropsWithChildren) {
  const registerServiceWorker =
    "if ('serviceWorker' in navigator) {" +
    "window.addEventListener('load', function () {" +
    "navigator.serviceWorker.register('" + base + "/sw.js', { scope: '" + base + "/' })" +
    ".catch(function (error) { console.warn('750 Lab service worker registration failed', error); });" +
    "});" +
    "}";

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#171717" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="750 Lab" />
        <meta
          name="description"
          content="Personal adaptive TOEIC diagnostic and learning app."
        />
        <link rel="manifest" href={base + '/manifest.json'} />
        <link rel="icon" href={base + '/icon.svg'} />
        <link rel="apple-touch-icon" href={base + '/icon.svg'} />
        <script dangerouslySetInnerHTML={{ __html: registerServiceWorker }} />
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
