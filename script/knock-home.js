function dpr(e){if(0<e.records.length){var t=e.records[0];$("#weather_date").text(c2(t[0]," / ",!0));$("#weather-icon").attr("data-skycons",t[1]);$("#weather_temp_high").text(t[2]);$("#weather_temp_low").text(t[3]);$(".skycons-element").each(function(){var e,a,t;return a=new Skycons({color:"white"}),e=$(this).attr("id"),t=$(this).data("skycons"),a.add(e,Skycons[t]),a.play()});}}function dps(e){for(var t=null,a=null,n=new Date,s=e.records.length-1;0<=s&&!((a=new Date(c1(e.records[s][0],"-"))).getTime()<n.getTime());s--)t=e.records[s];a=new Date(c1(t[0],"-"));null==t?($("#spevent_title").text("（ありません）"),$("#spevent_detail").text(""),$("#spevent_place").parent().hide(),$("#spevent_time").parent().hide()):($("#spevent_title").text(t[2]),$("#spevent_detail").text(t[3]),$("#spevent_place").text(t[4]),$("#spevent_time").text(c2(t[0]," / ",!0)+" ("+DW[a.getDay()]+") "+("-"==t[5]?"-"==t[6]?"all-day":"？ ~ ":t[5]+" ~ ")+("-"==t[6]?"":t[6])))}function dpn(e){for(var t=[],a=[],n=e.records.length-10;n<e.records.length;n++){var s=e.records[n],c=c1(s[0],"/");t.push(c),a.push(s[1])}var i=echarts.init(document.getElementById("chart_last10"),"macarons"),o={title:{text:""},legend:{}, xAxis:{}, yAxis:{},series:[]};o.legend.data=["人数"],o. xAxis.data=t,o.series.push({name:"人数",type:"bar",data:a}),i.setOption(o)}$(document).ready(function(){CSV.fetch({url:"data/nrevent.csv"}).done(dpr);CSV.fetch({url:"data/spevent.csv"}).done(dps);CSV.fetch({url:"data/ninzu.csv"}).done(dpn)});var DW=["日","月","火","水","木","金","土"];