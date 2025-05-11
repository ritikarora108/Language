// Immediately Invoked Function Expressions ( IIFE )
// Jo function immediately execute hote hai or global scope ke pollution se problem hoti hai kai bar to wo htane ke liye iife use kiya


(function chai(){
    // named IIFE
    console.log("DB Connected")
})(); // -> This semicolon should be used to end this function so that 
      // any iife called below doesn't throw error

// chai()    ->  ()() , first wraps the function and second executes it immediately

( (name) => {
    console.log(`Chai aur ${name}`)
} )("code")
