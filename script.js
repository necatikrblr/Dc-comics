const sepetclick = document.querySelector("#clickbtn");
const sepet = document.querySelector(".conta-sepet")

sepetclick.addEventListener("click", ()=>{
  if(sepet.classList.contains("absolute-active")){
    sepet.classList.add("absolute-none");
    sepet.classList.remove("absolute-active");
  }
  else{
    sepet.classList.add("absolute-active");
    sepet.classList.remove("absolute-none");
  }
});
