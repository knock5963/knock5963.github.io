function dp(e){$(e.records).each(function(e,A){var a={},_=new Date(c1(A[0],CCNA));a.title=A[2],a.description=A[3],a.etype=A[1]!=4?DET[A[1]]:"",a.place=A[4],a.start=new Date(_.getFullYear(),_.getMonth(),_.getDate(),A[5]==CCNA?null:parseInt(A[5].substr(0,2)),A[5]==CCNA?null:parseInt(A[5].substr(3,2))),a.allDay=A[5]==CCNA,a.className=DEC[A[1]],null!=A[6]&&""!=A[6]&&A[6]!=CCNA&&(a.end=new Date(_.getFullYear(),_.getMonth(),_.getDate(),A[6]==CCNA?null:parseInt(A[6].substr(0,2)),A[6]==CCNA?null:parseInt(A[6].substr(3,2))));$("#calendar").fullCalendar("renderEvent",a,!0)})}$(document).ready(function(){$("#calendar").fullCalendar({header:{left:"prev,next today",center:"title",right:"month,agendaWeek,agendaDay"},monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayNames:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"],dayNamesShort:DW,buttonText:{today:"今日",month:"月",week:"週",day:"日",prev:"前",next:"次"},eventClick:function(e){var c=$.fullCalendar.formatDate(e.start,"HH:mm"),d=$.fullCalendar.formatDate(e.end,"HH:mm"),f=$.fullCalendar.formatDate(e.start,"M / d");$("#evtTitle").text(e.title);$("#evtType").text(e.etype);$("#evtDetail").text(e.description);$("#evtPlace").text(e.place);$("#evtTime").text(f+" ("+DW[e.start.getDay()]+") "+(e.allDay?"all-day":c+" ~ ")+(!d?"":d));$("#showDetail").click()},timeFormat:{agenda:"h:mm{ - h:mm}","":""},editable:!1,droppable:!1,drop:function(e,a){var t,n;return n=$(this).data("eventObject"),t=$.extend({},n),t.start=e,t.allDay=a,t.className=$(this).attr("data-class"),$("#calendar").fullCalendar("renderEvent",t,!0), $("#drop-remove").is(":checked") ? $(this).remove() : void 0},events:[]}),CSV.fetch({url:"data/spevent.csv"}).done(dp)});var CCNA="-",CST_CALENDAR_ETYPE_OFF=0,CST_CALENDAR_ETYPE_REGULAR=1,CST_CALENDAR_ETYPE_SPECIAL=2,CST_CALENDAR_ETYPE_MANAGE=3,CST_CALENDAR_ETYPE_FURIKAE=4,CST_CALENDAR_ETYPE_SOBETSU=5,CST_CALENDAR_ETYPE_PUREZEN=6,DEC=["label label-warning","label label-default","label label-success","label label-info","label label-warning","label label-success","label label-success"],DET=["オフ","レギュラーイベント","スペシャルイベント","管理事項","振替","送別会","プレゼンテーション"];