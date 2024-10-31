# Shakespeare-monkey
A simple project of the application of genetic algorithms using web technologies like HTML, CSS and JavaScript and P5.js for scripting.
<br/>
<br/>

## Table of contents
0. [Project status](#Project-status)
1. [Description](#Description)
2. [Project requirements](#Project-requirements)
3. [Algortihm explanation](#Algorithm-explanation) *(IF NEEDED)*
4. [Key features and functionalities](#Key-features-and-functionalities)
5. [Structure](#Structure)
6. [Installation instructions](#Installation-instructions)
7. [Dependencies](#Dependencies)
8. [System requirements](#System-requirements)
9. [Usage examples](#Usage-examples)
10. [Demonstration](#Demonstration)
11. [API references](#API-references)
12. [Bugs](#Bugs)
13. [Future improvements](#Futute-improvements)
14. [Used resources](#Used-resources) 
<br/>

## Project status
Completed and working. Not expecting changes.
<br/>
<br/>

## Description
The purpose and goal of the project is to create a program, realizing a genetic algorithm. That's about it. The objects of the program were left up to me to pick.

The intended audiences for the project are my erasmus coordinator and myself.
<br/>
<br/>

## Project requirements
Look at [the description](#Description). 
<br/>
<br/>

## Algorithm explanation
The general algortihm is explained in several places:
1. [The document](Genetic_Algorithm_en.pdf), provided by my erasmus coordinator.
2. This [video tutorial](https://thecodingtrain.com/challenges/29-smart-rockets-in-p5js) or this [website guide](https://natureofcode.com/genetic-algorithms/)
3. These `draw.io diagrams` (in the folder of the same name) I made to explain what genetic algorithms were to myself. 
<br/>

## Key features and functionalities
* ### KEY FEATURES
   * Users can modify key parameters of the simulation;
   * Users can watch the simulation and population develop live.
 
* ### FUNCTIONALITIES
   * Modifiable parameters such as target message, population size and mutation chance;
   * Crossover process using random pivot point;
   * Memory-based mating pool, using a "lucky wheel" strategy to pick 2 parents;
   * Chance to mutate the genes of the offspring;
   * Monitoring the best individual (object) of the population;
   * Generation counter;
   * Partial live view of the population.
<br/>

## Structutre
Here are some of the important directories and files you need to know about this project:
* `p5` - the folder with the p5.js library files;
* `DNA.js` - the class containing the DNA of an object, the fitness calculation, crossover and mutation functions;
* `population.js` - the class that generates the initial population and manages it. Contains the functions for generating a new population, fetching the best individual, monitoring the generation number and getting some of the individuals to send to the display; 
* `sketch.js` - the class containing the paratemters for the population such as size, mutation chance and target. contains the canvas, where everything in the simulation is displayed. contains the procedure for the simulation.
<br/>

## Installation instructions
There are a few ways to access and use this project:
1. You can download the project files from this github repo and the [p5.js library](https://p5js.org/) and run it locally on your computer by opening the index.html file;
2. You can visit this [p5.js live editor](https://editor.p5js.org/natureofcode/sketches/ZwT5cPix2).
<br/>

## Dependencies
* The [p5.js library](https://p5js.org/);
* a web browser supporting the JavaScript ES6 (2015) standard.
<br/>

## System requirements
|            System requirements            |
| ----------------------------------------- | 
| JavaScript ES6 (2015) capable web browser |  
<br/>

## Usage examples
We assume that the project has been accessed on the internet or has been run on a local instance. 

The user can tweak parameters such as the target \[message], population size and mutation chance in the `sketch.js` file.
<br/>
<br/>

## Demonstration
Leave a link to an image hosting site or a video to demonstrate how the project works. 
<br/>
<br/>

## API references
Nothing to mention here.
<br/>
<br/>

## Bugs
- [X] No bugs have been caught;
- [X] This is a feature and not a bug. Given specific circumstances, the is a chance the simulation does not finish (i.e. the target can never be reached).
<br/>

## Future improvements
- [ ] I don't appear to like the current file scructure/object model. maybe I can experiment by doing a restructuring;
- [ ] different way to calculate fitness;
- [ ] different way to pick parents to make offspring;
- [ ] different way to do crossover.

NOTE: The last 3 are mostly cosmetic and don't change the final outcome in a significant way.
<br/>
<br/>

## Used resources
* [The p5.js library](https://p5js.org/)
* [Smart rockets coding challenge](https://thecodingtrain.com/challenges/29-smart-rockets-in-p5js). The shakespeare monkey problem is a simpler implementation of a genetic algorithm.
* [Genetic algorithhms implementation guide](https://natureofcode.com/genetic-algorithms/) 
<br/>
<br/>
