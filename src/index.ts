let numDeseado: number[] = new Array(5);
let índice: number;
let númeroIngresado: number;

for (índice = 0; índice < 5; índice++) {
  númeroIngresado = Number(
    prompt(`Indique el número que desea incorporar en la posición ${índice}`)
  );
  numDeseado[índice] = númeroIngresado;
}

for (índice = 0; índice < 5; índice++) {
  console.log(`El número en la posición ${índice} es ${numDeseado[índice]}`);
}
