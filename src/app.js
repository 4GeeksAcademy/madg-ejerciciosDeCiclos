const pronouns = ['the', 'our'];
const adjs = ['great', 'big'];
const nouns = ['jogger', 'racoon'];

// for (let i = 0; i < pronouns.length; i++) {
//   for (let j = 0; j < adjs.length; j++) {
//     for (let k = 0; k < nouns.length; k++) {
//       console.log(pronouns[i] + adjs[j] + nouns[k] + ".com" + ".es");
//     };
//   }
// }
for (const pronoun of pronouns){
  for (const adj of adjs){
    for (const noun of nouns){
      console.log(pronoun + adj + noun + ".com");
      
    }
  }
    
  
}