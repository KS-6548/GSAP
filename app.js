gsap.registerPlugin(TextPlugin)

const myvar = document.getElementById("var")

gsap.to(myvar,{
    duration : 2,
    text:{
        value:"The Code Creative",
        //delimiter:" "
        oldClass:"start",
        newClass:"end"
    }
    
})