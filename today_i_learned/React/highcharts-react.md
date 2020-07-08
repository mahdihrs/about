# Today I Learned: How to Implement Highcharts in React

First thing first, we have to install these 2 packages into our React project:

*Using NPM*:

    npm install highcharts highcharts-react-official
*Using Yarn*:

    yarn add highcharts highcharts-react-official

## Implementation in Our Components
1. Import all the dependencies
    
        import React from 'react';
        import Highcharts from 'highcharts';
        import HighchartsReact from 'highcharts-react-official';

2. Setup chart configuration

        const options = {
	    	title: {
	    		text: 'Our very first chart'
	    	},
	    	series: [{
	    		data: [1, 2, 3]
	    	}]
    	}

3.  Create our component



        export default function OurChart() {
	        return (
		        <>
			        <HighchartsReact
						highcharts={Highcharts}
						options={options}
					/>
		        </>
	        )
        }

4. Chart Visualisation
![Line Chart](https://i.imgur.com/F7jxMwY.png)


It will visualize our data in a default Line chart. We can just simply add a property in our chart configuration:

    chart: {
	    type: 'bar'
    }

Then our chart will look like this:
![Bar Chart](https://i.imgur.com/036LpIJ.png)

It's a bit confusing for me when I define a bar-type chart and it showed a horizontal bar, not the vertical one. Then I knew that there is also a type to show our data in a vertical bar with 'column' type. *Voila!* our data would be visualized like this:
![Column Chart](https://i.imgur.com/amBDM0i.png)

## Then here comes the problem

It looked easy if we just need a Line, Bar, and/or Column types of chart. However, we will get an error if we need another types e.g. Heatmap, Boxplot, Scatterplot, and so on. We can not just simply write it like this:

    chart: {
	    type: 'heatmap'
    }

Believe me, you will get an error and it was a time consuming for me to find the root cause of the error. Then I found the solution after I had been trying many solutions in the internet.

We just need to import the modules from highcharts folder. For example, we want to show the heatmap chart. We can write these 2 lines of code to add more dependencies in our component:

    import HighchartsHeatMap from "highcharts/modules/heatmap";
    
    HighchartsHeatMap(Highcharts);

## Then here comes another problem

> Well, we learn something new everyday

I thought the things will get easier when I can solve the heatmap modules problem. But no! There was another problem when I wanted to import the boxplot modules. I can not find any module called 'boxplot'. Then I stumbled upon a forum where they talked about highcharts-more package and I found it has been deprecated.

![highcharts-more](https://i.imgur.com/yyGUdW8.png)

But thankfully, they left a note that we should import the modules from the highcharts folder. So I tried to write as the same as when I used the heatmap chart, but I imported highcharts-more that time. Here's what I wrote in my file:

    import HighchartsBoxPlot from 'highcharts/highcharts-more';
    
    HighchartsBoxPlot(Highcharts);

And the rest of the file remains the same just when we write standard bar chart. 

> I also use the same highcharts-more module when I wanted to use scatterplot chart.

## Daftar Pustaka

 - highcharts-more npm [https://www.npmjs.com/package/highcharts-more](https://www.npmjs.com/package/highcharts-more)
 - Alternate for highcharts-more [https://www.highcharts.com/forum/viewtopic.php?t=40843](https://www.highcharts.com/forum/viewtopic.php?t=40843)
 - highcharts-react-official npm [https://www.npmjs.com/package/highcharts-react-official](https://www.npmjs.com/package/highcharts-react-official)
 - Demo [https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/line-basic](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/line-basic)
