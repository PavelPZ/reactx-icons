
d:

rem call "c:\Program Files (x86)\Microsoft SDKs\TypeScript\2.6\tsc.exe" --p D:\rw\pavelpz\reactx-icons\tsconfig-native.json
rem call "c:\Program Files (x86)\Microsoft SDKs\TypeScript\2.6\tsc.exe" --p D:\rw\pavelpz\reactx-icons\tsconfig-native.json -d
rem call "c:\Program Files (x86)\Microsoft SDKs\TypeScript\2.6\tsc.exe" --p D:\rw\pavelpz\reactx-icons\tsconfig-web.json

cd d:\rw\pavelpz\reactx-icons\lib-native
call npm version patch
call npm publish

cd d:\rw\pavelpz\reactx-icons\lib-web
call npm version patch
call npm publish

