

class BoggleGame{

    /* makes a new game at this DOM id */
    constructor(boardID, secs = 60){
        this.secs = secs; // game length
        this.showTimer();
    
        this.score = 0;

        // Uses a set because a set only allows for words being used once and no repeats
        this.words = new Set();

        /*
        I believe this is what gives the specific board being played a class or boardID
        The reason for that is because it has the JQuery css selector $ before it meaning its selecting
        the class. 
        */
        this.board = $("#" + boardID)

        this.timer = setInterval(this.tick.bind(this), 1000);

        /*  The $ is the css selector used in JQuery 
            The call to the .add-word selects the form that the input
            box that is accepting user guesses is inside.
        */

        /*  The .on is the JQuery event listner. The form is listning for the 
            event listner "submit", which will be submit with the button thats 
            inside of the form. The function that will be carried out is the 
            handleSubmit function.
        */
        $(".add-word", this.board).on("submit", this.handleSubmit());

    }

    async handleSubmit(e){
        
        e.preventDefault();
        console.log("Hello World")
        console.log(e)
        alert("Submit")
        
        // const $word = $(".wordSubmit", this.board);

        // let word = $word.val();
        // if (!word) return;

        // if(this.words.has(word)){
        //     this.showMessage(`Already found ${word}`, "err");
        //     return;
        // }
    }

}









// let submitForm = document.querySelector(".add-word")

// submitForm.addEventListener("submit", function(e){
//     console.log(e)
//     e.preventDefault()
// });

