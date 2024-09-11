

var datajson = "../fileJson/method.json";


let Output = "";
let Output1 = "";
let Output2 = "";
let Output3 = "";

fetch(datajson)   // fetch là một đối tượng
        .then((response) => {
                return response.json();
        })
        .then((response) => {         
            for(let i = 0;i<response.Push_ups.length;i++){
                                          //line break : ngắt dòng
                    Output += 
                    `
                                 <li> ${response.Push_ups[i]} </li>
                    `                  
            }
            document.getElementById("method--push_up").innerHTML = Output;
                    return response;  
                
        })
        .then((response) => {
            for(let i = 0;i<response.Pull_ups.length;i++){
                
            Output1 +=
                   `
                            <li> ${response.Pull_ups[i]} </li>
                    `
                    
            }
                document.getElementById("method--push_up1").innerHTML = `<ol> ${Output1}  </ol>`;
            return response;
            
        })
        .then((response) => {
            for(let i = 0;i<response.Plank.length;i++){
            Output2 +=
                   `
                            <li> ${response.Plank[i]} </li>
                    `                  
            }
                document.getElementById("method--push_up2").innerHTML = `<ol> ${Output2}  </ol>`;
            return response;          
        })
        .then((response) => {
            for(let i = 0;i<response.Yoga.length;i++){
            Output3 +=
                        `
                            <li class="text"> ${response.Yoga[i]} </li>
                         `                 
            }
                document.getElementById("method--push_up3").innerHTML = `<ol> ${Output3}  </ol>`;
            return response;
            
        })


        let BoxElement = document.querySelector(".Box-element");
        let AddElement = document.getElementById("AddElement");
        let Down = document.querySelector(".Down");         // phần ẩn bớt danh sách 
        let AddInfor =   document.getElementById("Add");   // phần hiển thị thêm danh sách ban đầu 
        let Display = document.getElementById("Show");          // phần hiện thị danh sách 
            Display.style.display = "none"
            Down.style.display = "none";

      AddInfor.addEventListener("click",Showmethod);

        let addmethod = "../fileJson/method2.json"
        let Add  = "";
        let index = 0;
        let increase = 0; // increase : tăng
        let error = "Lỗi 404";
function HandleAddmethod(){
              NProgress.start();
              NProgress.inc(10);
  increase = index + 2;  
            fetch(addmethod)
                .then((response) => response.json())
                
                .then((response) => {
                            setTimeout(() => {
                                            NProgress.done();
                                            }, 1000); // Dừng sau 10 giây (thay đổi thời gian theo nhu cầu)
            
                    if(index >= response.length){
                       
                                index = response.length;
                    }   
                    if(index == response.length){}
                       
                    
                        
                    
                                       
                for(let i = index;i<increase;i++){   
               
                    // let formattedText = response[i].text.map(text => text.replace(/\n/g, '<br>')).join('<br>');
                    let formattedText = response[i].text.join("<br></br>");
                  
                        Add +=                      
                        `
                            <div class="card__body card__body--list">
                                <div class="card__body  card__body--image">
                                      <h1> ${response[i].title} </h1>
                                      <img src=${response[i].img} alt=""/>
                                </div>
                                      <div class="method"> ${formattedText} </div> 
                            </div>                      
                        `                    
                }
                index = increase;           
                          AddElement.innerHTML = Add ;           
              })
              .catch((error) => {
                alert(error);
                    document.querySelector(".Up").style.display = "none";
                    Down.style.display = "block";
            
                  
              })
            
}

                                                   // gọi lại hàm Thêm danh sách
function Hidden(){   // Hidden : ẩn 
      BoxElement.style.display = "none";      // increase: tăng 
      AddInfor.style.display = "none";  
      Display.style.display = "block";      
      document.querySelector(".Up").style.display = "none";
      Down.style.display = "none";
}
  
    
function Show(){
      BoxElement.style.display = "block"
      Display.style.display = "none"; 
      Down.style.display = "block";
}

function Showmethod(){
 
         HandleAddmethod();
}

        
