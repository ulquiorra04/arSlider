function ARSlide(options) {
    let slider = document.getElementById("arSlide");
    let images = document.querySelectorAll("#arSlide > img");
    let arrow_right = document.createElement("div");
    let arrow_left = document.createElement("div");

    arrow_right.className = "ar_to_right";
    arrow_right.addEventListener("click", (event) => {
        console.log("GO TO RIGHT");
    })
    
    
    arrow_left.className = "ar_to_left";
    arrow_left.addEventListener("click", (event) => {
        console.log("GO TO LEFT");
    })


    slider.appendChild(arrow_right);
    slider.appendChild(arrow_left);





    console.log(images);

    slider.className = "ar_slider";

    images.forEach(img => {
        img.className = "ar_slider_one";
    })

    if(options.item) {
        
    }

}

//module.exports.ARSlide = ARSlide;