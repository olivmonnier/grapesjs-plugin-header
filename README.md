# GrapesJS Plugin Header

This plugin adds a header block with different level size.

## Summary

* Plugin name: `grapesjs-plugin-header`
* Blocks
  * `header`

## Options

|Option|Description|Default|
|-|-|-
|`Size`|`Header level`|`h1`|





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
