
function book(title,author,genre,price){
    this.title=title;
    this.author=author;
    this.genre=genre;
    this.price=price;
    this.getbookinfo=function(){
        console.log(`title:${this.title},author:${this.author}, genre:${this.genre} , price:${this.price}`);
    }

}

function author(name,birthyear,nationality){
    this.name=name;
    this.birthyear=birthyear;
    this.nationality=nationality;
}
let a=new author("hari",2005,"ind")
let b1=new book("dsa",a,"english",250)

b1.getbookinfo()
console.log(b1);