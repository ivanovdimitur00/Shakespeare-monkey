//helper funtction to generate a random character
function randomCharacter() {
    let character = floor(random(63, 123)); //refer to ASCII table
  if (character === 63) character = 32; // ? ---> ' ' [whitespace]
  if (character === 64) character = 46; // @ ---> . [period]

  return String.fromCharCode(character);
}

//this is the class, that golds the genotype of an object of the population
//NOTE: We don't need a more complex object for this exmaple as the shakespeare monkey's functionality is covered by the DNA
//(i.e. te generation of the random string of characters)
//the DNA is only responsible for:
//  - holding the object's genetic information
//  - modifying the behavior of the object in the process of:
//      + selection (partially, through fitness calculation)
//      + reproduction (crossover and mutation)
class DNA {
    constructor(length) {
        this.genes = []; //every object has genes that express it's behaviour
        for (let i = 0; i < length; i++) {
            this.genes[i] = randomCharacter();
        }

        this.fitness = 0;
    }

    getPhrase() {
        return this.genes.join("");
    }

    calculateFitness(target) {
        let score = 0;

        for (let i = 0; i < this.genes.length; i++) {
            if (this.genes[i] === target.charAt(i)) {
                score++;
            }
    }

    this.fitness = score / target.length;
    }

    crossover(partner) {
        let child = new DNA(this.genes.length); //since there is no object, containing DNA, the child object is like its parents - DNA. 
        
        let midpoint = floor(random(this.genes.length)); //pick a pivot point inside the genes array 
    
        for (let i = 0; i < this.genes.length; i++) {
            if (i < midpoint) {
                child.genes[i] = this.genes[i]; // take the first bunch from the first parent
            }
            else {
                child.genes[i] = partner.genes[i]; // take the second bunch from the second parent
            }
        }

        return child;
    }

    mutate(mutationRate) {
        for (let i = 0; i < this.genes.length; i++) {
            if (random(1) < mutationRate) { //remember, chance is a decimal in the range [0, 1]
                this.genes[i] = randomCharacter();
            }
        }
    }
}