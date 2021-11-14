// JavaScript Document
$(function() {
	$("#txtLoginNo").focus(function() {
		var txt_value = $(this).val();
		if(txt_value == "请输入6~12位账号") {
			$(this).val("");
		}
	});
	$("#txtLoginNo").blur(function() {
		var txt_value = $(this).val();
		if(txt_value == "") {
			$(this).val("请输入6~12位账号");
		}
	});
});
// 测试登录类型
function cheakBtn() {
	var txtLoginNo = document.getElementById("txtLoginNo").value;
	var txtPwd = document.getElementById("txtPwd").value;
	if(txtLoginNo == "admin" && txtPwd == "123456") {
		alert("登陆成功！");
	} else {
		alert("用户名或密码错误！");
	}
}