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
	
	
	//sdada
	$('.logiSisse').click(function()
	
	{
		
		var un = document.logiForm.username.value;
		var pw = document.logiForm.pword.value;
		var valid = false;
		
		var unArray=["Kasutaja"];
		var pwArray=["Parool"];
		
		for(var i=0;i<unArray.length; i++) {
			if((un==unArray[i]) && (pw==pwArray[i])){
				valid = true;
				break;
			}
		}
		if(valid) {
			$('div.andmedContent').show();
			$('div.logiAndmed').hide();
			$('.logiV2lja').show();
			return false;
		}
		else {
			alert("Vale parool ja/v�i kasutajanimi");
		}
		
	});
	
	$('.logiV2lja').click(function()
	{
		$('div.andmedContent').hide();
		$('div.logiAndmed').show();
		$('.logiV2lja').hide();
		document.logiForm.username.value="";
		document.logiForm.pword.value="";
	});
	
	
	//sdasda
	
	
	
	
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
		   
		   //kandidaadid lehe funk
		   
		   
				$('#cont')
					.TidyTable({
						enableCheckbox : false,
						enableMenu     : false
					},
					{
						columnTitles : ['Id','Nimi','Erakond','Piirkond','H22led','Anna'],
						columnValues : [
							['1','E.Savi','Keskerakond','Tartu Linn','352'],
							['2','N.Eeger','Reform','Haabersti,Kristiine,P�hja-Tallinn','235235'],
							['3','J.uut','Gaasi','P�rnu','35463'],
							['4','V.alge','Isamaa','Harju,Rapla','4632'],
							['5','P.ott','Emamaa','Ida-Viru','5753']
						],
						 menuOptions : [
							['- Action -', null],
							['Callback 1', { callback : doSomething1 }],
							['Callback 2', { callback : doSomething2 }]
						]
					}, doSomething3); 
			

			
			  function doSomething1(rows) {
				alert('callback1(rows=' + rows.length + "')");
			}

			function doSomething2(rows) {
				alert('callback2(rows=' + rows.length + "')");
			}

			function doSomething3(name, value) {
				alert("callback(name='" + name + "', value='" + value + "')");
			} 
		   
		   //kandidaadid lehe funk l�pp
			// kandidaadid script algus
			
			var options= {
					matchingRow: function(state, tr, textTokens) {
						if(!state || !state.id) {
							return true;
						}
						var child = tr.children('td:eq(2)');
						if(!child) return true;
						var val = child.text();
						switch(state.id) {
						default:
							return true;
						}
					}
			};
			$('#kandidaadidTabel').tableFilter(options);
			
			// kandidaadid script l�pp
			$('#chart_div')
			  src="https://www.google.com/jsapi"
		      google.load("visualization", "1", {packages:["corechart"]});
		      google.setOnLoadCallback(drawChart);
		       
		      function drawChart() {
		        var data = google.visualization.arrayToDataTable([
		          ['Erakond', 'H��lte arv'],
		          ['IRL', 19022],
		          ['Keskerakond', 24414],
		          ['Reformierakond', 18327]
		          
		        ]);

		        var options = {
		          title: 'H��lte jagunemine erakondlikult'
		        };

		        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
		        chart.draw(data, options);     
		      }

});