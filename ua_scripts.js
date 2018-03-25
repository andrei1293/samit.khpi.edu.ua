<script type="text/javascript">// <![CDATA[
$(document).ready(function(){
	// title
	$("#headerTitle h1").css("text-align", "center");

	// menu and navigation links
	$("#onlineSubmissions").html('<h3>Надсилання статей</h3><p>Статті для опублікування у Віснику НТУ "ХПІ", ' +
		'серія "Системний аналiз, управління та iнформацiйнi технологiї", подаються одним із зручних для авторів способом:' +
		'<ul>' +
		'<li>надіслати на електронну пошту <a href="mailto:bezmenov@kpi.kharkov.ua">bezmenov@kpi.kharkov.ua</a></li>' +
		'<li>прийти до редакції за адресою 61002, Україна, м. Харків, вул. Кирпичова, 2, НТУ "ХПІ", кафедра системного аналізу та інформаційно-аналітичних технологій</li>' +
		'</ul>' +
		'</p><div class="separator">&nbsp;</div>');
	$("#userHome").remove();
	$("#current").remove();
	$("#search").remove();
	$("#aboutOther").remove();
	$("#login").remove();

	// add menu link programmatically
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/pages/view/editorialBoard">Редакційна колегія</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/pages/view/indexing">Індексація</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/about/journalSponsorship">Фінансування</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/about/history">Історія журналу</a></li>');

	// editor info
	$("#editorialTeam #editors h3").text("Редактор сайту");
	$("#editorialTeam #editors").before("<p>В редакційній колегії відсутні коректор і верстальник. Робота зі створення оригінал-макету статті покладається на автора.</p>");
});
// ]]></script>