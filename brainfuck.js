function run(){
var code = document.getElementById("code").value;
var mem = Array(1024).fill(0);
var program = code.split('');
var cur = 0;
var bracket = 0;
for(var i = 0; i < program.length;){
	var sign = program[i];
	switch(sign){
		case '>': cur++; i++; break;
		case '<': cur--; i++; break;
		case '+': mem[cur]++; i++; break;
		case '-': mem[cur]--; i++; break;
		case '.': document.write(String.fromCharCode(mem[cur])); console.log(mem[cur]); i++; break;
		case ',': i++; break;
		//case '[': if(mem[cur] === 0) i = brackets[outcurb][incurb].r + 1; else {i++; incurb++; }; break;
		//case ']': if(mem[cur] > 0) i = brackets[outcurb][incurb - 1].l + 1; else {i++; incurb--; if(incurb ===0 ) outcurb++; }; break;
		case '[': if(mem[cur] === 0){
			console.log(i);
			for(; i < program.length; i++){
				if(program[i] === '['){
					bracket++;
				} else if(program[i] ===']'){
					bracket--;
					if(bracket === 0){
						break;
					}
				}
			}
		}
		i++;
		break;
		case ']':
		console.log(i);
		if(mem[cur] > 0){
			for(; i >= 0; i--){
				if(program[i] === '['){
					bracket++;
					if(bracket === 0){
						break;
					}
				} else if(program[i] ===']'){
					bracket--;
				}
			}
		}
		i++;
		break;
		default: i++; break;
	}
}
}
run();