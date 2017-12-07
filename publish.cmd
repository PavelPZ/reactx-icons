
d:

cd d:\rw\pavelpz\reactx-icons\lib-native
call npm version patch
call npm publish

cd d:\rw\pavelpz\reactx-icons\lib-web
call npm version patch
call npm publish

cd d:\rw\pavelpz\reactx-mui
call npm install --save reactx-icons-native
call jspm install reactx-icons-web

cd d:\rw\pavelpz\reactx-html
call npm install --save reactx-icons-native
call jspm install reactx-icons-web