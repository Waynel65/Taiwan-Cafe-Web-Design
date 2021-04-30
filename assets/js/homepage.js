let typetitle = new TypeIt("#title", {
    strings: "Caffeine Fix",
    speed: 125,
    waitUntilVisible: true,
  })

  let typebyline = new TypeIt("#byline", {
    speed: 100,
    waitUntilVisible: true,
  }).pause(2000).type("Exploring cafes in the heart of Kaohsiung, TW")
  .go();


  typetitle.go(); 

  function turnOnDarkMode()
				{
					document.getElementById("all").style.background = "#121212";
					document.getElementById("main").style.background = "#121212";
                    document.getElementById("hidden").style.background = "#121212";
					document.getElementById("all").style.color = "white";
					document.getElementById("title").style.color = "white";
					document.getElementById("about").style.color = "white";
					
					var list = document.getElementsByTagName("H1");
					var i;
					for(i=0;i<list.length;i=i+1)
					{
						list[i].style.color = "white";
					}

					var box = document.getElementsByClassName("boxsec");
					box[0].style.background = "rgb(31, 27, 36)";
					

					document.getElementById("footer").style.color = "white";
					var surface = document.getElementsByClassName("panel");
					surface[0].style.background = "#1F1B24";
					var footerLink = document.getElementsByClassName("footer-link");
					footerLink[0].style.color = "white";
					footerLink[1].style.color = "white";
					document.getElementById("dark-button").style.display = "none";
					document.getElementById("light-button").style.display = "block";
				}
		
				function turnOnLightMode()
				{
					document.getElementById("all").style.background = "#CCCC66";
					document.getElementById("main").style.background = "white";
                    document.getElementById("hidden").style.background = "white";
					document.getElementById("all").style.color = "#777777";
					document.getElementById("title").style.color = "#363636";
					document.getElementById("about").style.color = "#363636";

					var list = document.getElementsByTagName("H1");
					var i;
					for(i=0;i<list.length;i=i+1)
					{
						list[i].style.color = "#363636";
					}

					var box = document.getElementsByClassName("boxsec");
					box[0].style.background = "#e6e3df";
					

					document.getElementById("footer").style.color = "#073B4C";
					var surface = document.getElementsByClassName("panel");
					surface[0].style.background = "white";
					var footerLink = document.getElementsByClassName("footer-link");
					footerLink[0].style.color = "#073B4C";
					footerLink[1].style.color = "#073B4C";
					document.getElementById("light-button").style.display = "none";
					document.getElementById("dark-button").style.display = "block";
                }

                window.onscroll = function() {scroll()};
				var header = document.getElementById("hidden");
				var main = document.getElementById("main");
				var sticky = main.offsetTop;

				function scroll(){
					if (window.pageYOffset > sticky) {
					header.style.display = "block";
    				header.style.position = "fixed";
  					} 
					else {
    				// header.classList.remove("sticky");
					header.style.display = "none";
                    }
                }