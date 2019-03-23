# Traffic Interceptor
`mongod`

`npm install`

`npm start`

An application aimed to be a man in the middle between Adobe Target and Adobe Campaign. Today Adobe Target does not allow you to store analytical data on images a user sees. This is used to interfer and store data from served sources.

replace image base Urls with your domain. (https://theirDomain.com/theirCDN?param1=example&param2=example => https://myDomain.com/image?param1=example&param2=example)

If provided query strings then the application with strip strings; placing them in object to be stored. The app will then used stored CDN url to grab binary image data to return to page.