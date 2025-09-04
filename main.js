import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface Program");

ti.output("Welcome to my program!");
let name = await ti.prompt("What is your name?");
if (name==="mason") {
  ti.output("you are the goat I love you :)")
} else ti.output("you suck balls " + name);
let color = await ti.prompt("what is your favorite color");
if (color === "pink") { 
  ti.output("eww " + name + " you are a weirdo");
} else ti.output("oh " + color + " is cool");
ti.output ("what do you want to do with your life?");
let life = await ti.prompt("what do you want to do with your life?");
if (life === "be a coder like mason") {
  ti.output("good choice " + name + " you will be great");
} else ti.output("oh " + life + " sucks you should follow in masons footsteps");  
ti.output("Goodbye my friend " + name + " I love you ish ");
