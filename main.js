var images= [
    "https://images.cdn3.stockunlimited.net/preview1300/father-in-a-suit_1246033.jpg","https://cdn1.vectorstock.com/i/1000x1000/18/50/young-flat-cartoon-banker-business-woman-lady-vector-20201850.jpg","https://w7.pngwing.com/pngs/96/861/png-transparent-boy-cartoon-child-hat-boy-painted-hand-toddler-thumbnail.png","https://tse4.mm.bing.net/th?id=OIP.u2s3LFTHkGdKQRb3AaJQ_AHaHa&pid=Api&P=0&w=300&h=300", "https://tse2.mm.bing.net/th?id=OIP.ml0Uu4nIp1s81eevnNJ9bwHaHa&pid=Api&P=0&w=300&h=300"
    ];
var names= [
    "Prakash G","Hemavathy G","Somnath G","Srikanth G", "The Family Book"
];
var i= 0;
function next(){
    if(i>4){
        i=0;
    }
    var updatedImage= images[i];
    var updatedNames= names[i];
    i++;
    document.getElementById("album").src=updatedImage;
    document.getElementById("people").innerHTML=updatedNames; 
}