module.exports = {
  // Project config: Defaults to name and version from package.json.
  // Here you can overwrite it and add more custom properties.
  // For a detailed documentation of all the options in here see
  // https://uiengine.uix.space/basics/config/
  name: 'Uiengine2 Demo',

  // Base directories for the input, your raw source files:
  // - components is the root of the directory containing the components
  // - templates contains the variant preview and application templates
  // - pages is the directory of the UIengine's site structure and page markdown files
  source: {
    components: './src/components',
    templates: './src/templates',
    pages: './uiengine'
  },

  // Destination paths for the generated output.
  target: './dist',

  // Adapters are used for templating/rendering. Each adapter is a module that gets required
  // and needs to provide functions for setup and rendering. For details see the adapters docs.
  adapters: {
    html: '@uiengine/adapter-html'
  },

  // Here you can configure the template that the variant preview gets embeded in.
  template: 'uiengine.html',

  ui: {
    lang: 'en',
    // hljs: 'en',
    // customStylesFile: '/path-to-overrides.css',
    viewports: {
      Phone: {
        width: 320
      },
      Tablet: {
        width: 768
      },
      Desktop: {
        width: 1280
      }
    },
    breakpoints: {
      XS: 320,
      S: 576,
      M: 768,
      L: 992,
      XL: 1200
    }
  }
}
