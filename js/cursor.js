$(document).ready(function() {
    

        
        
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
    
        
    Promise.all([d3.html("./index.html"), d3.html("images/viz.svg")]).then(function([html, svgDocument]){
  const questionContent = d3.select(html).selectAll('spaziettovizzina');
  questionContent.each(function(d){
      d3.select("#spaziettovizzina").node().appendChild(this);
  });
        
    
    
    let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#viz");
  // console.log(container);
  container.appendChild(svgNode);
        
        
//     const todo = d3.selectAll("g>#austria,#canada,#france,#germany,#italy,#norway,#spain,#switzerland,#unitedkingdom,#usa");
//        
//       const canada= d3.select("#canada")
//       const spain= d3.select("#spain")
//       const norway= d3.select("#norway")
//       const lblc= d3.select("g>#lblcanada")
//       const lbln= d3.select("g>#lblnorway")
//       const lbls= d3.select("g>#lblspain")
//
//       
//     highlight = function (illu){
//        todo.on("mouseover",function(){
//        var selector = this;
//        tutto.filter(function(d, i) {
//            return (this !== selector);
//        }).transition().style('opacity', '0.1');
//        d3.select(this).attr('opacity', '1.0');
//        console.log("lucone");
//        })
//        illu.on("mouseleave",function(){
//        tutto.transition().style("opacity", "1");
//        })};

    
  ;})})
