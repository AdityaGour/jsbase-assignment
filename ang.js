angular.module("demo",[])
.controller("firstCtrl",firstCtrl)


function firstCtrl(){
    first =this;
    var  list = [{name:"c1.jpg",url:"images/c1.jpg",key:["nike","Ni","nik","nk"]},{name:"c2.jpg",url:"images/c2.png",key:["adi","adidas","adid","adis"]},{name:"c3.jpg",url:"images/c3.png",key:["puma","pu","pm","pum"]}];
    
    first.search = function(match){
      for(var i=0; i<list.length;i++){
        console.log(list[i])
        for(var j=0;j<list[i].key.length;j++){
            console.log(list[i].key[j])
            if(first.match == list[i].key[j]){
            // 
            console.log(list[i].name)
               first.pic = list[i].name
            }
        }

        
     }
    }
    
}




