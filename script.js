const modal = document.querySelector('.modal');
const input = document.querySelector('.modal-input');
const modalBtn = document.querySelector('.modal-btn');
const saveBtn = document.querySelector('.save-btn');
const text = document.querySelector('.text');
const errorMsg = document.querySelector('.error-msg');

let inputValue = 'To jest tekstowa wiadomość';
let timeout;
let timeout2
let index = 1;
let index2 = 1;
let speed = 120;








const writingAnimation = () => {if (input.value !== 0)
    {text.innerHTML = "HEJ JAK SIĘ MASZ GABRYSIU !!!!! :)".slice(0, index);
    
	index++;
    
	if (index > inputValue) return;
    
	timeout = setTimeout(writingAnimation, speed);}
	else {writingAnimation2()}
};
const writingAnimation2  = () => {
	text.innerHTML = 'ALLEHEHEHE UHUHUHUHU HAHAHAHAHHA ALEHEHEHHEE HUHUHUHU HAHAHHAHAHAH ALEHEHEHHEHE HUHIUHUHU HAHAHHAHA TEKWONDO'.slice(0, index2);
    
		index2++;
		
		if (index2 > inputValue) return;
		
		timeout2 = setTimeout(writingAnimation2, speed);
}

const showModal = () => {
	modal.classList.add('active');
};
const closeModal = () => {
	if (input.value == '') {
		errorMsg.textContent = 'Wprowadź tekst';
		return;
	}

	inputValue = input.value;
	modal.classList.remove('active');

    
	setTimeout(writingAnimation2, 3000);
	clearStuff();
};

const clearStuff = () => {
	index = 1;
	clearTimeout(timeout);
	input.value = '';
    
	errorMsg.textContent = '';
};
modalBtn.addEventListener('click', showModal);
saveBtn.addEventListener('click', closeModal);




saveBtn.addEventListener('click', function() {setTimeout(function(){
	// Włączamy film przez ustawienie nowego URL w tagu iframe
	 videoPlayer.src = "https://www.youtube.com/embed/hI4xnWEw_Wk?start=25&autoplay=1"}, 2000)
  });
writingAnimation();




