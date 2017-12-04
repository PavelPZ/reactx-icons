d:
cd d:\rw\pavelpz\reactx-icons\design\
rmdir mdi-react /s /q
call git clone https://github.com/levrik/mdi-react
cd mdi-react
call npm install
rmdir mdi /s /q
call git submodule add -f --name mdi https://github.com/Templarian/MaterialDesign-SVG mdi
xcopy d:\rw\pavelpz\reactx-icons\design\mdi-react-lm\*.* d:\rw\pavelpz\reactx-icons\design\mdi-react\*.* /s /y
npm run build
rmdir D:\rw\pavelpz\reactx-icons\node_modules\@types\node /s /q
