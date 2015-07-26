var portfolio;

try {
	if (parameters.portfolio == 'porfolio1') {
		portfolio = {
			ticker: 'porfolio1',
			name: 'Porfolio 1',
			description: 'Descripción del portfolio 1. Más texto.\nMás texto, más......',
			assets: [
						{ticker: 'apbr.ba', quantity: 200},
						{ticker: 'dolar.blue', quantity: 4000},
						{ticker: 'ypfd.ba', quantity: 30}
					]
		};
	} else {
		portfolio = {
			ticker: 'porfolio2',
			name: 'Porfolio 2',
			description: 'Descripción del portfolio 2.\nMás texto.\nMás texto, más......',
			assets: [
						{ticker: 'apbr.ba', quantity: 10},
						{ticker: 'dolar.blue', quantity: 4000},
						{ticker: 'ypfd.ba', quantity: 30}
					]
		};
	};
} catch(err) {
	//do nothing
};

var assetsCatalogue = {}

$.ajax(
	{url : 'http://localhost:8080/assets',
	dataType: 'json',
	method: 'GET',
	async: false,
	xhrFields: {withCredentials: true},
	success: function (data) {
			//borrar linea una vez que se agregue assetType en API
			$.each(data, function (i, a) {a.assetType = 'Accion';} );
			assetsCatalogue['data'] = data;
			assetsCatalogue['assetBox'] = function(asset, action) {
				ast = this.data.filter(function (x) {return x.ticker == asset;})[0];
				if (action == 'add') {
					sign = 'plus-round';
					toolTip = 'Agregar a porfolio';
					onClick = 'addAsset(\'' + ast.ticker + '\', 0);';
				};
				if (action == 'remove') {
					sign = 'minus-round';
					toolTip = 'Quitar de porfolio';
					onClick = 'removeAsset(\'' + ast.ticker + '\');';
				};
				if (action == 'locked') {
					sign = 'locked';
					toolTip = 'Activo en porfolio, no puede quitarse';
					onClick = '';
				};
				if (ast) {
					return '	<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6"> \
									<div class="small-box" id="' + ast.ticker.replace('.', '') + '-box" data-toggle="tooltip" title="' + ast.assetType + ' - ' + ast.ticker + '<br>' + ast.description + '<br>$' + ast.lastTradingPrice + '<br>" data-placement="bottom"> \
										<div class="inner"> \
											<h3>' + ast.ticker + '</h3> \
											<h4> $' + ast.lastTradingPrice + '</h5> \
										</div> \
										<div class="icon"> \
											<i class="ion ion-' + sign + ' ionIconSize" title="' + toolTip + '" data-placement="top" onclick="' + onClick + '"></i> <!--close-round--> \
										</div> \
										<a href="perfilActivo.html?id=' + ast.id + '" class="small-box-footer">Ir a perfil activo <i class="fa fa-arrow-circle-right"></i></a> \
									</div> \
								</div>'
				} else {
					return ''
				}
			},
			assetsCatalogue['boxes'] = function(boxes, action) {
				html = '';
				bxs = this.data.filter(function (x) {return boxes.indexOf(x.ticker) > -1;});
				for (a in bxs) {
					html += this.assetBox(bxs[a].ticker, action);
				};
				return html;
			},
			assetsCatalogue['allBoxes'] = function(action, exclude) {
				exclude = exclude || [];
				return this.boxes($.map(this.data, function (x) {return exclude.indexOf(x.ticker) == - 1 ? x.ticker : undefined;}), action);
			},
			assetsCatalogue['varColor'] = function(asset) {
				ast = this.data.filter(function (x) {return x.ticker == asset;})[0];
				if (ast) {
					vars = $.map(this.data, function (x) {return x.lastTradingPrice;});
					vars.sort(function (a, b) {return a - b;});
					slices = [];
					for (i = 1; i <= 6; i++) {slices.push(Math.round((vars.length / 6) * i))};
					vars.indexOf(ast.lastTradingPrice) <= slices[0] ? color = '#660000' : vars.indexOf(ast.lastTradingPrice) <= slices[1] ? color = '#990000' : vars.indexOf(ast.lastTradingPrice) <= slices[2] ? color = '#994C00' : vars.indexOf(ast.lastTradingPrice) <= slices[3] ? color = '#999900' : vars.indexOf(ast.lastTradingPrice) <= slices[4] ? color = '#4C9900' : color = '#336600';
					return color;
				} else {
					return
				};
			},
			assetsCatalogue['addRemoveAssetFromPortfolio'] = function(asset) {
				ast = this.data.filter(function (x) {return x.ticker == asset;})[0];
				if (ast) {
					ast.inPortfolio = Math.abs(ast.inPortfolio - 1)
				};
				return;
			},
			assetsCatalogue['assetsInPortfolio'] = function() {
				return assetsCatalogue.data.filter(function(x) {return x.inPortfolio == 1;});
			},
			assetsCatalogue['assetValue'] = function(asset) {
				ast = this.data.filter(function (x) {return x.ticker == asset | x.ticker.replace('.', '') == asset;})[0];
				if (ast) {
					return ast.lastTradingPrice;
				} else {
					return 0;
				};
			},
			assetsCatalogue['assetticker'] = function(asset) {
				ast = this.data.filter(function (x) {return x.ticker == asset | x.ticker.replace('.', '') == asset;})[0];
				if (ast) {
					return ast.ticker;
				} else {
					return;
				};
			},
			assetsCatalogue['assetType'] = function(asset) {
				ast = this.data.filter(function (x) {return x.ticker == asset | x.ticker.replace('.', '') == asset;})[0];
				if (ast) {
					return ast.assetType;
				} else {
					return;
				};
			}
		}
	}
);

//Saving functiona
var allowSaving = function() {
	if (!$("#name-textbox")[0].value | $('#assets-in-portfolio-callout').attr('class') == 'callout callout-danger') {
		$("#save-button").attr('class', $("#save-button").attr('class').includes(' disabled') ? $("#save-button").attr('class') : $("#save-button").attr('class') + ' disabled');
	} else {
		$("#save-button").attr('class', $("#save-button").attr('class').includes(' disabled') ? $("#save-button").attr('class').replace(' disabled', '') : $("#save-button").attr('class') );
		$("#save-button").attr('title', 'Click para guardar');
	}
};

//Save modal functions
var savePortfolio = function() {
	if (portfolio) {
		//Ajax to save changes to portfolio
		window.location.href = 'portfolio.html?portfolio=' + portfolio.ticker;
	} else {
		//Ajax to save new portfolio
		window.location.href = 'portfolio.html';
	};
};

var setSaveButtonModalBody = function() {
	replace = new Array();
	!portfolio
		? replace['%OverwriteString%'] = '<br><br>¿Confirma la creación del portfolio <b>%name%</b>?%description%<br><br>Valor total: <b>%invested%</b><br><br>Con la siguiente composición: <br><br>%assetsInPortfolio%'
		: replace['%OverwriteString%'] = '<br><br>¿Confirma las modificaciones sobre el portfolio <b>%origName%</b>?<br><br>Nombre: <b>%name%</b>%description%<br><br>Valor total: <b>%invested%</b>%purchases%%sales%<br><br>Resultando la siguiente composición final: <br><br>%assetsInPortfolio%';

	replace['%origName%'] = portfolio ? portfolio.name : '';
	replace['%name%'] = $('#name-textbox')[0].value;
	replace['%description%'] = $('#description-textbox')[0].value != '' ? '<br><br>' + $('#description-textbox')[0].value : '';
	replace['%invested%'] = $('#invested-label')[0].innerHTML.replace('Invertido: ', '');

	if (portfolio) {
		purchasesStr = '<br><br><b>Compras</b><br>';
		purchasesTotal = 0;
		newPurchasedAssets = $.map(assetsCatalogue.assetsInPortfolio(), function (x) {return x.ticker;}).filter(function (x) {return $.map(portfolio.assets, function (y) {return y.ticker;}).indexOf(x) == -1;});
		purchases = $.map($('[class="sell-buy-qty-label label-buy"'), function (x) {return assetsCatalogue.assetType(x.id.replace('-qty-diff-label', '') ) + ' <b>' + assetsCatalogue.assetticker(x.id.replace('-qty-diff-label', '') ) + '</b>, <b>' + x.innerHTML + '</b> unidades por <b>$' + $('#' + x.id.replace('-qty-diff-label', '-value-diff-label') )[0].innerHTML + '</b><br>';}).concat($.map(newPurchasedAssets, function (x) {return assetsCatalogue.assetType(x) + ' <b>' + x + '</b>, <b>' + $('#' + x.replace('.', '') + '-qty')[0].value + '</b> unidades por <b>$' + $('#' + x.replace('.', '') + '-value')[0].innerHTML + '</b><br>';}) );
		purchaseValues = $.map($('[class="sell-buy-qty-label label-buy"'), function (x) {return Math.round(parseFloat($('#' + x.id.replace('-qty-diff-label', '-value-diff-label') )[0].innerHTML) * 100) / 100;}).concat($.map(newPurchasedAssets, function (x) {return Math.round(parseFloat($('#' + x.replace('.', '') + '-value')[0].innerHTML) * 100) / 100;}));
		for (p in purchases) {
			purchasesStr += purchases[p];
			purchasesTotal += purchaseValues[p];
		};
		purchasesStr == '<br><br><b>Compras</b><br>' ? purchasesStr = '' : purchasesStr = '<font color="#970404">' + purchasesStr + 'Total: <b>' + Math.round(purchasesTotal * 100) / 100 + '</b></font>';
		replace['%purchases%'] = purchasesStr;

		salesStr = '<br><br><b>Ventas</b><br>';
		salesTotal = 0;
		sales = $.map($('[class="sell-buy-qty-label label-sell"'), function (x) {return assetsCatalogue.assetType(x.id.replace('-qty-diff-label', '') ) + ' <b>' + assetsCatalogue.assetticker(x.id.replace('-qty-diff-label', '') ) + '</b>, <b>' + x.innerHTML + '</b> unidades por <b>$' + $('#' + x.id.replace('-qty-diff-label', '-value-diff-label') )[0].innerHTML + '</b><br>';});
		saleValues = $.map($('[class="sell-buy-qty-label label-sell"'), function (x) {return Math.round(parseFloat($('#' + x.id.replace('-qty-diff-label', '-value-diff-label') )[0].innerHTML) * 100) / 100;});
		for (s in sales) {
			salesStr += sales[s];
			salesTotal += saleValues[s];
		};
		salesStr == '<br><br><b>Ventas</b><br>' ? salesStr = '' : salesStr = '<font color="#118707">' + salesStr + 'Total: <b>' + Math.round(salesTotal * 100) / 100 + '</b></font>';
		replace['%sales%'] = salesStr;
	}

	assetsInPortfolioStr = '';
	assetsInPortfolio = $.map($('.value-label') , function (x) {return assetsCatalogue.assetType(x.id.replace('-value', '') ) + ' <b>' + assetsCatalogue.assetticker(x.id.replace('-value', '') ) + '</b>, <b>' + $('#' + x.id.replace('-value', '-qty') )[0].value + '</b> unidades por <b>$' + x.innerHTML + '</b><br>';});
	for (a in assetsInPortfolio) {
		assetsInPortfolioStr += assetsInPortfolio[a];
	};
	replace['%assetsInPortfolio%'] = assetsInPortfolioStr;

	$('#save-button-modal-body')[0].innerHTML = replace['%OverwriteString%']
	for (r in replace) {$('#save-button-modal-body')[0].innerHTML = $('#save-button-modal-body')[0].innerHTML.replace(r, replace[r] );}
};

var clearSaveButtonModalBody = function() {
	$('#save-button-modal-body')[0].innerHTML = '%OverwriteString%'
};

//Dscard functions
var discardPortfolio = function() {
	//Ajax para limpiar los cambios sin guardar en el porfolio
	try {
		portfolioValue = '?portfolio=' + parameters.portfolio;
	} catch(err) {
		portfolioValue = ''
	};
	window.location.href = 'portfolio.html' + portfolioValue;
};

//Asset add/remove functions
var addAsset = function(asset, locked) {
	//Store current quantities for assets to load back after new asset addition
	formIds = $.map($('.qty-form-control'), function (x) {return x.id;});
	formValues = $.map($('.qty-form-control'), function (x) {return x.value;});

	assetsCatalogue.addRemoveAssetFromPortfolio(asset);
	$('#' + asset.replace('.', '') + '-box').parent().remove();
	locked == 1 ? action = 'locked' : action = 'remove';
	locked == 1 ? buySaleLabels = '<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6"> \
											<label id="' + asset.replace('.', '') + '-sell-buy-label" class="label-regular">Sin cambios</label> \
											<label id="' + asset.replace('.', '') + '-qty-diff-label" class="sell-buy-qty-label label-regular"></label> \
											<br><br><label id="' + asset.replace('.', '') + '-diff-label" class="label-regular">Valor: $</label> \
											<label id="' + asset.replace('.', '') + '-value-diff-label" class="sell-buy-value-label label-regular">0</label> \
										</div> \
										<div class="col-lg-8 col-md-6 col-sm-4 col-xs-0"> \
										</div>' : buySaleLabels = '<div class="col-lg-10 col-md-9 col-sm-8 col-xs-6"> \
										</div>';

	$('#assets-added-row')[0].innerHTML += ' \
								<div class="row"> \
									<div class="col-xs-12">' + assetsCatalogue.assetBox(asset, action) + ' \
										<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6"> \
											<div class="inputContainer"> \
												<input id ="' + asset.replace('.', '') + '-qty" class="qty-form-control" name="number" type="number" onchange="updateValue(\'' + asset + '\'); if(this.value < 0) {this.value = 0; $(\'#\' + this.id.replace(\'-qty\', \'-value\') )[0].innerHTML = 0;} else {this.value = this.value;}"/> \
											</div> \
											<br><label>Valor: $</label> \
											<label class="value-label" id="' + asset.replace('.', '') + '-value">0</label> \
										</div>'
										+ buySaleLabels +
									'</div> \
								</div>';
	toolTips();
	colorBoxes();

	//Load back pre-existing assets quantities stored previously in this function
	for (x in formIds) {$('#' + formIds[x])[0].value = formValues[x];}
};

var removeAsset = function(asset) {
	assetsCatalogue.addRemoveAssetFromPortfolio(asset);
	$('#' + asset.replace('.', '') + '-box').parent().parent().parent().remove();
	$('#assets-to-add-row')[0].innerHTML = assetsCatalogue.allBoxes('add', $.map(assetsCatalogue.assetsInPortfolio(), function(x) {return x.ticker;}) );
	toolTips();
	colorBoxes();
	updateInvestedValue();
};

var updateInvestedValue = function() {
	totalInv = 0;
	$('.value-label').each(function() {totalInv += parseFloat(this.innerHTML) >= 0 ? Math.round(parseFloat(this.innerHTML) * 100) / 100 : 0;} );
	$('#invested-label')[0].innerHTML = 'Invertido: $' + Math.round(totalInv * 100) / 100;

	totalInv <= 200000? $('#assets-in-portfolio-callout').attr('class', 'callout callout-success') : $('#assets-in-portfolio-callout').attr('class', 'callout callout-danger');
	allowSaving();
};

var updateValue = function(asset) {
	$('#' + asset.replace('.', '') + '-value')[0].innerHTML = Math.round(parseInt($('#' + asset.replace('.', '') + '-qty')[0].value) * assetsCatalogue.assetValue(asset) * 100) / 100;

	try {
		adjValue = $('#' + asset.replace('.', '') + '-qty')[0].value >= 0 ? $('#' + asset.replace('.', '') + '-qty')[0].value : 0;
		qtyDiff = adjValue - portfolio.assets.filter(function (x) {return x.ticker == asset;})[0].quantity;
		sellBuy = qtyDiff > 0 ? 'buy' : qtyDiff < 0 ? 'sell' : '';
		if (sellBuy == 'buy') {
			$('#' + asset.replace('.', '') + '-sell-buy-label').attr('class', 'label-buy');
			$('#' + asset.replace('.', '') + '-qty-diff-label').attr('class', 'sell-buy-qty-label label-buy');
			$('#' + asset.replace('.', '') + '-diff-label').attr('class', 'label-buy');
			$('#' + asset.replace('.', '') + '-value-diff-label').attr('class', 'sell-buy-value-label label-buy');
			$('#' + asset.replace('.', '') + '-sell-buy-label')[0].innerHTML = 'Comprar ';
		} else {
			if (sellBuy == 'sell') {
				$('#' + asset.replace('.', '') + '-sell-buy-label').attr('class', 'label-sell');
				$('#' + asset.replace('.', '') + '-qty-diff-label').attr('class', 'sell-buy-qty-label label-sell');
				$('#' + asset.replace('.', '') + '-diff-label').attr('class', 'label-sell');
				$('#' + asset.replace('.', '') + '-value-diff-label').attr('class', 'sell-buy-value-label label-sell');
				$('#' + asset.replace('.', '') + '-sell-buy-label')[0].innerHTML = 'Vender ';
			} else {
				$('#' + asset.replace('.', '') + '-sell-buy-label').attr('class', 'label-regular');
				$('#' + asset.replace('.', '') + '-qty-diff-label').attr('class', 'sell-buy-qty-label label-regular');
				$('#' + asset.replace('.', '') + '-diff-label').attr('class', 'label-regular');
				$('#' + asset.replace('.', '') + '-value-diff-label').attr('class', 'sell-buy-value-label label-regular');
				$('#' + asset.replace('.', '') + '-sell-buy-label')[0].innerHTML = 'Sin cambios';
			}
		};
		$('#' + asset.replace('.', '') + '-qty-diff-label')[0].innerHTML = qtyDiff != 0 ? Math.abs(qtyDiff) : '';
		$('#' + asset.replace('.', '') + '-value-diff-label')[0].innerHTML = Math.round(Math.abs(qtyDiff * assetsCatalogue.assetValue(asset) * 100) ) / 100;
	} catch(err) {
		//do nothing
	};

	updateInvestedValue();
};

var toolTips = function() {
	$('.small-box').tooltip({html: true});
	$('.ion').tooltip({html: true});
};

var colorBoxes = function () {
	for (a in assetsCatalogue.data) {$('#' + assetsCatalogue.data[a].ticker.replace('.', '') + '-box').css('background-color', assetsCatalogue.varColor(assetsCatalogue.data[a].ticker) );};
};

var setPage = function() {
	!portfolio ? $('#name-textbox')[0].value = '' : $('#name-textbox')[0].value = portfolio.name;
	!portfolio ? $('#description-textbox')[0].value = '' : $('#description-textbox')[0].value = portfolio.description;
	if (portfolio) {
		for (ass in portfolio.assets) {
			addAsset(portfolio.assets[ass].ticker, 1);
		};
		for (ass in portfolio.assets) {
			$('#' + portfolio.assets[ass].ticker.replace('.', '') + '-qty')[0].value = portfolio.assets[ass].quantity;
			updateValue(portfolio.assets[ass].ticker);
		};
		updateInvestedValue();
	};
	toolTips();
	colorBoxes();

	if (portfolio) {
		$('#buttons-row')[0].innerHTML +=	'<div class="col-md-3 col-xs-4"> \
												<button id="remove-button" class="btn btn-block btn-danger" title="Eliminar porfolio \'' + portfolio.name + '\'" data-toggle="modal" data-target="#removePortfolioModal">Eliminar Portfolio</button><br> \
												<div class="modal fade" id="removePortfolioModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> \
													<div class="modal-dialog" role="document"> \
														<div class="modal-content"> \
															<div class="modal-header"> \
																<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
																<h4 class="modal-title" id="save-button-modal-title-label">Confirmar</h4> \
															</div> \
															<div class="modal-body" id="save-button-modal-body"> \
																¿Confirma que desea eliminar su porfolio "' + portfolio.name + '"? \
															</div> \
															<div class="modal-footer"> \
																<button type="button" class="btn btn-default" data-dismiss="modal">No</button> \
																<button type="button" class="btn btn-primary" onclick="removePortfolio(\'' + portfolio.ticker + '\');" data-dismiss="modal">Sí</button> \
															</div> \
														</div> \
													</div> \
												</div> \
											</div>'
	};
};

var removePortfolio = function(porftolioticker) {
	//Ajax para eliminar porfolio con ticker = portfolio.ticker
	window.location.href = 'portfolio.html';
};

var resetPage = function() {
	discardPortfolio();
	setPage();
};

assetsCatalogue.data.sort(function (a, b) {return b.lastTradingPrice - a.lastTradingPrice;})
$('#assets-to-add-row')[0].innerHTML = assetsCatalogue.allBoxes('add');
setPage();