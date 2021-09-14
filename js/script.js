// kiểu dữ liệu object
$("form").validate({
	rules: {

		
		name: {
			required: true,
			maxlength : 50,
			regex: /^[a-zAZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/i
		},

		email: {
			required: true,
			email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		},

		Message: {
			required: true,
			Message: true,
		}

},


	messages: {

		name: {
			required: 'vui long nhập họ và tên',
			maxlength : 'vui lòng nhập không quá 50 ký tự',
			regex: 'vui lòng nhập đúng họ và tên',
		},

		email: {
			required: 'vui lòng nhập email',
			email: 'vui lòng nhập đúng định dạng email',
		},
		Message: {
			required: 'vui lòng nhập nội dung',
		}

	},
});


$('.portfolio button').click(function (event) {
   // nếu click vacò butto đang active , thì không có lm gì hết
   if ($(this).hasClass('active')) {
   	return;
   }
   //active button được click
   $(this).addClass('active');
   $(this).siblings('button.active').removeClass('active')


	var dataValue = $(this).attr('data');
	if (dataValue == 'all') {
		$('.portfolio .row > div').show();
	}
	else {
		
		var shownSelector = '.portfolio .row > div[data=' + dataValue + ']';
	//hiện thị cột tương ứng với button được click
	$(shownSelector).show();
    //ẩn đi những cột không được chọn
    //portfolio .row > div : 8 div
    var hiddenSelector = '.portfolio .row > div:not(div[data=' + dataValue + '])';
    $(hiddenSelector).hide();
}

});



