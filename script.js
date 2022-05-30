class Clock {
	constructor(element) {
		this.element = element;
		this.fullFormat = true;
		this.element.addEventListener('click', () => {
			this.changeVersion();
		})
	}
	render = function () {
		if (this.fullFormat) {
			return this.element.innerHTML = new Date().toTimeString().split(' ')[0];
		} else {
			return this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0, 5);
		}
	}
	changeVersion = function () {
		this.fullFormat = !this.fullFormat;
		this.element.classList.toggle('header__clock-small');
	}
}

class FullFormatClock extends Clock {
	constructor(element) {
		super(element);
	}
	render = function () {
		this.element.innerHTML = new Date().toTimeString().split(' ')[0];

		if (!this.fullFormat) {
			this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0, 5);
		}
	}
}

const ourClock = document.querySelector('.header__clock');
let FirstClockFullFormat = new FullFormatClock(ourClock);
setInterval(() => FirstClockFullFormat.render(),);

class ShortFormatClock extends Clock {
	constructor(element) {
		super(element);
	}
	render = function () {
		this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0, 5);

		if (!this.fullFormat) {
			this.element.innerHTML = new Date().toTimeString().split(' ')[0];
		}
	}
}

const secondClockOnPage = document.querySelector('.header__clock-second');
let SecondClockShortFormatClock = new ShortFormatClock(secondClockOnPage);
setInterval(() => SecondClockShortFormatClock.render(),);
