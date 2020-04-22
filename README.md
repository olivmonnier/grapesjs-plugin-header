# GrapesJS Plugin Header

This plugin adds a header block with different size level.

## Summary

- Plugin name: `grapesjs-plugin-header`
- Blocks
  - `header`

## Options

| Option           | Description                 | Default                        |
| ---------------- | --------------------------- | ------------------------------ |
| `Size`           | `Header level`              | `h1`                           |
| `category`       | `Category name`             | `Basic`                        |
| `defaultTagName` | `TagName by default`        | `h1`                           |
| `labelN1`        | `Header level 1 label`      | `One (largest)`                |
| `labelN2`        | `Header level 2 label`      | `Two`                          |
| `labelN3`        | `Header level 3 label`      | `Three`                        |
| `labelN4`        | `Header level 4 label`      | `Four`                         |
| `labelN5`        | `Header level 5 label`      | `Five`                         |
| `labelN6`        | `Header level 6 label`      | `Six (smallest)`               |
| `placeholder`    | `Text content in the block` | `Insert your header text here` |

## Download

- CDN
  - `https://unpkg.com/grapesjs-plugin-header`
- NPM
  - `npm i grapesjs-plugin-header`
- GIT
  - `git clone https://github.com/olivmonnier/grapesjs-plugin-header.git`

## Usage

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
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
