var ques_ans=[
    {
        question1:"WHO IS THE PRESIDENT OF AMERICA?",
        option1:"DONALD TRUMP",
        option2:"IMRAN KHAN",
        option3:"EION MORGAN",
        option4:"BILAWAL BHUTTO",
        correct:"DONALD TRUMP"
    },
    {
        question1:"WHICH IS THE CAPITAL CITY OF AMERICA?",
        option1:"WASINGTON DC",
        option2:"NEW YORK",
        option3:"CHICAGO",
        option4:"LOS ANGLES",
        correct:"NEW YORK"
    },
    {
        question1:"WHAT DOES AMERICA MEANS?",
        option1:"THAT WORLD",
        option2:"GOOD WORLD",
        option3:"NEW WORLD",
        option4:"BIG WORLD",
        correct:"NEW WORLD"
    },
    {
        question1:"WHO FOUND AMERICA?",
        option1:"RICHARD PARKER",
        option2:"CHRIS LANE",
        option3:"VIN DIESEL",
        option4:"CHRISTOPHER COLUMBUS",
        correct:"CHRISTOPHER COLUMBUS"
    },
        {
        question1:"EVALUATE (2+3)*6",
        option1:"30",
        option2:"80",
        option3:"39",
        option4:"45",
        correct:"30"
    }
];
var i=1;
var marks=0;


var question=document.getElementById('question');
var opt1=document.getElementById('option1');
var opt2=document.getElementById('option2');
var opt3=document.getElementById('option3');
var opt4=document.getElementById('option4');
var nextt=document.getElementById('next');
next.innerText="next"

question.innerHTML=ques_ans[0].question1;
opt1.innerText=ques_ans[0].option1;
opt2.innerText=ques_ans[0].option2;
opt3.innerText=ques_ans[0].option3;
opt4.innerText=ques_ans[0].option4;

function next(){
    var act=document.getElementsByClassName('active');
    if(act.length==1){
    if(act[0].innerHTML==ques_ans[i-1].correct){
        marks+=10;
    }
    console.log(marks);
    if(i<ques_ans.length){
    question.innerHTML=ques_ans[i].question1;
    opt1.innerText=ques_ans[i].option1;
    opt2.innerText=ques_ans[i].option2;
    opt3.innerText=ques_ans[i].option3;
    opt4.innerText=ques_ans[i].option4;
    }
    else{
       var card= document.getElementById('card').innerHTML="your marks is: " + marks + " out of 50";
       // var result=document.createElement('p');
        var item=document.getElementById('item');
        //card.innerHTML=item.value + " your score is " + marks;
      // card.appendChild(result);

       
    }
    remove();
    i++;
    }
    else{
        alert("please select any option");
    }

}
function active(e){
    remove();
    e.setAttribute('class','active');
}
function remove(){
    var act=document.getElementsByClassName('active');
    for(var i=0;i<act.length;i++){
        act[i].classList.remove('active');
    }
}

