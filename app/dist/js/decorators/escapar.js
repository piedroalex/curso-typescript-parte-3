export function escapar(target, propertyKey, descriptor) {
    const metodoOrigiral = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOrigiral.apply(this, args);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=escapar.js.map