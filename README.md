# OUI Component Library

![Louis](https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif)

Meet Louis, the official mascot of OUI.

## Introduction

This document contains two sets of instructions:

1. Including OUI in your project
2. Contributing new CSS to OUI

## Including OUI in your project

### Pre-compiled CSS file

You can include this pre-compiled version of OUI in your application:

```html
http://d2uaiq63sgqwfs.cloudfront.net/7.1.0/oui.css
http://d2uaiq63sgqwfs.cloudfront.net/7.1.0/oui-extras.css
```

Replace `7.1.0` with the [latest release](https://github.com/optimizely/oui/releases) if needed.

`oui.css` contains the main CSS and `oui-extras.css` currently provides icon classes.

### Using NPM

OUI is published as an npm module called `optimizely-oui`. To install:

```
npm install optimizely-oui --save
```

If using Gulp for your project:

```javascript
gulp.task('sass', function() {
  gulp.src('scss/**/*.scss')
    .pipe(sass({
      errLogToConsole: true,
      includePaths : [
        require('optimizely-oui').includePath
      ]
    }))
    .pipe(gulp.dest('path/to/css'));
});
```

### Example Starter Code

Download [OUI starter code](assets/oui-starter-code.zip) that includes the required file structure for new projects. Note that the paths to `core/...` will only work if the above gulp task is in place.

### Structure of OUI

OUI consists of two parts:

1. **Core**
    - Base styles used as the foundation for any site.
    - This code lives in this OUI repository and is a dependency for platform code.
2. **Platform (.e.g, `mobile`)**
    - Platform or device specific built on top of Core.
    - This code lives in the platform repo, pulling Core as a dependency.

For example, if you're building a mobile site, `mobile.scss` would contain:
```scss
// # Mobile
// Root file driving the Mobile CSS.

// Compass polyfills
@import 'core/core-polyfills';

// ## Core functions and mixins
@import 'core/partials/elements/functions';
@import 'core/partials/elements/mixins';

// ## Core and p13n variables
// Import `core` and `mobile` variables

@import 'core/core-variables';
@import 'mobile/mobile-variables';

// ## Core and mobile partials
// Import `core` and `mobile` partials

@import 'core/core-partials';
@import 'mobile/mobile-partials';

// ## Trumps
// Trumps use `!important` classes for overrides and should always be loaded last.

@import 'core/partials/trumps/background';
@import 'core/partials/trumps/borders';
@import 'core/partials/trumps/layout';
@import 'core/partials/trumps/margin';
@import 'core/partials/trumps/padding';
@import 'core/partials/trumps/type';
@import 'core/partials/trumps/sizing';
```

## Contributing to OUI

The following is for users planning to make contributions to OUI.

**Important:** see [CONTRIBUTING.md](CONTRIBUTING.md) for details on our versioning system.

After cloning the `oui` repo, run `npm start` to install dependencies and a linter post-commit hook.

### Cheat Sheet

- **`gulp`** : Runs the default compass watch process.
- **`npm test`** : Attempts to compile SCSS and runs the linter.
- **`gulp svg`** : Builds svg sprite and demo page into `dist`.
- **`gulp sass`** : Builds Core-only css file for testing into `dist`.

### Getting Started

#### Run the Sass compile process

To output Core CSS file to the `dist` directory run:

    gulp sass

#### SVG Icons

SVGs are maintained by the [https://github.com/optimizely/oui-icons](https://github.com/optimizely/oui-icons) repository. The sprite file that is generated by the repo, `svg-symbols.svg`, needs to be included as the first child of the `<body>` on any page that needs svg icons.

Icons are in three sizes but the most common is 16x16.

```
<svg class="icon">
  <use xlink:href="#add-16"></use>
</svg>
```

By using this method including the icon color can be changed by using the `fill` CSS property.

##### Using Icons

If you're including OUI by including the stylesheet link to the rendered CSS (that is, you're not including it with Sass) you can still use the method described above or reference the icons by using CSS classes.

```
<div class="icon icon--add-16"></div>
```

This is an easier implementation as it does not required an svg sprite but you cannot change the color of the icons.

## Testing New Code

Use existing HTML or add new HTML to `/tests/` to confirm any OUI changes in Chrome, Firefox, Safari and IE 10+. Run:

    gulp html-tests

This will start browsersync and will watch and reload the browser after any Sass or HTML changes.

## Philosophy

OUI stands for Optimizely User Interface. It's a collection of CSS/HTML/JS elements and objects meant to be combined and extended to create larger interfaces, influenced primarily by Harry Robert's work on [inuit.css](https://github.com/csswizardry/inuit.css/) and Johnathon Snooks [SMACSS](https://smacss.com/). The goals of this library are to provide code that is...

1. **Abstracted.** Component names shouldn't be derived from the content they contain. Class names should convey structural meaning.
1. **Reusable.** Components should be generic enough to be reused throughout the site. They should make no assumptions what page/view they will be used on. Problems solved in one area should be easily applied elsewhere.
1. **Mixable.** Components should be able to join together to create larger blocks.
1. **Powered by variables.** Nearly all design elements — colors, fonts, spacings, shadows — should be defined using the pre-existing [variables](https://github.com/optimizely/oui/blob/master/core/_core-variables.scss).

By achieving these goals our code becomes...

1. **Scalable.** Reusing patterns means new elements can be created faster and with minimal additional CSS.
1. **Consistent.** Not only will developers be able to read each other's code more easily we'll have a better end-user experience across the product.
1. **Smaller and [DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself)er.** Since we're constantly reusing low-level objects to build larger ones, often with Sass' <code>@extend</code> functionality, we cut down on CSS bloat. Less code means fewer bugs.

#### Writing Good Classes

In order to write HTML and CSS classes that provide meaning for developers we're using the BEM syntax. BEM stands for Block, Element, Modifier and is becoming a popular approach to building CSS and HTML that describes an object's internal relationships.

```html
<div class="grid grid--gutter">
  <div class="grid__cell">
    grid cell
  </div>
  <div class="grid__cell">
    grid cell
  </div>
  </div>
  <div class="grid__cell">
    grid cell
  </div>
</div>
```

In the example above...

- **Block** is represented by <code>lego-grid</code> and is the parent class of the object.
- **Elements** are children of the object. They are named by joining the parent class name and a child class with a double underscore. In this case <code>lego-grid__cell</code>.
- **Modifiers** are variations on the default. In this case we have a <code>lego-grid--gutter</code>. This provides spacing between the cells.

Though somewhat verbose, this syntax makes it easy to determine the child/parent relationships between bits of code, especially when different objects are mixed together. It can be tricky naming elements so some judgment is required. This becomes easier over time.

For a longer discussion Harry Roberts provides a <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">good introduction</a> to the syntax.

#### Futher Reading

- [MindBEMding – getting your head ’round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). Introduction to BEM.
- [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/). What is a meaningful class name?
- [OOCSS + Sass = The best way to CSS](http://ianstormtaylor.com/oocss-plus-sass-is-the-best-way-to-css/). Some examples of bulding on existing objects using `@extend` in Sass.
- [Hacks for dealing with specificity](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/). Some more technical details around specificity.
- [Normalising designs for better quality CSS (Video)](https://www.youtube.com/watch?v=ldx4ZFxMEeo). A conference presentation about normalizing designs and the process from design to HTML.
