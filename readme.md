# @monoceros/core

> Core for Monoceros. Intializes core elements, sets up intersection observers and exposes core functions & classes

* * *

## Table of contents

- [Install](#install)
  - [NPM](#npm)
- [Usage](#usage)
  - [HTML Setup](#html-setup)
  - [Set options](#set-options)
  - [Register plugins](#register-plugins)
- [Plugins](#plugins)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Install

### NPM

```bash
npm install @monoceros/core
```

* * *

## Usage

```js
import Monoceros from '@monoceros/core'
Monoceros.init()
```

### HTML Setup

- `[data-monoceros-viewport]` <sup>(required)</sup> - Fixed section where the page will scroll in

- `[data-monoceros-section]` <sup>(optional)</sup> - Section within the page where scroll behaviour will be different. Will receive classes based on visibility within viewport

- `[data-monoceros-item]` <sup>(optional)</sup> - Item within the viewport or section. Will receive classes based on visibility within viewport and/or section

```html
<body>
  <div data-monoceros-viewport>
    <section data-monoceros-item>
      Item without monoceros section
    <section>
    <section data-monoceros-section>
      <div data-monoceros-item>
        Item with monoceros-section
      </div>
    </section>
  </div>
<!-- scripts and hidden stuff go here -->
</body>
```

### Set options

> **Note**: _set_ must be called before _use_ and _init_

```js
Monoceros.set({ debug: true })
  .init()
```

#### Options

| Property          | Default value  | Description                                                                               |
| ----------------- | -------------- | ----------------------------------------------------------------------------------------- |
| `classNamePrefix` | `'m-'`         | Prefix put before every class added by monoceros. (does not apply to 'in-viewport' class) |
| `selectorPrefix`  | `'monoceros-'` | Prefix every data attribute added by monoceros starts with.                               |
| `debug`           | `false`        | Controls wether or not monoceros (and plugins) will output debug logs to the console.     |
| `base`            | _object_       | Controls naming of all elements (viewport, section, item, rogue)                          |

##### options.base defaults

```js
{
  viewport: 'viewport',
  section: 'section',
  item: 'item',
  rogue: 'rogue',
}
```

### Register plugins

> **Note**: _use_ must be called before _init_

```js
Monoceros.set({ debug: true })
  .use(SomePlugin)
  .init()
```

#### Plugin options

```js
Monoceros
  .use(SomePlugin, {debug: false})
  .init()
```

#### Mutliple plugins

```js
Monoceros
  .use(SomePlugin, {debug: false})
  .use(SomeOtherPlugin)
  .use(SomeOtherOtherPlugin, {debug: true})
  .init()
```

_or_

```js
Monoceros
  .use([
    [SomePlugin, {debug: false}],
    SomeOtherPlugin,
    [SomeOtherOtherPlugin, {debug: true}]
  ])
  .init()
```

* * *

## Plugins

- [@monoceros/plugin-reverse-scroll](https://github.com/monoceros-js/plugin-reverse-scroll) - Plugin that reverses the scroll direction within a `[data-monoceros-section]`

## Acknowledgements

Inspired by [locomotive-scroll](https://github.com/locomotivemtl/locomotive-scroll). Will have quite different usecases though.

* * *

## License

[MIT](license) @ [Folkert-Jan van der Pol](https://folkertjan.nl)
