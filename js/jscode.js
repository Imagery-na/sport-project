function res() {
  var a=1*document.forma1.text1.value;
  var b=1*document.forma1.text2.value;
  var c=1*document.forma1.text3.value;
  var time=1*document.forma1.time.value;
  var sum=a+b+c;
  dop=window.open("","","width=500,height=300,left=350, top=150");
  dop.document.write("сумма баллов:"+ sum);
  dop.document.style.backgroundColor="#E8F4A4";
dop.document.close();
}
