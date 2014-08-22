Angular App Template
=========================

Rethink of how to structure an app template using angular on FeedHenry 3 platform. After choosing Angular as the framework for a project recently I began to think how I could improve my approach and finally tie in Grunt for handling tasks, utility bash scripts, and karma for clientside testing. Its a continued work in progress and any suggestions or improvements welcomed!

## Why this template??

The template is a basic modularized approach to using AngularJS with the FeedHenry 3 platform. For sometime now, I have been creating such templates without considering initial app project structure and config. After completing a small recent project, I found that I needed to rethink my workflow, from automating repetitive tasks, writing an obscene amount of duplicate `CSS` rules to defining project config in terms of `.jshintrc` and `.editorconfig`. I also had trouble intgrating karma testing suite into the said project, partially due to inexperience using karam with AngularJS. So I have decided to create thhis basic template for future projects whether personal or for work!   

### Enter Less

Having used `less` on my first commerical project I quickly found the benefits to using a pre-processor for `CSS` via the use of variables and mixins to limit duplication of `CSS` rules in my styles sheet.

To compile your less to css see the `grunt less` task below.

### Enter Grunt

I mentioned automating workflow tasks above. I spent some time considering the benefits to using `Gulp` vs `Grunt` vs `Shell Scripts` to achieve the desired outcome of automating workflow tasks. I finally decide that the best approach for me is to couple my expanding knowledge and skills with `Shell Scripting` and vast amount of `Grunt` plugins. So build off the default `Gruntfile.js` used on advanced cordova project on the FeedHenry 3 platform.

#### grunt

Default tasks registered, this task will launch your clientside application in a browser window for local development. This task also passes in the compile `less` task before lauching the app in your default browser window.  

```
grunt
```

#### grunt serve:local

This task will launch your clientside application in a browser window for local development. This task does not compile our `less` scripts.

```
grunt serve:local
```
#### grunt format

Grunt task for formating javascript code to specfic rules outlined in projects root `.jshintrc` file. This task also uses lintSpaces for linting our javascript files. We also pass in our files sourcePaths in form of array.

```
grunt format
```

#### grunt weinre

This task will perform a shell commamd that executes a shell script to automatically detect `en0` ip address property and pass to a function to start a weirne service for on device debugging of cordova based hybird apps.

```
grunt weinre
```

#### grunt less

Compile pre-processed `less` rules to projects main `CSS` file. 

```
grunt less
```

#### grunt karma

Launch the projects unit testing suite Karma, powered by Jasmine. 

```
grunt karma
```