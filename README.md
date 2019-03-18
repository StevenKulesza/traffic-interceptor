# Traffic Interceptor

`npm install`
`npm start`

replace image base Urls with your domain. (https://theirDomain.com/theirCDN?param1=example&param2=example => https://myDomain.com/image?param1=example&param2=example)

If provided query strings then the application with strip strings; placing them in object to be stored. The app will then used stored CDN url to grab binary image data to return to page.