
function getApi(){
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://kawalcovid19.harippe.id/api/summary', true);

    xhr.onload = function(){
        if(this.status === 200){

            const response = JSON.parse(this.responseText);
            
            
            let confirmed = '';
            let recovered= '';
            let deaths= '';
            let activeCare= '';
            let lastUpdatedAt= '';
               
                    confirmed += `<h3>${response.confirmed.value}</h3>`
                    recovered += `<h3>${response.recovered.value}</h3>`
                    deaths += `<h3>${response.deaths.value}</h3>`
                    activeCare += `<h3>${response.activeCare.value}</h3>`
                    lastUpdatedAt += `<small class="lastupdate">${response.metadata.lastUpdatedAt}</small>`
    
            document.getElementById('output').innerHTML = confirmed;
            document.getElementById('activeCare').innerHTML = activeCare;
            document.getElementById('recovered').innerHTML = recovered;
            document.getElementById('deaths').innerHTML = deaths;
            document.getElementById('lastupdate').innerHTML = lastUpdatedAt;            
        }
    }
    xhr.send();
}


// const createClock = setInterval(getApi, 1000);

let mainNav = document.getElementById('main-nav');
let navbarToggle = document.getElementById('navbar-toggle');



navbarToggle.addEventListener('click',function(){

    if(this.classList.contains('active')){
        mainNav.style.display="none";
        this.classList.remove('active');
    }
    else{
        mainNav.style.display="flex";
        this.classList.add('active');

    }
});