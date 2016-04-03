/**
 * Created by Administrator on 2016/3/29.
 */
var data_china = [
    {"name":"Meat","percentage":9},
    {"name":"Other","percentage":6},
    {"name":"Sugar & Fat","percentage":20},
    {"name":"Grain","percentage":45},
    {"name":"Produce","percentage":11},
    {"name":"Dairy & Eggs","percentage":8}

]

var diet_data = data_china;

$(document).ready(function(){
    $("select").change(function(){
        $.ajax({
            type:"GET",
            url:"diet.php?country="+$("select").val(),
            dataType:"json",
            success:function(data){
                diet_data[0].percentage = data.Meat;
                diet_data[1].percentage = data.Other;
                diet_data[2].percentage = data.Sugar;
                diet_data[3].percentage = data.Grain;
                diet_data[4].percentage = data.Produce;
                diet_data[5].percentage = data.Dairy;
                path = path.data(diet_pie(diet_data));
                path.attr("d",arc);
            },
            error:function(jqXHR){
                alert("对不起，请求失败，请稍后再试。状态码为：" + jqXHR.status);
            }
        })
    })


var w_pie = 230;
var h_pie = 230;

var outerRadius = w_pie/2;
var innerRadius = 50;
var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
var diet_pie = d3.layout.pie()
    .sort(null)
    .value(function(d){
        return d.percentage;
    });

var color = ["#996699","#cccc99","#669999","#6699cc","#ccccff","#cc9999"];

var svg = d3.select("#diet-chart")
    .append("svg")
    .attr("width",w_pie)
    .attr("height",h_pie);

var path = svg.selectAll("path")
    .data(diet_pie(diet_data))
    .enter()
    .append("path")
    .attr("fill", function(d, i) { return color[i]; })
    .attr("transform","translate("+outerRadius + "," + outerRadius + ")")
    .attr("d", arc)
    .on("mouseover",function(d,i){
         //d3.select(this).attr("fill","darkorange")
        d3.select(this).attr("class","opacity");
        var pos = d3.mouse(this);
        pos[0] += 300;
        pos[1] += 100;

        d3.select("#tooltip")
            .style("left",pos[0] + "px")
            .style("top",pos[1] + "px")
            .select("#food-name")
            .text(d.data.name );
        d3.select("#tooltip")
            .select("#food-value")
            .text(d.data.percentage + "%");
        d3.select("#tooltip").classed("hidden",false);  //删除该类

    })
    .on("mouseout",function(d,i){
        //d3.select(this).attr("fill",color[i]);
        d3.select(this).attr("class","normal-opacity");
        d3.select("#tooltip").classed("hidden",true);
    });
})



