<script type="text/javascript">// <![CDATA[
$(document).ready(function(){
	// title
	$("#headerTitle h1").css("text-align", "center");

	// menu and navigation links
	$("#onlineSubmissions").html('<h3>Online Submissions</h3><p>Articles for publication in the Bulletin of NTU "KhPI". ' +
		'Series: System Analysis, Control and Information Technologies, are submitted in one way convenient for authors:' +
		'<ul>' +
		'<li>send to e-mail <a href="mailto:bezmenov@kpi.kharkov.ua">bezmenov@kpi.kharkov.ua</a></li>' +
		'<li>come to the editorial office at the address 2, Kyrpychova str., 61002, Kharkiv, Ukraine, NTU "KhPI", Department of System analysis and information-analytical technologies</li>' +
		'</ul>' +
		'</p><div class="separator">&nbsp;</div>');
	$("#userHome").remove();
	$("#current").remove();
	$("#search").remove();
	$("#aboutOther").remove();
	$("#login").remove();

	// add menu link programmatically
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/pages/view/editorialBoard">Editorial board</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/pages/view/indexing">Indexing</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/about/journalSponsorship">Sponsorship</a></li>');
	$("#navbar .menu").append('<li><a href="http://samit.khpi.edu.ua/about/history">History</a></li>');

	// remove contributors financing section
	$("#contributors").remove();

	// editor info
	$("#editorialTeam #editors h3").text("Website editor");
	$("#editorialTeam #editors").before("<p>In the editorial board there is no proofreader and installer. The work on creating an original layout of the article relates to the author.</p>");
});
// ]]></script>