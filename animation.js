setTimeout(function() {main()}, 4000);
function main(){
	$("#popup").css("visibility","visible");
}
$("#exit").click(function(){
	$("#popup").css("visibility","hidden");
});