$(document).ready(function () {

    $('body').load($(':input[type="submit"]').prop('disabled', true));

});

$("#userName").keyup(function () {
    validateUserName();
});
$("#emailAddress").keyup(function () {
    validateEmailAddress();
});
$("#phoneNo").keyup(function () {
    validatePhoneNo();
});
$("#addressOne").keyup(function () {
    validateAddress1();
});
$("#addressTwo").keyup(function () {
    validateAddress2();
});
$("#addressThree").keyup(function () {
    validateAddress3();
});
$("input[name='Gender']").click(function () {
    validateGender();
});
$("#checkBox").click(function () {
    validateCheckBox();
});
$("#dob").keyup(function () {
    validaeDate();
});

$('input[name="chbox"]').change(function () {
    if(this.checked){
        if(validateUserName() && validateEmailAddress() && validatePhoneNo() &&
        validateAddress1() && validateAddress2() && validateAddress3() &&
        validaeDate() && validateGender()){
            $(':input[type="submit"]').prop('disabled', false);
        }
        else{
            $(':input[type="submit"]').prop('disabled', true);
        }
    }
});

function validateGender() {
    let isAnyRadioButtonCecked = $("input[name='Gender']:checked").val();

    if(isAnyRadioButtonCecked){
        $("#error_gender").hide();
        return true;    
    }
    else{
        //alert('Nothing is checked!');
        $("#error_gender").show();
        $("#error_gender").html("* Please select gender");
        $("#error_gender").css("color", "red");
        $("#checkBox").prop('checked', false);
        return false;
    }
}

function validateUserName() {
    let pattern = /^[a-zA-Z]*$/;
    let name = $("#userName").val();

    if (name == "") {
        $("#error_userName").show();
        $("#error_userName").html("* Please enter name");
        $("#error_userName").css("color", "red");
        error_userName = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else if (name.trim() == "") {
        $("#error_userName").show();
        $("#error_userName").html("* Only spaces are not allowe");
        $("#error_userName").css("color", "red");
        error_userName = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else if (!name.match(pattern)) {
        $("#error_userName").show();
        $("#error_userName").html("* Only alphabets are allowed");
        $("#error_userName").css("color", "red");
        error_userName = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else {
        $("#error_userName").hide();
        return true;
    }
}

function validateEmailAddress() {
    let email = $("#emailAddress").val();
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    if (/\s/.test(email)) {
        $("#error_emailAddress").show();
        $("#error_emailAddress").html("* Space is not allowed");
        $("#error_emailAddress").css("color", "red");
        error_emailAddress = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else {
        $("#error_emailAddress").hide();
    }

    if (email == "") {
        $("#error_emailAddress").show();
        $("#error_emailAddress").html("* Please enter email");
        $("#error_emailAddress").css("color", "red");
        error_emailAddress = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else {
        let emailSplit = email.split('@');
        let name = emailSplit[0];
        let domainName = emailSplit[1];

        let dotSplit = domainName.split('.');
        let a = dotSplit[0];
        let b = dotSplit[1];

        if (name.length < 3) {
            $("#error_emailAddress").show();
            $("#error_emailAddress").html("* Must be 3 characters before @");
            $("#error_emailAddress").css("color", "red");
            error_emailAddress = false;
            $("#checkBox").prop('checked', false);
            return false;
        }
        else if (domainName.length < 3) {
            $("#error_emailAddress").show();
            $("#error_emailAddress").html("* Must be 3 characters after @");
            $("#error_emailAddress").css("color", "red");
            error_emailAddress = false;
            $("#checkBox").prop('checked', false);
            return false;
        }
        else if (emailSplit.length > 2) {
            $("#error_emailAddress").show();
            $("#error_emailAddress").html("* Must be one @ in email ");
            $("#error_emailAddress").css("color", "red");
            error_emailAddress = false;
            $("#checkBox").prop('checked', false);
            return false;
        }
        else if (b.length < 2) {
            $("#error_emailAddress").show();
            $("#error_emailAddress").html("* Must be 2 characters after .");
            $("#error_emailAddress").css("color", "red");
            error_emailAddress = false;
            $("#checkBox").prop('checked', false);
            return false;
        }
        else {
            $("#error_emailAddress").hide();
            return true;
        }
    }
}

function validatePhoneNo() {
    let phone = $("#phoneNo").val();

    if (phone.trim() == "") {
        $("#error_phoneNumber").show();
        $("#error_phoneNumber").html("* Please enter phone no");
        $("#error_phoneNumber").css("color", "red");
        error_phoneNo = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else if (/\s/.test(phone)) {
        $("#error_phoneNumber").show();
        $("#error_phoneNumber").html("* Space is not allowed");
        $("#error_phoneNumber").css("color", "red");
        error_phoneNo = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else if (phone[0] == 0) {
        $("#error_phoneNumber").show();
        $("#error_phoneNumber").html("* Phone number don't start with zero");
        $("#error_phoneNumber").css("color", "red");
        error_phoneNo = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else if (isNaN(phone)) {
        $("#error_phoneNumber").show();
        $("#error_phoneNumber").html("* Only numbers are allowed");
        $("#error_phoneNumber").css("color", "red");
        error_phoneNo = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else if (phone.length < 10 || phone.length > 10) {
        $("#error_phoneNumber").show();
        $("#error_phoneNumber").html("* Phone number must have 10 digits only");
        $("#error_phoneNumber").css("color", "red");
        error_phoneNo = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else {
        $("#error_phoneNumber").hide();
        return true;
    }
}

function validateAddress1() {
    let add1 = $("#addressOne").val();

    if (add1 == "") {
        $("#error_add1").show();
        $("#error_add1").html("* Please enter block no,street");
        $("#error_add1").css("color", "red");
        error_add1 = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else if (/\s/.test(add1)) {
        $("#error_add1").show();
        $("#error_add1").html("* Space is not allowed");
        $("#error_add1").css("color", "red");
        error_add1 = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else {
        $("#error_add1").hide();
        return true;
    }
}

function validateAddress2() {
    let add2 = $("#addressTwo").val();

    if (add2 == "") {
        $("#error_add2").show();
        $("#error_add2").html("* Please enter lendmark,city");
        $("#error_add2").css("color", "red");
        error_add2 = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else if (/\s/.test(add2)) {
        $("#error_add2").show();
        $("#error_add2").html("* Space is not allowed");
        $("#error_add2").css("color", "red");
        error_add2 = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else {
        $("#error_add2").hide();
        return true;
    }
}

function validateAddress3() {
    let add3 = $("#addressThree").val();

    if (add3 == "") {
        $("#error_add3").show();
        $("#error_add3").html("* Please enter pincode");
        $("#error_add3").css("color", "red");
        error_add3 = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else if (/\s/.test(add3)) {
        $("#error_add3").show();
        $("#error_add3").html("* Space is not allowed");
        $("#error_add3").css("color", "red");
        error_add3 = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else if (isNaN(add3)) {
        $("#error_add3").show();
        $("#error_add3").html("* Only numbers are allowed");
        $("#error_add3").css("color", "red");
        error_add3 = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else if (add3.length > 6 || add3.length < 6) {
        $("#error_add3").show();
        $("#error_add3").html("* Pincode must be 6 digits long only");
        $("#error_add3").css("color", "red");
        error_add3 = false;
        $("#checkBox").prop('checked', false);
        return false;
    }
    else {
        $("#error_add3").hide();
        return true;
    }
}

function validaeDate() {

    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var Val_date = $('#dob').val();
    if (Val_date.match(dateformat)) {
        var seperator1 = Val_date.split('/');
        var seperator2 = Val_date.split('-');

        if (seperator1.length > 1) {
            var splitdate = Val_date.split('/');
        }
        else if (seperator2.length > 1) {
            var splitdate = Val_date.split('-');
        }
        var dd = parseInt(splitdate[0]);
        var mm = parseInt(splitdate[1]);
        var yy = parseInt(splitdate[2]);
        var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (mm == 1 || mm > 2) {
            if (dd > ListofDays[mm - 1]) {
                $("#error_dob").show();
                $("#error_dob").html("* Invalid date format");
                $("#error_dob").css("color", "red");
                //alert('Invalid date format!');
                $("#checkBox").prop('checked', false);
                return false;
            }
            else {
                $("#error_dob").hide();
                return true;
            }
        }
        if (mm == 2) {
            var lyear = false;
            if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                lyear = true;
            }
            if ((lyear == false) && (dd >= 29)) {
                //alert('Invalid date format!');
                $("#error_dob").show();
                $("#error_dob").html("* Invalid date format");
                $("#error_dob").css("color", "red");
                $("#checkBox").prop('checked', false);
                return false;
            }
            else {
                $("#error_dob").hide();
                
            }
            if ((lyear == true) && (dd > 29)) {
                //alert('Invalid date format!');
                $("#error_dob").show();
                $("#error_dob").html("* Invalid date format");
                $("#error_dob").css("color", "red");
                $("#checkBox").prop('checked', false);
                return false;
            }
            else {
                $("#error_dob").hide();
            }
        }
    }
    else {
        //alert("Invalid date format!");
        $("#error_dob").show();
        $("#error_dob").html("* Invalid date format");
        $("#error_dob").css("color", "red");
        return false;
    }
    return true;
}

