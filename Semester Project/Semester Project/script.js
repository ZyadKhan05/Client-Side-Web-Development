function validateEmail(theForm) {
    if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(theForm.email)){
        return(true);
    }
    alert("Invalid e-mail address! Please enter again carefully!.");
    return(false);
}

function showDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //months are zero based
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);
}




