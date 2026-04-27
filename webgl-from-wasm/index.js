const obj = await WebAssembly.instantiateStreaming(fetch("index.wasm"), {
  env: {
    call: Function.prototype.call.bind(Function.prototype.call),
    fromCodePoint: String.fromCodePoint,
    get: Reflect.get,
    globalThis,
    memory: new WebAssembly.Memory({ initial: 1 })
  }
});
obj.instance.exports.runExample();
