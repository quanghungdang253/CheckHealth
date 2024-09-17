let Images = [
    "../Image/nhip-tim-binh-thuong-5.jpg",
    "../Image/Chỉ-số-BMI-4+(3).png",
    "../Image/chi-so-huyet-ap-microlife-1-1024x1024.jpg"
    ]
           
    
    let index = 0;
    
    function Listimages(index){
                     let Listimage = document.getElementById("list-image");
                     Listimage.src = Images[index];
                        
    }
    
    const Left = () => {
                    index--;
                    if(index < 0){
                                    index = Images.length-1
                    }
                    Listimages(index);
    }
    const Right = () =>{
                    index++;
                    if(index === Images.length){
                            index = 0;
                    }
                    Listimages(index);
    
    }
    
    setInterval(() => {
                    Right();
    },5000)
                    Listimages(index); // gọi hàm để thiết lập ảnh đầu tiên 
    