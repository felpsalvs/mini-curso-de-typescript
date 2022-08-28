"use strict";
// property decorator
function logProperty(target, key) {
    let _val = this[key];
    const getter = () => {
        console.log(`Get: ${key} => ${_val}`);
        return _val;
    };
    const setter = (newVal) => {
        console.log(`Set: ${key} => ${newVal}`);
        _val = newVal;
    };
    const objectProperty = {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    };
    Object.defineProperty(target, key, objectProperty);
}
// method decorator
function logMethod(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        console.log(`Call: ${key} with`, args);
        return result;
    };
    return descriptor;
}
// parameter decorator
function logParameter(target, key, index) {
    const metadataKey = `__log_${key}_parameters`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}
