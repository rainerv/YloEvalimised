$(document).ready(function() 
{
	$('div.alltabs div.tabsContent').hide();
	$('div.tab1').show();
	$('div.alltabs ul.tabs li.tab1 a').addClass('tab-current');
	$('div.alltabs ul li a').click(function()
	{
		var thisClass = this.className.slice(0,4);
		$('div.alltabs div.tabsContent').hide();
		$('div.' + thisClass).show();
		$('div.alltabs ul.tabs li a').removeClass('tab-current');
		$(this).addClass('tab-current');
	});
	
	$('div.statPiirkondContent').hide();
	$('div.statErakondContent').hide();
	$('div.statKandidaadidContent').hide();
	$('div.statRiiklikContent').hide();
	
	$("#statPiirkond").click(function()
		{
		$('div.statPiirkondContent').show();
		$('div.statErakondContent').hide();
		$('div.statKandidaadidContent').hide();
		$('div.statRiiklikContent').hide();
		});
	$("#statErakond").click(function()
		{
		$('div.statPiirkondContent').hide();
		$('div.statErakondContent').show();
		$('div.statKandidaadidContent').hide();
		$('div.statRiiklikContent').hide();
		});
	$("#statKandidaadid").click(function()
		{
		$('div.statPiirkondContent').hide();
		$('div.statErakondContent').hide();
		$('div.statKandidaadidContent').show();
		$('div.statRiiklikContent').hide();	
		});
	$("#statRiiklik").click(function()
		{
		$('div.statPiirkondContent').hide();
		$('div.statErakondContent').hide();
		$('div.statKandidaadidContent').hide();
		$('div.statRiiklikContent').show();	
		});
	
	
	// siia piirkonna funktsioon

		      $("#valiPiirkond").click(function (e)
		      {
		         ShowDialog(true);
		         e.preventDefault();
		      });

		      $("#sulgeButton").click(function (e)
		      {
		         HideDialog();
		         e.preventDefault();
		      });

		      $("#valiButton").click(function (e)
		      {
		         var ringkond = $("#ringkond option:selected").text();
		         $("#piirkond").html("Piirkond: "+ringkond);
		         $("#test").html("Kandidatuur: Puudub!")
		         HideDialog();
		         e.preventDefault();
		         $("#valiPiirkond").hide();
		      });

		   function ShowDialog(modal)
		   {
		      $("#overlay").show();
		      $("#dialog").fadeIn(300);

		      if (modal)
		      {
		         $("#overlay").unbind("click");
		      }
		      else
		      {
		         $("#overlay").click(function (e)
		         {
		            HideDialog();
		         });
		      }
		   }

		   function HideDialog()
		   {
		      $("#overlay").hide();
		      $("#dialog").fadeOut(300);
		   } 
	
	
	//piirkonna funktsioon l�pp
		  
		   // facebook login asjad
		   
		   //facebook login asjad l�pp
});