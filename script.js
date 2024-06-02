let res = fetch("https://restcountries.com/v3.1/all");
//let arr ={};
res.then((val) => val.json()).then((val1) => foo(val1));
//console.log(arr);

let con = document.createElement("div");
con.className = "container";

let row = document.createElement("div");
row.className = "row";

function foo(val) {
    for (let i = 0; i < val.length; i++) {
        let col = document.createElement("div");
        col.className = "col-lg-4";
        col.innerHTML = `<div class="card" style="width: 18rem;background-color:grey;margin-bottom:10px;margin-top:10px;">
        <h5 class="card-title" style="text-align: center;background-color:black;color:white;height:40px;">${val[i].name.common}</h5>
        <img src="${val[i].flags.png}" class="card-img-top" alt="..." style="padding:10px;height:200px;">
        <div class="card-body" style="text-align:center;color:white">
        <p>Capital:${val[i].capital}</p>
        <p>Region:${val[i].region}</p>
        <p>Country code:${val[i].flag}</p>
        </div>
      </div>`
        row.append(col);
        con.append(row);
        document.body.append(con);
    }
}