# deno
try to deno!


### 윈도우 - 파워쉘
```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

설치 후에

```
deno run https://deno.land/std/examples/welcome.ts
```
실행해보면 최초 실행 시 패키지 다운로드, 그 다음부터는 알아서 실행. (편하네)



## 간단한 서버 만들기
https://chaewonkong.github.io/posts/deno.html


## 튜토리얼
https://laikhan-workshop.tistory.com/54


* vs code 에서 deno extension 설치



* deno run [fileName]

## api call 하는 거 하나 만들어보기.
get, post

deno run --allow-all app.ts


## DENO GETTING STARTED !
https://deno.land/manual/getting_started




### 데노에서 node modules 쓰는법.

* Using node modules in Deno
https://medium.com/samsung-internet-dev/using-node-modules-in-deno-2885600ed7a9



# 데노에서 3rd Party app 쓰는법

https://stackoverflow.com/questions/64979829/deno-import-lodash-from-deno-land-x


1. Treat deno as a plain browser environment

```js
import "https://deno.land/x/lodash@4.17.19/dist/lodash.js";

// now `_` is imported in the global variable, which in deno is `self`
const _ = (self as any)._;

console.log(_.chunk([1, 2, 3], 2)); // --> [ [ 1, 2 ], [ 3 ] ]
```

2. Fake node functionality in deno
In deno std, there is a node module:

This module is meant to have a compatibility layer for the NodeJS standard library.

```js
import { createRequire } from "https://deno.land/std@0.86.0/node/module.ts";

const require = createRequire(import.meta.url);
const _ = require("./lodash.js");  

console.log(_.chunk([1, 2, 3], 2)); // --> [ [ 1, 2 ], [ 3 ] ]
```

deno에서 xlsx.js 를 읽는 것은 안된다고 함.
https://github.com/SheetJS/sheetjs/issues/2217


## DENO TUTORIAL > OAK

https://ichi.pro/ko/deno-oak-mich-mysqleul-sayonghayeo-blogging-api-guchug-mich-dockerize-267065037401964

nodemon 같이 수정했을 때 바로 refresh 되는게 없네.