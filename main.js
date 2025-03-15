window.addEventListener("scroll",function () {
	const navbar = document.querySelector(".navbar");
	const scrollDistance = 500;

	if(window.scrollY > scrollDistance){
		navbar.style.top = "0";
	}else{
		navbar.style.top = "-100px";
	}
});

// navbar open and close
let meunlist = document.getElementById('menulist');
let openmune_icon = document.getElementById('opne_menu');
let closemanu_icon = document.getElementById('close_menu');
let links = document.querySelectorAll('.links');

// open manu
function openmenu(){
	if(menulist.style.display = "none"){
		menulist.style.display = "block";
		openmune_icon.style.display = "none";
		closemanu_icon.style.display = "block";
		manulist.style.transition = "200 ease";
		
	}
	else{
		menulist.style.display = "none";
		openmune_icon.style.display = "none";
		preventDefault();
	}
}

// close manu
function closemenubar(){
	if(menulist.style.display = "block"){
		menulist.style.display = "none";
		openmune_icon.style.display = "block";
		manulist.style.transition = "200 ease";
	
	}
	else{
		menulist.style.display = "block";
		
	}
}

// all links close manu overlay
links.forEach(links => {
	links.addEventListener('click',(e) => {
		// e.preventDefault();
		closemenubar();
	});
});

window.addEventListener('resize',()=>{
	const screenWidth = window.innerWidth;
	if(screenWidth > 750){
		openmune_icon.style.display = "none";
		meunlist.style.display = "none"
	}else{
		openmune_icon.style.display = 'block';
	}
});


