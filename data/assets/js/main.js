const titulo = document.querySelector('#data');

date = new Date();

day = date.getDate();
month = getMonthName(date.getMonth());
year = date.getFullYear();
weekDay = getWeekDay(date.getDay())

hour = date.getHours();
minute = date.getMinutes();

titulo.innerHTML = `${weekDay}, ${day} de ${month} de ${year}, ${hour}:${minute}`



function getWeekDay(day){

    switch(day){
        case 0: return 'Domingo';
        case 1: return 'Segunda-feira';
        case 2: return 'Terça-feira';
        case 3: return 'Quarta-feira';
        case 4: return 'Quinta-feira';
        case 5: return 'Sexta-feira';
        case 6: return 'Sábado';
    }

}

function getMonthName(month){

    switch(month){
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro';
        case 10: return 'Novembro';
        case 11: return 'Dezembro';
    }

}

