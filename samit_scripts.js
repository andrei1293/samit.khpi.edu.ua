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
	$("#aboutSubmissions").remove();
	
	// right sidebar
	$("#notification").remove();
	$("#sidebarLanguageToggle").remove();
	$("#sidebarNavigation").remove();
	$("#sidebarInformation").remove();
	$("#sidebaripv6enabled").remove();
	$("#sidebarHelp").remove();
	$("#sidebarUser .blockTitle").text("Менеджер журналу");
	
	// add menu link programmatically
	$("#navbar .menu #home").after('<li><a href="http://samit.khpi.edu.ua/about/submissions">Подання</a></li>');
	
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/pages/view/indexing">Індексація</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/about/journalSponsorship">Фінансування</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/about/history">Історія журналу</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/information/readers">Для читачів</a></li>');
	
	// simplify issues archive
	$(".issueCoverImage a img").unwrap();
	​$('#issue h4 a').contents().unwrap();​​
	
	// add submission preparation checklist item
	$("#content .plain li:eq(1)").after('<li>» <a href="http://samit.khpi.edu.ua/about/submissions#submissionPreparationChecklist">Вимоги до подання</a></li>');
	$("#aboutPeople .plain li:eq(2)").remove();
	
	// correct ukrainian
	$("#submissionPreparationChecklist p").html("Під час подання рукопису до журналу автори повинні підтвердити його відповідність всім встановленим вимогам, вказаним нижче. У разі виявлення невідповідності поданої роботи пунктам цих вимог редакція повертатиме авторам матеріали на доопрацювання.");

	// editor info
	$("#editorialTeam #editors h3").text("Редактор сайту");
	$("#editorialTeam #editors").before("<p>В редакційній колегії відсутні коректор і верстальник. Робота зі створення оригінал-макету статті покладається на автора.</p>");
});
// ]]></script>