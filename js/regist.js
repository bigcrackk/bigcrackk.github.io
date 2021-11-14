$(function() {
	$("#regFrm").validate({
		rules: {
			txtNo: {required:true, rangelength:[6,12]},
			txtPwd: {required:true, rangelength:[6,16]},
			txtConfirmPwd: {required:true, rangelength:[6,16],equalTo:txtPwd},
			txtName: {required:true, rangelength:[2,6]},
			txtId: {required:true, isIdCardNo:true},
			txtPhone: {required:true, isIdCardNo:true},
			textfield: {required:true}
		},
		messages: {
			txtNo: {
				required:"用户帐号是必填项",rangelength:"用户帐号的字符长度为6-12位"
			},
			txtPwd: {
				required:"密码是必填项",rangelength:"密码字符长度为6-16位"
			},
			txtConfirmPwd: {
				required:"确认密码是必填项",rangelength:"密码字符长度为6-16位",
				equalTo:"两次密码输入不一致"
			},
			txtName: {
				required:"用户名是必填项",rangelength:"用户名的字符长度为2-6位"
			},
			txtId: {
				required:"身份证号码是必填项"
			},
			txtPhone: {
				required:"手机号码是必填项"
			},
			textfield: {
				required:"验证码是必填项"
			}
		}
	});
});