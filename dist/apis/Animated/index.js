var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _animated=require('animated');var _animated2=_interopRequireDefault(_animated);
var _StyleSheet=require('../StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);
var _Image=require('../../components/Image');var _Image2=_interopRequireDefault(_Image);
var _Text=require('../../components/Text');var _Text2=_interopRequireDefault(_Text);
var _View=require('../../components/View');var _View2=_interopRequireDefault(_View);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

_animated2.default.inject.FlattenStyle(_StyleSheet2.default.flatten);

module.exports=_extends({},_animated2.default,{

Image:_animated2.default.createAnimatedComponent(_Image2.default),
Text:_animated2.default.createAnimatedComponent(_Text2.default),
View:_animated2.default.createAnimatedComponent(_View2.default)});