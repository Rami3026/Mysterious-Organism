// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
const pAequorFactory = (number, array15) => {
 let specimenNum = number;
 let dna = mockUpStrand();
  return {specimenNum, 
          dna, 
          mutate(){
          let random = this.dna;
     let i = Math.floor(Math.random()*15);
            let base = random[i]
            if (base === 'A'){
               return (random[i] = 'T', console.log(random));
              
           } else if(base === 'T'){
                     return (random[i] = 'A', console.log(random));
                     } else if (base === 'C') {
                   return (random[i] = 'G', console.log(random));
           } else {return (random[i] = 'C', console.log(random));}          
          }
         
         };
}


let test = pAequorFactory(1, mockUpStrand());
console.log(test);
test.mutate();







