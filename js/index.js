// const hellowordData = "hello";

const hellowordData = "Hello world !";
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
const lathatoelo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.getElementById('programcontentjobb').classList.add('anim');
            console.log("igen");
        } else {
            document.getElementById('programcontentjobb').classList.remove('anim');
            console.log("nem")
        }
    });
});


/*megfigyelő*/
const program = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.getElementById('cukorasws').classList.add('anim-j');
            document.getElementById('react').classList.add('anim-b');
            document.getElementById('node').classList.add('anim-b');
            document.getElementById('boot').classList.add('anim-j');
        } else {
            document.getElementById('cukorasws').classList.remove('anim-j');
            document.getElementById('react').classList.remove('anim-b');
            document.getElementById('node').classList.remove('anim-b');
            document.getElementById('boot').classList.remove('anim-j');
        }
    });
});

// Tell the observer which elements to track
program.observe(document.querySelector('.programozas'));



/*érintem mit*/
/*js*/

let allas="js";
let jss = document.getElementById("js");
jss.addEventListener("mouseover", function( event ){allas="js"; allito();}, false);
let reacts = document.getElementById("reactl");
reacts.addEventListener("mouseover", function( event ){allas="react"; allito();}, false);
let sqls = document.getElementById("sql");
sqls.addEventListener("mouseover", function( event ){allas="sql"; allito();}, false);
let eszkozoks = document.getElementById("eszkozok");
eszkozoks.addEventListener("mouseover", function( event ){allas="eszkozok";allito();}, false);
let nodejss = document.getElementById("nodejs");
nodejss.addEventListener("mouseover", function( event ){allas="nodejs"; allito();}, false);
let gits = document.getElementById("gitl");
gits.addEventListener("mouseover", function( event ){allas="git"; allito();}, false);

function allito(){
    console.log(allas);
  if(allas==="js"){
    document.getElementById('jsk').classList.remove('makehidden');
    document.getElementById('reactk').classList.add('makehidden');
    document.getElementById('sqlk').classList.add('makehidden');
    document.getElementById('eszkozokk').classList.add('makehidden');
    document.getElementById('nodejsk').classList.add('makehidden');
    document.getElementById('gitk').classList.add('makehidden');
    console.log("html")
}else if(allas==="react"){
    document.getElementById('jsk').classList.add('makehidden');
    document.getElementById('reactk').classList.remove('makehidden');
    document.getElementById('sqlk').classList.add('makehidden');
    document.getElementById('eszkozokk').classList.add('makehidden');
    document.getElementById('nodejsk').classList.add('makehidden');
    document.getElementById('gitk').classList.add('makehidden');
    console.log("react")
}else if(allas==="sql"){
    document.getElementById('jsk').classList.add('makehidden');
    document.getElementById('reactk').classList.add('makehidden');
    document.getElementById('sqlk').classList.remove('makehidden');
    document.getElementById('eszkozokk').classList.add('makehidden');
    document.getElementById('nodejsk').classList.add('makehidden');
    document.getElementById('gitk').classList.add('makehidden');
}else if(allas==="eszkozok"){
    document.getElementById('jsk').classList.add('makehidden');
    document.getElementById('reactk').classList.add('makehidden');
    document.getElementById('sqlk').classList.add('makehidden');
    document.getElementById('eszkozokk').classList.remove('makehidden');
    document.getElementById('nodejsk').classList.add('makehidden');
    document.getElementById('gitk').classList.add('makehidden');
}else if(allas==="nodejs"){
    document.getElementById('jsk').classList.add('makehidden');
    document.getElementById('reactk').classList.add('makehidden');
    document.getElementById('sqlk').classList.add('makehidden');
    document.getElementById('eszkozokk').classList.add('makehidden');
    document.getElementById('nodejsk').classList.remove('makehidden');
    document.getElementById('gitk').classList.add('makehidden');
}else if(allas==="git"){
    console.log("ITT ÁLL")
    document.getElementById('jsk').classList.add('makehidden');
    document.getElementById('reactk').classList.add('makehidden');
    document.getElementById('sqlk').classList.add('makehidden');
    document.getElementById('eszkozokk').classList.add('makehidden');
    document.getElementById('nodejsk').classList.add('makehidden');
    document.getElementById('gitk').classList.remove('makehidden');
}else{
    allas="js";
   
}

}


