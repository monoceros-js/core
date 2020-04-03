# @Monoceros/core

> Core for Monoceros. Intializes core elements, sets up intersection observers and exposes core functions & classes

* * *

## Table of contents

- [Install](#install)
  - [NPM](#npm)
- [Usage](#usage)
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

### Set options

> **Note**: _set_ must be called before _init_

```js
Monoceros.set({ debug: true })
  .init()
```

### Register plugins

> **Note**: _set_ must be called before _use_

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
