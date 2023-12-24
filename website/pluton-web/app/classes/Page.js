import Observer from '../classes/Observer';
import TextReaveal from "../animations/TextReveal";
import Button from "../animations/Button";
import ParallaxImage from "../animations/ParallaxImage";
import List from "../animations/List"; 

export default class Page {
	constructor ()
	{
		this.createButtons();
		this._createTextReveal();
		this._createParallaxImages();
		this._createList();
	}

	_createTextReveal() {
		const textItems = [...document.querySelectorAll('[data-animation="text-reveal"]')];

		textItems.forEach((text) => {
			new TextReaveal({
				element: text,
			});
		});
	}

	createButtons() {
		const buttons = [...document.querySelectorAll('[data-animation="button"]')];

		buttons.forEach((button) => {
			new Button({
				element: button,
			});
		});
	} 
	
	_createParallaxImages() {
		const images = [...document.querySelectorAll('[data-animation="parallax-image"]')];

		images.forEach((image) => {
			new ParallaxImage({
				imageSection : image,
			});
		});
	}

	_createList() {
		const lists = [...document.querySelectorAll('.list__item')];
		lists.forEach((list) => {
			new List({
				element : list,
			});
		});
	}

}