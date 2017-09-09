//specifyimg the margin, width and height for each plot
var margin = 75,
    width = 750 - margin,
    height = 600 - margin;

//title for the whole document

d3.select("body")
  .append("br")

d3.select("body")
  .append("br")


d3.select("body")
  .append("div")
  .attr("class","grp1")

//adding an svg to 1st plot
var svg1 = dimple.newSvg("#plot1",width,height);
   d3.select("g")
  .attr("class","col sm12 m12 l12");
//plotting the line & scatter plot
d3.csv("data/placed.csv",
        function(data)
        {
            var myChart = new dimple.chart(svg1, data);
            var x=myChart.addCategoryAxis("x", "Year");
            x.addOrderRule(['2013','2014','2015','2016','2017']);
            x.title="Academic Year";
            var y=myChart.addMeasureAxis("y", "Offers");
            y.title="Number of Offers";
            //y.overrideMax = 100;  
            myChart.addSeries(null,dimple.plot.line);
            myChart.addSeries(null,dimple.plot.scatter);
            //myChart.addSeries(["Survival Count","Death Count"],dimple.plot.scatter);
            svg1.append("text")
                .attr("x", myChart._xPixels() + myChart._widthPixels() / 2)
                .attr("y", myChart._yPixels() - 20)
                .style("text-anchor", "middle")
                .style("font-family", "sans-serif")
                .style("font-weight", "bold")
                .text("Placement trend at RNSIT over years");
            myChart.draw(4000);

        });
         