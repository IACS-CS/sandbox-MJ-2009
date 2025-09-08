import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Example Text Interface Program");

ti.output("Welcome to my program!");
let name = await ti.prompt("What is your name?");
if (name==="madara" || name==="obito" || name==="sasuke") {
  ti.output("you are the goat I love you :)")
} else ti.output("you suck balls " + name);
let color = await ti.prompt("what is your favorite color");
if (color === "red" || color === "purple" || color === "blue") { 
  ti.output("awsome " + name + " you have good taste");
} else ti.output("oh " + color + " is cool I guess");
let life = await ti.prompt("what do you want to do with your life?");
if (life === "be like madara"|| life === "be the ghost of the uchiha" || life === "be like madara and take over the world") {
  ti.output("good choice " + name + " you will be great");
} else ti.output("oh " + life + " sucks you should follow in Madaras footsteps");  
ti.output("Wake up to reality. Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility. Listen, everywhere you look in this world, wherever there is light, there will always be shadows to be found as well. As long as there is a concept of victors, the vanquished will also exist. The selfish intent of wanting to preserve peace, initiates war and hatred is born in order to protect love. There are nexuses causal relationships that cannot be separated. I want to sever the fate of the world. A world of only victors. A world of only peace. A world of only love. I will create such a world. I am the ghost of the uchiha");
let naruto = await ti.prompt ("who is your favorite naruto character?");
if (naruto === "shikamaru") {
  ti.output ("ur my goat shikamaru is top 2 oat")
} if (naruto=== "guy"){ 
  ti.output ("hes like top 5 idk bout higher than that though")
} if (naruto === "naruto"){
  ti.output ("ur a basic a$$ b#tch")
} if (naruto=== "minato"){
  ti.output ("ts is kinda valid but still basic")
} if (naruto=== "genma") { 
ti.output ("holy goat u know ball ur my fav :) <3")
} if (naruto=== itachi) { 
  ti.output ("lowky overated but fair pick hes kinda fire")
} else 
  ti.output ("lowky" + naruto , "is a bottom five person oat" )