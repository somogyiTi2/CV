// const hellowordData = "hello";

const hellowordData = "Hello world";
var i = 0;
var hwdb = hellowordData.length + 1;

const name = "A nevem Somogyi Tibor...";
var namei = 0;
var ndb = name.length;

var refreshIntervalId = setInterval(bead, 200);

function bead() {
    i++;
    if (hwdb > i) {
        document.getElementById('helloword').innerHTML = hellowordData.slice(0, i);
        document.getElementById('elso').classList.add('flasshing');
    } else {
        if (ndb > namei) {
            document.getElementById('elso').classList.remove('flasshing');
            document.getElementById('masodik').classList.add('flasshing');
            namei++;
            document.getElementById('name').innerHTML = name.slice(0, namei);
        } else {
            clearInterval(refreshIntervalId);
            document.getElementById('beuszobemutatkozas').classList.remove('lathatatlan');
            document.getElementById('beuszobemutatkozas').classList.add('anim-f');
        }
    }
}

/*bemutato */
/*megfigyelő*/
const program = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.getElementById('cukorasws').classList.add('anim-j');
            document.getElementById('react').classList.add('anim-b');
            document.getElementById('node').classList.add('anim-b');
            document.getElementById('boot').classList.add('anim-j');
            document.getElementById('lebegogomb').classList.add('lebegoablak-t');
        } else {
            document.getElementById('cukorasws').classList.remove('anim-j');
            document.getElementById('react').classList.remove('anim-b');
            document.getElementById('node').classList.remove('anim-b');
            document.getElementById('boot').classList.remove('anim-j');
            document.getElementById('lebegogomb').classList.remove('lebegoablak-t');
        }
    });
});

// Tell the observer which elements to track
program.observe(document.querySelector('.programozas'));



/*érintem mit*/
/*js*/

let allas = "js";
let jss = document.getElementById("js");
jss.addEventListener("mouseover", function (event) { allas = "js"; allito(); }, false);
let reacts = document.getElementById("reactl");
reacts.addEventListener("mouseover", function (event) { allas = "react"; allito(); }, false);
let sqls = document.getElementById("sql");
sqls.addEventListener("mouseover", function (event) { allas = "sql"; allito(); }, false);
let eszkozoks = document.getElementById("eszkozok");
eszkozoks.addEventListener("mouseover", function (event) { allas = "eszkozok"; allito(); }, false);
let nodejss = document.getElementById("nodejs");
nodejss.addEventListener("mouseover", function (event) { allas = "nodejs"; allito(); }, false);
let gits = document.getElementById("gitl");
gits.addEventListener("mouseover", function (event) { allas = "git"; allito(); }, false);

function allito() {
    console.log(allas);
    if (allas === "js") {
        document.getElementById('jsk').classList.remove('makehidden');
        document.getElementById('reactk').classList.add('makehidden');
        document.getElementById('sqlk').classList.add('makehidden');
        document.getElementById('eszkozokk').classList.add('makehidden');
        document.getElementById('nodejsk').classList.add('makehidden');
        document.getElementById('gitk').classList.add('makehidden');
        console.log("html")
    } else if (allas === "react") {
        document.getElementById('jsk').classList.add('makehidden');
        document.getElementById('reactk').classList.remove('makehidden');
        document.getElementById('sqlk').classList.add('makehidden');
        document.getElementById('eszkozokk').classList.add('makehidden');
        document.getElementById('nodejsk').classList.add('makehidden');
        document.getElementById('gitk').classList.add('makehidden');
        console.log("react")
    } else if (allas === "sql") {
        document.getElementById('jsk').classList.add('makehidden');
        document.getElementById('reactk').classList.add('makehidden');
        document.getElementById('sqlk').classList.remove('makehidden');
        document.getElementById('eszkozokk').classList.add('makehidden');
        document.getElementById('nodejsk').classList.add('makehidden');
        document.getElementById('gitk').classList.add('makehidden');
    } else if (allas === "eszkozok") {
        document.getElementById('jsk').classList.add('makehidden');
        document.getElementById('reactk').classList.add('makehidden');
        document.getElementById('sqlk').classList.add('makehidden');
        document.getElementById('eszkozokk').classList.remove('makehidden');
        document.getElementById('nodejsk').classList.add('makehidden');
        document.getElementById('gitk').classList.add('makehidden');
    } else if (allas === "nodejs") {
        document.getElementById('jsk').classList.add('makehidden');
        document.getElementById('reactk').classList.add('makehidden');
        document.getElementById('sqlk').classList.add('makehidden');
        document.getElementById('eszkozokk').classList.add('makehidden');
        document.getElementById('nodejsk').classList.remove('makehidden');
        document.getElementById('gitk').classList.add('makehidden');
    } else if (allas === "git") {
        console.log("ITT ÁLL")
        document.getElementById('jsk').classList.add('makehidden');
        document.getElementById('reactk').classList.add('makehidden');
        document.getElementById('sqlk').classList.add('makehidden');
        document.getElementById('eszkozokk').classList.add('makehidden');
        document.getElementById('nodejsk').classList.add('makehidden');
        document.getElementById('gitk').classList.remove('makehidden');
    } else {
        allas = "js";

    }

}


let kepallapot = "ps1";
let ps1s = document.getElementById("ps1");
ps1s.addEventListener("mouseover", function (event) { kepallapot = "ps1"; keplathato(); }, false);
let ps2s = document.getElementById("ps2");
ps2s.addEventListener("mouseover", function (event) { kepallapot = "ps2"; keplathato(); }, false);
let ps3s = document.getElementById("ps3");
ps3s.addEventListener("mouseover", function (event) { kepallapot = "ps3"; keplathato(); }, false);
let ps4s = document.getElementById("ps4");
ps4s.addEventListener("mouseover", function (event) { kepallapot = "ps4"; keplathato(); }, false);
let ps5s = document.getElementById("ps5");
ps5s.addEventListener("mouseover", function (event) { kepallapot = "ps5"; keplathato(); }, false);
let rajz1s = document.getElementById("rajz1");
rajz1s.addEventListener("mouseover", function (event) { kepallapot = "rajz1"; keplathato(); }, false);
let rajz2s = document.getElementById("rajz2");
rajz2s.addEventListener("mouseover", function (event) { kepallapot = "rajz2"; keplathato(); }, false);
let rajz3s = document.getElementById("rajz3");
rajz3s.addEventListener("mouseover", function (event) { kepallapot = "rajz3"; keplathato(); }, false);
let rajz4s = document.getElementById("rajz4");
rajz4s.addEventListener("mouseover", function (event) { kepallapot = "rajz4"; keplathato(); }, false);
let rajz5s = document.getElementById("rajz5");
rajz5s.addEventListener("mouseover", function (event) { kepallapot = "rajz5"; keplathato(); }, false);
// let rajz6s = document.getElementById("rajz6");
// rajz6s.addEventListener("mouseover", function (event) { kepallapot = "rajz6"; keplathato(); }, false);


function keplathato() {
    console.log(kepallapot);
    if (kepallapot === "ps1") {
        document.getElementById('ps1k').classList.remove('makehidden');
        document.getElementById('ps2k').classList.add('makehidden');
        document.getElementById('ps3k').classList.add('makehidden');
        document.getElementById('ps4k').classList.add('makehidden');
        document.getElementById('ps5k').classList.add('makehidden');
        document.getElementById('rajz1k').classList.add('makehidden');
        document.getElementById('rajz2k').classList.add('makehidden');
        document.getElementById('rajz3k').classList.add('makehidden');
        document.getElementById('rajz4k').classList.add('makehidden');
        document.getElementById('rajz5k').classList.add('makehidden');


    }
    else if (kepallapot === "ps2") {
        document.getElementById('ps1k').classList.add('makehidden');
        document.getElementById('ps2k').classList.remove('makehidden');
        document.getElementById('ps3k').classList.add('makehidden');
        document.getElementById('ps4k').classList.add('makehidden');
        document.getElementById('ps5k').classList.add('makehidden');
        document.getElementById('rajz1k').classList.add('makehidden');
        document.getElementById('rajz2k').classList.add('makehidden');
        document.getElementById('rajz3k').classList.add('makehidden');
        document.getElementById('rajz4k').classList.add('makehidden');
        document.getElementById('rajz5k').classList.add('makehidden');


    }
    else if (kepallapot === "ps3") {
        document.getElementById('ps1k').classList.add('makehidden');
        document.getElementById('ps2k').classList.add('makehidden');
        document.getElementById('ps3k').classList.remove('makehidden');
        document.getElementById('ps4k').classList.add('makehidden');
        document.getElementById('ps5k').classList.add('makehidden');
        document.getElementById('rajz1k').classList.add('makehidden');
        document.getElementById('rajz2k').classList.add('makehidden');
        document.getElementById('rajz3k').classList.add('makehidden');
        document.getElementById('rajz4k').classList.add('makehidden');
        document.getElementById('rajz5k').classList.add('makehidden');


    }
    else if (kepallapot === "ps4") {
        document.getElementById('ps1k').classList.add('makehidden');
        document.getElementById('ps2k').classList.add('makehidden');
        document.getElementById('ps3k').classList.add('makehidden');
        document.getElementById('ps4k').classList.remove('makehidden');
        document.getElementById('ps5k').classList.add('makehidden');
        document.getElementById('rajz1k').classList.add('makehidden');
        document.getElementById('rajz2k').classList.add('makehidden');
        document.getElementById('rajz3k').classList.add('makehidden');
        document.getElementById('rajz4k').classList.add('makehidden');
        document.getElementById('rajz5k').classList.add('makehidden');


    }
    else if (kepallapot === "ps5") {
        document.getElementById('ps1k').classList.add('makehidden');
        document.getElementById('ps2k').classList.add('makehidden');
        document.getElementById('ps3k').classList.add('makehidden');
        document.getElementById('ps4k').classList.add('makehidden');
        document.getElementById('ps5k').classList.remove('makehidden');
        document.getElementById('rajz1k').classList.add('makehidden');
        document.getElementById('rajz2k').classList.add('makehidden');
        document.getElementById('rajz3k').classList.add('makehidden');
        document.getElementById('rajz4k').classList.add('makehidden');
        document.getElementById('rajz5k').classList.add('makehidden');


    } else if (kepallapot === "rajz1") {
        document.getElementById('ps1k').classList.add('makehidden');
        document.getElementById('ps2k').classList.add('makehidden');
        document.getElementById('ps3k').classList.add('makehidden');
        document.getElementById('ps4k').classList.add('makehidden');
        document.getElementById('ps5k').classList.add('makehidden');
        document.getElementById('rajz1k').classList.remove('makehidden');
        document.getElementById('rajz2k').classList.add('makehidden');
        document.getElementById('rajz3k').classList.add('makehidden');
        document.getElementById('rajz4k').classList.add('makehidden');
        document.getElementById('rajz5k').classList.add('makehidden');


    }
    else if (kepallapot === "rajz2") {
        document.getElementById('ps1k').classList.add('makehidden');
        document.getElementById('ps2k').classList.add('makehidden');
        document.getElementById('ps3k').classList.add('makehidden');
        document.getElementById('ps4k').classList.add('makehidden');
        document.getElementById('ps5k').classList.add('makehidden');
        document.getElementById('rajz1k').classList.add('makehidden');
        document.getElementById('rajz2k').classList.remove('makehidden');
        document.getElementById('rajz3k').classList.add('makehidden');
        document.getElementById('rajz4k').classList.add('makehidden');
        document.getElementById('rajz5k').classList.add('makehidden');


    }
    else if (kepallapot === "rajz3") {
        document.getElementById('ps1k').classList.add('makehidden');
        document.getElementById('ps2k').classList.add('makehidden');
        document.getElementById('ps3k').classList.add('makehidden');
        document.getElementById('ps4k').classList.add('makehidden');
        document.getElementById('ps5k').classList.add('makehidden');
        document.getElementById('rajz1k').classList.add('makehidden');
        document.getElementById('rajz2k').classList.add('makehidden');
        document.getElementById('rajz3k').classList.remove('makehidden');
        document.getElementById('rajz4k').classList.add('makehidden');
        document.getElementById('rajz5k').classList.add('makehidden');


    } else if (kepallapot === "rajz4") {
        document.getElementById('ps1k').classList.add('makehidden');
        document.getElementById('ps2k').classList.add('makehidden');
        document.getElementById('ps3k').classList.add('makehidden');
        document.getElementById('ps4k').classList.add('makehidden');
        document.getElementById('ps5k').classList.add('makehidden');
        document.getElementById('rajz1k').classList.add('makehidden');
        document.getElementById('rajz2k').classList.add('makehidden');
        document.getElementById('rajz3k').classList.add('makehidden');
        document.getElementById('rajz4k').classList.remove('makehidden');
        document.getElementById('rajz5k').classList.add('makehidden');


    }
    else if (kepallapot === "rajz5") {
        document.getElementById('ps1k').classList.add('makehidden');
        document.getElementById('ps2k').classList.add('makehidden');
        document.getElementById('ps3k').classList.add('makehidden');
        document.getElementById('ps4k').classList.add('makehidden');
        document.getElementById('ps5k').classList.add('makehidden');
        document.getElementById('rajz1k').classList.add('makehidden');
        document.getElementById('rajz2k').classList.add('makehidden');
        document.getElementById('rajz3k').classList.add('makehidden');
        document.getElementById('rajz4k').classList.add('makehidden');
        document.getElementById('rajz5k').classList.remove('makehidden');


    }

}

const aboutme = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           console.log("ok");
            document.getElementById('about_me_content').classList.add('anim-j');
 
        } else {
            document.getElementById('lebegogomb').classList.remove('lebegoablak-t');
            
        }
    });
});

// Tell the observer which elements to track
aboutme.observe(document.querySelector('.about_me'));
