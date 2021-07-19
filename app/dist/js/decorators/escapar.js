export function escapar(target, propertyKey, descriptor) {
    const metodoOrigiral = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOrigiral.apply(this, args);
        if (typeof retorno === 'string') {
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}.`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
