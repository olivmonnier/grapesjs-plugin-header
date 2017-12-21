# GrapesJS Plugin Header

This plugin adds the header block which allows creating header with different level.

### Usage
1. Clone this repository `git clone https://github.com/artf/grapesjs-plugin-boilerplate.git`
1. Replace in all files `YOUR-PLUGIN-NAME` with your plugin name
1. Update `package.json`
1. Install dependencies `npm i` and run the local server `npm start`
1. Start creating your plugin from `src/index.js`
1. Show some gif/demo if possible
1. Update README
1. When you're ready update the production file `npm run build`
1. Publish




## Summary

* Plugin name: `grapesjs-plugin-header`
* Blocks
  * `header`

...





## Options

|Option|Description|Default|
|-|-|-
|`option1`|Description option|`default value`|





## Download

* CDN
  * `https://unpkg.com/grapesjs-plugin-header`
* NPM
  * `npm i grapesjs-plugin-header`
* GIT
  * `git clone https://github.com/olivmonnier/grapesjs-plugin-header.git`





## Usage

```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-plugin-header.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['grapesjs-plugin-header']
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/olivmonnier/grapesjs-plugin-header.git
$ cd grapesjs-plugin-header
```

Install dependencies

```sh
$ npm i
```

The plugin relies on GrapesJS via `peerDependencies` so you have to install it manually (without adding it to package.json)

```sh
$ npm i grapesjs --no-save
```

Start the dev server

```sh
$ npm start
```





## License

BSD 3-Clause
