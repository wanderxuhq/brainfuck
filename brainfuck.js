function run(){
	var code = document.getElementById("code").value;
	var mem = Array(1024).fill(0);
	var program = code.split('');
	var cur = 0;
	var bracket = 0;
	for (var i = 0; i < program.length; i++){
		var sign = program[i];
		switch(sign){
			case '>': cur++; break;
			case '<': cur--; break;
			case '+': mem[cur]++; break;
			case '-': mem[cur]--; break;
			case '.': document.write(String.fromCharCode(mem[cur])); console.log(mem[cur]); break;
			case ',': break;
			case '[': if (mem[cur] === 0) for (; i < program.length; i++) if (program[i] === '[') bracket++; else if (program[i] ===']' && --bracket === 0) break; break;
			case ']': if (mem[cur] > 0) for (; i >= 0; i--) if (program[i] === '[' && ++bracket === 0) break; else if (program[i] ===']') bracket--; break;
		}
	}
}
//run();
