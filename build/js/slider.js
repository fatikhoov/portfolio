let container=document.getElementById("container"),imgs_containers=document.getElementsByClassName("img_container"),imgsContainers=document.getElementById("inner_container");const overl=document.getElementById("overlay-btns"),checkAutoplay=document.getElementById("checkbox-autoplay"),loaderSl=document.getElementById("loader-slider");let imgs_count=imgs_containers.length,current_img_index=0,autoScroll_enabled=!0,autoScroll_interval=3e3,autoScroll_dir=1,loaderSlider=!0;function setup(){if(imgsContainers.style.display="none",loaderSlider=!0,loaderSl.style.display="flex",loaderSlider)setTimeout(()=>{var t=container.clientWidth;for(let e=0;e<imgs_count;e++){var n=imgs_containers[e],i=t*e-container.clientWidth;n.style.left=i+"px"}loaderSl.style.display="none",imgsContainers.style.display="block",loaderSlider=!1},500);else{var t=container.clientWidth;for(let e=0;e<imgs_count;e++){var n=imgs_containers[e],i=t*e-container.clientWidth;n.style.left=i+"px"}}}function autoScroll(){if(autoScroll_enabled)if(0==current_img_index?autoScroll_dir=1:current_img_index==imgs_count-1&&(autoScroll_dir=-1),autoScroll_dir<0){var t=container.clientWidth;current_img_index--;for(let e=0;e<imgs_count;e++){var n=imgs_containers[e],i=t*(e-current_img_index);n.style.left=i+"px"}}else{var r=container.clientWidth;current_img_index++;for(let e=0;e<imgs_count;e++){var l=imgs_containers[e],o=-r*(current_img_index-e);l.style.left=o+"px"}}}overl.addEventListener("click",e=>{if("right_button"===e.target.id){if(current_img_index<imgs_count-1){var t=container.clientWidth;current_img_index++;for(let e=0;e<imgs_count;e++){var n=imgs_containers[e],i=-t*(current_img_index-e);n.style.left=i+"px"}}}else if("left_button"===e.target.id&&0<current_img_index){var r=container.clientWidth;current_img_index--;for(let e=0;e<imgs_count;e++){var l=imgs_containers[e],o=r*(e-current_img_index);l.style.left=o+"px"}}}),checkAutoplay.addEventListener("click",e=>{e.target.checked?autoScroll_enabled=!0:(autoScroll_enabled=!1,setup())}),setup(),setInterval(autoScroll,autoScroll_interval);