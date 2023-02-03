var num = "";
var input = document.getElementById("input");
var disable = document.getElementsByClassName("disable");
var i = 0;
disable_btns();
function take_input(n) {
    if (n == 'CE') {
        num = "";
        input.value = 0;
        disable_btns();
    }
    else {
        if (n == '/' || n == '+' || n == '-' || n == '*') {
            num = num + "" + n;
            input.value = num;
            disable_btns();
        }
        else if (n == '.') {
            var m = 0;
            for (var z = 0; z < num.length; z++) {
                if (num[z] == '.') {
                    m++;
                }
                if(num[z]=='/'||num[z]=='+'||num[z]=='-'||num[z]=='*'){
                    m=0;
                }

            }
            if (m) {
                1;
            }
            else {
                num = num + "" + n;
                input.value = num;
                disable_btns();
            }
        }
        else if (n == 'sqrt') {
            num = Math.sqrt(num);
            input.value = num;
        }
        else if(n=='%'){
            num=num/100;
            input.value=num;
        }
        else {
            num = num + "" + n;
            input.value = num;
            enable_btns();
        }
    }

}
function show_output() {
    input.value = eval(num);
    num = input.value;
    enable_btns();
}
function delete_char() {
    num = num.slice(0, -1);
    input.value = num;
    enable_btns();
}
function enable_btns() {
    for (var p = 0; p < disable.length; p++) {
        disable[p].disabled = false;
    }
}

function disable_btns() {
    for (var p = 0; p < disable.length; p++) {
        disable[p].disabled = true;
    }
}
