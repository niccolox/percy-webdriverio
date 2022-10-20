# Onboarding

Assignment 1: Getting started with Percy
Assignment Duration: 3 hours

Use Any of Percy SDK available here
Webdriver.io Percy 
https://github.com/niccolox/percy-webdriverio

Use Percy to perform visual comparison between two environments URLs. Reference doc: Comparing two URLs to each other
https://docs.percy.io/docs/comparing-two-urls-to-each-other

Prod - https://www.browserstack.com 

Non-Prod - https://k8s.bsstag.com/ 


https://percy.io/3fdc3ca1/nicholas-percy-webdriverio

production branch 
```shell
npx PERCY_BRANCH=production percy exec -- node production.js
```
staging branch
```shell
npx PERCY_BRANCH=staging percy exec -- node staging.test.js
npx percy exec -- wdio wdio.conf.js
```

Endpoints to test

/

/pricing

/integrations/automate

/docs (Example( https://k8s.bsstag.com/docs & https://www.browserstack.com/docs))

Following configuration to be tested on

Resolution : 375, 480, 720, 1280, 1440, 1920

Browsers: Firefox and Edge


### Hello World

```
netstat -vanp tcp | grep 4444
sudo lsof -i :4444
kill -9 $(lsof -ti:4444)
kill -9 $(lsof -ti:3000,3001)
brew tap devasghar/portkill && brew install devasghar/portkill/homebrew-portkil
portkill 4444
geckoserver
npx wdio repl geckodriver
npx wdio repl chrome
npm run test
WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO

npx wdio run ./wdio.conf.js --spec hello_world.test.js
/node_modules/.bin/percy exec -- ./node_modules/.bin/wdio wdio.conf.js
npx percy exec:start -v
npx wdio run ./wdio.conf.js --spec example.e2e.js
npx wdio run ./wdio.conf.js --suite exampleSuiteName
https://webdriver.io/docs/gettingstarted



```
