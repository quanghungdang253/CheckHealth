let Nav = document.getElementById("nav");

// Ẩn và hiện menu bằng jquery
$(document).ready(function () {
        $('#menu').click(function(){
                $('nav').stop(true,true).slideToggle();
        })
});

//===============================================================

window.onresize = function(){  // hàm được gọi khi kích màn hình thay đổi 
        if(window.innerWidth > 1200){
                Nav.style.display = "block";
        }
}
function output(){
     
        let fullname = document.getElementById("inputName").value;    // nếu những biến này bỏ ngoài hàm thì lúc  chạy chương trình  sẽ lấy giá trị đầu tiên và không thay đổi giá trị.
          let Age = document.getElementById("inputAge").value;   
          let Sex = document.getElementById("Choose").value; 
                           // giới tính được cập nhật mỗi khi hàm được gọi lại       
          let Height_boy =  parseFloat(document.getElementById("input-Height").value);
          let Weight_boy =  parseFloat(document.getElementById("input-Weight").value);
          let Boy_Chest =    parseFloat(document.getElementById("input-Chest").value);

          let Heartrate =  parseFloat(document.getElementById("heartrate").value);
          let Bloodpressure1 = parseFloat(document.getElementById("Bloodpressure1").value);  // tâm thu
          let Bloodpressure2 = parseFloat(document.getElementById("Bloodpressure2").value);  //tâm trương 
          let Proximity =  parseFloat( document.getElementById("Myopiadegree").value);
         const AudioError = new Audio("Audio/error-8-206492.mp3");
         const AudioResult = new Audio("Audio/llv-132676.mp3")
           
      
if(     
    isNaN(Age) ||
    isNaN(Height_boy) ||
    isNaN(Weight_boy) ||
    isNaN(Boy_Chest) ||
    isNaN(Heartrate) ||
    isNaN(Bloodpressure1) ||
    isNaN(Bloodpressure2) ||
    isNaN(Proximity) ||
    fullname ==="" ||
    Sex ===""
){
              
                Swal.fire({
                                icon: "question",
                                title: "Bạn Chưa Nhập Đầy Đủ Thông Tin!(you did not enter complete information !)",
                                text:"Vui Lòng Nhập đủ thông tin để kiểm tra(Please enter complete information)",
                              
                                // timer: 7000,
                                timerProgressBar: true,
                                position:"top",
                               customClass:{
                                        icon: 'icon-center'
                               }
                                
                })
                AudioError.play();
   
        //  alert("you did not enter complete information ! Please enter complete information");
        return false;  
} 
                if(!Clause.checked){
                                // alert(" Bạn chưa chon điều khoản! Vui lòng Chọn điều Khoản để tiếp tục ");
                                Swal.fire({
                                        icon: "question",
                                        title: "Bạn Chưa Chọn Điều Khoản!",                                   
                                        text:" Vui lòng Chọn Điều Khoản Để Tiếp Tục",
                                        position: "top",
                                        timer: 4000,  // tự động đóng thông báo sau 4 giây
                                        timerProgressBar: true,
                                        customClass:{
                                                timerProgressBar: "timerProgressBar",
                                                  icon: 'icon-center'
                                        }
                                })
                                AudioError.play();
                                          return 0;
                                        }            
                             function Result(element,value){
                                     console.log(element.length);
                                 for(let i = 0;i < element.length;i++){
                                             element[i].innerHTML = value;
                                 }
                             }

                             Result(document.querySelectorAll(".fullname"),"<p> Họ và tên : "+ fullname + "</p>");
                             Result(document.querySelectorAll(".Age"), "<p> Tuổi  : "+ Age +"</p>");
                             if(Sex === "Nam"){
                                        Result(document.querySelectorAll(".Sex"), "<p> Giới tính : "+ Sex +"</p>");
                             }else if(Sex === "Nữ"){
                                        Result(document.querySelectorAll(".Sex"), "<p> Giới tính : "+ Sex +"</p>");
                             }
                             AudioResult.play(); 
                             Result(document.querySelectorAll(".Height"),"<p> Chiều Cao : "+ Height_boy +" (m) </p>");
                             Result(document.querySelectorAll(".Weight"), "<p> Cân Nặng : "+ Weight_boy +" (kg) </p>");
                             Result(document.querySelectorAll(".ChestCircle"),  "<p> Vòng ngực : "+ Boy_Chest +"(cm)</p>");
                             Result(document.querySelectorAll(".heartrate"),  "<p> Nhịp Tim : "+ Heartrate +"(Lần/phút)</p>");
                             Result(document.querySelectorAll(".Blood-pressure1"),  "<p> Huyết Áp Tâm thu : "+ Bloodpressure1 +"(mmHg)</p>");
                             Result(document.querySelectorAll(".Blood-pressure2"),  "<p> Huyết Áp Tâm Trương : "+ Bloodpressure2 +"()</p>");
                             Result(document.querySelectorAll(".proximity"),  "<p> Độ cận : "+Proximity +"</p>");

                             let BMI  =  parseFloat(Weight_boy/(Math.pow(Height_boy,2)));
                             let ArrayWeight = [
                                "<p class='style warning'> Cân Nặng : Nhẹ (Tính theo BMI) </p>",
                                "<p class='style'> Cân Nặng : Bình thường (Chỉ số BMI bình thường)</p>",
                                "<p class='style warning'> Cân Nặng : Thừa cân(Tính theo BMI) </p>",
                                "<p class='style warning'> Cân Nặng : Béo Phì Độ 1(Tính theo BMI) </p>",
                                "<p class='style warning'> Cân Nặng : Béo Phì độ hai trở lên(Tính theo BMI)  </p>",
                                "<p class='style warning'> Cân Nặng : Quá Béo Cân nhắc về chế độ Ăn(Tính theo BMI) </p>"

                             ]
                             function Conclusion(element){
                                                         console.log(BMI);
                                                        if(BMI < 18.5 ){
                                                                 element[0].innerHTML = ArrayWeight[0];
                                                        }else if(BMI > 18.5 && BMI < 24.9){
                                                                element[0].innerHTML = ArrayWeight[1];
                                                        }else if(BMI >= 25 && BMI <= 30){
                                                                element[0].innerHTML = ArrayWeight[2];
                                                        }else if(BMI > 30 && BMI < 34.9){
                                                                element[0].innerHTML = ArrayWeight[3];
                                                        }else if(BMI >= 35 && BMI <= 45){
                                                                element[0].innerHTML = ArrayWeight[4];
                                                        }else if(BMI > 45){
                                                                element[0].innerHTML = ArrayWeight[5];
                                                        }
                                        
                             }
                             Conclusion(document.querySelectorAll(".ReWeight"));

                             let ArrayHeartrate = [
                                "<p class='style warning'> Nhịp Tim : Chậm  </p>",
                                "<p class='style'> Lưu ý(Note): Với những người có thể lực tốt nhịp tim dưới 60 không gây ra vấn đề sức khỏe  </p>",    
                                "<p class='style        '> Nhịp Tim : Bình thường </p>",
                                "<p class='style warning'> Nhịp tim : Nhanh(Nếu > 100 khi nghỉ ngơi) </p>"
                              
                             ]
                             function  ReHeartrate(element){                           
                                                if(Age >= 18){  // nhịp tim đối với người trưởng thành 
                                                        if(Heartrate < 60){
                                                                element[0].innerHTML = ArrayHeartrate[0];
                                                                 document.getElementById("Note").innerHTML = ArrayHeartrate[1];
                                                                                                          
                                                        }else if(Heartrate >= 60 && Heartrate <= 100){
                                                                 element[0].innerHTML = ArrayHeartrate[2];
                                                        }else   {
                                                                element[0].innerHTML = ArrayHeartrate[3];
                                                        }
                                                }
                                                                // nhịp tim                                  
                             }
                             ReHeartrate(document.getElementsByClassName("ReHeartrate"));

                             let ArrayBloodpressure = [
                                "<p class='style warning'> Huyết Áp  : Thấp  </p>",
                                "<p class='style'> Huyết Áp : Bình thường </p>",
                                "<p class='style warning'> Huyết Áp : Huyết Áp : Cao </p>"                           
                             ]  
                                        function Bloodpressure (element) {
                                                if(Bloodpressure1 < 85 || Bloodpressure2 < 60){
                                                         element[0].innerHTML = ArrayBloodpressure[0];
                                                }else if( 90 <= Bloodpressure1 <= 130 || 60 <= Bloodpressure2 <= 90){
                                                        element[0].innerHTML = ArrayBloodpressure[1];
                                                }else if( Bloodpressure1 >= 140 || Bloodpressure2 < 90){
                                                        element[0].innerHTML = ArrayBloodpressure[2];
                                                }
                                        }
                
                            Bloodpressure(document.getElementsByClassName("Bloodpressure"));

                            // Độ cận
                            let ArrayMyopiadegree = [
                                "<p class='style'> Độ cận  : Cận thị tạm thời( Số đo bằng 0 Diop, mắt có thị lực bình thường nhưng do phải làm việc quá tải. Người bệnh chỉ cần để cho mắt nghỉ ngơi vài ngày, mọi thứ sẽ được khắc phục.) </p>",
                                "<p class='style warning'> Độ cận : Mức Độ Nhẹ(từ 0.25 đến 3 Diop)  </p>",
                                "<p class='style warning'> Độ cận : Độ cận Vừa( từ 3.25 đến 6 Diop) </p>",
                                "<p class='style warning'> Độ cận : Độ cận nặng( từ 6.25 đến 10.0 Diop) </p>",
                                "<p class='style warning'> Độ cận : Độ cận cực đoạn( từ 10.25 Diop trở lên ) </p>"                
                             ]  
                             function Myopiadegree(element) {
                                                        if(Proximity === 0){
                                                                element[0].innerHTML =  ArrayMyopiadegree[0];
                                                        }else if(Proximity > 0.25 && Proximity <= 3){
                                                                element[0].innerHTML =  ArrayMyopiadegree[1];
                                                        }else if(Proximity > 3.25 && Proximity <= 6){
                                                                element[0].innerHTML =  ArrayMyopiadegree[2];
                                                        }else if(Proximity > 6.25 && Proximity <= 10){
                                                                element[0].innerHTML =  ArrayMyopiadegree[3];
                                                        }
                                                        else if(Proximity > 10.25){
                                                                element[0].innerHTML = ArrayMyopiadegree[4];
                                                }
                             }

                            Myopiadegree(document.getElementsByClassName("Myopiadegree"));

                            // =============================Phần hiển thị và ẩn kết quả bằng Jquery==============                        
                                        $(".Result").stop(true,true).show(1000);
                                        $(".Close").click(function(){
                                                        $(".Result").hide(1000);
                                        })
                                //=====================================================================
                                      
}
function Reset(){
        // document.getElementById("Choose").value ="";
         document.getElementById("inputName").value ="";
         document.getElementById("inputAge").value ="";   
         document.getElementById("input-Height").value = "";
         document.getElementById("input-Weight").value = "";
         document.getElementById("input-Chest").value = "";
         document.getElementById("heartrate").value = "";
         document.getElementById("Bloodpressure1").value = "";
         document.getElementById("Bloodpressure2").value = "";
         document.getElementById("Myopiadegree").value = "";
         
         Clause.checked = false;
}


// phần hình ảnh quảng cáo 


        
let Clause = document.getElementById("Choose_clause");
Clause.addEventListener("click",function(){
if(Clause.checked === true)
{   // Clause.checked : trả về true nếu được chọn                 [ Clause.checked]
        Swal.fire({
                title: "Bạn Đã Đọc Kĩ Điều khoản Chưa!",
                text: "Vui lòng Đọc Kĩ Điều khoản Trước Khi Xác Nhận",
                icon: "question",
                position: "top",
                timer: 5000,
                timerProgressBar: true,
                confirmButtonText: "Xác Nhận",
                showCancelButton: "Hủy Bỏ"
        
             })       
}
else
{
        Swal.fire({
                title: "Đã hủy Chọn",
                icon: "success",
                position: "top",
                timer: 3000,
                timerProgressBar: true,



        })

  console.log(agree1);
              // HÀM confirm : khi ta nhấn ok thì hàm sẽ trẻ về true ngược lại false 
     if(agree1){
           Clause.checked = false;
           alert(" Đã hủy chọn ");
                }
      else
         {
           Clause.checked = true;
          }
}
})
let form_input = document.getElementById("form-input");           // lấy thông tin từ ô input
let Button_Comment = document.getElementById("Button_Comment");  // Nút  bình luận 
let Button_Cancel = document.getElementById("Button_Cancel");  
let Text_Comment = document.getElementById("Contend_Comment");
form_input.addEventListener("input",function(){
        if(/[a-zA-Z]/.test(form_input.value))//    HÀM test(value)  có tác dụng làm  ô input có chữ cái thì đổi màu    (      TEST(VALUE) )
        {  
          
            Button_Comment.style.backgroundColor = "red";
        }
        else{
            Button_Comment.style.backgroundColor = "";
        }      
        
}) 
                   Button_Cancel.style.display =  "none";
                   Button_Comment.style.display = "none";
Button_Cancel.onclick = function(){            
                    Button_Comment.style.display = "none";
                    Button_Cancel.style.display = "none";
                } 
   form_input.addEventListener("click",function(){
               Button_Comment.style.display = "block";
               Button_Cancel.style.display = "block";
   })
 function Display_comment() // hàm hiển thị 1  bình luận bao gồm text, delete, cancel 
      {         
     
      
         let wrap_the_content = document.createElement("div"); // wrap_the_content : bao bọc nội dung;
             wrap_the_content.setAttribute("class","wrapthecontent");           
              let value = form_input.value;
          
              let Fixcontent = value.replace(/\n/g,'<br>'); 
              // làm sạch đoạn mã đầu vào trước khi sử dụng innerHTML
         if(value.trim() ===''){
               alert("Bạn chưa nhập thông tin vui lòng Nhập thông tin ");
               return false; //sử dụng câu lệnh return để dừng chương trình 
            }
                let span = document.createElement("span");  // thẻ chứa nội dụng bình luận. trong  quá trình chỉnh sữa khi 
                                                            // khi ta nhấn xuống dòng nó sẽ tạo ra một thẻ p khác  
                span.setAttribute("class","text");
                span.innerHTML = Fixcontent;  // HỌC PHẦN NÀY 
                wrap_the_content.appendChild(span); // hàm Display_comment nhận tham số là đoạn văn bản 
                   
          let Text = document.createElement("div");  // THEM PHAN TU p
             //  Text.appendChild(span);  
              Text.setAttribute("id","Text");        
              Text_Comment.appendChild(Text); // thêm node phần tử p vào phần tử Text Comment    
             Text.appendChild(wrap_the_content);
          let Edit = document.createElement("button"); // node CHỈNH SỮA bình luận 
              Edit.textContent = "Edit";
              Edit.setAttribute("id","Edit");
              Text_Comment.appendChild(Edit);


          let Delete =   document.createElement("button");  // nút xóa bình luận 
                         Delete.textContent = "Delete";
                         Delete.setAttribute("id","Delete");  
                         Text_Comment.appendChild(Delete);

             let edit_delete = document.createElement("div");  // phần bao quanh nút delete và nút xóa
                               edit_delete.setAttribute("class","edit_delete");
                               edit_delete.appendChild(Edit);
                               edit_delete.appendChild(Delete);
                               Text_Comment.appendChild(edit_delete);

          let save = document.createElement("button"); // nút SAVE 
                     save.textContent = "Save";
                     save.setAttribute("id", "save");
                     Text_Comment.appendChild(save);
                     save.style.display = "none";
                                                                           
         let Cancels = document.createElement("button");   // NÚT CANCEL 
                       Cancels.textContent = "Cancel";
                       Cancels.setAttribute("id","Cancel");
                       Text_Comment.appendChild(Cancels);   // thêm node Cancel vào khối chứa bình luận 
                       Cancels.style.display = "none";

                       Edit.addEventListener("click",function(){  // Hàm chỉnh sữa 
    wrap_the_content.setAttribute("contenteditable", true); //thêm thuộc tính content EditTable vào html bằng javascript
                       save.style.display = "block";  
                Cancels.style.display = "block";
                Edit.style.display =   "none";
                Delete.style.display = "none";   
           
        })
        Edit.addEventListener("click", function(){
                    wrap_the_content.focus(); // đặt con trỏ chuột vào ô bình luận khi nhấn chỉnh sữa 
        })
        save.addEventListener("click",function(){ // hàm save lưu lại 
           
         wrap_the_content.contentEditable = false;  //  Text.setAttribute("contenteditable", false); // set thuộc tính thành false
               save.style.display = "none";
               Cancels.style.display = "none";
               Edit.style.display =   "block";
               Delete.style.display = "block";
        let Saved = document.createElement("span");
              Saved.textContent = "Saved(Đã lưu)";
           Saved.setAttribute("class","Saved");
                     // Thêm nút hiển thị đã lưu vào thẻ  
             // tạo phần icon cho đã lưu hoàn thành  
             const iconsave = document.createElement("i"); // tao icon
             iconsave.classList.add("fas","fa-check","fa-sm");
             iconsave.classList.add("icon");

              // iconsave = "đã lưu ";                                  
              Saved.appendChild(iconsave); 
           
           // tạo phân bao bọc xung quanh phần thông báo đã lưu 
           let wraper_saved =  document.createElement("div"); // tạo phần bao quanh nút hiển thị save 
           wraper_saved.setAttribute("class","wraper_saved"); 
           wraper_saved.appendChild(Saved);     // thêm nút save vào phần bao quanh 
           Text_Comment.appendChild(wraper_saved);  // thêm phần tử save vào khung bình luân 
            
           setTimeout(function(){  // set thời gian sau 2 giây sẽ ẩn thông báo 
              wraper_saved.style.display = "none";
         },1500)
       })              
       let wraper = document.createElement("div"); // phần bao quanh nút save và cacel đây là flew container 
        wraper.setAttribute("class","wrapper");
        wraper.appendChild(save);
        wraper.appendChild(Cancels);
        Text_Comment.appendChild(wraper);
        
        Delete.onclick = function(){        // HÀM XÓA BÌNH LUẬN 
              Text.remove();
              Delete.remove();
              Edit.remove();
        }   
        Cancels.onclick = function(){
         wrap_the_content.contentEditable = false;
          Cancels.style.display = "none";
          save.style.display = "none";
          Edit.style.display =   "block";
          Delete.style.display = "block";
        }
      }        
      form_input.addEventListener("click", function()
      { 
          Button_Comment.style.display = "block";
          Button_Cancel.style.display =  "block";
      })
  document.getElementById("form").addEventListener("submit",function(event){  // lắng nghe người dùng bấm 
       event.preventDefault();  // ngăn chặn form gửi đi 
  })  






       





         
       


        
     






    




   
    















