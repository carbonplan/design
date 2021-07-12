<img
  src='https://carbonplan-assets.s3.amazonaws.com/monogram/dark-small.png'
  height='48'
/>

# carbonplan / design

**demoing our design system**

[![GitHub][github-badge]][github]
![MIT License][]

[github]: https://github.com/carbonplan/design
[github-badge]: https://flat.badgen.net/badge/-/github?icon=github&label
[mit license]: https://flat.badgen.net/badge/license/MIT/blue

This website demos our [`theme`](https://github.com/carbonplan/theme) and [`components`](https://github.com/carbonplan/components) packages, which together form our design system. It's useful for exploring the design system and also serves as a "test suite" for testing and optimizing the components.

## usage

To run locally

```js
npm install
npm run dev
```

## local linking

For development purposes, it's useful to use this repo as a place to test out updates to some of our design-related packages. In general, we do this through the following steps. Let's say you have a local versions of `components` that you want to test in `design`.

First, go into the `components` folder and type

```js
npm link
```

You may need to use `sudo` here. This creates a symlink in a global folder. You can read more about it [here](https://docs.npmjs.com/cli/v7/commands/npm-link). Then, in the same folder, run

```js
npm run watch
```

This starts a process that watches for changes to the source of `components` and produces a new output bundle.

Separately, go to `design` and make sure you have the following in your `next.config.js`. (Note: we've already done this, but describe it here for documentation purposes).

```js
const path = require('path')

module.exports = {
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', 'theme-ui', ...config.externals]
    }
    config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react')
    config.resolve.alias['theme-ui'] = path.resolve(__dirname, '.', 'node_modules', 'theme-ui')
    return config
  },
}

```

This config tells webpack to use only one version of `react` and `theme-ui`.
In some cases, this will need to be composed with other configuration options, e.g. those related to MDX. For example, your complete config might look like this.

```js
const path = require('path')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', 'theme-ui', ...config.externals]
    }
    config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react')
    config.resolve.alias['theme-ui'] = path.resolve(__dirname, '.', 'node_modules', 'theme-ui')
    return config
  },
})
```

Finally, navigate to `design`, and run the following.

```js
npm link @carbonplan/components
```

If you now start the development server in `design` with `npm run dev` and make a change in `components` you should see that change reflected.

This process can be repeated for additional packages, just make sure to do them at the same time. For example, to test `components` and `icons` at the same time use

```js
npm link @carbonplan/components @carbonplan/icons
```

Remember that linked packages are not saved, so if you do a clean install, you need to run the `link` command again.

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

CarbonPlan is a non-profit organization working on the science and data of carbon removal. We aim to improve the transparency and scientific integrity of carbon removal and climate solutions through open data and tools. Find out more at [carbonplan.org](https://carbonplan.org/) or get in touch by [opening an issue](https://github.com/carbonplan/components/issues/new) or [sending us an email](mailto:hello@carbonplan.org).
