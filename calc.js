function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}

function summ() {
    var result = document.form.textview.value;
    
    try {
        if(result) {
            document.form.textview.value = eval(result);
        }
    } catch {
        document.form.textview.value = "";
    }    
   
}
