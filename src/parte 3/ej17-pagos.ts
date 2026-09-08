/**
 * EJERCICIO 17 - Sistema de pagos
 * ---------------------------------------------------------------------------
 * `procesarPago` no debe saber qué tipo concreto de MetodoPago está
 * utilizando: solo le importa que cumpla la interface.
 */
export interface MetodoPago {
    pagar(monto: number): void;
}

export class TarjetaCredito implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pagando $${monto} con tarjeta`);
    }
}

export class Transferencia implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pagando $${monto} con transferencia`);
    }
}

export class MercadoPago implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pagando $${monto} con mercado pago`);
    }
}

export class Efectivo implements MetodoPago {
    pagar(monto: number): void {
        console.log(`Pagando $${monto} en efectivo`);
    }
}

export function procesarPago(metodo: MetodoPago, monto: number): void {
    metodo.pagar(monto);
}