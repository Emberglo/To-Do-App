//Instead of using JS logic to toggle the class, make a css class!
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//When you click the X, delete the whole To-Do
$("ul").on("click", "span", function(event) {
	//.parent() selects li, then runs fade out
	$(this).parent().fadeOut(500, function() {
		//removes li after fadeout complete
		$(this).remove();
	});
	//stops less specific events (li event) from firing
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13){
		//grabs new todo text from input
		var todoText = $(this).val();
		//empty the input
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class="material-icons">delete</i></span> " + todoText + "</li>")
		//.append() takes a string of html and adds it to whatever you selected
	};
});

$("#addTodo").click(function() {
	$("input[type='text']").fadeToggle();
});
