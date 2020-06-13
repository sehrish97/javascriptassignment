 //................................chapter 1....................................
// Question 1...............
 //1.Write a script to greet your website visitor using JS alert box.
 alert("Welcome to js land...")

// Question 2..................
// Write a script to display following message on your web page:
 alert("Error!Please enter a valid password")

 //Question 3...................
 //3. Write a script to display following message on your web page: (Hint : Use line break)
 alert("Welcome to js land...\nHappyCoding!")

// Question 4.............
// 4. Write a script to display following messages in sequence:
 alert("Welcome to js Land...")

 //Question 5..............
 //5. Generate the following message through browser’s developer console:
 alert("Hello...I can run JS through my web browser's consol")


 //......................CHAPTER 2...................
// Question 1
// 1. Declare a variable called username.
 var username

// Question 2
// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
 var myName ="SehrishBibi"

 //question 8
 //8. Write a script to display this in browser through JS
 document.write("yah! I can write HTML content through Javavscript")

 //QUESTION 9
// 9. Store following string in a variable and show in alert and browser through JS
 var des ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
 alert(des)


//.................................. Chapter 3...............................
// Question 1..................
 //1. Declare a variable called age & assign to it your age. Show your age in an alert box.
 var age=prompt("Enter age")
 var str1="I am "
 var str2=" years old"
 var res=str1.concat(age , str2);
 alert(res)

 //Question 2..................
 //2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
 //number of visits on your web page. For example: “You have visited this site N times”.
 var str1=" 14";
 var str2="you have visited this site  ";
 var str3=" times";
 var res=str2.concat(str1 , str3);
 alert(res)

// Question 3.....................
// . Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
 var birthYear=1997
 document.write("My birth Year is "+birthYear)
 document.write("<br>")
 document.write(" Data type of my declared variable in number")

// Question 4....................
// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
 //a. Visitor’s name
 //b. Product title
// c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
 var name = prompt("Enter Name")
 var prod = prompt("Enter Product")
 var quat = prompt("Enter Quantity")
 document.write(name+" ordered "+quat+" "+prod+" on XYZ Clothing store")


 //...............................CHAPTER 4.....................................
 //Question 1....................
// 1. Declare 3 variables in one statement.
 var name,middle,last

 //Question 2..................
 //2. Declare 5 legal & 5 illegal variable names.
 var name,middle,last,x,y
 var You&i,first Name ,http: ,3rd-number , break;

// Question 3.....................
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
 //b) Variable names can only contain ______, ______,
 //______ and ______.
 ///For example $my_1stVariable
 //c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
 //d) Variable names are case _________
 //e) Variable names should not be JS _________
 document.write("<h1>Rules for naming JS variables</h1>.<br> Variable names can only contain number,$, and _.For example $my_1stVariablev <br>Variables must begin with anumber,$, or _. For example $name, _name or name<br>Variable names are case Sensitive<br>Variable names should not be JS Keyword")


 //............................CHAPTER 5.....................................
 //Question 1..................
 //1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
 var num1 =  prompt("Enter Num1")
 var num2 = prompt("Enter Num2")
 var sum = (+num1)+(+num2)
 document.write("sum of "+num1+" and "+num2+" is " +sum)

// Question 2.................
// 2. Repeat task1 for subtraction, multiplication, division & modulus
 var num1 =  prompt("Enter Num1")
  var num2 = prompt("Enter Num2")
  var sum = (+num1)-(+num2)
  document.write("subtraction of "+num1+" and "+num2+" is " +sum)

  var num1 =  prompt("Enter Num1")
 var num2 = prompt("Enter Num2")
 var sum = num1*num2

 document.write("multiply of "+num1+" and "+num2+" is " +sum)


 var num1 =  prompt("Enter Num1")
 var num2 = prompt("Enter Num2")
 var sum = num1/num2

 document.write("division of "+num1+" and "+num2+" is " +sum)

 var num1 =  prompt("Enter Num1")
 var num2 = prompt("Enter Num2")
 var sum = num1%num2

 document.write("modul of "+num1+" and "+num2+" is " +sum)

 //Question 3.......................
 //3. Do the following using JS Mathematic Expressions
 //a. Declare a variable.
 //b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
 //c. Initialize the variable with some number.
 //d. Show the value of variable in your browser like “Initial value: 5”.
 //e. Increment the variable.
 //f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
 //i. Decrement the variable.
 //j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
 //by 3.
 //l. Output : “The remainder is : 0”.
 var a=5
 document.write("Valueafter variable declaration is undefined <br>")
 document.write("Initialvalue: "+a+"<br>")
 a++
 document.write("Value after increment is: "+a+"<br>")
 a=a+7
 document.write("Value after addition is:  "+a+"<br>")
 a--
 document.write("Value after decrement is:  "+a+"<br>")
 a=a%3
 document.write("The remainder is :  "+a+"<br>")

 //Question 4.............
 //4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
 var price =600
 var qua=5

 document.write("Total cost to buy "+qua+" tickets to a movie is "+(price*qua)+"PKR")
 //Question 5.............
 //5. Write a script to display multiplication table of any number in your browser. E.g
 var num =  prompt("Enter Num1")
 document.write("Table of "+num+"<br>")
 for( var i=1;i<11;i++){

     document.write(num+" x "+i+" = "+(num*i)+"<br>")
   }
 //Question 6.............
 //6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
 //a. Store a Celsius temperature into a variable.
 //b. Convert it to Fahrenheit & output “NNoC is NNoF”.
 //c. Now store a Fahrenheit temperature into a variable.
 //d. Convert it to Celsius & output “NNoF is NNoC”.
 //Conversion Formulae:
 var c=25
 var f=70

 document.write(c+"oC is"+((c*(9/5))+32)+"oF<br>")
 document.write(f+"oF is"+((f-32)*(5/9))+"oC")

 //Question 7................
 //7. Write a program to implement checkout process of a
 //shopping cart system for an e-commerce website. Store
 //the following in variables
 //a. Price of item 1
 //b. Price of item 2
 //c. Ordered quantity of item 1
 //d. Ordered Quantity of item 2
 //e. Shipping charges
 //Compute the total cost & show the receipt in your browser.

 var price1 =650
 var qua1=3
 var price2 =100
 var qua2=7
 var charges=100
 var sum = ((price1*qua1)+(price2*qua2)+charges)
 document.write("price of item 1 is "+price1+"<br>Quantity of item 1 is "+qua1+"<br>price of item 2 is "+price2+"<br>Quantity of item 2 is "+qua2+"<br>Shipping Charges"+charges+"<br><br> Total cost of your order is "+sum)

// Question 8..................
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in your browser
  var tMark = prompt("Total Marks")
  var oMark = prompt("Obtained Marks")
 var perc =(oMark/tMark)*100

  document.write("<h1>Marks Sheet</h1>.<br> Total Marks : "+tMark+"<br>Marks Obtained : "+oMark+"<br> Percentage : "+perc)

 //Questiom 9.....................
 //9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
 var total =(10*104.80)+(25*28)
 document.write("<h1>Currency in PKR</h1>.<br>Total Currency in PKR : "+total)

 //Question 10.............
 //10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
//Perform all calculations in a single expression
  var x=2
 y=(x+5)*(10)/(2);
  document.write(y)
 //Question 11................
 //11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
 //b. Store their birth year in a variable.
 //c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NN years old”.
 var cYear = prompt("Current Year")
 var bYear = prompt("Birth Year")
 document.write("<h1>Age Calculator</h1> <br> Current Year :"+cYear)
 document.write("<br>Birth Year :"+bYear)
 document.write("<br>Your age is :"+(cYear-bYear))

 //Question 12............
 //12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
 //b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
 var radius = prompt("Enter radius")
 var v= 3.142
 document.write("<h1>The Geometrizer</h1><br>Radius of the cirsle :"+radius)
 document.write("<br>Circumference of the cirsle :"+(radius*2*v))
 document.write("<br>Area of the cirsle :"+(radius*radius*v))

// Question 13..............
 //13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
 //a. Store your favorite snack into a variable
 //b. Store your current age into a variable.
 //c. Store a maximum age into a variable.
 //d. Store an estimated amount per day (as a number).
 //e. Calculate how many would you eat total for the rest of your life.
 //Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
 var snack ="hotdog"
 var age =20
 var maxAge=200
 var est = 5
 var total=(5*365)*(200-20)
 document.write("<h1>The Lifetime Supply Calculator</h1><br>Favorite snack: "+snack)
 document.write("<br>Current age: "+age)
 document.write("<br>Estimated age: "+maxAge)
 document.write("<br>Amount of snack per day: "+est)
 document.write("<br>You will need "+total+ " to last you until the ripe old age of "+maxAge)


 //...........................CHAPTER 6-9................................
 //Question 1...........
 //1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
 var num=10

 document.write("Result")
 document.write("<br>The value of a is "+num)
 document.write("<br>.........................")
 document.write("<br><br>The value of a++ is "+ ++num)
 document.write("<br>The value of a is "+num)
 document.write("<br><br>The value of a++ is "+ ++num)
 document.write("<br>The value of a is "+num)
 document.write("<br><br>The value of a-- is "+ --num)
 document.write("<br>The value of a is "+num)
 document.write("<br><br>The value of a-- is "+ --num)
 document.write("<br>The value of a is "+num)

 //Question 2.................
 //2. What will be the output in variables a, b & result after execution of the following script:
 //var a = 2, b = 1;
 //var result = --a - --b + ++b + b--;
 // Explain the output at each stage:
 //--a;
 //--a - --b;
 //--a - --b + ++b;
// --a - --b + ++b + b--
 // question 3.........
  //3. Write a program that takes input a name from user & greet the user.
 var name=prompt("Enter Name")

 alert("Welcome " +name)

 //Question 5................
 //5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user
 //does not enter a new number, multiplication table of 5 should be displayed by default.

 var num =  prompt("Enter Num1")
 num=num*1
 if(num!=0){
 document.write("Table of "+num+"<br>")
 for( var i=1;i<11;i++){

     document.write(num+" x "+i+" = "+(num*i)+"<br>")
 }
 }
 else
 {
     document.write("Table of 5<br>")
     for( var i=1;i<11;i++){
    
         document.write("5 x "+i+" = "+(5*i)+"<br>")
      
    
     }

 }

// Question 6..............
 //6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
 //e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
 var sub1 = prompt("Enter Subject Name")
 var sub2 = prompt("Enter Subject Name")
 var sub3 = prompt("Enter Subject Name")
 var total = 100
 var mSub1 = prompt("Enter Subject Marks for "+sub1)
 var mSub2 = prompt("Enter Subject Marks for" +sub2)
 var mSub3 = prompt("Enter Subject Marks for "+sub3)

 var percSub1 =(mSub1/total)*100
 var percSub2 =(mSub2/total)*100
 var percSub3 =(mSub3/total)*100
 var subt=++mSub1 + ++mSub3 + ++mSub2
 var subt=subt-3
 --mSub1
 --mSub2
 --mSub3
 var subtperc=(subt/300)*100


 document.write("<table><tr> <td>"+sub1+"</td> <td>"+total+"</td> <td>"+mSub1+"</td> <td>"+percSub1+"%</td> </tr>   <tr> <td>"+sub2+"</td> <td>"+total+"</td> <td>"+mSub2+"</td> <td>"+percSub2+"%</td> </tr>   <tr> <td>"+sub3+"</td> <td>"+total+"</td> <td>"+mSub3+"</td> <td>"+percSub3+"%</td> </tr> <tr> <td></td> <td>"+total*3+"</td> <td>"+subt+"</td> <td>"+subtperc+"%</td> </tr> </table>")


//.........................Chapter 9-11...........................

 //Question 1.........
 //1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
 var city=prompt("Enter current city")

 if(city=="Karachi"||"karachi"){

     alert("Welcome to the city of lights")
 }

 //Question 2.................
 //2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
 var Gender=prompt("Enter Gender")

 if(Gender=="male"){

     alert("Good Morning Sir ")
 }
 else if(Gender=="female"){

     alert("Good Morning Ma'am ")
 }

 //Question 3..............
 //3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
 var Color=prompt("Enter Color")

 if(Color=="red"){

     alert("Must Stop ")
 }
 else if(Color=="yellow"){

     alert("Ready to move")
 }
 else if(Color=="green"){

     alert(" move now")
 }
 

 //Question 4...........
 //4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
 var fuel=prompt("Enter fuel in L")

 if(fuel<0.25){

     alert("Please refill the fuel in your car")
 }

 //Question 5............
 //5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
 //a.
  var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 }
  // output true
 /// b.
   var b = 82;
  if (b++ === 83){
  alert("given condition for variable b is true");
 }
 // output false

  //c.
   var c = 12;
   if (c++ === 13){
   alert("condition 1 is true");
  } 
  if (c === 13){
  alert("condition 2 is true");
  }
  if (++c < 14){
  alert("condition 3 is true");
  }
  if(c === 14){
  alert("condition 4 is true");
  }
  //output condtion 2 and 4 is true

  //d.
   var materialCost = 20000;
  var laborCost = 2000;
 var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost){
  alert("The cost equals");
  } 
  //output true

  //e.
   if (true){
  alert("True");
  }
 if (false){
  alert("False");
 }
 //output true

 // f.
   if("car" < "cat"){
  alert("car is smaller than cat");
 }
 //........output show

// Question 6................
 //6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. 
 //Take percentage & compute grade as per following table: Show the total marks, marks obtained, percentage, grade & remarks like:
 var total = 300
 var mSub1 = prompt("Enter Subject Marks" )
 var mSub2 = prompt("Enter Subject Marks ")
 var mSub3 = prompt("Enter Subject Marks" )

 var subt=++mSub1 + ++mSub3 + ++mSub2
 var subt=subt-3
 --mSub1
 --mSub2
 --mSub3
 var subtperc=(subt/300)*100
 var remakrs
 var Grade
 if(subtperc>=80){
     remakrs="Excellent"
     Grade="A-one"
 }
 else if(subtperc>=70)
 {
     remakrs="Good"
     Grade="A"
 }
 else if(subtperc>=60)
 {
     remakrs="you need to improve"
     Grade="B "
 }
 else{
     remakrs="Sorry"
     Grade="Fail"
 }
 document.write("<h1>Marks sheet</h1><br>Total Marks : "+total+"<br>Marks Obtained : "+subt+"<br>Percentage : "+subtperc+"<br>Grade : "+Grade+"<br>Remarks : "+remakrs)

 //Question 7..............
 //7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
 //a. If user guesses the same number, show “Bingo! Correct answer”.
 //b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
 var a =3

 var guess=prompt("Enter number b/w 1-10")

 if(a==guess){

     document.write("Bingo! Correct answer")
 }
 else if(a==(guess-1)||a==(guess+1)){

     document.write("Close enough to the correct answer")
 }

 //Question 8...................
 //8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
 var a =prompt("Enter number")

 var b=a%3

 if(b==0){
 document.write(a+"is  divisible by 3")
 }
 else{
     document.write(a+"is not divisible by 3")
 }

 //Question 9..................
 //9. Write a program that checks whether the given input is an even number or an odd number.
 var a =prompt("Enter number")

 var b=a%2

 if(b==0){
 document.write(a+"is even")
 }
 else{
     document.write(a+"is odd")
 }

 //Question 10.................
// 10. Write a program that takes temperature as input and shows a message based on following criteria
 //a. T > 40 then “It is too hot outside.”
 //b. T > 30 then “The Weather today is Normal.”
 //c. T > 20 then “Today’s Weather is cool.”
 //d. T > 10 then “OMG! Today’s weather is so Cool.”
 var T=prompt("Enter temp")

 if(T>40){

     alert("It is too hot outside")
 }
 else if(T>30){
     alert("The Weather today is Normal.")
 }
 else if(T>20){
     alert("Today’s Weather is cool")
 }
 else if(T>10){
     alert("OMG! Today’s weather is so Cool.")
 }

 //Question 11............
 //11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
 //a. First number
//b. Second number
// c. Operation (+, -, *, /, %)
 //Compute & show the calculated result to user.
 var num1 =  prompt("Enter Num1")
 num1++
 num1--
 var num2 = prompt("Enter Num2")
 num2++
 num2--
 var opp = prompt("Enter Operator")
 if(opp=="+"){

     document.write(num1+num2)
 }
 else if(opp=="-"){
     document.write(num1-num2)
 }
 else if(opp=="*"){
     document.write(num1*num2)
 }
 else if(opp=="/"){
     document.write(num1/num2)
 }
 else if(opp=="%"){
     document.write(num1%num2)
 }


//  ......................CHAPTER 12-13..........................

 //QUESTION 1.............
 //1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
 //number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
 var a =prompt("Enter char")

 if(a<="Z" && a>="A"){

     document.write("it is upper case")
 }
 else if(a>="a" && a<="z"){

     document.write("it is Lower case")
 }

// Question 2...............
 //2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
 var a =prompt("Enter Number")
 var b =prompt("Enter Number")

 if(a>b){
     document.write(a)
 }
 else if(a<b){
     document.write(b)
 }else{
     document.write("Both are equal")
 }

 //Question 3...........
// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
 var a =prompt("Enter Number")

 if(a>0){
    document.write("Number is positive ")
 }
else if(a<0){
     document.write("Number is Negative")
   
 }else{
    document.write("Number is 0")
 }

 // Question 4...............
 // 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
 var a =prompt("Enter Number")
 if(a=="a"||a=="e"||a=="i"||a=="o"||a=="u"){
     document.write("True")
 }
 else{
     document.write("False")
 }

 //Question 5.............
 //5. Write a program that
// a. Store correct password in a JS variable.
 //b. Asks user to enter his/her password
// c. Validate the two passwords:
 //i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show
// “Incorrect password” otherwise.
 var pass="Password123"
 var Cpass = prompt("Enter Password")
 if(Cpass==""){
    alert("Enter Pass")
 }
else if(pass==Cpass){
     alert("Correct! The password you  entered matches the original password")
 }
 else{
     alert("Incorrect password")
 }

// Question 6..................
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
 //var hour = 13;
 //if (hour < 18) {
/// greeting = "Good day";
 //else
// greeting = "Good evening";
// }

 //.......correct.....
 var hour = 13;
 if (hour < 18) {
 greeting = "Good day"
 }
else{
 greeting = "Good evening"
 }

// Question 7.............
  //7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
 var time = prompt("Enter Time")
 if (time>=0000&&time<1200){

     alert("Good Morning")
 }
 else if(time>=1200&&time<1700){
     alert("Good Afternoon")
 }
 else if(time>=1700&&time<2100){
   alert("Good Evening")
 }
 else if(time>=2100&&time<2359){
    alert("Good Night")
 }


//....................... CHAPTER 14-16......................
// QUESTION 1........
// 1. Declare an empty array using JS literal notation to store student names in future.
studentName = new Array();

// QUESTION 2........
 //2. Declare an empty array using JS object notation to store student names in future.
studentname=[]

// QUESTION 3.............
 //3. Declare and initialize a strings array.
Name=["Table","Books"]

 //QUESTION 4................
// 4. Declare and initialize a numbers array.
Numbers=[1,2,3]

 //QUESTION 5...........
// 5. Declare and initialize a boolean array.
bol=[true,false]

 //QUESTION 6..........
 //6. Declare and initialize a mixed array.
mixarry=["Cars",1,true]

// QUESTION 7............
 //7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
 //BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
eduQual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("Qualifications<br>")
for(i=0;i<8;i++){

    t=i+1
    document.write(t +")"+eduQual[i]+"<br>")
}

 //QUESTION 8..........
 //8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
 //Assume that total marks are 500 for each student, display the scores & percentages of students like:
Name=[]
marks=[]
for(i=0;i<3;i++){
        name[i]=prompt("Enter Name")
        marks[i]=prompt("Enter marks")
} 
for(i=0;i<3;i++){
    document.write("Score of "+name[i]+" is "+marks[i]+". Percentage : "+((marks[i]/500)*100)+"%<br>")

}

 //QUESTION 9................
 //9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
 //d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in yourbrowser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
 //position/index. . Display the updated array in your browser.
color=["red","blue"]

alert(color)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
alert(color)
var temp =prompt("Enter color to add in back")
color.push(temp)
alert(color)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
var temp =prompt("Enter color to add in front")
color.unshift(temp)
alert(color)
color.shift()
alert(color)
color.pop()
alert(color)
var pos=0
pos=prompt("Enter index to add")
temp=prompt("enter color")
color.splice(pos,0,temp)
alert(color)

pos=prompt("Enter index to delete")
var del=0
del=prompt("how many to delete?")
color.splice(pos,del)
alert(color)

 //QUESTION 10..................
 //10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var score=[320,230,480,120]
document.write(score+"<br>")
for(i=0;i<5;i++)
{
    for(j=i+1;j<5;j++){
        if(score[i]>score[j]){
            temp=score[j]
            score[j]=score[i]
            score[i]=temp

        }
    }
}
document.write(score+"<br>")

// QUESTION 11...............
// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var citiesList=["karachi","Lahore","Islamabad","Quetta","Peshawar"]
var cities =[]
alert(citiesList)
pos=prompt("Enter index to extract to cities")
cities=citiesList.splice(pos,3)
alert(cities)

document.write("Cities List :<br> "+citiesList+"<br><br>Selected Cities List : <br> "+cities)

 ///QUESTION 12.................
// 12. Write a program to create a single string from the below mentioned array:
 //var arr = [“This ”, “ is ”, “ my ”, “ cat”];(Use array’s join method)
var arr = ["This" , "is" ,  "my" ,  "cat"];
document.write(arr+"<br>")
var st=""
for(i=0;i<arr.length;i++){

    st=st+" "+arr[i]

}
document.write(st)

 //QUESTION 13............
 //13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
var arr = ["Keyboard" , "mouse" ,  "printer" ,  "moniter"];
document.write("Devices <br>"+arr+"<br>")
for(i=0;i<arr.length;i++){
    document.write("Out:<br>"+arr[i]+"<br>")
}

// QUESTION 14........
 //14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 
var arr = ["Keyboard" , "mouse" ,  "printer" ,  "moniter"];
document.write("Devices <br>"+arr+"<br>")
for(i=arr.length+1;i>=0;i--){
    document.write("Out:<br>"+arr[i]+"<br>")
}

 // QUESTION 15.........
 //15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your
 //browser using document.write() method:
var arr = ["Apple" , "Samsung" ,  "Motorola" ,  "Nokia","Sony","Haier"];
for(i=0;i<arr.length;i++){
    document.write("<br>"+arr[i]+"<br>")
}


 //..............................CHAPTER 17-20.....................................
//  QUESTION  1........
//1. Declare and initialize an empty multidimensional array.(Array of arrays)
var matrix = [ [], [], [] ]

// QUESTION 2......
//2. Declare and initialize a multidimensional arrayrepresenting the following matrix:
var matrix = [[0, 1, 2, 3],
              [1, 0, 1, 2],
              [2, 1, 0, 1] ]
            
//QUESTION 3......
//3. Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++){
    document.write(i, "<br>");
}

//QUESTION 4.........
// 4 - Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var table = prompt("Enter the number to show its multiplication table:");
var length = prompt("Enter the length of the table:");

for (var  i = 1; i <= length; i++){
    document.write(table, "x", i, "=", table*i, "<br>");
}

//QUESTION 5..............
//5 - Write a program to print items of the following array using for loop:

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var len = fruits.length;
for (var i = 0; i < len; i++){
    document.write(fruits[i], "<br>");
}

for (var i = 0; i < len; i++){
    document.write("Element at ", i, "is ", fruits[i], "<br>");
}

//QUESTION 6..........
//6 - Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

for (var i = 1; i <= 15; i++){
    document.write(i, ", ");
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

for (var i = 10; i > 0; i--){
    document.write(i, ", ");
}


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

for (var i = 0; i <=20; i++){
    if (i % 2 === 0){
        document.write(i, ", ");
    }
}


// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for (var i = 1; i <=19; i++){
    if (i % 2 !== 0){
        document.write(i, ", ");
    }
}


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

for (var i = 2; i <=20; i++){
    if (i % 2 === 0){
        document.write(i + "k", ", ");
    }
}

// QUESTION 7..............
// 7 - You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for (var i = 0; i < A.length; i++){
    if (A[i] === search){
        available = true;
        break;
    }
    else{
        available = false;
    }       
}

if (available === true){
    document.write(search, " is available at index ", i, " in our bakery");
}
if (available === false){
    document.write("We are Sorry. ", search, " is not available in our bakery");
}

//QUESTION 8..................
// 8 - Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

A = [24, 53, 78, 91, 12];
document.write("Array items: ", A);
largerNumber = Math.max(24, 53, 78, 91, 12);
document.write("<br> The larger Number is ", largerNumber);

//QUESTION 9..................
//
// 9 - Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

A = [24, 53, 78, 91, 12];
document.write("Array items: ", A);
SmallerNumber = Math.min(24, 53, 78, 91, 12);
document.write("<br> The Smaller Number is ", SmallerNumber);

//QUESTION 10............
//10 - Write a program to print multiples of 5 ranging 1 to 100.

for (var i = 1; i <= 100; i++){
    if (i % 5 == 0){
        document.write(i, ", ")
    }
}
