var wrapper;
  	var data;

  	//Convert day to milliseconds.
  	function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

  	//Initialize objects and setting.
  	function Init()
  	{
  		// Initialize ChartWrapper.
  		// Problem: DataTable can NOT only have first column data. That say gantt chart can NOT be empty when loading...
  		wrapper = new google.visualization.ChartWrapper({
	    chartType: 'Gantt',
	    dataTable: [['Task ID', 'Task Name', 'Start Date','End Date', 'Duration','Percent Complete','Dependencies'],
	                ['Research', 'Find sources', new Date(2019, 0, 1),new Date(2019, 0, 5), daysToMilliseconds(4),  100,  null]],
	    options: {'height': '275'},
	    containerId: 'visualization'
	  	});

  		// Show gantt chart on browser.
   		wrapper.draw(chart_div);
   		// Link the select(click) event.
   		google.visualization.events.addListener(wrapper, 'select', selectHandler);

		data = wrapper.getDataTable();
  	}

  	// Load resource from google chart
    google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(Init);

    // Update the chart.
   	function Test_Draw()
   	{
   		data = wrapper.getDataTable();
   		//console.log(data.toJSON());
   		wrapper.draw(chart_div);
   	}

   	// Add new task
   	function AddTask()
   	{
		data = wrapper.getDataTable();

		//Get all text data.
   		taskName = document.getElementById("taskName").value;
   		startDay = new Date(document.getElementById("startDay").value);
   		endDay = new Date(document.getElementById("endDay").value);
   		duration = document.getElementById("duration").value;
   		percentComplete = +document.getElementById("percentComplete").value;

   		//TODO: Check data table if there any task has same name.

   		data.addRow([taskName, taskName,
         startDay, endDay, daysToMilliseconds(duration), percentComplete, null]);
   		Test_Draw();
   		
   	}
	
	// Trigger a select event.
   	function selectHandler()
   	{
   		var selection = wrapper.getChart().getSelection();
	  	if(selection.length == 0) return;
	   	for(var i=0;i<7;i++)
	   	{
	   		console.log(data.getValue(selection[0].row,i));
	   		console.log(typeof(data.getValue(selection[0].row,i)));
	   	}
   	}