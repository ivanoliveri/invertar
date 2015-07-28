var replaceAll = function(str, replaceThis, replaceFor) {
	while (str.includes(replaceThis) ) {
		str = str.replace(replaceThis, replaceFor)
	};
	return str
};

try {
	paramsList = $.map(replaceAll(replaceAll(location.search, '%20', ' '), '+', ' ').split('&'), function(x) {return replaceAll(x.split('=')[0], '?', '') + '||' + replaceAll(replaceAll(x.split('=')[1], '%3D', '='), '%26', '&');})
	var parameters = {}
	$.each(paramsList, function (i, v) {parameters[v.split('||')[0]] = v.split('||')[1];});
} catch(err) {
	// do nothing
};