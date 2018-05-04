var code = document.getElementById("code").value;
var mem = Array(1024).fill(0);
var program = code.split('');
var cur = 0;
var brackets = [];
var curbracket = 0;
for(var i = 0; i < program.length; i++){
	var sign = program[i];
		if(sign === '['){
			brackets[curbracket] = {l:null, r:null};
			brackets[curbracket++].l = i;
		} else if (sign ===']'){
			brackets[--curbracket].r = i;
		}
}
curbracket = 0;
for(var i = 0; i < program.length;){
	var sign = program[i];
	switch(sign){
		case '>': cur++; i++; break;
		case '<': cur--; i++; break;
		case '+': mem[cur]++; i++; break;
		case '-': mem[cur]--; i++; break;
		case '.': document.write(String.fromCharCode(mem[cur])); i++; break;
		case ',': i++; break;
		case '[': if(mem[cur] === 0) i = brackets[curbracket++].r; else i++; break;
		case ']': if(mem[cur] > 0) i = brackets[curbracket].l; else {i++; curbracket--;}; break;
	}
}
