let container=document.querySelector('#contaier');
let country=document.querySelector('#country');
country.addEventListener('change',()=>{
    let opetion=country.value
    console.log(opetion)
    if(opetion=="sort"){
        fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
        .then((res)=>res.json())
        .then((data)=>{
            let fullData=data.data
            fullData.sort((a,b)=>{
                return a.population-b.population
            })
            console.log(fullData);
            showData(fullData)
        })
    }
})

function showData(data) {
    container.innerHTML=""
    data.forEach(element => {
        let div=document.createElement('div');
        let h3=document.createElement('h3');
        h3.innerHTML=`country : ${element.country}`
        let p=document.createElement('p');
        p.innerHTML=`Rank : ${element.Rank}`
        let h4=document.createElement('h4');
        h4.innerHTML=`population : ${element.population}`

        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(h4);
        container.appendChild(div);
    });
}

fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
.then((res)=>res.json())
.then((data)=>{
    showData(data.data)
})