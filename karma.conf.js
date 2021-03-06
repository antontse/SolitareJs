/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-route/angular-route.js",
      "app/bower_components/angular-mocks/angular-mocks.js",
      "app/bower_components/underscore/underscore.js",
      "app/cards/**/*.js",
      "app/klondike/piles/pile.js",
      "app/klondike/piles/foundationPile.js",
      "app/klondike/piles/remainderPile.js",
      "app/klondike/piles/tableauPile.js",
      "app/klondike/*.js",
      "tests/**/*.js"
    ],

    autoWatch: true,
    
    reporters: ["junit"],

    frameworks: ["jasmine"],

    browsers: ["Chrome", "Firefox", "Safari", "PhantomJS"],

    plugins: [
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-safari-launcher",
      "karma-jasmine",
      "karma-junit-reporter",
      "karma-phantomjs-launcher"
    ],

    junitReporter: {
      outputDir: "test_output",
      suite: "",
      outputFile: "test-results.xml",
      useBrowserName: true
    }

  });
};
