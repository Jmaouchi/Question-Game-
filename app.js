let guessesLeft = '2';



const container = document.querySelector('.container'),
      gameOne = document.querySelector('.game-one'),
      gameTwo = document.querySelector('.game-two'),
      gameThree = document.querySelector('.game-three'),
      gameFour = document.querySelector('.game-four'),
      messageOne = document.querySelector('.game-one-result'),
      messageTwo = document.querySelector('.game-two-result'),
      messageThree = document.querySelector('.game-three-result'),
      messageFour = document.querySelector('.game-four-result');

      

      container.addEventListener('mousedown' ,function(e){
        if(e.target.className ==='fourth-color'){
          messageOne.textContent= 'correct! go to the next level';
          messageOne.style.color='green';
          messageOne.style.fontSize='25px';
        }

       else if(e.target.className ==='first-color' || e.target.className ==='second-color'  || e.target.className ==='third-color' ){
          guessesLeft = guessesLeft-1;
          messageOne.textContent= `Wrong! you have ${guessesLeft} guesses left`;
          messageOne.style.color='red';
          messageOne.style.fontSize='25px';

       }

       if (guessesLeft===0){
          guessesLeft=guessesLeft+1;
          messageOne.textContent='you lost, try again'; 
          setTimeout(clearError, 1000);
       }

       function clearError(){
        window.location.reload();
       }
      });

    //second


      container.addEventListener('mousedown' ,function(e){
        if(e.target.className ==='third-number'){
          messageTwo.textContent= 'correct! go to the next level';
          messageTwo.style.color='green';
          messageTwo.style.fontSize='25px';
        }

       else if(e.target.className ==='first-number' || e.target.className ==='second-number'  || e.target.className ==='fourth-number' ){
          guessesLeft = guessesLeft-1;
          messageTwo.textContent= `Wrong! you have ${guessesLeft} guesses left`;
          messageTwo.style.color='red';
          messageTwo.style.fontSize='25px';
          messageOne.textContent
          setTimeout(clearError, 1000);

       }

       if (guessesLeft===0){
          guessesLeft=guessesLeft+1;
          messageTwo.textContent='you lost, try again'; 
          setTimeout(clearError, 1000);
       }

       function clearError(){
        window.location.reload();
       }
      });


      // third

      container.addEventListener('mousedown' ,function(e){
        if(e.target.className ==='second-seven'){
          messageThree.textContent= 'correct! go to the next level';
          messageThree.style.color='green';
          messageThree.style.fontSize='25px';
        }

       else if(e.target.className ==='first-six' || e.target.className ==='third-eight'  || e.target.className ==='fourth-nine' ){
          guessesLeft = guessesLeft-1;
          messageThree.textContent= `Wrong! you have ${guessesLeft} guesses left`;
          messageThree.style.color='red';
          messageThree.style.fontSize='25px';
          messageOne.textContent
          setTimeout(clearError, 1000);
          messageTwo.textContent
          setTimeout(clearError, 1000);
       }

       if (guessesLeft===0){
          guessesLeft=guessesLeft+1;
          messageThree.textContent='you lost, try again'; 
          setTimeout(clearError, 1000);
       }

       function clearError(){
        window.location.reload();
       }
      });


      // Fourth

      container.addEventListener('mousedown' ,function(e){
        if(e.target.className ==='third-red'){
         messageFour.textContent= 'correct! go to the next level';
         messageFour.style.color='green';
         messageFour.style.fontSize='25px';
        }

       else if(e.target.className ==='first-green' || e.target.className ==='second-yellow'  || e.target.className ==='fourth-blue' ){
          guessesLeft = guessesLeft-1;
         messageFour.textContent= `Wrong! you have ${guessesLeft} guesses left`;
         messageFour.style.color='red';
         messageFour.style.fontSize='25px';
          messageOne.textContent
          setTimeout(clearError, 1000);
          messageTwo.textContent
          setTimeout(clearError, 1000);
       }

       if (guessesLeft===0){
          guessesLeft=guessesLeft+1;
         messageFour.textContent='you lost, try again'; 
          setTimeout(clearError, 1000);
       }

       function clearError(){
        window.location.reload();
       }

       correct ();
       function correct(){
         if(messageThree.style.color==='green' && messageTwo.style.color === 'green' && messageOne.style.color==='green' && messageFour.style.color==='green'){
           container.style.backgroundColor='green';
         }
       }
      });







  