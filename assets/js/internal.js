function turnOnDarkMode()
		{
			document.getElementById("all").style.background = "#121212";
            document.getElementById("hidden").style.background = "#121212";
			document.getElementById("all").style.color = "white";
			document.getElementById("page-title").style.color = "white";
            document.getElementById("main-title").style.color = "white";
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
            document.getElementById("hidden").style.background = "white";
			document.getElementById("all").style.color = "#777777";
			document.getElementById("page-title").style.color = "#363636";
			document.getElementById("footer").style.color = "#073B4C";
            document.getElementById("main-title").style.color = "#363636";
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
        var wrap = document.getElementById("wrap");
        var sticky = wrap.offsetTop;

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