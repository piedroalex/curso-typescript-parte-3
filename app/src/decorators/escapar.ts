export function escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const metodoOrigiral = descriptor.value;
    descriptor.value = function(...args: any[]){
        let retorno = metodoOrigiral.apply(this, args);
        if (typeof retorno === 'string'){
            console.log(`@escape em ação na classe ${this.constructor.name} para o método ${propertyKey}.`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    }
    return descriptor;
}