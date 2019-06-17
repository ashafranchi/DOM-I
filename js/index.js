const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let anchor = document.querySelectorAll('nav a');
anchor[0].textContent = siteContent['nav']['nav-item-1'];
anchor[1].textContent = siteContent['nav']['nav-item-2'];
anchor[2].textContent = siteContent['nav']['nav-item-3'];
anchor[3].textContent = siteContent['nav']['nav-item-4'];
anchor[4].textContent = siteContent['nav']['nav-item-5'];
anchor[4].textContent = siteContent['nav']['nav-item-6'];

let ctah1 = document.querySelector('h1');
ctah1.textContent = siteContent.cta.h1;
let ctabutton = document.querySelector('button');
ctabutton.textContent = siteContent.cta.button;
let ctaimg = document.getElementById('cta-img');
ctaimg.setAttribute('src', siteContent['cta']['img-src']);

let topSection = document.querySelectorAll('.top-content .text-content');

let features = topSection[0];
let featuresHeading = features.querySelector('h4');
featuresHeading.textContent = siteContent['main-content']['features-h4'];
let featuresContent = features.querySelector('p');
featuresContent.textContent = siteContent['main-content']['features-content'];

let about = topSection[1];
let aboutHeading = about.querySelector('h4');
aboutHeading.textContent = siteContent['main-content']['about-h4'];
let aboutContent = about.querySelector('p');
aboutContent.textContent = siteContent['main-content']['about-content'];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const bottomSection = document.querySelectorAll('.bottom-content .text-content');

let services = bottomSection[0];
let servicesHeading = services.querySelector('h4');
servicesHeading.textContent = siteContent['main-content']['services-h4'];
let servicesContent = services.querySelector('p');
servicesContent.textContent = siteContent['main-content']['services-content'];

let product = bottomSection[1];
let productHeading = product.querySelector('h4');
productHeading.textContent = siteContent['main-content']['product-h4'];
let productContent = product.querySelector('p');
productContent.textContent = siteContent['main-content']['product-content'];

let vision = bottomSection[2];
let visionHeading = vision.querySelector('h4');
visionHeading.textContent = siteContent['main-content']['vision-h4'];
let visionContent = vision.querySelector('p');
visionContent.textContent = siteContent['main-content']['vision-content'];

let contact = document.querySelector('.contact');

let contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent['contact']['contact-h4'];
let contactAddress = document.querySelector('.contact p');
contactAddress.textContent = siteContent['contact']['address'];
let contactPhone = document.querySelector('.contact p');
contactPhone.textContent = siteContent['contact']['phone'];
let contactEmail = document.querySelector('.contact p');
contactEmail.textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

document.querySelector('button').setAttribute('style', 'background-color: green; color: white; border-radius: 3px;');