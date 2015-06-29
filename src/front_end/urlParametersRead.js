paramsList = $.map(location.search.replace('%20', ' ').replace('+', ' ').replace('?', '').split('&'), function(x) {return x.split('=')[0] + ": '" + x.split('=')[1] + "'";})
paramsStrToEval = 'var parameters = {'; for (x in paramsList) {x == 0 ? paramsStrToEval = paramsStrToEval + paramsList[0] : paramsStrToEval = paramsStrToEval + ', ' + paramsList[x];}; paramsStrToEval = paramsStrToEval + '};';
try {
	eval (paramsStrToEval);
} catch(err) {/*do nothing*/};