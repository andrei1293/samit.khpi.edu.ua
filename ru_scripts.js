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
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/issue/view/7386">Текущий выпуск</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/pages/view/editorialBoard">Редакционная коллегия</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/pages/view/ethics">Издательская этика</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/pages/view/indexing">Индексация</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/about/journalSponsorship">Финансирование</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/about/history">История журнала</a></li>');

	// editor info
	$("#editorialTeam #editors h3").text("Редактор сайта");
	$("#editorialTeam #editors").before("<p>В редакционной коллегии отсутствуют корректор и верстальщик. Работа по созданию оригинал-макета статьи возлагается на автора.</p>");
	
	// language select
	document.getElementById("sidebarDevelopedBy").innerHTML += '<p><a onclick="changeLanguageFast(\'uk_UA\')"><img src="http://samit.khpi.edu.ua/manager/files/images/ua_flag.png" alt="UA"></a> ' +
		'<a onclick="changeLanguageFast(\'en_US\')"><img src="http://samit.khpi.edu.ua/manager/files/images/en_flag.png" alt="EN"></a> ' +
		'<a onclick="changeLanguageFast(\'ru_RU\')"><img src="http://samit.khpi.edu.ua/manager/files/images/ru_flag.png" alt="RU"></a></p>';
});

function changeLanguageFast(new_locale) {
	var base_url = "http://samit.khpi.edu.ua/pages/view/ethics";
	var current_url = document.URL;

	var redirect_url = 'http://samit.khpi.edu.ua/user/setLocale/NEW_LOCALE?source=%2Fpages%2Fview%2Fethics';
	redirect_url = redirect_url.replace("NEW_LOCALE", new_locale);

	window.location.href = redirect_url;
}
// ]]></script>