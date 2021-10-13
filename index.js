var generate = require('project-name-generator');
 
console.log(generate().dashed); // 'uptight-guitar'
 
generate().spaced; // 'grandiose clam'
 
generate().raw; // ['deluxe', 'grandmother']
 
generate({ number: true }).dashed; // 'disgraceful-temper-7794'
 
generate({ words: 4 }).raw; // ['tiny', 'crabby', 'wired', 'quicksand']
 
generate({ words: 4, number: true }).dashed; // 'breakable-judicious-luxuriant-tax-3931'
 
generate({ words: 2, alliterative: true }).spaced; // 'elegant experience'
 