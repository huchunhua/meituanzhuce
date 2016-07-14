function Changeyxzc(){
	var zctype = document.getElementById("yxzc");
	var fzctype = document.getElementById("sjzc");
	var yxchange = document.getElementById("zctypeyx");
	var sjchange = document.getElementById("zctypesj");
	var yxicon = document.getElementById("icon-yx");
	var sjicon = document.getElementById("icon-sj");
	zctype.style.display = "block";
	yxchange.style.color = "#2bb8aa";
	yxchange.style.borderColor = "#2bb8aa";
	sjchange.style.color = "#333";
	sjchange.style.borderColor = "#eee";
	fzctype.style.display = "none";
	yxicon.style.backgroundPositionX = "-666px";
	sjicon.style.backgroundPositionY = "-545px";

}
function Changesjzc(){
	var zctype = document.getElementById("sjzc");
	var fzctype = document.getElementById("yxzc");
	var yxchange = document.getElementById("zctypeyx");
	var sjchange = document.getElementById("zctypesj");
	var yxicon = document.getElementById("icon-yx");
	var sjicon = document.getElementById("icon-sj");
	zctype.style.display = "block";
	yxchange.style.color = "#333";
	yxchange.style.borderColor = "#eee";
	sjchange.style.color = "#2bb8aa";
	sjchange.style.borderColor = "#2bb8aa";
	fzctype.style.display ="none";
	yxicon.style.backgroundPositionX = "-680px";
	sjicon.style.backgroundPositionY = "-527px";

}
function xs(){
	 var mychar1 = document.getElementById("tipsz");
	 var mychar2 = document.getElementById("tipszsj");
        mychar1.style.display = "none";
        mychar2.style.display = "none";
}
function IsEmail(){
	var email = document.getElementById("email").value.trim();        
	var mychar = document.getElementById("email-tips");
	var msemail = document.getElementById("msemail");
	reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		msemail.style.display = "inline-block"; 
	    if(email.length == 0) {
	    	mychar.style.display = "inline-block";
	    	msemail.innerHTML = "请填写邮箱地址";
	    }
	    else if(!reg.test(email)) {
	    	mychar.style.display = "inline-block";
	        msemail.innerHTML = "邮箱格式错误，请重新输入";
	    }
	    else {
	    	mychar.style.display = "none";
	    }       
}
function Nton(){
	var nts = document.getElementById("nts");
	var iconname = document.getElementById("iconname");
	var namets = document.getElementById("namets");
	var mychar = document.getElementById("name-tips");
	nts.style.display = "inline-block";
	namets.style.display = "inline-block";
	iconname.style.backgroundPositionY = "-191px";
	namets.innerHTML = "4-16字符,不能以数字开头，一个汉字为两个字符";
	mychar.style.display = "none";
}
function IsName(){
	var name = document.getElementById("name").value.trim();
	var mychar = document.getElementById("name-tips");
	var msname = document.getElementById("msname");
		msname.style.display = "inline-block";
		reg = /^[A-z]/;
		document.getElementById("nts").style.display = "none";
		if (name.length == 0) {
			mychar.style.display = "inline-block";
			msname.innerHTML = "请输入用户名"
		}
		else if (name.length < 4) {
			mychar.style.display = "inline-block";
			msname.innerHTML = "用户名太短，至少4字符"
		}
		else if (name.length > 16) {
			mychar.style.display = "inline-block";
			msname.innerHTML = "用户名太长，最多16字符"
		}
		else if (!reg.test(name)) {
			mychar.style.display = "inline-block";
			msname.innerHTML ="用户名必须以中文或英文字母开头"
		}
		else {
			mychar.style.display = "none";
		}
}
function IsPassword() {
	var password = document.getElementById("password").value;
	var mychar = document.getElementById("password-tips");
	var msnewpsj = document.getElementById("msnewpsj");
		msnewpsj.style.display = "inline-block";
		if (password.length == 0) {
			mychar.style.display = "inline-block";
			msnewpsj.innerHTML = "请填写密码"
		}
		else if(password.length < 6) {
			mychar.style.display = "inline-block";
			msnewpsj.innerHTML = "密码太短，至少6个字符";
		}
		else {
			mychar.style.display = "none";
		}
}
function IsPasswordm() {
	var password = document.getElementById("passwordm").value;
	var mychar = document.getElementById("password-tipsm");
	var msnewp = document.getElementById("msnewp");
		msnewp.style.display = "inline-block";
		if (password.length == 0) {
			mychar.style.display = "inline-block";
			msnewp.innerHTML = "请填写密码"
		}
		else if (password.length < 6) {
			mychar.style.display = "inline-block";
			msnewp.innerHTML = "密码太短，至少6个字符";
		}
		else {
			mychar.style.display = "none";
		}
}
function Str() {
	var weak = document.getElementById("weak");
	var weakm = document.getElementById("weakm");
	var zhong = document.getElementById("zhong");
	var zhongm = document.getElementById("zhongm");
	var qiang = document.getElementById("qiang");
	var qiangm = document.getElementById("qiangm");
	var password = document.getElementById("password").value;
	var passwordm = document.getElementById("passwordm").value;
		if (password.length == 0);
		else if (password.length < 6) {
			weak.style.backgroundColor = "red";
		}
		else if (password.length < 12) {
			zhong.style.backgroundColor = "red";
		}
		else {
			qiang.style.backgroundColor = "red";
		}

		if (passwordm.length == 0);
		else if (passwordm.length < 6) {
			weakm.style.backgroundColor = "red";
		}
		else if (password.length < 12) {
			zhongm.style.backgroundColor = "red";
		}
		else{
			qiangm.style.backgroundColor = "red";
		}

}
function Countrast() {
	var newpass = document.getElementById("password").value;
	var againpass = document.getElementById("password-again").value;
	var mychar = document.getElementById("password-tips-ct");
	var mssurep = document.getElementById("mssurep");
	mssurep.style.display = "inline-block";
	if (againpass.length == 0) {
		mychar.style.display = "inline-block";
		mssurep.innerHTML = "请再次输入密码";
	}
	else if(newpass !== againpass) {
		mychar.style.display = "inline-block";
		mssurep.innerHTML = "两次输入的密码不一致，请重新输入";
	}
	else {
			mychar.style.display = "none";
		}
}
function Countrastsj() {
	var newpass = document.getElementById("password").value;
	var againpass = document.getElementById("password-againsj").value;
	var mychar = document.getElementById("password-tips-ctsj");
	var mssurep = document.getElementById("mssurepsj");
	mssurep.style.display = "inline-block";
	if (againpass.length == 0) {
		mychar.style.display = "inline-block";
		mssurep.innerHTML = "请再次输入密码";
	}
	else if(newpass !== againpass) {
		mychar.style.display = "inline-block";
		mssurep.innerHTML = "两次输入的密码不一致，请重新输入";
	}
	else {
			mychar.style.display = "none";
		}
}
// 手机注册
function IsTel() {
	var tel = document.getElementById("tel").value.trim();
	var mychar = document.getElementById("tel-tips");
	var mstel = document.getElementById("mstel");
	mstel.style.display = "inline-block";
	reg = /^1[0-9]{10}$/;
	if(tel.length === 0) {
		mychar.style.display = "inline-block";
		mstel.innerHTML = "请输入电话号码"
	}
	else if(! reg.test(tel)) {
	    mychar.style.display = "inline-block";
		mstel.innerHTML = "请输入正确的手机号码"
	}
	else {
			mychar.style.display = "none";
		}
}
function IsDpw() {
	var dpw = document.getElementById("dpw").value.trim();
	var mychar = document.getElementById("dpw-tips");
	var msdpw = document.getElementById("msdpw");
	msdpw.style.display = "inline-block";
	if (dpw.length == 0) {
		 mychar.style.display = "inline-block";
		msdpw.innerHTML = "请输入动态验证码"
	}
	else {
			mychar.style.display = "none";
		}
}

function js() {
	var num = 20;
	function startCount() {
		document.getElementById('freeget').value = num + "s后重新获得动态验证码";
		if (num > 0) num = num - 1;
		else document.getElementById('freeget').value = "免费获得动态验证码"
		setTimeout(startCount, 1000);
	}
	setTimeout(startCount, 1000);
}












function ClassA(){
	this.color = "black";
}

ClassA.prototype.color = "red";
ClassA.prototype.sayColor = function (){
	alert(this.color);
}

function ClassB(){
}
function ClassC() {
}
ClassB.prototype = new ClassA();
ClassC.prototype = new ClassA();
ClassB.prototype.name = "Bill";
ClassB.prototype.color = "blue";
ClassB.prototype.sayName = function (){
	arguments
	this
	// debugger
	// alert(this.name);
	console.log(this.name)
}
var objA = new ClassA();
var objB = new ClassB();
var objC = new ClassB;
objB.name = "John";
objC.name = "Anna";
// objA.sayColor();
// objB.sayColor();e
// objB.sayName();
// objC.sayColor();
objC.sayName("h","jjj");