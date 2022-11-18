var read=require('readline-sync')
var a=read.question('Enter 2 number')
var b=read.question('')
if(a>b)
{
    console.log("larger value is:"+a)
}
else
{
    console.log("larger value is:"+b)
}