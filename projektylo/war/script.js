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
	
	
	//piirkonna funktsioon lõpp
		  
		   // facebook login asjad
		   
		   //facebook login asjad lõpp
});