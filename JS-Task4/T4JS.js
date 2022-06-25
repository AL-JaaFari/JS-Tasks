function ageClc() {

    y1 = document.getElementById("year").value;
    var datey = new Date(y1);
    var y2 = new Date();
    var ageyear = y2.getFullYear() - datey.getFullYear();
    let a = (ageyear + " YearsOld");
    document.getElementById("resy2").innerHTML = a;

    // m1 = document.getElementById("month").Value;
    // var datem = new date(m1);
    // var m2 = new date();
    // var agemonth = m2.getMonth() - datem.getMonth();
    // let b = agemonth;
    // document.getElementById('resm2').innerHTML = b;

    // d1 = document.getElementById("day").Value;
    // var dated = new date(d1);
    // var d2 = new date();
    // var ageday = d2.getDate() - dated.getDate();
    // let c = ageday;
    // document.getElementById("resd2").innerHTML = c; 
}
