var kanishkInsta = "https://www.instagram.com/puremusicdude_08/";
var sidInsta = "https://www.instagram.com/siddharth._.vivek/";
var kanishkGithub = "https://github.com/KanishkM08";
var sidGithub = "https://github.com/Gargantuan5k/";
var projRepo = "https://github.com/Gargantuan5k/FrenchBlogWebsite";
var sidTwitter = "https://twitter.com/Gargantuan5K";

document.getElementById("twitter").addEventListener("click", (e) => {
    e.preventDefault();
    window.open(sidTwitter);
});
document.getElementById("insta").addEventListener("click", (e) => {
    e.preventDefault();
    window.open(sidInsta);
    window.open(kanishkInsta);
});
document.getElementById("github").addEventListener("click", (e) => {
    e.preventDefault();
    window.open(projRepo);
    window.open(sidGithub);
    window.open(kanishkGithub);
});
