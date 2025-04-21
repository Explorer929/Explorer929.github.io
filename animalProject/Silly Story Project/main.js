const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
	const random = Math.floor(Math.random()*array.length);
	return array[random];
}

let insertx = ["Elon Musk", "Jeff Bazos", "Jared Isaacman"];
let inserty = ["the Kennedy Space Center", "Starbase", "the White House"];
let insertz = ["Starship blew up", "Artemis III landed on the moon", "he turned into a water bear"];

let storyText = "It was 94 fahrenheit outside, so :insertx: went to watch a rocket launch. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 150 pounds. It was a hot and interesting day.";


randomize.addEventListener('click', result);

function result() {
	let newStory = storyText;
	
	let xItem = randomValueFromArray(insertx);
	let yItem = randomValueFromArray(inserty);
	let zItem = randomValueFromArray(insertz);
	
	newStory = newStory.replaceAll(":insertx:",xItem);
	newStory = newStory.replaceAll(":inserty:",yItem);
	newStory = newStory.replaceAll(":insertz:",zItem);
	

  if (customName.value !== '') {
    let name = customName.value;
	newStory = newStory.replaceAll("Bob", name);
  }
  
  

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(150 / 14)} stone`;
    const temperature =  `${Math.round(5/9 * (94-32))} centigrade`;
	newStory = newStory.replaceAll("94 fahrenheit", temperature);
	newStory = newStory.replaceAll("150 pounds", weight);
  }
	  story.textContent = newStory;
	  story.style.visibility = 'visible';
}