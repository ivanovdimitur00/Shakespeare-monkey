//GLOBAL VARIABLES [population]
let target;             //word/symbol combination to reach
let populationSizeMax;  //maximum size of population  
let mutationRate;       //cahnce to change an object's genes 
let population;         //population container

// //GLOBAL VARIABLES [population]
let bestPhrase;  //the phrase, derived from the object with most fitness
let allPhrases;  //string/list, containing all phrases evolved in the current population [to be shown]
let stats;       //string/container, containing statistics information

//how do you setup the simulation before starting?
function setup() {
    //create a filed to display things
    createCanvas(1920, 1080);

    //set initial parameters for the simulation
    target = "To be or not to be.";
    populationSizeMax = 200;
    mutationRate = 0.01;

    //use the population class to create a population with a purpose
    population = new Population(target, mutationRate, populationSizeMax);
}

//What happens every simulation step?
function draw() {
    population.generateMatingPool();
    population.generateNewGenerationAndReplaceOld();
    population.calculateFitness();
    population.findMostFitObject();
    population.trySetFinished();
    
    // If we found the target phrase, stop
    if (population.isFinished()) {
        //println(millis()/1000.0);
        noLoop();
    }
    
    //parameters to set the style an print information
    background(255); 
    fill(0);
    
    //display "Best phrase:"
    textFont("Courier");
    textSize(12);
    text("Best phrase:", 10, 32);
    
    //display the actual Best phrase
    let answer = population.getBest();
    textSize(24);
    text(answer, 10, 64); //can i update it only twice a second and one more time when the simulation ends?

    //display statistics information
    let statsText =  "total generations:     " + population.getGeneration() + "\n";
        statsText += "average fitness:       " + nf(population.getAverageFitness(), 0, 2) + "\n";
        statsText += "total population:      " + populationSizeMax + "\n";
        statsText += "mutation rate:         " + floor(mutationRate * 100) + "%";
        textSize(12);
        text(statsText, 10, 96);

    //display a part of the population
    textSize(12);
    text(population.getFirstFewPhrases(), 400, 32);
}