import express from 'express'; //importuj biblioteke 'express'
import fetch from'node-fetch'; //importuj biblioteke 'fetch'
const app = express(); //rozpocznij aplikacje korzystajaca z expressu
var my_date = new Date().toLocaleString('pl-PL'); //zaladuj do zmiennej aktualna date w formacie polskim dd.mm.rrrr
var port = 1500; //na tym porcie aplikacja bedzie nasluchiwac 

function jaki_czas(ip) //funkcja zwracajaca aktualna date klienta korzystajac do tego z jego ip
{
      var time_zone = fetch(`http://ipapi.co/${ip}/timezone`); //odczytaj strefe czasowa z API ipapi.co wg podanego adresu ip
      var data_ip = new Date().toLocaleString('pl-PL', {time_zone}); //odczytaj date wg time zone
      return `${data_ip}`; //return date
}



app.use((req, res) => {

        var data_ip =  jaki_czas(req.ip); //zapisz w zmiennej data_ip date zwrocana z funkcji jaki_czas
        res.send(`<p>IP klienta: ${req.ip} \n </p><p>Data i czas klienta:  ${data_ip}</p>`); //wyswietlenie w htmlu IP klienta i jego aktualny czas
});




console.log("Data: " + my_date); //zapisz w logach serwera date
console.log("Author: Rostyslav Mysiuha"); //zapisz w logach serwera imie i nazwisko
console.log("Port TCP: " + port); //zapisz w logach port TCP
app.listen(port, '0.0.0.0');
