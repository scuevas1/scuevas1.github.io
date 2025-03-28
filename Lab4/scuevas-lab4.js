//Suheily Cuevas
//ITMD 441-02 Undergraduate Student

(function () {

    function updateHero(){
        //changes the meain headline
        document.querySelector('#hero h1').textContent = "Uplift Your Brand with Stellar Marketing";
        //changes the line of text below the hero headline.
        //making the words 'thrive' and 'excel' italic and bold
        document.querySelector('#hero p').innerHTML = "Utilize cutting-edge strategies from Stellar Marketing to help your business <strong><em>thrive</em></strong> and <strong><em>excel</em></strong>.";

        //selects the first section which is the hero section where the main background image is located.
        const mainBackgroundImage = document.querySelector('section');
        //if the background imae is real it will change to this new link.
        if (mainBackgroundImage) {
            mainBackgroundImage.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
        }

        //removes the get started button
        const links = document.querySelectorAll('a');
        //this checks all the <a> elements to find the one that says "get started"
        //then it removes it
        links.forEach(link => {
            if (link.textContent.trim() === "Get Started") {
                link.remove();
            }
        });

    }

    function updateNavBarColor() {
        const nav = document.querySelector('header');
        const footer = document.querySelector('footer');

        //if nav and footer exist the program will continue
        if (nav && footer) {
            //it will grab the color of the footer background
            const footerBg = getComputedStyle(footer).backgroundColor;
            //then change the nav background color to the same as the footer. 
            nav.style.backgroundColor = footerBg;
        }
    }

    function updateCenterNav() {
        const headings = document.querySelectorAll('nav');
    
        headings.forEach(heading => {
            const text = heading.textContent.trim();
            if (["Services", "Solutions", "Contact"].includes(text)) {
                heading.style.textAlign = "center";
            }
        });
    }

    function updateServiceIcons() {
    //this selects all of the icons in the service section.
        document.querySelectorAll('.material-symbols-outlined')
        //sets the icons as this light green color.
            .forEach(icon => icon.style.color = '#47C714');
    }

    function updateDigitalMarketingIcon() {
        //this selects all of the icons in the services section
        document.querySelectorAll('.material-symbols-outlined').forEach(icon => {
            //looks for the element that is called "digital marketing"
            if (icon.parentElement.textContent.toLowerCase().includes('digital marketing')) {
                //then changes the icon
                icon.textContent = 'ads_click';
            }
        });
    }

    updateHero();
    updateNavBarColor();
    updateCenterNav();
    updateServiceIcons();
    updateDigitalMarketingIcon();
})();