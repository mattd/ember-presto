# See docs at http://brunch.readthedocs.org/en/latest/config.html.
exports.config =
  files:
    javascripts:
      defaultExtension: 'js',
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
        'test/test.js': /^test/
      order:
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery-1.8.0.min.js',
          'vendor/scripts/handlebars-1.0.0.beta.6.js',
          'vendor/scripts/ember-latest.js',
          'vendor/scripts/ember-data-latest.js'
        ]

    stylesheets:
      defaultExtension: 'styl'
      joinTo: 'stylesheets/app.css'
      order:
        before: [
          'vendor/styles/transitions.css',
          'vendor/stylesjquery.mobile.transition.css',
          'vendor/styles/jquery.mobile.transition.fade.css',
          'vendor/styles/jquery.mobile.transition.flip.css',
          'vendor/styles/jquery.mobile.transition.flow.css',
          'vendor/styles/jquery.mobile.transition.pop.css',
          'vendor/styles/jquery.mobile.transition.slide.css',
          'vendor/styles/jquery.mobile.transition.slidedown.css',
          'vendor/styles/jquery.mobile.transition.slidefade.css',
          'vendor/styles/jquery.mobile.transition.slidein.keyframes.css',
          'vendor/styles/jquery.mobile.transition.slideout.keyframes.css',
          'vendor/styles/jquery.mobile.transition.slideup.css',
          'vendor/styles/jquery.mobile.transition.turn.css'
        ]

    templates:
      precompile: true
      defaultExtension: 'hbs'
      joinTo: 'javascripts/app.js' : /^app/

  conventions:
    assets: /static(\/|\\)/

  jshint:
    pattern: /^app\/.*\.js$/
    options:
      bitwise: true
      curly: true
      shadow: true
    globals:
      jQuery: true
      App: true
      Ember: false
      Em: false

  server:
    port: 3333
    base: '/'
    run: no
