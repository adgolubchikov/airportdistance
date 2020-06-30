function id(e){return document.getElementById(e);}

function info()
{
	text='';
for (i=0;i<Airports.length;i++)
{
if (Airports[i][4]==id("iata").value)
{
	text+='Airport small name: '+Airports[i][2]+'<br/>';
	text+='Airport big name: '+Airports[i][1]+'<br/>';
	text+='Airport IATA code: '+Airports[i][4]+'<br/>';
	text+='Airport ICAO code: '+Airports[i][5]+'<br/>';
	text+='Country: '+Airports[i][3]+'<br/>';
	text+='Coordinates: '+Airports[i][6]+', '+Airports[i][7]+'<br/>';
	text+='Category: '+Airports[i][8]+'<br/>';
	text+='Detailed category: '+Airports[i][9]+'<br/>';
}
}

id("info").innerHTML=text;
}

function distance (ax, ay, bx, by)
{
    let EARTH_RADIUS=6372795;
    //to radians
    let lat1 = ax * Math.PI / 180;
    let lat2 = bx * Math.PI / 180;
    let long1 = ay * Math.PI / 180;
    let long2 = by * Math.PI / 180;
 
    //cosinuses and sinuses of latitude and delta between longtitude
    let cl1 = Math.cos(lat1);
    let cl2 = Math.cos(lat2);
    let sl1 = Math.sin(lat1);
    let sl2 = Math.sin(lat2);
    let delta = long2 - long1;
    let cdelta = Math.cos(delta);
    let sdelta = Math.sin(delta);

    //great circle distance calculation
    let y = Math.sqrt(Math.pow(cl2 * sdelta, 2) + Math.pow(cl1 * sl2 - sl1 * cl2 * cdelta, 2));
    let x = sl1 * sl2 + cl1 * cl2 * cdelta;
 
    //
    let ad = Math.atan2(y, x);
    let dist = ad * EARTH_RADIUS;
 
    return dist;
}

function showdist()
{
iax=0; iay=0; ibx=0; iby=0; res=0; name1=''; name2='';
for (i=0;i<Airports.length;i++)
{
if (Airports[i][4]==id("iata1").value)
{
   iax=Airports[i][6];
   iay=Airports[i][7];
   name1=Airports[i][2];
}
}

for (i=0;i<Airports.length;i++)
{
if (Airports[i][4]==id("iata2").value)
{
   ibx=Airports[i][6];
   iby=Airports[i][7];
   name2=Airports[i][2];
}
}

res=distance(iax, iay, ibx, iby);

text='Distance between '+name1+' and '+name2+'  = '+Math.round(res/1000)+' km.';

id("distance").innerHTML=text;

}


function distancebetween(a, b)
{
iax=0; iay=0; ibx=0; iby=0; res=1000; name1=''; name2='';
for (i=0;i<Airports.length;i++)
{
if (Airports[i][4]==a)
{
   iax=Airports[i][6];
   iay=Airports[i][7];
}
}

for (i=0;i<Airports.length;i++)
{
if (Airports[i][4]==b)
{
   ibx=Airports[i][6];
   iby=Airports[i][7];
}
}

res=distance(iax, iay, ibx, iby);


return Math.round(res/1000);
}


