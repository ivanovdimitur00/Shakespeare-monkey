// A class to describe a population of virtual organisms
// In this case, each organism is just an instance of a DNA object

//thorugh the population class, we transfer the implementation from sketch to here, so the population can care for itself.
//in essence, we let sketck be only concerned as how the simulation is setup and what should be drawn every time [between calculations]
class Population {
    constructor(tgt, rate, popSize) {
        
        this.maxScore = 1;          //this vairable is used to remember the best fitness score an object can reach (that is, we have found the answer [if there is one])
        
        this.target = tgt;          //target phrase the population evolves towards
        this.population = [];       //array/container to hold the current population
        for (let i = 0; i < popSize; i++) {
            this.population[i] = new DNA(this.target.length);
        }
        this.generation = 0;        //number to track generations
        
        this.calculateFitness();    //Fill out fitness values for every member of the population
        this.bestFitness = 0.0;     //we remember the fittest object's fitness [for each generation]
        this.bestPhrase = "";       //string/container that holds the best symbol combination from the object with the highest fitness
        
        this.matingPool = [];       //array/container that holds the mating pool, derived from the population and each object's fitness
        this.mutationRate = rate;   //mutation rate, influencing random gene change of an object
        
        this.finished = false;      //flag to stop the simulation if answer has been found
    }

     // Fill out fitness values for every member of the population
     calculateFitness() {
        for (let i = 0; i < this.population.length; i++) {
            this.population[i].calculateFitness(target);
        }
    }

    generateMatingPool() {
        // Clear the ArrayList
        this.matingPool = [];

        let maxFitness = 0;
        for (let i = 0; i < this.population.length; i++) {
            if (this.population[i].fitness > maxFitness) {
                maxFitness = this.population[i].fitness;
            }
        }

        // Based on fitness, each member will get added to the mating pool a certain number of times
        // a higher fitness = more entries to mating pool = more likely to be picked as a parent
        // a lower fitness = fewer entries to mating pool = less likely to be picked as a parent
        for (let i = 0; i < this.population.length; i++) {
            let fitness = map(this.population[i].fitness, 0, maxFitness, 0, 1);
            
            let objectAmount = floor(fitness * 100); // Arbitrary multiplier, we can also use monte carlo method and pick two random numbers
            for (let j = 0; j < objectAmount; j++) {
                this.matingPool.push(this.population[i]);
            }
        }
    }


    generateNewGenerationAndReplaceOld() {
        for (let i = 0; i < this.population.length; i++) {
            //choose 2 parents
            let parent1Pos = floor(random(this.matingPool.length)); //get a random whole number from the interval [0, matingPool.length)
            let parent2Pos = floor(random(this.matingPool.length));
            let parent1 = this.matingPool[parent1Pos];
            let parent2 = this.matingPool[parent2Pos];
            //make a child
            let child = parent1.crossover(parent2); //with crossover process
            child.mutate(this.mutationRate); //try to mutate the child
            this.population[i] = child; // Refill the population with children from the mating pool by replacing the parents
        }

        this.generation++;
    }

    getBest() {
        return this.bestPhrase;
    }

    findMostFitObject() { //prev. name: evaluate
        let index = 0;
        for (let i = 0; i < this.population.length; i++) {
          if (this.population[i].fitness > this.bestFitness) {
            index = i;
            this.bestFitness = this.population[i].fitness;
          }
        }

        this.bestPhrase = this.population[index].getPhrase();
    }

    trySetFinished() {
        if (this.bestFitness === this.maxScore) {
          this.finished = true;
        }
    }

    isFinished() {
        return this.finished;
    }

    getGeneration() {
        return this.generation;
    }

    getAverageFitness() {
        let total = 0;
        for (let i = 0; i < this.population.length; i++) {
          total += this.population[i].fitness;
        }

        return total / (this.population.length);
    }

    getFirstFewPhrases() {
        let extractedPhrases = "";
        //set a display limit to how many memebers of the population we show
        let displayLimit = min(this.population.length, 51); // 51 = 3 * 17
        //NOTE: this can be expanded to remove the magic numbers
    
        for (let i = 0; i < displayLimit; i++) {
            extractedPhrases += this.population[i].getPhrase();
          if (i % 3 == 2) extractedPhrases += "\n";
          else extractedPhrases += " ";
        }
        return extractedPhrases;
      }
}