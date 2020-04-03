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

- `[data-monoceros-viewport]` <sup>(required)</sup> - Fixed container where the page will scroll in

- `[data-monoceros-container]` <sup>(optional)</sup> - Section within the page where scroll behaviour will be different. Will receive classes based on visibility within viewport

- `[data-monoceros-item]` <sup>(optional)</sup> - Item within the viewport or container. Will receive classes based on visibility within viewport and/or container

```html
<body>
  <div data-monoceros-viewport>
    <div data-monoceros-item>
      Item without container
    <div>
    <div data-monoceros-container>
      <div data-monoceros-item>
        Item with container
      </div>
    </div>
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

## Acknowledgements

Inspired by [locomotive-scroll](https://github.com/locomotivemtl/locomotive-scroll). Will have quite different usecases though.

* * *

## License

[MIT](license) @ [Folkert-Jan van der Pol](https://folkertjan.nl)
