// /app/page.js - نسخه نهایی تمیز شده

const GOOGLE_URL = "https://www.google.com";

export default function Home() {
  return (
    <html>
      <head>
        <title>Google Redirect Mini App</title>
        
        <meta property="og:title" content="Mini App Redirect to Google" />
        <meta property="og:image" content="https://picsum.photos/600/400" />
        
        <script src="https://assets.warpcast.com/sdk/mini-app-sdk.js" defer></script>
        
        <script dangerouslySetInnerHTML={{ __html: `
            window.onload = function() {
                if (window.sdk && window.sdk.actions && window.sdk.actions.ready) {
                    window.sdk.actions.ready();
                }

                window.handleRedirect = function() {
                    if (window.sdk && window.sdk.actions && window.sdk.actions.navigateToExternalUrl) {
                        window.sdk.actions.navigateToExternalUrl({ url: '${GOOGLE_URL}' });
                    } else {
                        window.location.href = '${GOOGLE_URL}';
                    }
                };
            
                const appContent = document.createElement('div');
                appContent.style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; background-color: #1E1E2F; color: white;';
                appContent.innerHTML = '<h1>Mini App فعال شد!</h1>' +
                                       '<button onclick="window.handleRedirect()" style="' +
                                       'padding: 12px 24px; font-size: 18px; cursor: pointer; background-color: #7A00FF; color: white; border: none; border-radius: 8px; margin-top: 20px;' +
                                       '">برو به Google 🚀</button>';
                
                document.body.appendChild(appContent);
            };
        `}} />
        
        <style>
            body { margin: 0; padding: 0; overflow: hidden; }
        </style>
      </head>
      <body>
      </body>
    </html>
  );
}