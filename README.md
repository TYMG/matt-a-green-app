# Matt A Green

[TOC]

## Overview

## Tech Notes

### Implementation Details:
* I added the NGRX Schematics to the CLI using the followuing command:

  [`ng config cli.defaultCollection @ngrx/schematics`](https://github.com/ngrx/platform/blob/master/docs/schematics/README.md)

### Angular CLI Notes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Further help
* To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Bootstrap Tutorial

[Link](https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a)

Bootstrap Theme
[https://bootswatch.com/cyborg/#top]

Prettier Tutorial
1. Add prettier to your project:
    npm install prettier --save-dev --save-exact
2. Verify by running against a file:
    npx prettier --write src/index.js
3. Run prettier when commiting files:
    npm install pretty-quick husky --save-dev
    Then edit package.json:
    `{ "scripts": { "precommit": "pretty-quick --staged" } }`

Animation:
[Angular Animation](https://alligator.io/angular/animation-angular/)

NG Scroll:
[3rd party library (ng2-page-scroll) not working in Angular-Cli project](https://stackoverflow.com/questions/39040140/3rd-party-library-ng2-page-scroll-not-working-in-angular-cli-project?rq=1)