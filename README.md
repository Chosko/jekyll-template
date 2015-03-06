# Jekyll template

This is a highly-automated Jekyll template, ready to be built and hosted on Github Pages.

This template is based on some of the most common technologies: Compass, CoffeeScript, HTML5Boilerplate and Bootstrap. 

All the automations are made with Grunt, using several tasks.

> This template is very specialized. If you need something more flexible, take a look at [Yeoman](http://yeoman.io/)

## Getting started

### Requirements

Make sure you have these components installed:

* nodejs with npm
* ruby
* git
* grunt-cli (to install, run `sudo npm install -g grunt-cli`)
* bower (to install, run `sudo npm install -g bower`)

### Fork, Clone and install the dependencies

Fork and clone the repo, then cd into the repo and run

    sudo npm install
    bundle install

### Set-up some variables

Before start making your changes, take a look and change **_config.yml**.

## Develop!

### Step 1: run the local server

To run the website on your local machine run

    grunt serve

> As the bower dependencies are installed automatically, the first time it may take a while.

### Step 2: make your changes

As long as `grunt serve` is running, every change you make in the code is **automatically refreshed** on your browser.

The project has been highly automated. For instance, if you add a dependency into bower.json, it will be automatically installed, included into your html and the site will be automatically refreshed.

> To see all the automations performed, see the *Automations* sections at the end of this README.

### Step 3 (optional): build everything and see what happens

If you want to see your site *as it will appear online*, run

    grunt serve:dist

this command will build everything and start a local server.

> This command is useful to test if there are some broken paths when the site is built. If everything is OK, the sites served with `grunt serve` and `grunt serve:dist` should look IDENTICAL 

### Step 4: deploy!

When you are ready to deploy, just run

    grunt deploy

And checkout your website online.

> WARNING: this command will only work properly if you have already set the build settings into `_config.yml`

## Automations

TODO

## Additional info

I made this template for personal use. I published it because I thought it could be a useful tool for someone, but it may contain bugs and (more likely) it may just not fit with your needings. A future development would be converting it into a Yeoman generator, to make it more flexible.

## Acknowledgments

This template has been built starting from a Yeoman template, using [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb)

## License

The MIT License (MIT)

Copyright (c) 2015 Ruben Caliandro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
