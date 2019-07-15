
var phone=document.getElementById("phone");
var pwd=document.getElementById("pwd");
var tishi=document.getElementsByClassName("tishi")[0];
//姓名验证
phone.onblur=function(){
  var reg=/^\w{1,}$/;
  vali.call(this,reg);
  function vali(reg){
    var input=this;
    if(reg.test(input.value)===true){
      document.getElementsByTagName('input')[0].className ='input_yes';
      tishi.innerHTML=""
    }else{
      document.getElementsByTagName('input')[0].className = 'input_no';
      tishi.innerHTML="用户名不能为空"
    }
  }
}
//密码验证
pwd.onblur=function(){
    var reg=/^\w{6,}$/;
	pwd.call(this,reg);
	function pwd(reg){
		var input=this;
		if(reg.test(input.value)===true){
      document.getElementsByTagName('input')[1].className = 'input_yes';
      tishi.innerHTML=""
		}else{
      document.getElementsByTagName('input')[1].className = 'input_no';
      tishi.innerHTML="密码不能少于6位数"
		} 
	}
}
//ajax 数据请求
		function login(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
          var result=xhr.responseText;
          if(result=="登陆成功"){
            window.location.href="http://127.0.0.1:5500/mypro/HTML/index.html";
          }else{tishi.innerHTML=`${result}`}
				}
      }
      // /mypro/login
			xhr.open("post","http://localhost:8081/login/login",true);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			var formdata="phone="+phone.value+"&pwd="+pwd.value;
			xhr.send(formdata);	
    }
    




