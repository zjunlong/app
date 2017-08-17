window.onload = function() {
	var input = document.querySelector('.zheze');
	var btn = document.querySelector('#fa')
	var reg = /^(13[0-9]|14[57]|15[012356789]|17[135678]|18[0-9])[0-9]{8}$/;
	btn.onclick = function() {
		var value = input.value;
		if(reg.test(value) == true) {

		}else{
			console.log('请输入正确的手机号')
		}

	}
}