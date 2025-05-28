function Loge(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // descriptor.value is the original method
    const originalMethod = descriptor.value;

    // Hum method ko replace kar rahe hain ek nayi function se jo logging karegi
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments:`, args);
        
        // Original method ko call karna with same arguments
        const result = originalMethod.apply(this, args);
        
        console.log(`Result from ${propertyKey}:`, result);
        return result;
    };

    // Updated descriptor return karte hain
    return descriptor;
}


class SimpleCalculator {
    @Loge
    add(a: number, b: number , c: number): number {
        return a + b +  c;
    }

    @Loge
    subtract(a: number, b: number): number {
        return a - b;
    }
}


const calc = new SimpleCalculator();

calc.add(10, 5  ,10 );
calc.subtract(20, 8);
