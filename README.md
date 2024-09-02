<h1 align="center">@resvg/resvg-js-cli</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/@resvg/resvg-js-cli">
        <img alt="version" src="https://img.shields.io/npm/v/@resvg/resvg-js-cli?color=212121&label=">
    </a>
</p>

<p align="center">
    CLI entry for the <a href="https://www.npmjs.com/package/@resvg/resvg-js">@resvg/resvg-js</a> package. <br><b>A high-performance SVG renderer CLI</b>, powered by <a href="https://github.com/yisibl/resvg-js">resvg-js</a>.
</p>

> [resvg-js](https://github.com/yisibl/resvg-js): a high-performance SVG renderer and toolkit, powered by Rust based [resvg](https://github.com/RazrFalcon/resvg/), with Node.js backend using [napi-rs](https://github.com/napi-rs/napi-rs), also a pure WebAssembly backend.

## Installation

### Try It Now

```sh
curl https://cdn.jsdelivr.net/gh/yisibl/resvg-js@v2.6.2/example/text.svg | \
    npx @resvg/resvg-js-cli --background "#fff" - output.png
```

### Direct Use

```sh
npx @resvg/resvg-js-cli --help
# or
bunx @resvg/resvg-js-cli --help
```

### Global Install

```sh
npm install -g @resvg/resvg-js-cli
resvg-js --help
```

## Usage

```sh
$ npx @resvg/resvg-js-cli --help

NAME:
    resvg-js - A high-performance SVG renderer CLI, powered by resvg-js and Rust based resvg and napi-rs

WEBSITE:
    https://github.com/Zhengqbbb/resvg-js-cli
    https://github.com/yisibl/resvg-js

SYNOPSIS:
    resvg-js [OPTIONS] <input_svg_path> [output_path]   # If empty output_path. The raw data of image to stdout
    resvg-js [OPTIONS] - [output_path]                  # Receives svg string from stdin

OPTIONS:
  Font:
    --no-system-font                Unuse system font, it will be faster
    --font-file        <file_path>  Local font file path   [Mutilple]
    --font-dir          <dir_path>  Local font directories [Mutilple]
    --font-default-size      <num>  Default font size      [Default: 12]
    --font-default-family    <str>  The default font family
    --font-serif-family      <str>  The serif font family
    --font-sans-serif-family <str>  The sans-serif font family
    --font-cursive-family    <str>  The cursive font family
    --font-fantasy-family    <str>  The fantasy font family
    --font-monospace-family  <str>  The monospace font family

  Rendering Optimize:
    --shape-rendering <0|1|2>       Shape rendering optimize rule
        [0: optimizeSpeed, 1: crispEdges, 2: geometricPrecision]
    --text-rendering  <0|1|2>       Text rendering optimize rule
        [0: optimizeSpeed, 1: optimizeLegibility, 2: geometricPrecision]
    --image-rendering <0|1>         Image rendering optimize rule
        [0: optimizeQuality, 1: optimizeSpeed]

  Fit To (default use original):
    --fit-width   <num>             Use fit to width mode
    --fit-height  <num>             Use fit to height mode
    --fit-zoom    <num>             Use fit to zoom mode

  Crop:
    --crop-top    <num>             Crop image top size
    --crop-left   <num>             Crop image left size
    --crop-right  <num>             Crop image right size
    --crop-bottom <num>             Crop image bottom size

    --dpi        <num>              Dots Per Inch
    --language   <lang>             Language code [Mutilple]
    --background <CSS3_color>       Background color
    --log-level  <level>            Setting log level
        [level: "off" | "error" | "warn" | "info" | "debug" | "trace"]

ARGS:
    <input_file_path>               SVG file path. Use "-" for stdin
    [output_file_path]              Output image file path

EXAMPLES:
  $ resvg-js input.svg output.png
  $ resvg-js --fit-width 1200 input.svg output.png
  $ resvg-js \
        --no-system-font                    \
        --font-file "./Font-Light.ttf"      \
        --font-file "./Font-Bold.ttf"       \
        --font-default-family "Font"        \
        --background "rgba(238,235,230,.9)" \
        ./input.svg ./output.png
  $ cat a.svg | resvg-js --fit-width 1200 --image-rending 0 - output.png
```

## Related Links

- [@resvg/resvg-js](https://www.npmjs.com/package/@resvg/resvg-js)
- [@resvg/resvg-wasm](https://www.npmjs.com/package/@resvg/resvg-wasm)
- [x-satori](https://www.npmjs.com/package/x-satori)

## Contributing

```sh
pnpm install
pnpm dev        # dev mode
pnpm x --help   # start up the CLI and development
```

## License

Please use all lowercase `resvg-js` when referencing project names.

[MPLv2.0](https://www.mozilla.org/en-US/MPL/)

Copyright (c) 2024, [Zhengqbbb](https://github.com/Zhengqbbb)<br>
Copyright (c) 2021-present, yisibl(一丝)
