/*
* @Author: Administrator
* @Date:   2018-09-17 17:21:46
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-18 22:43:46
*/
let input = document.querySelector(".name");
let text = document.querySelector("textarea");
let btn = document.querySelector("button");
let ul = document.querySelector(".a-left");
btn.onclick = function(){
	if((text.value !== "") && (input.value !=="")){
		let name = input.value;
		let con = text.value;
		let str = `
			<li>
				<div class="iconfont icon-user3 a-l-left"></div>
				<div class="a-l-right">
					<h1>${name} <small>2018-01-04 16:18:53</small></h1>
					<h2>${con}</h2>
				</div>
			</li>
		`
		ul.innerHTML+=str;
		text.value ="";
		input.value ="";
	}
	else{
		alert("内容不能为空");
	}
}