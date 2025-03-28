//Suheily Cuevas
//ITMD 441-02 Undergraduate Student

(function () {

    function updateHero(){
        //changes the meain headline
        document.querySelector('#hero h1').textContent = "Uplift Your Brand with Stellar Marketing";
        //changes the line of text below the hero headline.
        //making the words 'thrive' and 'excel' italic and bold
        document.querySelector('#hero p').innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive</em></strong> and <strong><em>excel</em></strong>.";

        const mainBackgroundImage = document.querySelector('section');
        if (mainBackgroundImage) {
            mainBackgroundImage.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
        }
    }

    updateHero();
})();