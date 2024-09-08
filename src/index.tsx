import {Divide} from 'jesh-divide-rn-package'
import {multiply}  from 'jesh-rn-package'

export function Calculator(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function CaclulationMuliply(a: number, b: number): Promise<number> {
  return Promise.resolve(multiply(a,b))
}

export function cacluationDivider(a: number, b: number): Promise<number>{
  return Promise.resolve(Divide(a,b))
}