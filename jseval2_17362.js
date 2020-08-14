var i=prompt("enter the score\n");
var j;
assignGrade(i)
text_to_array()
reverse_sort()



function assignGrade(y){
   if(y<60){
   	alert("your grade is F");
   }
   else if(y>60 && y<70){
    alert("your grade is D");
   }
   else if(y>70 && y<80){
    alert("your grade is C");
   }
   else if(y>80 && y<90){
    alert("your grade is B");
   }
   else if(y>90 && y<100){
    alert("your grade is A");
   }

}

for(j=1;j<=100;j++){
 
   if(j%3==0){
   	console.log("Fizz");
   }
   else if(j%5==0){
   	console.log("Buzz");
   }
   if(j%3==0 && j%5==0){
    console.log("FizzBuzz");
   }

}

 function text_to_array()
        {
        var n=prompt("Enter Your text message");   
        var a=[]=n.split(' '); 
        console.log("Your message is ");
        for (var i=0;i<n.length && a[i]!=null;i++) {
        console.log(a[i]+",");
        }
        }


 function reverse_sort()
        {
        var n=prompt("Enter Number of names to sort");
        n=parseInt(n);    
        var a=[]; 
        for(var i=0;i<n;i++) {
        a[i]=(prompt("Enter name"+i)); 
        }
        a.sort();
        a.reverse();  
        console.log("The lexicographical order is ");  
        for (var i=0;i<n;i++) {
        console.log(a[i]);
        }
        }


var flag=true;
    list1=[]
    console.log(hist());
    function histn(num)
        {
            var strin="";
            for(var i=0;i<num;i++)
            {
               strin+="*" 
            }
            return strin
        }
    function hist()
    {
        
    do{
        var i=window.prompt("Enter a value");
            if(i!=null)
            {
            list1.push(i);
            
            }
            else
            {
             flag=false;
             
            }
        }while(flag==true)
        str=" ";
        for (var j=0;j<list1.length;j++)
        {
             str=str+"<div>"+histn(list1[j])+"</div>";
        }
        // str=str+"</ul>";
        return str;
    }


    var words=prompt("Enter a date in format dd-mm-yyyy");

    date(words);
    function date(words)
    {
        try{
            if(words==" ")
            {
            throw e;
            
            }
            else
            {
            word=words.split('-');
            list1=[1,3,5,7,8,10,12]
            if(word[1] ==1 || word[1] ==3 ||word[1] ==5 ||word[1] ==7 ||word[1] ==8 ||word[1] ==10 ||word[1] ==12)
            {
                if(word[0]>0 && word[0]<=31)
                {
                    console.log("Valid Date") 
                }
                else
                    {
                        console.log("Invalid Date") 
                    }
            }
            else if(word[1]==2)
            {
                if((!word[2]%4 && word[2]%100) || !word[2]%400)
                {
                    if(word[0]>0 && word[0]<=29)
                    {
                        console.log("Valid Date") 
                    }
                    else
                    {
                        console.log("Invalid Date") 
                    }
                }
                else{
                    if(word[0]>0 && word[0]<=28)
                    {
                        console.log("Valid Date") 
                    }
                    else
                    {
                        console.log("Invalid Date") 
                    }

                }
            }
            else if(word[1] ==4 || word[1] ==6 ||word[1] ==9 ||word[1] ==11)
            {
                if(word[0]>0 && word[0]<=30)
                    {
                        console.log("Valid Date") 
                    }
                    else
                    {
                        console.log("Invalid Date") 
                    }
            }
            else
            {
                console.log("Invalid Date") 
            }
        }}
        catch(e)
        {
        console.log("Invalid");
        }
        
    }




 