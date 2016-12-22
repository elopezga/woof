(() =>{

    var doggies = [{
            name: "Spike",
            age: "15",
            img: "img/dog1.jpg"
        },{
            name: "Miski",
            age: "10",
            img: "img/miski.jpg"
        },{
            name: "Steve",
            age: "7",
            img: "img/dog2.jpg"
        },{
            name: "Drake",
            age: "3",
            img: "img/drake.jpg"
        },{
            name: "Bill",
            age: "9",
            img: "img/bill.jpg"
        },{
            name: "Cody",
            age: "5",
            img: "img/cody.jpg"
        }];

        /*
        <div class="portfolio-container">
                <div class="portfolio">
                    <img src="img/dog1.jpg" alt="Image of dog." class="img-responsive">
                    <h4>Spike, 14</h4>
                </div>
            </div>*/

    

    $("document").ready(() => {
        // Populate
        /*
        var centerBlockPortfolio = $(".center-block-portfolio");
        centerBlockPortfolio.append('<div class="portfolio-container"></div>');
        var portfolioContainer = $(".portfolio-container");
        portfolioContainer.append('<div class="portfolio"></div>');
        var portfolio = $(".portfolio");
        portfolio.append(`<img src=${doggies[0].img} alt="Image of ${doggies[0].name}" class="img-responsive">`);
        portfolio.append(`<h4>${doggies[0].name}, ${doggies[0].age}</h4>`);
        */
        doggies.forEach( (element, index) =>{
            var centerBlockPortfolio = $(".center-block-portfolio");
            centerBlockPortfolio.append(`<div id=${index} class="portfolio-container-overlay"></div>`);
            var portfolioContainer = $(`#${index}`);
            portfolioContainer.append('<div class="portfolio"></div>');
            var portfolio = $(`#${index} > .portfolio`);
            portfolio.append(`<img src=${element.img} alt="Image of ${element.name}" class="img-responsive">`);
            portfolio.append(`<h4>${element.name}, ${element.age}</h4>`);
        } );
        

        $(".like").click( (event) =>{
            console.log(event);
            var topPortfolio = $(`#${doggies.length-1}`);
            topPortfolio.animate({
                left: "-9000px"
            }, 1000, () =>{
                // Animation completed
                $(`#${doggies.length-1}`).remove();
                doggies.splice(doggies.length-1,1);
                console.log(doggies);
            });
        } );
    });

})();


