
// var y=parseInt(Math.random()*9000)+1000;
// console.log(y);
// aa.innerHTML=y;

// function yz(req,res){
//     if(ww.value==y){
//        alert("注册成功")
//        return;
//     }
// }

//get请求 
    // function zcLogin(){
    //   var xhr=new XMLHttpRequest();
    //   xhr.onreadystatechange=function(){
    //     if(xhr.readyState==4&&xhr.status==200){
    //       var result=xhr.responseText;
    //       if(result=="注册成功"){
    //         window.location.href="http://127.0.0.1:5500/HTML/index.html";
    //       }else{
    //         tishi.innerHTML=`${result}`
    //       }
    //     }
    //   }
    //     var url="http://localhost:8081/login/zcLogin?phone="+phone.value+"&pwd="+pwd.value;
		// 	xhr.open("get",url,true);
    //         xhr.send(null);  
    // }

    //  function zc(){
//   var xhr=new XMLHttpRequest();
//   var url="http://localhost:8081/login/znn?phone="+phone.value;
//   xhr.open("get",url,true);
//   xhr.send(null);
//   xhr.onreadystatechange=function(){
//   if(xhr.readyState==4&&xhr.status==200){
//     var result=xhr.responseText;
//     if(result=='aa'){document.getElementsByTagName('span')[4].className ='reg_no';tishi.innerHTML='已被注册'}
//     if(result=='bb'){document.getElementsByTagName('span')[4].className = 'reg_yes';tishi.innerHTML=''}
//   }
//       }
//     }
  
function zc_Login(){
  var tishi=document.getElementById("tishi")
    if(pwd.value == pwd1.value)
    {tishi.innerHTML="<font color='green'>两次密码相同</font>";
  }else {tishi.innerHTML="<font color='red'>两次密码不相同</font>";}
};




    function zclogin(){
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
          var result=xhr.responseText;
          if(result=="注册成功"){
            window.location.href="http://127.0.0.1:5500/mypro/HTML/index.html";
          }else{tishi.innerHTML=`${result}`}
				}
      }
      var url="http://localhost:8081/login/zcLogin?phone="+phone.value+"&pwd="+pwd.value;
			xhr.open("post",url,true);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			var formdata="phone="+phone.value+"&pwd="+pwd.value;
			xhr.send(formdata);	
    }

    function zc(){
      var xhr=new XMLHttpRequest();
      var url="http://localhost:8081/login/znn?phone="+phone.value;
      xhr.open("post",url,true);
      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			var formdata="phone="+phone.value;
			xhr.send(formdata);	
      
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4&&xhr.status==200){
          var result=xhr.responseText;
          if(result=='aa'){document.getElementsByTagName('span')[4].className ='reg_no';tishi.innerHTML='已被注册'}
          if(result=='bb'){document.getElementsByTagName('span')[4].className = 'reg_yes';tishi.innerHTML=''}
				}
      }
    }

    phone.onkeyup=function(){
      var reg=/^\d{11}$/;
      phone.call(this,reg);
      function phone(reg){
      var input=this;
      if(reg.test(input.value)===true){
        zc();
      }else{
        document.getElementsByTagName('span')[4].className ='reg_no';
        tishi.innerHTML="正确的手机号码"
      } 
    }
  }




