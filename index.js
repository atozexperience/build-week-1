const headerImg = document.querySelector('#headerpic');

headerImg.addEventListener("mouseover", function(event){
    headerImg.src="img/modern-header.jpg"
   
  });
  headerImg.addEventListener("mouseout", function(event){
    headerImg.src="img/aral-tasher-7729-unsplash.jpg"
    event.stopPropagation();
  });


 const activeIcon = function (event) {
     event.target.style.color = "#339DCC"
     event.target.style.textDecoration="underline"
     event.target.style.fontSize="3rem"
     event.target.style.fontStyle="italic"
     event.stopPropagation()
   
 } 
  const icons = document.querySelectorAll ('a');
  icons[0].addEventListener("mouseover", activeIcon);    

 icons[1].addEventListener("mouseover", activeIcon)

    
        icons[3].addEventListener("mouseover", activeIcon)
    
            icons[4].addEventListener("mouseover", activeIcon)

            const mouseOff = function(event) {
             event.target.style.color="white"
             event.target.style.fontSize="2rem"
             event.target.style.textDecoration="none"   
             event.stopPropagation();
            }

            icons[0].addEventListener("mouseout", mouseOff);    

            icons[1].addEventListener("mouseout", mouseOff)
           
               
                   icons[3].addEventListener("mouseout", mouseOff)
               
                       icons[4].addEventListener("mouseout", mouseOff)
                
                

   // let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
