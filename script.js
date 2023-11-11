alert("Welcome to google maps :)");

let icaze = confirm('Are you 18 years old or older?');
let netice;
let netice2;

if (icaze == true) {
    netice = 'Ok, you can drive and this site is open to you.';
    alert(netice);
}
else {
    netice = ' You are so young!';
    document.getElementById('murad').innerHTML = netice;
}


if (icaze == true) {
    let hardan = prompt(' Where are you going from? ');
    let hara = prompt(' Where are you going? ');

    let mesafe = prompt('Write your distance.');
    let suret = prompt('Write your spead.');
    let vaxt = mesafe / suret;
    netice2 = "From " + hardan + " to " + hara + " the distance is " + mesafe + " km and your spead is " + suret + " km/h. You will go in " + vaxt + " hours to " + hara + '.';
    document.getElementById('murad').innerHTML = netice2;
}



