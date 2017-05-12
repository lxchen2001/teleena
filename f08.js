let counter;

//clicks

counter = 100;

if(counter>=100)
{
    console.log("CONGRATS!");
}
else 
{
    console.log("better luck next time");
}

let i = 0;
while(counter>=100 && i < 5)
{
    console.log("CONGRATS!");
    i++;
}

do
{

}while(i < 5);

for(i = 0; i < 5 ; i++)
{
    console.log(i);
} 

const list = ["a", "b", "c", "d"];

for(const item of list){
    console.log(item);
}

list.forEach(item=>console.log(item));

function f(options){
    for(const propertyName in options){
        console.log(propertyName); "p1"
        console.log(options[propertyName]);
    }    
}


f({p1 : "a", p2 : 5, p3 : false});

f({name : "Simona", age : 43, children : true});
