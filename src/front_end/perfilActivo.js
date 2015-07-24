var assetsList = ['ypfd.ba', 'apbr.ba', 'ts.ba', 'teco2.ba', 'fran.ba', 'bma.ba', 'erar.ba', 'alua.ba', 'ggal.ba', 'bpat.ba', 'gcla.ba', 'pesa.ba', 'irsa.ba', 'apsa.ba', 'moli.ba', 'pamp.ba', 'ctio.ba', 'tgsu2.ba', 'bhip.ba', 'cres.ba', 'pata.ba', 'cepu2.ba', 'come.ba', 'edn.ba', 'lede.ba', 'jmin.ba', 'ceco2.ba', 'petr.ba', 'brio.ba', 'sami.ba', 'tef.ba', 'capx.ba', 'rigo.ba', 'invj.ba', 'tgno4.ba', 'esme.ba', 'indu.ba', 'gban.ba', 'bolt.ba', 'cgpa2.ba', 'mirg.ba', 'tran.ba', 'ferr.ba', 'metr.ba', 'celu.ba', 'paty.ba', 'tglt.ba', 'oest.ba', 'cado.ba', 'std.ba', 'grim.ba', 'capu.ba', 'dyca.ba', 'intr.ba', 'rep.ba', 'long.ba', 'auso.ba', 'carc.ba', 'semi.ba', 'rose.ba', 'estr.ba', 'colo.ba', 'psur.ba', 'fipl.ba', 'garo.ba', 'agro.ba', 'poll.ba', 'mori.ba']

var asset;
var asset2;

$.ajax(
	{url: 'http://localhost:8080/assets/1',
	//url : 'http://localhost:8080/assets/' + parameters.asset, // cambiar linea anterior por esta cuando se tenga el GET por ticker en vez de id interno
	dataType: 'json',
	method: 'GET',
	async: false,
	success: function (data) {
			asset = data;
			//eliminar las siguientes  DOS lineas una vez que las variaciones diarias se computen en backend y que se agrugue el valor de assetType
			asset.tradingSessions.sort(function (a, b) {return a.tradingDate < b.tradingDate ? -1 : 1;}); var prevValue = 0; $.each(asset.tradingSessions, function (i, ts) {prevValue != 0 ? ts['change'] = (ts.closingPrice - prevValue) / ts.closingPrice : ts['change'] = 0; prevValue = ts.closingPrice;} )
			asset['assetType'] = 'Accion'
			asset['minValue'] = function(dateFrom, dateTo, valueType) {
				minValue = 0;
				filteredData = this.tradingSessions.filter(function (x) {return x.tradingDate >= dateFrom && x.tradingDate <= dateTo;} );
				for (x in filteredData) {
					valueType == 'close' ? value = filteredData[x].closingPrice : value = filteredData[x].change;
					minValue == 0 || value < minValue ? minValue = value : minValue = minValue;
				};
				return minValue;
			};
			asset['maxValue'] = function(dateFrom, dateTo, valueType) {
				maxValue = 0;
				filteredData = this.tradingSessions.filter(function (x) {return x.tradingDate >= dateFrom && x.tradingDate <= dateTo;} );
				for (x in filteredData) {
					valueType == 'close' ? value = filteredData[x].closingPrice : value = filteredData[x].change;
					maxValue == 0 || value > maxValue ? maxValue = value : maxValue = maxValue;
				};
				return maxValue;
			},
			asset['chartData'] = function (dateFrom, dateTo, asset2) {
				chartDataValue = [];
				filteredData = this.tradingSessions.filter(function (x) {return x.tradingDate >= dateFrom && x.tradingDate <= dateTo;} );
				if (asset2.ticker != 'nan') {filteredData2 = asset2.tradingSessions.filter(function (x) {return x.tradingDate >= dateFrom && x.tradingDate <= dateTo;} );}
				for (x in filteredData) {
					dateValue = filteredData[x].tradingDate;
					if (asset2.ticker == 'nan') {chartDataValue.push({date: dateValue, close: filteredData[x].closingPrice, change: filteredData[x].change});} else {chartDataValue.push({date: dateValue, change: filteredData[x].change, change2: filteredData2[x].change} );};
				};
				return chartDataValue;
			},
			asset['minDate'] = function () {
				minDate = 9999999999999;
				for (x in this.tradingSessions) {
					date = this.tradingSessions[x].tradingDate;
					minDate == 9999999999999 || date < minDate ? minDate = date : minDate = minDate;
				};
				return minDate;
			},
			asset['maxDate'] = function () {
				maxDate = 0;
				for (x in this.tradingSessions) {
					date = this.tradingSessions[x].tradingDate;
					maxDate == 0 || date > maxDate ? maxDate = date : maxDate = maxDate;
				};
				return maxDate;
			},
			asset['htmlHeaderCode'] = function () {
				return 		'<div class="col-lg-5 col-md-6 col-xs-12"> \
								<div class="info-box"> \
									<span class="info-box-icon bg-grey"></span> \
									<div class="info-box-content"> \
										<span class="info-box-number">' + this.description + ' (' + this.ticker + ') </span> \
										<span class="info-box-text">Tipo de activo: ' + this.assetType + ' </span> \
										<span class="info-box-text">Industria: ' + this.industry +' </span> \
									</div> \
								</div> \
							</div>';
			}
		}
	}
);

var setAsset2 = function (ticker) {
	if (ticker == 'nan') {
		asset2 = {ticker: 'nan', htmlHeaderCode: function () {return '';} }
		return;
	};
	$.ajax(
		{url: 'http://localhost:8080/assets/2',
		//url : 'http://localhost:8080/assets/' + ticker, // cambiar linea anterior por esta cuando se tenga el GET por ticker en vez de id interno
		dataType: 'json',
		method: 'GET',
		async: false,
		success: function (data) {
				asset2 = data;
				//eliminar las siguientes  DOS lineas una vez que las variaciones diarias se computen en backend y que se agrugue el valor de assetType
				asset2.tradingSessions.sort(function (a, b) {return a.tradingDate < b.tradingDate ? -1 : 1;}); var prevValue = 0; $.each(asset2.tradingSessions, function (i, ts) {prevValue != 0 ? ts['change'] = (ts.closingPrice - prevValue) / ts.closingPrice : ts['change'] = 0; prevValue = ts.closingPrice;} )
				asset2['assetType'] = 'Accion'
				asset2['htmlHeaderCode'] = function () {
					return 		'<div class="col-lg-5 col-md-6 col-xs-12"> \
									<div class="info-box"> \
										<span class="info-box-icon bg-grey"></span> \
										<div class="info-box-content"> \
											<span class="info-box-number">' + this.description + ' (' + this.ticker + ') </span> \
											<span class="info-box-text">Tipo de activo: ' + this.assetType + ' </span> \
											<span class="info-box-text">Industria: ' + this.industry +' </span> \
										</div> \
									</div> \
								</div>';
				}
			}
		}
	);
};

var loadLines = function(startDate, endDate) {

	$('#line-chart')[0].innerHTML = '';
	data = asset.chartData(startDate, endDate, asset2);
	$('#value-drop-down')[0].value == 'close' ? ykeys = ['close'] :  ykeys = ['change'];
	$('#assets-drop-down')[0].value != 'nan' ? ykeys = ['change', 'change2'] :  ykeys = ykeys;
	$('#assets-drop-down')[0].value != 'nan' ? labels = [parameters.asset, $('#assets-drop-down')[0].value] :  labels = [parameters.asset];
	$('#value-drop-down')[0].value == 'change' ? percentage = ' %' : percentage = '';

	var line = new Morris.Line({
		element: 'line-chart',
		resize: true,
		data: data,
		xkey: 'date',
		ykeys: ykeys,
		labels: labels,
		lineColors:['gray', 'blue'],
		lineWidth: 2,
		fillOpacity: 0.6,
		hideHover: 'auto',
		behaveLikeLine: true,
		resize: true,
		gridTextColor: "#000000",
		gridStrokeWidth: 0.2,
		pointSize: 1,
		pointFillColors: ["#efefef"],
		pointStrokeColors: ["#000000"],
		gridLineColor: "#000000",
		//gridTextFamily: "Open Sans",
		gridTextFamily: "Calibri",
		gridTextSize: 10,
		xLabelFormat: function (x) {
					var xDate = new Date(x);
					return xDate.getDate() + '/' + (xDate.getMonth() + 1) + '/' + xDate.getFullYear();
				},
		ymax: 'auto',
		ymin: asset.minValue(startDate, endDate, $('#value-drop-down')[0].value) - (asset.maxValue(startDate, endDate, $('#value-drop-down')[0].value) / 4),
		yLabelFormat: function (y) {return Math.round(y * 100) / 100 + '' + percentage;},
		//events: $.map(data.filter(function (x) {return x.investment > 0 || x.capitalization > 0; } ), function (x) {return x.date; } ),
		//eventStrokeWidth: 2,
		//eventLineColors: $.map(data.filter(function (x) {return x.investment > 0 || x.capitalization > 0; } ), function (x) {return x.investment > 0 ? '#8B0000' : '#228B22'; } )
	});

};

var addThousondSeparator = function(n, s) {
	str = new String(n);
	nFormatted = '';
	for (i=str.length; i--; i > 0) {
		(str.length - i - 1) % 3 == 0 && str.length - i > 2 ? nFormatted = str[i] + s + nFormatted : nFormatted = str[i] + nFormatted;
	};
	return nFormatted;
};

var reloadLines = function () {

	startDate = new Date($('#date-range').val().split(' - ')[0].split('/')[2], $('#date-range').val().split(' - ')[0].split('/')[1], $('#date-range').val().split(' - ')[0].split('/')[0]).getTime();
	endDate = new Date($('#date-range').val().split(' - ')[1].split('/')[2], $('#date-range').val().split(' - ')[1].split('/')[1], $('#date-range').val().split(' - ')[1].split('/')[0]).getTime();

	$('#value-drop-down')[0].value == 'close' ? $('#assets-drop-down')[0].value = 'nan' : $('#assets-drop-down')[0].value = $('#assets-drop-down')[0].value; 
	setAsset2($('#assets-drop-down')[0].value);
	$('#header-row')[0].innerHTML = asset.htmlHeaderCode() + asset2.htmlHeaderCode();

	loadLines(startDate, endDate);

	$('#line-chart-title')[0].innerHTML = 'Cierres diarios (' + $('#date-range').val() + ')'
};

var stockChange = function () {

	startDate = new Date(asset.minDate() );
	strStartDate = startDate.getDate() + '/' + (startDate.getMonth() + 1) + '/' + startDate.getFullYear();

	endDate = new Date(asset.maxDate() );
	strEndDate = endDate.getDate() + '/' + (endDate.getMonth() + 1) + '/' + endDate.getFullYear();

	$('#date-range').daterangepicker( {
		startDate: strStartDate,
		endDate: strEndDate,
		minDate: strStartDate,
		maxDate: strEndDate
	} );
	$('#date-range').val(strStartDate + ' - ' + strEndDate);

	reloadLines();
};