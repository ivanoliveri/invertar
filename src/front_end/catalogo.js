var assetsCatalogue

$.ajax(
	{url : 'http://localhost:8080/assets',
	dataType: 'json',
	method: 'GET',
	async: false,
	xhrFields: {withCredentials: true},
	success: function (data) {
			//borrar linea una vez que se agregue assetType en API
			$.each(data, function (i, a) {a.assetType = 'Accion';} );
			assetsCatalogue = {
				data: data,
				loadTable: function (assetType) {
					$(".box-body")[0].innerHTML = this.html(assetType);
				},
				html: function (assetType) {
					var filterBySearch
					try {
						filterBySearch = parameters.search
					} catch(err) {/*do nothing*/};

					if (!filterBySearch) {
						htmlData = this.data.filter(function (x) {return x.assetType == assetType;})
					} else {
						htmlData = this.data.filter(function (x) {return x.assetType == assetType & (x.ticker.toUpperCase().includes(parameters.search.toUpperCase()) || x.description.toUpperCase().includes(parameters.search.toUpperCase()) || x.industry.toUpperCase().includes(parameters.search.toUpperCase()) || x.currency.toUpperCase().includes(parameters.search.toUpperCase() ) );} );
					};

					var stringHTML
					stringHTML = '	<table id="assetsCatalogue" class="table table-bordered table-striped"> \
										<thead> \
											<tr> \
												<th>Ticker</th> \
												<th>Descripcion</th> \
												<th>Industria</th> \
												<th>Valor</th> \
												<th>Moneda</th> \
											</tr> \
										</thead> \
										</tbody> ';

					for (stockData in htmlData) {
						element = htmlData[stockData]
						stringHTML += '<tr> \
											<td> <a href="perfilActivo.html?id=' + element.id + '">' + element.ticker.toUpperCase() + '</a></td> \
											<td>' + element.description + '</td> \
											<td>' + element.industry + '</td> \
											<td>' + element.lastTradingPrice + '</td> \
											<td>' + element.currency + '</td> \
										</tr>'
					};
										
					stringHTML += '</tbody> \
									<tfoot> \
										<tr> \
											<th>Ticker</th> \
											<th>Descripcion</th> \
											<th>Industria</th> \
											<th>Valor</th> \
											<th>Moneda</th> \
										</tr> \
									</tfoot> \
								</table>';
					
					return stringHTML
				}
			}
		}
	}
);

var loadMarquee = function(){
	var marqueeHTML;
	$.ajax(
		{url : 'http://localhost:8080/assets',
		dataType: 'json',
		method: 'GET',
		xhrFields: {withCredentials: true},
		success: function (data){
					$.each(data,function(){marqueeHTML+='<b>'+this.ticker+'</b> $' + this.lastTradingPrice +' &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'});
				}
	});
	$('#marquee').innerHTML +=marqueeHTML;
};

var loadTable = function (assetType) {
	assetsCatalogue.loadTable(assetType)
	$("#assetsCatalogue").dataTable();
};

try {
	$('#search-string-row')[0].innerHTML = $('#search-string-row')[0].innerHTML.replace('%searchedValue%', parameters.search);
	if (assetsCatalogue.data.filter(function (x) {return x.assetType == 'Accion' & (x.ticker.toUpperCase().includes(parameters.search.toUpperCase()) || x.description.toUpperCase().includes(parameters.search.toUpperCase()) || x.industry.toUpperCase().includes(parameters.search.toUpperCase()) || x.currency.toUpperCase().includes(parameters.search.toUpperCase() ) );} ).length > 0) {
		parameters.search == '' ? $('#search-string-row')[0].innerHTML = '' : $('#search-string-row')[0].innerHTML = $('#search-string-row')[0].innerHTML;
		loadTable('Accion');
	} else {
		if (assetsCatalogue.data.filter(function (x) {return x.assetType == 'Bono' & (x.ticker.toUpperCase().includes(parameters.search.toUpperCase()) || x.description.toUpperCase().includes(parameters.search.toUpperCase()) || x.industry.toUpperCase().includes(parameters.search.toUpperCase()) || x.currency.toUpperCase().includes(parameters.search.toUpperCase() ) );} ).length > 0) {
			parameters.search == '' ? $('#search-string-row')[0].innerHTML = '' : $('#search-string-row')[0].innerHTML = $('#search-string-row')[0].innerHTML;
			loadTable('Bono');
			$('#asset-type-combobox')[0].value = 'Bono';
		} else {
			$('#search-string-row')[0].innerHTML = $('#search-string-row')[0].innerHTML.replace('Resúltados de la búsqueda: ' + parameters.search, 'Sin resultados para la búsqueda de: ' + parameters.search);
			loadTable('Accion');
		}
	};
	$('#search-textbox')[0].value = parameters.search;
} catch(err) {
	$('#search-string-row')[0].innerHTML = '';
	$('#search-textbox')[0].value = '';
	loadTable('Accion');
};