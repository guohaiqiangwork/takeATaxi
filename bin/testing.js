const resultMsg = {
  result: false,
  message: '',
}
 
export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
 
/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}
 
/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}
 
/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}
 
/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
 
/*判断输入的EMAIL格式是否正确 */
export function validateIsEmail(str) {
  if (str.length != 0) {
    const reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
    return reg.test(str);
  }
}
/*判断输入的手机号格式是否正确 */
export function validateIsPhone(str) {
  if (str.length != 0) {
    const reg = /^1[0-9]{10}$/;
    return reg.test(str);
  }
}
 
/*验证价格*/
export function validatePrice(str) {
  const reg = /(^[1-9]([0-9]{1,4})?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
  return reg.test(str)
}
 
/*验证正整数*/
export function validateNum(value) {
  const reg = /^[1-9][0-9]*$/;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入正整数';
  return resultMsg;
}
 
/*验证4位正整数*/
export function validateNum4(value) {
  const reg = /^0|[1-9][0-9]{0,3}$/;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入数字值且不大于4位';
  return resultMsg;
}
 
/*验证5位正整数*/
export function validateNum5(value) {
  const reg = /^0|[1-9][0-9]{0,4}$/;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入数字值且不大于5位';
  return resultMsg;
}
 
/*验证1-7位数字加4位小数*/
export function validateNum7(value) {
  const reg = /^(0|[1-9][0-9]{0,6})(\.[0-9]{1,4})?$/;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入数字值且不大于7位或最大四位小数';
  return resultMsg;
}
 
/*验证1-16位数字加2位小数*/
export function validateNum16(value) {
  const reg = /^(0|[1-9][0-9]{0,13})(\.[0-9]{1,2})?$/;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入数字值且不大于14位或最大两位小数';
  return resultMsg;
}
 
/*验证1-18位数字加6位小数*/
export function validateNum18(value) {
  const reg = /^(0|[1-9][0-9]{0,17})(\.[0-9]{1,6})?$/;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入数字值且不大于18位或最大六位小数';
  return resultMsg;
}
 
/*验证9位正整数*/
export function validateNum9(value) {
  const reg = /^0|[1-9][0-9]{0,9}$/;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入数字值且不大于10位';
  return resultMsg;
}
 
/*验证12位正整数*/
export function validateNum12_6(value) {
  const reg = /^(0|[1-9][0-9]{0,11})(\.[0-9]{1,6})?$/;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入数字值且不大于12位或最大六位小数';
  return resultMsg;
}
//校验输入非中文  true 是中文
export function noChinese(value) {
  const reg = /[\u4e00-\u9fa5]/;
  resultMsg.result = reg.test(value);
  resultMsg.message = '基金代码不能输入汉字!';
  return resultMsg;
}
//校验输入是否是数组或点
export function inputNumberOrSpot(value) {
  const reg = /^\d+(?=\.{0,1}\d+$|$)/ ;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入正确的销售服务费费率!';
  return resultMsg;
}
 
//校验输入是否是数字（包括正负、小数点）
export function inputOrNumber(value) {
  const reg = /[-+]*[0-9][.][0-9]+|[-+]*[1-9][0-9]*|^[0]$/ ;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入数字';
  return resultMsg;
}
 
//校验输入字符是否大于6位(包含数字字母)
export function validateByte6_18(value) {
  const reg = /^.{6,18}$/;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入至少输入6位及以上任意字符';
  return resultMsg;
}
 
//校验输入字符是否是路径格式
export function validateUrl(value) {
  const reg = /^[a-zA-Z]:(((\\(?! )[^/:*?<>\""|\\]+)+\\?)|(\\)?)\s*$/;
  resultMsg.result = reg.test(value);
  resultMsg.message = '请输入正确的文件路径';
  return resultMsg;
}
//大写金额
export function digitUppercase(num) {
  var tmpNum = num;
  var AA = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖");
  var BB = new Array("", "拾", "佰", "仟", "万", "亿", "元", "");
  var CC = new Array("角", "分", "厘");
  var a = ("" + num).replace(/(^0*)/g, "").split("."), k = 0, re = "";
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re;
        break;
      case 4:
        if (!new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0]))
          re = BB[4] + re;
        break;
      case 8:
        re = BB[5] + re;
        BB[7] = BB[5];
        k = 0;
        break;
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
      re = AA[0] + re;
 
    if (a[0].charAt(i) != 0)
      re = AA[a[0].charAt(i)] + BB[k % 4] + re;
    k++;
  }
  if (a.length > 1) {// 加上小数部分(如果有小数部分)
    if (a[0].length == 0) {
      re += "";
    } else {
      re += BB[6];
    }
    for (var i = 0; i < a[1].length; i++) {
      re += AA[a[1].charAt(i)] + CC[i];
      if (i == 2)
        break;
    }
  }
  if (tmpNum.toString().indexOf(".") == -1) {
    re += "元整";
  }
  // 处理输入字符0的情况
  if (a == '') {
    re = "零" + re;
  }
  return re;
}
 
/* 是否邮箱*/
export function validateEMail(rule, value,callback) {
  const reg =/^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
  if(value==''||value==undefined||value==null){
    callback(new Error('邮箱地址为空'));
  }else{
    if (!reg.test(value)){
      callback(new Error('请输入正确的邮箱地址'));
    } else {
      callback();
    }
  }
}
 
 
/* 是否身份证号码*/
export function validateIdNo(rule, value,callback) {
  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if(value==''||value==undefined||value==null){
    callback();
  }else {
    if ((!reg.test(value)) && value != '') {
      callback(new Error('请输入正确的身份证号码'));
    } else {
      callback();
    }
  }
}
 
/* 是否手机号码或者固话*/
export function validatePhoneTwo(rule, value, callback) {
  const reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else {
    if ((!reg.test(value)) && value != '') {
      callback(new Error('请输入正确的电话号码或者固话号码'));
    } else {
      callback();
    }
  }
}
/* 是否固话*/
export function validateTelphone(rule, value,callback) {
  const reg =/0\d{2}-\d{7,8}/;
  if(value==''||value==undefined||value==null){
    callback(new Error('输入不能为空'));
  }else {
    if ((!reg.test(value)) && value != '') {
      callback(new Error('请输入正确的固话（格式：区号+号码,如010-1234567）'));
    } else {
      callback();
    }
  }
  }
  export default {
	  validateTelphone,
	  validatePhoneTwo,
	  digitUppercase
  }
