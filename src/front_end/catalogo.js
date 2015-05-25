var stocksCatalogue = {
	html: function () {
		var stringHTML
		stringHTML = '	<table id="assetsCatalogue" class="table table-bordered table-striped"> \
							<thead> \
								<tr> \
									<th>Código</th> \
									<th>Empresa</th> \
									<th>Rubro</th> \
									<th>sub Rubro</th> \
									<th>Valor</th> \
									<th>Tendencia</th> \
								</tr> \
							</thead> \
							</tbody> ';

		for (stockData in this.data) {
			element = this.data[stockData]
			stringHTML = stringHTML + '<tr> \
										<td> <a href="catalogo.html">' + element.code + '</a></td> \
										<td>' + element.company + '</td> \
										<td>' + element.industry + '</td> \
										<td>' + element.subIndustry + '</td> \
										<td>' + element.value + '</td> \
										<td>' + element.trend + '</td> \
									</tr>'
		};
							
		stringHTML = stringHTML + '</tbody> \
							<tfoot> \
								<tr> \
									<th>Código</th> \
									<th>Empresa</th> \
									<th>Rubro</th> \
									<th>sub Rubro</th> \
									<th>Valor</th> \
									<th>Tendencia</th> \
								</tr> \
							</tfoot> \
						</table>';
		
		return stringHTML
	},
	data: [
		{code: 'ypfd.ba', company: 'YPF S.A.', industry: 'Energía', subIndustry: 'Petróleo', value: 273.06, trend: 'Sin cambio'},
		{code: 'apbr.ba', company: 'Petróleo Brasileiro S.A', industry: 'Energía', subIndustry: 'Petróleo', value: 11.16, trend: 'En baja'},
		{code: 'ts.ba', company: 'Tenaris S.A.', industry: 'Materiales', subIndustry: 'Metalúrgica', value: 19.47, trend: 'En baja'},
		{code: 'teco2.ba', company: 'Telecom Argentina S.A.', industry: 'Comunicaciones', subIndustry: 'Telecomunicaciones', value: 131.75, trend: 'En baja'},
		{code: 'fran.ba', company: 'BBVA Banco Francés S.A.', industry: 'Financiera', subIndustry: 'Bancos', value: 219, trend: 'En alza'},
		{code: 'bma.ba', company: 'Banco Macro S.A.', industry: 'Financiera', subIndustry: 'Bancos', value: 234.2, trend: 'En alza'},
		{code: 'erar.ba', company: 'Ternium Siderar ', industry: 'Materiales', subIndustry: 'Metalúrgica', value: 147.17, trend: 'En baja'},
		{code: 'alua.ba', company: 'Aluar Aluminio Argentino S.A.I.C. ', industry: 'Materiales', subIndustry: 'Metalúrgica', value: 285.54, trend: 'En alza'},
		{code: 'ggal.ba', company: 'Grupo Financiero Galicia S.A.', industry: 'Financiera', subIndustry: 'Ni idea', value: 182.64, trend: 'En baja'},
		{code: 'bpat.ba', company: 'Banco Patagonia S.A. ', industry: 'Financiera', subIndustry: 'Bancos', value: 256.33, trend: 'En alza'},
		{code: 'gcla.ba', company: 'Grupo Clarín S.A.', industry: 'Comunicaciones', subIndustry: 'Medios', value: 106.06, trend: 'En baja'},
		{code: 'pesa.ba', company: 'Petrobras Argentina SA ', industry: 'Energía', subIndustry: 'Petróleo', value: 34.67, trend: 'En baja'},
		{code: 'irsa.ba', company: 'IRSA Investments and Representations Inc.', industry: 'Financiera', subIndustry: 'Ni idea', value: 237.17, trend: 'En baja'},
		{code: 'apsa.ba', company: 'IRSA Propiedades Comerciales S.A.', industry: 'Financiera', subIndustry: 'Ni idea', value: 214.25, trend: 'En baja'},
		{code: 'moli.ba', company: 'Molinos Rio de la Plata S.A.', industry: 'Alimentos', subIndustry: 'Alimentos', value: 31.81, trend: 'En baja'},
		{code: 'pamp.ba', company: 'Pampa Energia SA', industry: 'Energía', subIndustry: 'Ni idea', value: 57.86, trend: 'En baja'},
		{code: 'ctio.ba', company: 'Consultatio S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 218.78, trend: 'En alza'},
		{code: 'tgsu2.ba', company: 'Transportadora de Gas Del Sur S.A.', industry: 'Energía', subIndustry: 'Transporte / Logística', value: 181.42, trend: 'En baja'},
		{code: 'bhip.ba', company: 'Banco Hipotecario S.A. ', industry: 'Financiera', subIndustry: 'Bancos', value: 76.73, trend: 'En alza'},
		{code: 'cres.ba', company: 'Cresud Sociedad Anónima Comercial, Inmobiliaria, Financiera y Agropecuaria', industry: 'Ni idea', subIndustry: 'Ni idea', value: 58.37, trend: 'En alza'},
		{code: 'pata.ba', company: 'Sociedad Anonima Importadora y Exportadora de la Patagonia', industry: 'Comercio exterior', subIndustry: 'Importaciones / Exportaciones', value: 259.79, trend: 'En baja'},
		{code: 'cepu2.ba', company: 'Central Puerto S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 101.28, trend: 'En alza'},
		{code: 'come.ba', company: 'Sociedad Comercial del Plata S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 110.85, trend: 'En baja'},
		{code: 'edn.ba', company: 'EMP.DIST.Y COM.NORTE', industry: 'Energía', subIndustry: 'Infraestructura', value: 101.45, trend: 'En alza'},
		{code: 'lede.ba', company: 'Ledesma Sociedad Anónima Agrícola Industrial', industry: 'Alimentos', subIndustry: 'Agropecuaria', value: 264.3, trend: 'En baja'},
		{code: 'jmin.ba', company: 'Holcim (Argentina) SA', industry: 'Ni idea', subIndustry: 'Ni idea', value: 180.3, trend: 'En baja'},
		{code: 'ceco2.ba', company: 'Endesa Costanera SA', industry: 'Energía', subIndustry: 'Infraestructura', value: 155.24, trend: 'En alza'},
		{code: 'petr.ba', company: 'Petrolera Pampa S.A.', industry: 'Energía', subIndustry: 'Petróleo', value: 134.44, trend: 'En baja'},
		{code: 'brio.ba', company: 'Banco Santander Rio S.A.', industry: 'Financiera', subIndustry: 'Bancos', value: 201.4, trend: 'En alza'},
		{code: 'sami.ba', company: 'S.A. San Miguel A.G.I.C.I. y F. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 150.84, trend: 'En baja'},
		{code: 'tef.ba', company: 'Telefónica, S.A. ', industry: 'Comunicaciones', subIndustry: 'Telecomunicaciones', value: 126.85, trend: 'En baja'},
		{code: 'capx.ba', company: 'Capex S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 291.43, trend: 'En alza'},
		{code: 'rigo.ba', company: 'Rigolleau S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 32.13, trend: 'En baja'},
		{code: 'invj.ba', company: 'Inversora Juramento S.A.', industry: 'Financiera', subIndustry: 'Ni idea', value: 259.14, trend: 'En baja'},
		{code: 'tgno4.ba', company: 'Transportadora de Gas del Norte S.A.', industry: 'Energía', subIndustry: 'Transporte / Logística', value: 123.68, trend: 'En baja'},
		{code: 'esme.ba', company: 'Bodegas Esmeralda S.A.', industry: 'Alimentos', subIndustry: 'Bodega', value: 27.15, trend: 'En alza'},
		{code: 'indu.ba', company: 'Solvay Indupa S.A.I.C. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 151.58, trend: 'En baja'},
		{code: 'gban.ba', company: 'Gas Natural Ban, S.A.', industry: 'Energía', subIndustry: 'Gas', value: 251.75, trend: 'En baja'},
		{code: 'bolt.ba', company: 'Boldt S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 69.23, trend: 'En alza'},
		{code: 'cgpa2.ba', company: 'Camuzzi Gas Pampeana S.A.', industry: 'Energía', subIndustry: 'Gas', value: 221.9, trend: 'En alza'},
		{code: 'mirg.ba', company: 'Mirgor S.A.C.I.F.I.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 203.76, trend: 'En baja'},
		{code: 'tran.ba', company: 'Compania de Transporte de Energia Electrica en Alta Tension Transener', industry: 'Energía', subIndustry: 'Infraestructura', value: 189.65, trend: 'En alza'},
		{code: 'ferr.ba', company: 'Ferrum Sociedad Anonima de Ceramica y Metalurgia', industry: 'Materiales', subIndustry: 'Metalúrgica', value: 51.76, trend: 'En alza'},
		{code: 'metr.ba', company: 'MetroGAS S.A.', industry: 'Energía', subIndustry: 'Gas', value: 129.06, trend: 'En baja'},
		{code: 'celu.ba', company: 'Celulosa Argentina S.A.', industry: 'Química', subIndustry: 'Celulosa', value: 163.86, trend: 'En alza'},
		{code: 'paty.ba', company: 'Quickfood Sociedad Anonima ', industry: 'Alimentos', subIndustry: 'Alimentos', value: 53.44, trend: 'En baja'},
		{code: 'tglt.ba', company: 'TGLT S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 85.03, trend: 'En baja'},
		{code: 'oest.ba', company: 'Grupo Concesionario del Oeste S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 116.89, trend: 'En baja'},
		{code: 'cado.ba', company: 'Carlos Casado S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 52, trend: 'En alza'},
		{code: 'std.ba', company: 'Banco Santander, S.A. ', industry: 'Financiera', subIndustry: 'Bancos', value: 34.52, trend: 'En alza'},
		{code: 'grim.ba', company: 'Grimoldi S.A. ', industry: 'Indumentaria', subIndustry: 'Indumentaria', value: 274.4, trend: 'En baja'},
		{code: 'capu.ba', company: 'Caputo S.A.I.C. y F.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 73.79, trend: 'En alza'},
		{code: 'dyca.ba', company: 'Dycasa SA', industry: 'Ni idea', subIndustry: 'Ni idea', value: 76.17, trend: 'En alza'},
		{code: 'intr.ba', company: 'Compania Introductora de Buenos Aires Sociedad Anonima ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 78.6, trend: 'En alza'},
		{code: 'rep.ba', company: 'Repsol, S.A.', industry: 'Energía', subIndustry: 'Petróleo', value: 163.42, trend: 'En baja'},
		{code: 'long.ba', company: 'Longvie S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 173.87, trend: 'En baja'},
		{code: 'auso.ba', company: 'Autopistas Del Sol SA ', industry: 'Transporte / Logística', subIndustry: 'Infraestructura', value: 9.3, trend: 'En alza'},
		{code: 'carc.ba', company: 'Carboclor S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 290.12, trend: 'En alza'},
		{code: 'semi.ba', company: 'Molinos Juan Semino S.A.', industry: 'Alimentos', subIndustry: 'Alimentos', value: 40.23, trend: 'En baja'},
		{code: 'rose.ba', company: 'Instituto Rosenbusch S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 110.5, trend: 'En baja'},
		{code: 'estr.ba', company: 'Angel Estrada y Compania S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 226.25, trend: 'En alza'},
		{code: 'colo.ba', company: 'Colorin Industria de Materiales Sinteticos S.A.', industry: 'Materiales', subIndustry: 'Sintéticos', value: 262.56, trend: 'En alza'},
		{code: 'psur.ba', company: 'Petrolera del Conosur S.A. ', industry: 'Energía', subIndustry: 'Petróleo', value: 219.53, trend: 'En baja'},
		{code: 'fipl.ba', company: 'Fiplasto S.A.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 163.57, trend: 'En alza'},
		{code: 'garo.ba', company: 'Garovaglio y Zorraquin S.A. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 255.99, trend: 'En baja'},
		{code: 'agro.ba', company: 'Agrometal S.A.I. ', industry: 'Ni idea', subIndustry: 'Ni idea', value: 232.07, trend: 'En alza'},
		{code: 'poll.ba', company: 'Polledo S.A.I.C. y F.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 116.75, trend: 'En baja'},
		{code: 'mori.ba', company: 'Morixe Hermanos S.A.C. e I.', industry: 'Ni idea', subIndustry: 'Ni idea', value: 142.74, trend: 'En baja'}
	],
	loadTable: function () {
		$(".box-body")[0].innerHTML = this.html();
	}
};

var bondsCatalogue = {
	html: function () {
		var stringHTML
		stringHTML = '	<table id="assetsCatalogue" class="table table-bordered table-striped"> \
							<thead> \
								<tr> \
									<th>Código</th> \
									<th>Nombre</th> \
									<th>Moneda</th> \
									<th>Plazo [Meses]</th> \
									<th>Valor</th> \
									<th>Fecha de pago</th> \
								</tr> \
							</thead> \
							</tbody> ';

		for (bondData in this.data) {
			stringHTML = stringHTML + '<tr> \
										<td> <a href="catalogo.html">' + element.code + '</a></td> \
										<td>' + element.name + '</td> \
										<td>' + element.currency + '</td> \
										<td>' + element.term + '</td> \
										<td>' + element.value + '</td> \
										<td>' + element.payDate + '</td> \
									</tr>'
		};
							
		stringHTML = stringHTML + '</tbody> \
							<tfoot> \
								<tr> \
									<th>Código</th> \
									<th>Nombre</th> \
									<th>Moneda</th> \
									<th>Plazo [Meses]/th> \
									<th>Valor</th> \
									<th>Fecha de pago</th> \
								</tr> \
							</tfoot> \
						</table>';
		
		return stringHTML
	},
	data: [
		{code: 'bono.1', name: 'Bono ARS', currency: 'ARS', term: 18, value: 100.00, payDate: '2016-31-12'},
		{code: 'bono.2', name: 'Bono USD', currency: 'USD', term: 18, value: 250.00, payDate: '2016-31-12'}
	],
	loadTable: function () {
		$(".box-body")[0].innerHTML = this.html();
	}
};

var loadTable = function (assetType) {
	assetType=='Acciones' ? stocksCatalogue.loadTable() : bondsCatalogue.loadTable();
	$("#assetsCatalogue").dataTable();
};

loadTable('Acciones');