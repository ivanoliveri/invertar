var portfolio;

try {
	if (parameters.portfolio == 'porfolio1') {
		portfolio = {
			code: 'porfolio1',
			name: 'Porfolio 1',
			description: 'Descripción del portfolio 1. Más texto.\nMás texto, más......',
			assets: [
						{code: 'apbr.ba', quantity: 200},
						{code: 'dolar.blue', quantity: 4000},
						{code: 'ypfd.ba', quantity: 30}
					]
		};
	} else {
		portfolio = {
			code: 'porfolio2',
			name: 'Porfolio 2',
			description: 'Descripción del portfolio 2.\nMás texto.\nMás texto, más......',
			assets: [
						{code: 'apbr.ba', quantity: 10},
						{code: 'dolar.blue', quantity: 4000},
						{code: 'ypfd.ba', quantity: 30}
					]
		};
	};
} catch(err) {
	//do nothing
};

var assetsCatalogue = {
	data: [
		{assetType: 'Móneda Extranjera', code: 'dolar.blue', name: 'Dólar Blue', industry: '', subIndustry: '', value: 13.15, trend: 'Sin cambio', variation: 9, inPortfolio: 0},
		{assetType: 'Acción', code: 'ypfd.ba', name: 'YPF S.A.', industry: 'Energía', subIndustry: 'Petróleo', value: 112.75, trend: 'Sin cambio', variation: -21, inPortfolio: 0},
		{assetType: 'Acción', code: 'apbr.ba', name: 'Petróleo Brasileiro S.A', industry: 'Energía', subIndustry: 'Petróleo', value: 299.3, trend: 'En baja', variation: -18, inPortfolio: 0},
		{assetType: 'Acción', code: 'ts.ba', name: 'Tenaris S.A.', industry: 'Materiales', subIndustry: 'Metalúrgica', value: 170.62, trend: 'En baja', variation: 2, inPortfolio: 0},
		{assetType: 'Acción', code: 'teco2.ba', name: 'Telecom Argentina S.A.', industry: 'Comunicaciones', subIndustry: 'Telecomunicaciones', value: 234.4, trend: 'En baja', variation: 3, inPortfolio: 0},
		{assetType: 'Acción', code: 'fran.ba', name: 'BBVA Banco Francés S.A.', industry: 'Financiera', subIndustry: 'Bancos', value: 184.94, trend: 'En alza', variation: -11, inPortfolio: 0},
		{assetType: 'Acción', code: 'bma.ba', name: 'Banco Macro S.A.', industry: 'Financiera', subIndustry: 'Bancos', value: 174.86, trend: 'En alza', variation: 3, inPortfolio: 0},
		{assetType: 'Acción', code: 'erar.ba', name: 'Ternium Siderar ', industry: 'Materiales', subIndustry: 'Metalúrgica', value: 261.52, trend: 'En baja', variation: -8, inPortfolio: 0},
		{assetType: 'Acción', code: 'alua.ba', name: 'Aluar Aluminio Argentino S.A.I.C. ', industry: 'Materiales', subIndustry: 'Metalúrgica', value: 117.07, trend: 'En alza', variation: 9, inPortfolio: 0},
		{assetType: 'Acción', code: 'ggal.ba', name: 'Grupo Financiero Galicia S.A.', industry: 'Financiera', subIndustry: 'Ni idea', value: 7.11, trend: 'En baja', variation: 7, inPortfolio: 0},
		{assetType: 'Acción', code: 'bpat.ba', name: 'Banco Patagonia S.A. ', industry: 'Financiera', subIndustry: 'Bancos', value: 106.32, trend: 'En alza', variation: -5, inPortfolio: 0},
		{assetType: 'Acción', code: 'gcla.ba', name: 'Grupo Clarín S.A.', industry: 'Comunicaciones', subIndustry: 'Medios', value: 262.48, trend: 'En baja', variation: 25, inPortfolio: 0},
		{assetType: 'Acción', code: 'pesa.ba', name: 'Petrobras Argentina SA ', industry: 'Energía', subIndustry: 'Petróleo', value: 298.6, trend: 'En baja', variation: -2, inPortfolio: 0},
		{assetType: 'Acción', code: 'irsa.ba', name: 'IRSA Investments and Representations Inc.', industry: 'Financiera', subIndustry: 'Ni idea', value: 76.32, trend: 'En baja', variation: 1, inPortfolio: 0},
		{assetType: 'Acción', code: 'apsa.ba', name: 'IRSA Propiedades Comerciales S.A.', industry: 'Financiera', subIndustry: 'Ni idea', value: 58.53, trend: 'En baja', variation: -21, inPortfolio: 0},
		{assetType: 'Acción', code: 'moli.ba', name: 'Molinos Rio de la Plata S.A.', industry: 'Alimentos', subIndustry: 'Alimentos', value: 151.41, trend: 'En baja', variation: 16, inPortfolio: 0},
		{assetType: 'Acción', code: 'pamp.ba', name: 'Pampa Energia SA', industry: 'Energía', subIndustry: 'Ni idea', value: 295.4, trend: 'En baja', variation: 1, inPortfolio: 0},
		{assetType: 'Acción', code: 'ctio.ba', name: 'Consultatio S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 122.57, trend: 'En alza', variation: 12, inPortfolio: 0},
		{assetType: 'Acción', code: 'tgsu2.ba', name: 'Transportadora de Gas Del Sur S.A.', industry: 'Energía', subIndustry: 'Transporte / Logística', value: 272.73, trend: 'En baja', variation: 0, inPortfolio: 0},
		{assetType: 'Acción', code: 'bhip.ba', name: 'Banco Hipotecario S.A. ', industry: 'Financiera', subIndustry: 'Bancos', value: 135.8, trend: 'En alza', variation: -19, inPortfolio: 0},
		{assetType: 'Acción', code: 'cres.ba', name: 'Cresud Sociedad Anónima Comercial, Inmobiliaria, Financiera y Agropecuaria', industry: 'Ni idea', subIndustry: 'Ni idea', value: 143.49, trend: 'En alza', variation: 10, inPortfolio: 0},
		{assetType: 'Acción', code: 'pata.ba', name: 'Sociedad Anonima Importadora y Exportadora de la Patagonia', industry: 'Comercio exterior', subIndustry: 'Importaciones / Exportaciones', value: 266.66, trend: 'En baja', variation: 16, inPortfolio: 0},
		{assetType: 'Acción', code: 'cepu2.ba', name: 'Central Puerto S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 240.74, trend: 'En alza', variation: -14, inPortfolio: 0},
		{assetType: 'Acción', code: 'come.ba', name: 'Sociedad Comercial del Plata S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 241.02, trend: 'En baja', variation: 10, inPortfolio: 0},
		{assetType: 'Acción', code: 'edn.ba', name: 'EMP.DIST.Y COM.NORTE', industry: 'Energía', subIndustry: 'Infraestructura', value: 247.31, trend: 'En alza', variation: 23, inPortfolio: 0},
		{assetType: 'Acción', code: 'lede.ba', name: 'Ledesma Sociedad Anónima Agrícola Industrial', industry: 'Alimentos', subIndustry: 'Agropecuaria', value: 224.78, trend: 'En baja', variation: 13, inPortfolio: 0},
		{assetType: 'Acción', code: 'jmin.ba', name: 'Holcim (Argentina) SA', industry: 'Ni idea', subIndustry: 'Ni idea', value: 65.82, trend: 'En baja', variation: 5, inPortfolio: 0},
		{assetType: 'Acción', code: 'ceco2.ba', name: 'Endesa Costanera SA', industry: 'Energía', subIndustry: 'Infraestructura', value: 96.89, trend: 'En alza', variation: -11, inPortfolio: 0},
		{assetType: 'Acción', code: 'petr.ba', name: 'Petrolera Pampa S.A.', industry: 'Energía', subIndustry: 'Petróleo', value: 253.16, trend: 'En baja', variation: -19, inPortfolio: 0},
		{assetType: 'Acción', code: 'brio.ba', name: 'Banco Santander Rio S.A.', industry: 'Financiera', subIndustry: 'Bancos', value: 215.45, trend: 'En alza', variation: 21, inPortfolio: 0},
		{assetType: 'Acción', code: 'sami.ba', name: 'S.A. San Miguel A.G.I.C.I. y F. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 5.44, trend: 'En baja', variation: 16, inPortfolio: 0},
		{assetType: 'Acción', code: 'tef.ba', name: 'Telefónica, S.A. ', industry: 'Comunicaciones', subIndustry: 'Telecomunicaciones', value: 65.63, trend: 'En baja', variation: -13, inPortfolio: 0},
		{assetType: 'Acción', code: 'capx.ba', name: 'Capex S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 99.55, trend: 'En alza', variation: 18, inPortfolio: 0},
		{assetType: 'Acción', code: 'rigo.ba', name: 'Rigolleau S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 150.78, trend: 'En baja', variation: -8, inPortfolio: 0},
		{assetType: 'Acción', code: 'invj.ba', name: 'Inversora Juramento S.A.', industry: 'Financiera', subIndustry: 'Ni idea', value: 90.27, trend: 'En baja', variation: 6, inPortfolio: 0},
		{assetType: 'Acción', code: 'tgno4.ba', name: 'Transportadora de Gas del Norte S.A.', industry: 'Energía', subIndustry: 'Transporte / Logística', value: 265.02, trend: 'En baja', variation: -12, inPortfolio: 0},
		{assetType: 'Acción', code: 'esme.ba', name: 'Bodegas Esmeralda S.A.', industry: 'Alimentos', subIndustry: 'Bodega', value: 31.29, trend: 'En alza', variation: -2, inPortfolio: 0},
		{assetType: 'Acción', code: 'indu.ba', name: 'Solvay Indupa S.A.I.C. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 192, trend: 'En baja', variation: -7, inPortfolio: 0},
		{assetType: 'Acción', code: 'gban.ba', name: 'Gas Natural Ban, S.A.', industry: 'Energía', subIndustry: 'Gas', value: 293.57, trend: 'En baja', variation: -1, inPortfolio: 0},
		{assetType: 'Acción', code: 'bolt.ba', name: 'Boldt S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 62.47, trend: 'En alza', variation: 6, inPortfolio: 0},
		{assetType: 'Acción', code: 'cgpa2.ba', name: 'Camuzzi Gas Pampeana S.A.', industry: 'Energía', subIndustry: 'Gas', value: 69.37, trend: 'En alza', variation: -10, inPortfolio: 0},
		{assetType: 'Acción', code: 'mirg.ba', name: 'Mirgor S.A.C.I.F.I.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 18.4, trend: 'En baja', variation: 16, inPortfolio: 0},
		{assetType: 'Acción', code: 'tran.ba', name: 'Compania de Transporte de Energia Electrica en Alta Tension Transener', industry: 'Energía', subIndustry: 'Infraestructura', value: 283.36, trend: 'En alza', variation: -8, inPortfolio: 0},
		{assetType: 'Acción', code: 'ferr.ba', name: 'Ferrum Sociedad Anonima de Ceramica y Metalurgia', industry: 'Materiales', subIndustry: 'Metalúrgica', value: 150.01, trend: 'En alza', variation: -16, inPortfolio: 0},
		{assetType: 'Acción', code: 'metr.ba', name: 'MetroGAS S.A.', industry: 'Energía', subIndustry: 'Gas', value: 264.73, trend: 'En baja', variation: 12, inPortfolio: 0},
		{assetType: 'Acción', code: 'celu.ba', name: 'Celulosa Argentina S.A.', industry: 'Química', subIndustry: 'Celulosa', value: 241.59, trend: 'En alza', variation: -1, inPortfolio: 0},
		{assetType: 'Acción', code: 'paty.ba', name: 'Quickfood Sociedad Anonima ', industry: 'Alimentos', subIndustry: 'Alimentos', value: 289.11, trend: 'En baja', variation: 4, inPortfolio: 0},
		{assetType: 'Acción', code: 'tglt.ba', name: 'TGLT S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 32.2, trend: 'En baja', variation: 16, inPortfolio: 0},
		{assetType: 'Acción', code: 'oest.ba', name: 'Grupo Concesionario del Oeste S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 60.69, trend: 'En baja', variation: 21, inPortfolio: 0},
		{assetType: 'Acción', code: 'cado.ba', name: 'Carlos Casado S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 175.25, trend: 'En alza', variation: 12, inPortfolio: 0},
		{assetType: 'Acción', code: 'std.ba', name: 'Banco Santander, S.A. ', industry: 'Financiera', subIndustry: 'Bancos', value: 102.95, trend: 'En alza', variation: 11, inPortfolio: 0},
		{assetType: 'Acción', code: 'grim.ba', name: 'Grimoldi S.A. ', industry: 'Indumentaria', subIndustry: 'Indumentaria', value: 300.94, trend: 'En baja', variation: -9, inPortfolio: 0},
		{assetType: 'Acción', code: 'capu.ba', name: 'Caputo S.A.I.C. y F.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 105.89, trend: 'En alza', variation: -3, inPortfolio: 0},
		{assetType: 'Acción', code: 'dyca.ba', name: 'Dycasa SA', industry: 'Ni idea', subIndustry: 'Ni idea', value: 255.45, trend: 'En alza', variation: 9, inPortfolio: 0},
		{assetType: 'Acción', code: 'intr.ba', name: 'Compania Introductora de Buenos Aires Sociedad Anonima ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 36, trend: 'En alza', variation: -18, inPortfolio: 0},
		{assetType: 'Acción', code: 'rep.ba', name: 'Repsol, S.A.', industry: 'Energía', subIndustry: 'Petróleo', value: 153.58, trend: 'En baja', variation: 17, inPortfolio: 0},
		{assetType: 'Acción', code: 'long.ba', name: 'Longvie S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 62.41, trend: 'En baja', variation: 13, inPortfolio: 0},
		{assetType: 'Acción', code: 'auso.ba', name: 'Autopistas Del Sol SA ', industry: 'Transporte / Logística', subIndustry: 'Infraestructura', value: 89.01, trend: 'En alza', variation: -16, inPortfolio: 0},
		{assetType: 'Acción', code: 'carc.ba', name: 'Carboclor S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 227.31, trend: 'En alza', variation: 24, inPortfolio: 0},
		{assetType: 'Acción', code: 'semi.ba', name: 'Molinos Juan Semino S.A.', industry: 'Alimentos', subIndustry: 'Alimentos', value: 96.19, trend: 'En baja', variation: 7, inPortfolio: 0},
		{assetType: 'Acción', code: 'rose.ba', name: 'Instituto Rosenbusch S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 245.18, trend: 'En baja', variation: -1, inPortfolio: 0},
		{assetType: 'Acción', code: 'estr.ba', name: 'Angel Estrada y Compania S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 219, trend: 'En alza', variation: -19, inPortfolio: 0},
		{assetType: 'Acción', code: 'colo.ba', name: 'Colorin Industria de Materiales Sinteticos S.A.', industry: 'Materiales', subIndustry: 'Sintéticos', value: 136.99, trend: 'En alza', variation: 22, inPortfolio: 0},
		{assetType: 'Acción', code: 'psur.ba', name: 'Petrolera del Conosur S.A. ', industry: 'Energía', subIndustry: 'Petróleo', value: 116.26, trend: 'En baja', variation: -6, inPortfolio: 0},
		{assetType: 'Acción', code: 'fipl.ba', name: 'Fiplasto S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 22.49, trend: 'En alza', variation: 3, inPortfolio: 0},
		{assetType: 'Acción', code: 'garo.ba', name: 'Garovaglio y Zorraquin S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 89.37, trend: 'En baja', variation: -7, inPortfolio: 0},
		{assetType: 'Acción', code: 'agro.ba', name: 'Agrometal S.A.I. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 253.26, trend: 'En alza', variation: 15, inPortfolio: 0},
		{assetType: 'Acción', code: 'poll.ba', name: 'Polledo S.A.I.C. y F.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 72.59, trend: 'En baja', variation: 17, inPortfolio: 0},
		{assetType: 'Acción', code: 'mori.ba', name: 'Morixe Hermanos S.A.C. e I.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 103.95, trend: 'En baja', variation: 20, inPortfolio: 0}
	],
	assetBox: function(asset, action) {
		ast = this.data.filter(function (x) {return x.code == asset;})[0];
		if (action == 'add') {
			sign = 'plus-round';
			toolTip = 'Agregar a porfolio';
			onClick = 'addAsset(\'' + ast.code + '\', 0);';
		};
		if (action == 'remove') {
			sign = 'minus-round';
			toolTip = 'Quitar de porfolio';
			onClick = 'removeAsset(\'' + ast.code + '\');';
		};
		if (action == 'locked') {
			sign = 'locked';
			toolTip = 'Activo en porfolio, no puede quitarse';
			onClick = '';
		};
		if (ast) {
			return '	<div class="col-lg-2 col-md-3 col-sm-4 col-xs-6"> \
							<div class="small-box" id="' + ast.code.replace('.', '') + '-box" data-toggle="tooltip" title="' + ast.assetType + ' - ' + ast.code + '<br>' + ast.name + '<br>$' + ast.value + ' - ' + ast.trend + '<br>" data-placement="bottom"> \
								<div class="inner"> \
									<h3>' + ast.code + '</h3> \
									<h4> $' + ast.value + '</h5> \
									<p>' + ast.variation + '%</p> \
								</div> \
								<div class="icon"> \
									<i class="ion ion-' + sign + ' ionIconSize" title="' + toolTip + '" data-placement="top" onclick="' + onClick + '"></i> <!--close-round--> \
								</div> \
								<a href="perfilActivo.html?asset=' + ast.code + '" class="small-box-footer">Ir a perfil activo <i class="fa fa-arrow-circle-right"></i></a> \
							</div> \
						</div>'
		} else {
			return ''
		}
	},
	boxes: function(boxes, action) {
		html = '';
		bxs = this.data.filter(function (x) {return boxes.indexOf(x.code) > -1;});
		for (a in bxs) {
			html += this.assetBox(bxs[a].code, action);
		};
		return html;
	},
	allBoxes: function(action, exclude) {
		exclude = exclude || [];
		return this.boxes($.map(this.data, function (x) {return exclude.indexOf(x.code) == - 1 ? x.code : undefined;}), action);
	},
	varColor: function(asset) {
		ast = this.data.filter(function (x) {return x.code == asset;})[0];
		if (ast) {
			vars = $.map(this.data, function (x) {return x.variation;});
			vars.sort(function (a, b) {return a - b;});
			slices = [];
			for (i = 1; i <= 6; i++) {slices.push(Math.round((vars.length / 6) * i))};
			vars.indexOf(ast.variation) <= slices[0] ? color = '#660000' : vars.indexOf(ast.variation) <= slices[1] ? color = '#990000' : vars.indexOf(ast.variation) <= slices[2] ? color = '#994C00' : vars.indexOf(ast.variation) <= slices[3] ? color = '#999900' : vars.indexOf(ast.variation) <= slices[4] ? color = '#4C9900' : color = '#336600';
			return color;
		} else {
			return
		};
	},
	addRemoveAssetFromPortfolio: function(asset) {
		ast = this.data.filter(function (x) {return x.code == asset;})[0];
		if (ast) {
			ast.inPortfolio = Math.abs(ast.inPortfolio - 1)
		};
		return;
	},
	assetsInPortfolio: function() {
		return assetsCatalogue.data.filter(function(x) {return x.inPortfolio == 1;});
	},
	assetValue: function(asset) {
		ast = this.data.filter(function (x) {return x.code == asset | x.code.replace('.', '') == asset;})[0];
		if (ast) {
			return ast.value;
		} else {
			return 0;
		};
	},
	assetCode: function(asset) {
		ast = this.data.filter(function (x) {return x.code == asset | x.code.replace('.', '') == asset;})[0];
		if (ast) {
			return ast.code;
		} else {
			return;
		};
	},
	assetType: function(asset) {
		ast = this.data.filter(function (x) {return x.code == asset | x.code.replace('.', '') == asset;})[0];
		if (ast) {
			return ast.assetType;
		} else {
			return;
		};
	}
};

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
		window.location.href = 'portfolio.html?portfolio=' + portfolio.code;
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

	purchasesStr = '<br><br><b>Compras</b><br>';
	purchasesTotal = 0;
	newPurchasedAssets = $.map(assetsCatalogue.assetsInPortfolio(), function (x) {return x.code;}).filter(function (x) {return $.map(portfolio.assets, function (y) {return y.code;}).indexOf(x) == -1;});
	purchases = $.map($('[class="sell-buy-qty-label label-buy"'), function (x) {return assetsCatalogue.assetType(x.id.replace('-qty-diff-label', '') ) + ' <b>' + assetsCatalogue.assetCode(x.id.replace('-qty-diff-label', '') ) + '</b>, <b>' + x.innerHTML + '</b> unidades por <b>$' + $('#' + x.id.replace('-qty-diff-label', '-value-diff-label') )[0].innerHTML + '</b><br>';}).concat($.map(newPurchasedAssets, function (x) {return assetsCatalogue.assetType(x) + ' <b>' + x + '</b>, <b>' + $('#' + x.replace('.', '') + '-qty')[0].value + '</b> unidades por <b>$' + $('#' + x.replace('.', '') + '-value')[0].innerHTML + '</b><br>';}) );
	purchaseValues = $.map($('[class="sell-buy-qty-label label-buy"'), function (x) {return Math.round(parseFloat($('#' + x.id.replace('-qty-diff-label', '-value-diff-label') )[0].innerHTML) * 100) / 100;}).concat($.map(newPurchasedAssets, function (x) {return Math.round(parseFloat($('#' + x.replace('.', '') + '-value')[0].innerHTML) * 100) / 100;}));
	for (p in purchases) {
		purchasesStr += purchases[p];
		purchasesTotal += purchaseValues[p];
	};
	purchasesStr == '<br><br><b>Compras</b><br>' ? purchasesStr = '' : purchasesStr = '<font color="#970404">' + purchasesStr + 'Total: <b>' + Math.round(purchasesTotal * 100) / 100 + '</b></font>';
	replace['%purchases%'] = purchasesStr;


	salesStr = '<br><br><b>Ventas</b><br>';
	salesTotal = 0;
	sales = $.map($('[class="sell-buy-qty-label label-sell"'), function (x) {return assetsCatalogue.assetType(x.id.replace('-qty-diff-label', '') ) + ' <b>' + assetsCatalogue.assetCode(x.id.replace('-qty-diff-label', '') ) + '</b>, <b>' + x.innerHTML + '</b> unidades por <b>$' + $('#' + x.id.replace('-qty-diff-label', '-value-diff-label') )[0].innerHTML + '</b><br>';});
	saleValues = $.map($('[class="sell-buy-qty-label label-sell"'), function (x) {return Math.round(parseFloat($('#' + x.id.replace('-qty-diff-label', '-value-diff-label') )[0].innerHTML) * 100) / 100;});
	for (s in sales) {
		salesStr += sales[s];
		salesTotal += saleValues[s];
	};
	salesStr == '<br><br><b>Ventas</b><br>' ? salesStr = '' : salesStr = '<font color="#118707">' + salesStr + 'Total: <b>' + Math.round(salesTotal * 100) / 100 + '</b></font>';
	replace['%sales%'] = salesStr;

	assetsInPortfolioStr = '';
	assetsInPortfolio = $.map($('.value-label') , function (x) {return assetsCatalogue.assetType(x.id.replace('-value', '') ) + ' <b>' + assetsCatalogue.assetCode(x.id.replace('-value', '') ) + '</b>, <b>' + $('#' + x.id.replace('-value', '-qty') )[0].value + '</b> unidades por <b>$' + x.innerHTML + '</b><br>';});
	for (a in assetsInPortfolio) {
		assetsInPortfolioStr += assetsInPortfolio[a];
	};
	replace['%assetsInPortfolio%'] = assetsInPortfolioStr;

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
	$('#assets-to-add-row')[0].innerHTML = assetsCatalogue.allBoxes('add', $.map(assetsCatalogue.assetsInPortfolio(), function(x) {return x.code;}) );
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
		qtyDiff = adjValue - portfolio.assets.filter(function (x) {return x.code == asset;})[0].quantity;
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
	for (a in assetsCatalogue.data) {$('#' + assetsCatalogue.data[a].code.replace('.', '') + '-box').css('background-color', assetsCatalogue.varColor(assetsCatalogue.data[a].code) );};
};

var setPage = function() {
	!portfolio ? $('#name-textbox')[0].value = '' : $('#name-textbox')[0].value = portfolio.name;
	!portfolio ? $('#description-textbox')[0].value = '' : $('#description-textbox')[0].value = portfolio.description;
	if (portfolio) {
		for (ass in portfolio.assets) {
			addAsset(portfolio.assets[ass].code, 1);
		};
		for (ass in portfolio.assets) {
			$('#' + portfolio.assets[ass].code.replace('.', '') + '-qty')[0].value = portfolio.assets[ass].quantity;
			updateValue(portfolio.assets[ass].code);
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
																<button type="button" class="btn btn-primary" onclick="removePortfolio(\'' + portfolio.code + '\');" data-dismiss="modal">Sí</button> \
															</div> \
														</div> \
													</div> \
												</div> \
											</div>'
	};
};

var removePortfolio = function(porftolioCode) {
	//Ajax para eliminar porfolio con code = portfolio.code
	window.location.href = 'portfolio.html';
};

var resetPage = function() {
	discardPortfolio();
	setPage();
};

assetsCatalogue.data.sort(function (a, b) {return b.variation - a.variation;})
$('#assets-to-add-row')[0].innerHTML = assetsCatalogue.allBoxes('add');
setPage();