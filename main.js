//if flag == false then no card is opened
var flag=0;
var imgs=["imgs/pear.png","imgs/apple.jpg","imgs/banana.png","imgs/nuts.png","imgs/gapple.png","imgs/cherries.png","imgs/tomato.jpg","imgs/strawberry.jpg" ,"imgs/pear.png","imgs/apple.jpg","imgs/banana.png","imgs/nuts.png","imgs/gapple.png","imgs/cherries.png","imgs/tomato.jpg","imgs/strawberry.jpg"];
var timer;
var score=0;
//src of opened img
var image1;
var image2;
var seconds;
var minutes;
var image1ID;
var counter;

function startGame()
    {
        
        counter=0;
        var r = confirm("start game now");
        if (r == true)
        {    
            shuffle(imgs);
            timer= setInterval(function()
            {
                counter++;
                var temp=counter;
                seconds=parseInt(temp%60);
                minutes=parseInt(temp/60);
                document.getElementById("timerTxt").value=minutes+" : "+seconds;
                if(score==8)
                {
                    clearInterval(timer);
                    alert("Congratulations!!! you made it in just  "+minutes+" minutes and "+seconds+" seconds");
                }
            },1000); 
        } 
        else 
        {
            window.close();
        }
    }

function showImg(thisImg)
{ 
        if(flag==0)
    {                  
        thisImg.src=imgs[thisImg.id];
        flag++;
        image1ID=thisImg.id;
        image1=thisImg.src;
    }

    else if(flag==1 &&thisImg.id!=image1ID)
    {                  
        thisImg.src=imgs[thisImg.id];
        flag++;
        image2=thisImg.src;
        if(image2==image1)
        {
            score++;
            setTimeout(function(){thisImg.style.display="none"; document.getElementById(image1ID).style.display="none";},1000);
            flag=0;
            image1="random";
            image2="random";
        }
        else
        {
            setTimeout(function(){thisImg.src="imgs/joker.png";document.getElementById(image1ID).src="imgs/joker.png"},1000);    
            flag=0;
        }

    }
    
}



function shuffle(array)
{
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !=0)
    {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function playAgain()
{
    clearInterval(timer);
    startGame();
    score=0;
    var images = document.getElementsByTagName("img");
    for(var i=0;i<images.length;i++)
    {
        images[i].src="imgs/joker.png";
        images[i].style.display="inline";

    }  
}
function quiteGame()
{
    window.close();
}


