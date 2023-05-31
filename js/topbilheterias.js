var filmes = document.querySelectorAll(".filme");
        for (var i = 0; i < filmes.length; i++) {
            filmes[i].addEventListener("mouseover", function () {
                this.style.backgroundColor = "#f9f9f9";
            });
            filmes[i].addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
            });
        }