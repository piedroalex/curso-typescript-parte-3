export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const metodoOrigiral = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log(`--- Método ${propertyKey}`);
        console.log(`--- Parâmetros: ${JSON.stringify(args)}`);
        const retorno = metodoOrigiral.apply(this, args);
        console.log(`--- Retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    }
    return descriptor;
}