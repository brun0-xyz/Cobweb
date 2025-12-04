document.getElementById("openAboutBlank").addEventListener("click", function() {

      const newTab = window.open('about:blank', '_blank');

      newTab.document.write(`
        <html>
        <head>
          <title>About:Blank</title>
          <style>
            html, body {
              margin: 0;
              padding: 0;
              height: 100%;
              overflow: hidden;
            }
            iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
          </style>
        </head>
        <body>
          <iframe src="/"></iframe>
        </body>
        </html>
      `);

      newTab.document.close();
    });