let dropElm = document.querySelector(".dropElm");
let table = document.querySelector(".table");
let upload = document.querySelector(".fa-arrow-up-from-bracket");
let input = document.querySelector(".dropElm input");
let btn = document.querySelector(".button");

if (document.getElementById("body").innerText.length == 0) {
    document.getElementById("item").style.visibility = "hidden";
    document.getElementById("remove").style.visibility = "hidden";
}
upload.onclick=()=>input.click();

input.onchange = function(ev) {
    uploadImage(ev.target.files);
}


function Delete(button) {
     var el = document.querySelector("tbody");
        el.parentNode.removeChild(el);
        if (counter== 1) {
            document.getElementById("item").style.visibility = "hidden";
        document.getElementById("remove").style.visibility = "hidden";
        }
   }


   function DeleteAll() {
    document.querySelector("#body").innerHTML=" ";
    document.querySelector("#body").innerText.length=0;
    document.getElementById("item").style.visibility = "hidden";
    document.getElementById("remove").style.visibility = "hidden";
    counter=0;
    
   }

dropElm.ondragover = ev => ev.preventDefault();
var counter = 0;
dropElm.ondrop = function(ev) {
    ev.preventDefault();
    uploadImage(ev.dataTransfer.files);
}
function uploadImage(files) {
    [...files].forEach(file=>{
        let reader = new FileReader();
        reader.onloadend = function(el) {
            let tr = `<tr>
                        <th>${++counter}</th>
                        <td>
                            <img src="${el.target.result}" alt="image" width="200px">
                        </td>
                        <td>
                             ${file.name}
                        </td>
                        <td>
                            ${file.size}
                        </td>
                        <td>
                            <button class = "button" onclick="Delete(this)">X</button>
                        </td>
                    </tr>`;
                    table.lastElementChild.innerHTML += tr;
                    document.getElementById("item").style.visibility = "visible";
                    document.getElementById("remove").style.visibility = "visible";
        }
        reader.readAsDataURL(file);
    });
}