<html>
	<head>
		<title>Использование jQuery метода .each()</title>
		<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
		<script>
	$( document ).ready(function(){
	  $( "li" ).each(function( index, element ) { // производим перебор элементов <li> коллекции jQuery
	    if( index % 2 != 0 ) { // если остаток от деления индекса элемента на 2 не равен нулю
	      $( this ).css( "color", "green" ); // устанавливаем цвет текста текущему элементу
	    }
	  });
	});
		</script>
	</head>
	<body>
		<ul>
			<li>Первый</li>
			<li>Второй</li>
			<li>Третий</li>
			<li>Четвертый</li>
			<li>Пятый</li>
		<li>
	</body>
</html>
