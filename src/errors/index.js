export class MonocerosError extends Error {
  constructor(message) {
    super()
    this.name = this.constructor.name
    this.message = message
  }
}

export class MonocerosCoreError extends MonocerosError {
  constructor(message) {
    super(message)
  }
}
