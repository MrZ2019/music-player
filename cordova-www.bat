e:
cd E:\Develop\workspace\vs\BlankCordovaApp12\music-player
explorer E:\Develop\workspace\vs\BlankCordovaApp12\music-player
start cmd /k browser-sync start --server --files "*.html, views/**/*.html, *.css, css/**/*.css,scripts/**/*.js" --host 192.168.3.13 --port 3003
cd ..
cd ..
start cmd /k supervisor -w BlankCordovaApp12/music-player/scripts -e jsx -n exit -x mybabel.bat 0