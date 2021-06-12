const dog_btn = document.getElementById('dog_btn');
console.log(dog_btn)
const dog_result = document.getElementById('dog_result');
dog_btn.addEventListener('click', getRandomDog);
function getRandomDog() {
	fetch('https://www.boredapi.com/api/activity/')
		.then(res => res.json())
		.then(data => {
			
				dog_result.innerHTML = `Activity: ${data.activity} | Type:${data.type} | Particpants: ${data.participants}`;
			
		});
}
