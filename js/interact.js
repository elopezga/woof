(() =>{

    let doggies = [{
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
    

    $("document").ready(() => {
        // Populate
        doggies.forEach( (element, index) =>{
            let centerBlockPortfolio = $(".center-block-portfolio");
            centerBlockPortfolio.append(`<div id=${index} class="portfolio-container-overlay"></div>`);
            let portfolioContainer = $(`#${index}`);
            portfolioContainer.append('<div class="portfolio"></div>');
            let portfolio = $(`#${index} > .portfolio`);
            portfolio.append(`<img src=${element.img} alt="Image of ${element.name}" class="img-responsive">`);
            portfolio.append(`<h4>${element.name}, ${element.age}</h4>`);
        } );
        

        $(".like").click( (event) =>{
            let topPortfolio = $(`#${doggies.length-1}`);
            topPortfolio.animate({
                left: "-9000px"
            }, 1000, () =>{
                // Animation completed
                $(`#${doggies.length-1}`).remove();
                doggies.splice(doggies.length-1,1);
            });
        } );

        $(".dislike").click( (event) =>{
            let topPortfolio = $(`#${doggies.length-1}`);
            topPortfolio.animate({
                left: "9000px"
            }, 1000, () =>{
                // Animation completed
                $(`#${doggies.length-1}`).remove();
                doggies.splice(doggies.length-1,1);
            });

        });
    });

})();


