function generate(){
    const includeLowercase = document.getElementById("includeLowercase");
    const includeUppercase = document.getElementById("includeUppercase");
    const includeNumbers = document.getElementById("includeNumbers");
    const includeSymbols = document.getElementById("includeSymbols");
    const passwordSize = document.getElementById("passwordSize");
    const generatedPassword = document.getElementById("generatedPassword");
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUV";
    const numberChars = "0123456789";
    const symbolsChars = "`~!@#$%^&*()_+{};:\,./<>?";
    let minValueAchived = true;
    let checkedBoxAchived = true;
    let allowedChars = "";
    let password = "";

    if(passwordSize.value < 10){
       generatedPassword.textContent = `Please, choose a password with at least 10 characters.`;
       minValueAchived = false;
    }
    if(!(includeLowercase.checked || includeUppercase.checked || includeNumbers.checked || includeSymbols.checked)){
        generatedPassword.textContent = `Please, check at least one box`;
        checkedBoxAchived = false
    }
    
    if(checkedBoxAchived && minValueAchived){
        allowedChars += includeLowercase.checked ? lowercaseChars : "";
        allowedChars += includeUppercase.checked ? uppercaseChars : "";
        allowedChars += includeNumbers.checked ? numberChars  : "";
        allowedChars += includeSymbols.checked ? symbolsChars : "";

        for(let i = 0; i < passwordSize.value; i ++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        generatedPassword.textContent = `The generated password is ${password}`;
    }
}