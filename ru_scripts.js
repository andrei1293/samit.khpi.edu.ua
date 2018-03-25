<script type="text/javascript">// <![CDATA[
$(document).ready(function(){
	// title
	$("#headerTitle h1").css("text-align", "center");

	// menu and navigation links
	$("#onlineSubmissions").html('<h3>Отправка статей</h3><p>Статьи для публикации в Вестнике НТУ "ХПИ", ' +
		'серия "Системный анализ, управление и информационные технологии", подаются одним из удобных для авторов способом:' +
		'<ul>' +
		'<li>отправить на электронную почту <a href="mailto:bezmenov@kpi.kharkov.ua">bezmenov@kpi.kharkov.ua</a></li>' +
		'<li>прийти в редакцию по адресу 61002, Украина, г. Харьков, ул. Кирпичева, 2, НТУ "ХПИ", кафедра системного анализа и информационно-аналитических технологий</li>' +
		'</ul>' +
		'</p><div class="separator">&nbsp;</div>');
	$("#userHome").remove();
	$("#current").remove();
	$("#search").remove();
	$("#aboutOther").remove();
	$("#login").remove();

	// add menu link programmatically
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/pages/view/editorialBoard">Редакционная коллегия</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/pages/view/indexing">Индексация</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/about/journalSponsorship">Финансирование</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/about/history">История журнала</a></li>');

	// editor info
	$("#editorialTeam #editors h3").text("Редактор сайта");
	$("#editorialTeam #editors").before("<p>В редакционной коллегии отсутствуют корректор и верстальщик. Работа по созданию оригинал-макета статьи возлагается на автора.</p>");
});
// ]]></script>