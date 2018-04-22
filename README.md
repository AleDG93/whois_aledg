

###Create the application structure
`create-react-app my_app`


###Navigate the folder
`cd my_app`

###Remove useless files
```
rm src/index.css
rm src/logo.svg
rm src/App.css
rm public/manifest.json
```
###Subsitute App.js with:
```
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
```

###Create gulpfile and install dependencies
```
touch gulpfile.js
npm install --save gulp gulp-sass gulp-clean-css gulp-uglify gulp-rename gulp-changed
```
###Create sass structures
```
mkdir src/assets/scss
mkdir src/assets/css
touch src/assets/scss/default.scss
```

###Insert the code into gulpfile
```
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';

//Compile SCSS
gulp.task('compile_scss', function(){

    gulp.src(SCSS_SRC)
    .pipe(sass().on('erroor', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
});

//detect changes in SCSS
gulp.task('watch_scss', function(){

    gulp.watch(SCSS_SRC, ['compile_scss']);

});


//Run tasks
gulp.task('default', ['watch_scss']);
```
###Import css into app.js
`import './assets/css/default.min.css'`
###Create a components folder and subfolderrs
```
mkdir src/components
mkdir src/components/header_components
touch src/components/header_components/header.js
mkdir src/components/footer_components
touch src/components/footer_components/footer.js
mkdir src/components/pages
touch src/components/pages/homepage.js
```

###Add the header code
```
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header>
            
        </header>
    );
  }
}

export default Header;
```
###Add the footer 
```
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer>
            
        </footer>
    );
  }
}

export default Footer;
```
###Create a partial file _config.scss in scss folder and insert global scss variables
`touch src/assets/sccss/_config.scss`

with the follwing content
```
$black: #010000;
$white: #ffffff;
$darkGrey: #333;
$red: #ff1755;


/*
Mixins
*/


@mixin translateY($e){

  -webkit-transform: translateY($e);
  -moz-transform: translateY($e);
  transform: translateY($e);
}

@mixin transition($e){

  -webkit-transition: $e;
  -moz-transition: $e;
  transition: $e;
}


body {

  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: $black;
  font-weight: 400px;
  font-style: normal;

}

a {

  text-decoration: none;
  @include transition(.4 easy-in-out);
  cursor: pointer;

  &:hover{
    color: $red;
    @include transition(.4 easy-in-out);
  }
}

.container-fluid {
  line-height: 24px;
}
```
###For create routing using react we install react-router-dom
`npm install --save-dev react-router-dom`

And import into App.js
```
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
```
Import Link in header.js to create links
```
import {
    Link
  } from 'react-router-dom';
```
and substitute <a> with <Link> inside the header.js file
```
<li className="first">
  <Link to="/">Home</Link>
</li>
```