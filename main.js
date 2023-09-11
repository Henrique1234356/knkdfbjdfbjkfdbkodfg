var images = [
    "https://i.postimg.cc/MGn9GJXw/family.jpg",
    "https://i.postimg.cc/v4Zzyf0W/IMG-9525.jpg", 
    "https://i.postimg.cc/tZWdk5gH/IMG-9526.jpg" ,
    "https://i.postimg.cc/NyW7RVB4/IMG-9529.jpg",
    "https://i.postimg.cc/VJZFkvh2/IMG-9528.jpg",
    "https://i.postimg.cc/zLLFb5Zv/IMG-9527.jpg"];
           
var names = [
    "Álbum de Família",
    "Henrique de Castro",
    "Manuela de Castro", 
    "Billy de Castro",
    "Clarinha de Castro", 
    "Haaron de Castro"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}