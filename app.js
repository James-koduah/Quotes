//Backend is good.

var words=[
    '"Life is beautiful" <br> -James Koduah',
    '"James is the best" <br> -James Koduah',
    '"Eat your food" <br> -James Koduah',
    '"Drink your soup" <br> -James Koduah',
    ' "My advice to you is get married: If you find a good wife you\'ll be happy; if not, you\'ll become a philosopher." <br>-Socrates',
    '"If you want to be sure that you never forget your wife\'s birthday, just try forgetting it once."<br> -Aldo Cammarota',
    ' "Before you marry a person, you should first make them use a computer with slow Internet service to see who they really are." <br>-Will Ferrell',
    '"Never criticize your spouse\'s faults; if it weren\'t for them, your mate might have found someone better than you." -Jay Trachman',
    '"Adults are always asking children what they want to be when they grow up because they\'re looking for ideas." -Paula Poundstone',
    '"A perfect parent is a person with excellent child-rearing theories and no actual children." -Dave Barry',
    '"Just be good and kind to your children. Not only are they the future of the world, they\'re the ones who can sign you into a home." -Dennis Miller',
    '"When I was a kid my parents moved a lot, but I always found them." -Rodney Dangerfield'
]
var clas=[
    'aa',
    'bb',
    'cc',
    'dd',
    'ee',
    'ff',
    'gg',
    'hh',
    'ii'
]
var i=0;
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  var load=[];
function Quotesbutton(){
    shuffle(clas);
    shuffle(words);
    let body=document.getElementsByTagName('body')[0];
    let text=document.getElementById('text');
    let real=document.getElementById('real');
    let quo=document.getElementById('qqq');
    if(i>=words.length){i=0;}

    real.innerHTML=words[i];
    body.className=clas[1]
    text.className=clas[1];
    quo.className=clas[1];
    load.push(words[0])
    words.shift();
    if(words.length===0){
      words=load.slice(0,load.length);
      load=[]
    }
    console.log(load)
    console.log(words.length);

}

//Try to make it random
//If a quote is chosen it is removed from words and added to another array
//the remaining quotes in words are reshuffled and one is chosen
//when the new array is full start the process over again;