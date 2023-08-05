
    function singnup_form(){
    var b = document.querySelector(".signup-form")
    // b.classList.remove("signup-form")
    // b.classList.add("signup-form-active")
    // console.log("tes")
    b.style.cssText =" top:0;"
    }



    function login_form(){
    var b = document.querySelector(".signup-form")
    // b.classList.remove("signup-form")
    // b.classList.add("signup-form-active")
    // console.log("tes")
    b.style.cssText =" top:500px;"
    }


const  cursor = document.querySelectorAll(".mouse");
document.body.addEventListener("mousemove" ,(e) =>{
    for (var i = 0; i < cursor.length; i++) {
    console.log(e)
    cursor[i].style.left = e.pageX+"px";
    cursor[i].style.top = e.pageY+"px";
    // cursor.setAttribute("style", "top: "+e.pageY+"px; left:"+e.pageY+"px");
    }
});
