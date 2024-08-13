 // Health classification : phân loại sức khỏe
 

// khi ta thay đổi lựa chọn . ta cần cập nhật bằng cách gọi lại hàm 
 function output(){
               let fullname = document.getElementById("inputName").value;    // nếu những biến này bỏ ngoài hàm thì lúc  chạy chương trình  sẽ lấy giá trị đầu tiên và không thay đổi giá trị.
                 let Sex = document.getElementById("Choose").value;                             // giới tính được cập nhật mỗi khi hàm được gọi lại       
                 let Height_boy =  parseFloat(document.getElementById("input-Height").value);
                 let Weight_boy =  parseFloat(document.getElementById("input-Weight").value);
                 let Boy_Chest =    parseFloat(document.getElementById("input-Chest").value);
                console.log(Height_boy);
                console.log(Weight_boy);
                console.log(Boy_Chest);
    if( isNaN(Height_boy) || isNaN(Weight_boy) || isNaN(Boy_Chest)){
             document.getElementById("output1").innerHTML ="";
             alert("you did not enter complete information ! Please enter complete information");
       
       return false;  // trả về false để dừng chương trình
    } 
     else{
            if(Sex === "Nam"){
                  if(!Clause.checked){
                                          alert(" Bạn chưa chon điều khoản! Vui lòng Chọn điều Khoản để tiếp tục ");
                                                    return 0;
                                     }
                     let BMI  =  parseFloat(Weight_boy/(Math.pow(Height_boy,2)));
                         if( Height_boy >= 1.63 && Weight_boy >= 51 && Boy_Chest >=81  || (BMI >= 18.5 && BMI <= 24.9))
                           {                
                              document.getElementById("output1").innerHTML = " Fullname : "+fullname+ ": Chiều cao : "+Height_boy+" - Cân nặng : "+Weight_boy+ " - Vòng ngực :"+Boy_Chest+ " - BMI = "+BMI.toFixed(5)+ " Kết Luận : Sức khỏe đạt loại 1";                                                                       
                           }
                    //  let BMI1  =  parseFloat(Weight_boy/(Math.pow(Height_boy,2)));
                      else if(Height_boy >= 1.60 && Height_boy < 1.63  && Weight_boy >=  47 &&  Weight_boy <= 50 && Boy_Chest >= 78 && Boy_Chest <= 80 || BMI >= 25 && BMI <=  26.9 ){
                              document.getElementById("output1").innerHTML = " Fullname : "+fullname+ ": Chiều cao : "+Height_boy+" - Cân nặng : "+Weight_boy+ " - Vòng ngực : "+Boy_Chest+ " - BMI = "+ BMI.toFixed(5) + " Kết luận : Sức khỏe Loại 2"
                                                                                                           }
               else if(Height_boy >= 1.57 && Height_boy <= 1.59 && Weight_boy >= 47 &&  Weight_boy <= 50 && Boy_Chest >= 75 && Boy_Chest <= 77 || (BMI >= 27 && BMI <= 29)){
                              document.getElementById("output1").innerHTML =  "Fullname : "+fullname+ ": Chiều cao : "+Height_boy+" - Cân Nặng : "+Weight_boy+ " - Vòng Ngực : "+Boy_Chest+ " - BMI = "+ BMI.toFixed(4) + " Kết Luận : Sức khỏe loại 3";
                                                                  }
                             else{
                                   confirm(" Sức khỏe Không đạt Yêu Cầu . ");
                                   document.getElementById("input-Height").value = "";
                                   document.getElementById("input-Weight").value = "";
                                   document.getElementById("input-Chest").value = "";
                                   document.getElementById("Choose").value = "";
                                   document.getElementById("output1").value ="";
                                   document.getElementById("inputName").value = "";
                                 }
            }
              else if(Sex === "Nữ"){
                       let BMI  =  parseFloat(Weight_boy/(Math.pow(Height_boy,2)));
                     //   let abc = Clause.checked;
               if(!Clause.checked){                         
                           alert(" bạn chưa chon điều khoản ");
                           return 0;
                          }                       
                                if(Height_boy >= 1.54 && Weight_boy >= 48 || BMI >= 18.5 && BMI <= 24.9){
                                       document.getElementById("output1").innerHTML =   " fullname: "+fullname+ " - Chiều Cao : "+Height_boy+" - Cân Năng : "+Weight_boy+ "- BMI = "+BMI.toFixed(8)+" -- Kết luận : Sức khỏe Đạt Loại 1";  
                                        }
    
                              else if(Height_boy >= 1.52 && Height_boy <= 1.53 && Weight_boy >= 44 && Weight_boy <= 47 || BMI >= 25 && BMI <= 26.9){
                                        document.getElementById("output1").innerHTML = "fullname : "+fullname+": Chiều Cao : "+Height_boy+" - Cân Năng : "+Weight_boy+ "- BMI = "+BMI.toFixed(8)+"- Kết luận: Sức khỏe Loại 2";
                                    }
                              else{
                                    confirm(" Sức khỏe Không đạt Yêu Cầu . ");
                                    document.getElementById("input-Height").value = "";
                                    document.getElementById("input-Weight").value = "";
                                    document.getElementById("input-Chest").value = "";
                                    document.getElementById("Choose").value = "";
                                    document.getElementById("output1").value ="";
                                    document.getElementById("inputName").value = "";
                                   }
                                   }
                else
                {
                        alert("Bạn Chưa chọn giới tính ! vui lòng chọn giới tính ");
                }                       
    }             
       }
       function Reset(){
                document.getElementById("input-Height").value = "";
                document.getElementById("input-Weight").value = "";
                document.getElementById("input-Chest").value = "";
                document.getElementById("Choose").value = "";
                document.getElementById("output1").innerHTML ="";
                document.getElementById("inputName").value = "";
                Clause.checked = false;
      }
   let Clause = document.getElementById("Choose_clause");
Clause.addEventListener("click",function(){
   if(Clause.checked)
      {   // Clause.checked : trả về true nếu được chọn                 [ Clause.checked]
            let agree = confirm("Bạn đã đọc kĩ điều khoản trước khi chọn chưa"); // hàm confirm trả về true khi nhấn ok và trả về false khi nhấn cancel     
            if(agree){    

            }
            else{   
               Clause.checked = false;    
            }
     }
   else
   {
         let agree1 = confirm(" Bạn muốn hủy chọn Điều Khoản Đúng Không ");         // HÀM confirm : khi ta nhấn ok thì hàm sẽ trẻ về true ngược lại false 
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
      // form_input.addEventListener("input",function()  // nếu người dùng nhấp chữ . vào đây hàm sẽ chạy 
      // ki người dùng nhấp chữ thì màu đỏ hiển thị
      console.log(/[a-zA-Z]/.test(form_input.value));
          if(/[a-zA-Z]/.test(form_input.value))//    HÀM test(value)  có tác dụng làm  ô input có chữ cái thì đổi màu    (      TEST(VALUE) )
          {  
            
              Button_Comment.style.backgroundColor = "red";
          }
          else{
              Button_Comment.style.backgroundColor = "";
          }          
   
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
     
  




              


   
     
      
                
              


               
            




  
  
           


   
  
          
           
   

   
     
      
      


 




// Định nghĩa hàm Output() trước khi sử dụng nó

