YUI.add("dataparser-base",function(D){D.namespace("DataParser");var A=D.DataParser,B=D.Lang,C=function(){C.superclass.constructor.apply(this,arguments);};D.mix(C,{NAME:"DataParser.Base",ATTRS:{schema:{value:{}},ERROR_DATAINVALID:{value:"Invalid data"},ERROR_DATANULL:{value:"Null data"}}});D.extend(C,D.Base,{initializer:function(){this.publish("parseEvent",{});},_parse:function(E){},parse:function(E){return this._parse(E);}});A.Base=C;},"@VERSION@",{requires:["base"]});