const readline = require('readline-sync');

const ordemCss= {};

while (true) {
  const property = readline.question('Digite uma propriedade de CSS (ou "SAIR" para sair): ');

  if (property.toUpperCase() === 'SAIR') {
    break;
  }

  ordemCss[property] = true;
}

const sortedProperties = Object.keys(ordemCss).sort();

console.log('Propriedades ordenadas de A-Z:');
for (const property of sortedProperties) {
  console.log(property);
}
