# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

interface permite declaration merging, type no.

## ¿Qué permite hacer `type` que `interface` no?

type permite crear uniones de tipos, tuplas, alias para datos primitivos y transformaciones avanzadas

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

si, interface se extiende usando extends y type con &

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

eligiria interface porque es la ams comun en ts para objetos y entidades 
