var assets = {
	html: function (symbols) {
		var stringHTML
		stringHTML = '	<table id="assetsCatalogue" class="table table-bordered table-striped"> \
							<thead> \
								<tr> \
									<th>Incluir</th> \
									<th>Tipo</th> \
									<th>Código</th> \
									<th>Descripción</th> \
									<th>Valor</th> \
									<th>Inversión</th> \
									<th>Capitalizado</th> \
									<th>En porfolio</th> \
									<th>Total</th> \
									<th>Rendimiento</th> \
								</tr> \
							</thead> \
							</tbody> ';

		filteredData = this.data.filter(function (x) {return symbols.indexOf(x.code) != -1;} );
		for (d in filteredData) {
			element = filteredData[d]
			stringHTML += '<tr> \
								<td><label><input type="checkbox" name="' + element.code + '" checked="checked" onchange="reloadLines();"></input></label></td> \
								<td>' + element.type + '</td> \
								<td> <a href="catalogo.html">' + element.code + '</a></td> \
								<td>' + element.description + '</td> \
								<td>' + new String(element.value).toString().replace('.', ',') + ' ARS</td> \
								<td id="investment-' + element.code.replace('.', '-') + '"></td> \
								<td id="capitalized-' + element.code.replace('.', '-') + '"></td> \
								<td id="in-portfolio-' + element.code.replace('.', '-') + '"></td> \
								<td id="total-' + element.code.replace('.', '-') + '"></td> \
								<td id="performance-' + element.code.replace('.', '-') + '"></td> \
							</tr>'
		};
							
		stringHTML += '</tbody> \
					</table>';
		
		return stringHTML
	},
	data: [
		{type: 'Acción', code: 'ypfd.ba', description: 'YPF S.A.', value: 273.06},
		{type: 'Acción', code: 'apbr.ba', description: 'Petróleo Brasileiro S.A', value: 11.16},
		{type: 'Acción', code: 'ts.ba', description: 'Tenaris S.A.', value: 19.47},
		{type: 'Acción', code: 'teco2.ba', description: 'Telecom Argentina S.A.', value: 131.75},
		{type: 'Acción', code: 'fran.ba', description: 'BBVA Banco Francés S.A.', value: 219},
		{type: 'Acción', code: 'bma.ba', description: 'Banco Macro S.A.', value: 234.2},
		{type: 'Acción', code: 'erar.ba', description: 'Ternium Siderar ', value: 147.17},
		{type: 'Acción', code: 'alua.ba', description: 'Aluar Aluminio Argentino S.A.I.C. ', value: 285.54},
		{type: 'Acción', code: 'ggal.ba', description: 'Grupo Financiero Galicia S.A.', value: 182.64},
		{type: 'Acción', code: 'bpat.ba', description: 'Banco Patagonia S.A. ', value: 256.33},
		{type: 'Acción', code: 'gcla.ba', description: 'Grupo Clarín S.A.', value: 106.06},
		{type: 'Acción', code: 'pesa.ba', description: 'Petrobras Argentina SA ', value: 34.67},
		{type: 'Acción', code: 'irsa.ba', description: 'IRSA Investments and Representations Inc.', value: 237.17},
		{type: 'Acción', code: 'apsa.ba', description: 'IRSA Propiedades Comerciales S.A.', value: 214.25},
		{type: 'Acción', code: 'moli.ba', description: 'Molinos Rio de la Plata S.A.', value: 31.81},
		{type: 'Acción', code: 'pamp.ba', description: 'Pampa Energia SA', value: 57.86},
		{type: 'Acción', code: 'ctio.ba', description: 'Consultatio S.A. ', value: 218.78},
		{type: 'Acción', code: 'tgsu2.ba', description: 'Transportadora de Gas Del Sur S.A.', value: 181.42},
		{type: 'Acción', code: 'bhip.ba', description: 'Banco Hipotecario S.A. ', value: 76.73},
		{type: 'Acción', code: 'cres.ba', description: 'Cresud Sociedad Anónima Comercial', value: 58.37},
		{type: 'Acción', code: 'pata.ba', description: 'Sociedad Anonima Importadora y Exportadora de la Patagonia', value: 259.79},
		{type: 'Acción', code: 'cepu2.ba', description: 'Central Puerto S.A.', value: 101.28},
		{type: 'Acción', code: 'come.ba', description: 'Sociedad Comercial del Plata S.A. ', value: 110.85},
		{type: 'Acción', code: 'edn.ba', description: 'EMP.DIST.Y COM.NORTE', value: 101.45},
		{type: 'Acción', code: 'lede.ba', description: 'Ledesma Sociedad Anónima Agrícola Industrial', value: 264.3},
		{type: 'Acción', code: 'jmin.ba', description: 'Holcim (Argentina) SA', value: 180.3},
		{type: 'Acción', code: 'ceco2.ba', description: 'Endesa Costanera SA', value: 155.24},
		{type: 'Acción', code: 'petr.ba', description: 'Petrolera Pampa S.A.', value: 134.44},
		{type: 'Acción', code: 'brio.ba', description: 'Banco Santander Rio S.A.', value: 201.4},
		{type: 'Acción', code: 'sami.ba', description: 'S.A. San Miguel A.G.I.C.I. y F. ', value: 150.84},
		{type: 'Acción', code: 'tef.ba', description: 'Telefónica', value: 126.85},
		{type: 'Acción', code: 'capx.ba', description: 'Capex S.A.', value: 291.43},
		{type: 'Acción', code: 'rigo.ba', description: 'Rigolleau S.A.', value: 32.13},
		{type: 'Acción', code: 'invj.ba', description: 'Inversora Juramento S.A.', value: 259.14},
		{type: 'Acción', code: 'tgno4.ba', description: 'Transportadora de Gas del Norte S.A.', value: 123.68},
		{type: 'Acción', code: 'esme.ba', description: 'Bodegas Esmeralda S.A.', value: 27.15},
		{type: 'Acción', code: 'indu.ba', description: 'Solvay Indupa S.A.I.C. ', value: 151.58},
		{type: 'Acción', code: 'gban.ba', description: 'Gas Natural Ban', value: 251.75},
		{type: 'Acción', code: 'bolt.ba', description: 'Boldt S.A. ', value: 69.23},
		{type: 'Acción', code: 'cgpa2.ba', description: 'Camuzzi Gas Pampeana S.A.', value: 221.9},
		{type: 'Acción', code: 'mirg.ba', description: 'Mirgor S.A.C.I.F.I.A.', value: 203.76},
		{type: 'Acción', code: 'tran.ba', description: 'Compania de Transporte de Energia Electrica en Alta Tension Transener', value: 189.65},
		{type: 'Acción', code: 'ferr.ba', description: 'Ferrum Sociedad Anonima de Ceramica y Metalurgia', value: 51.76},
		{type: 'Acción', code: 'metr.ba', description: 'MetroGAS S.A.', value: 129.06},
		{type: 'Acción', code: 'celu.ba', description: 'Celulosa Argentina S.A.', value: 163.86},
		{type: 'Acción', code: 'paty.ba', description: 'Quickfood Sociedad Anonima ', value: 53.44},
		{type: 'Acción', code: 'tglt.ba', description: 'TGLT S.A.', value: 85.03},
		{type: 'Acción', code: 'oest.ba', description: 'Grupo Concesionario del Oeste S.A. ', value: 116.89},
		{type: 'Acción', code: 'cado.ba', description: 'Carlos Casado S.A. ', value: 52},
		{type: 'Acción', code: 'std.ba', description: 'Banco Santander', value: 34.52},
		{type: 'Acción', code: 'grim.ba', description: 'Grimoldi S.A. ', value: 274.4},
		{type: 'Acción', code: 'capu.ba', description: 'Caputo S.A.I.C. y F.', value: 73.79},
		{type: 'Acción', code: 'dyca.ba', description: 'Dycasa SA', value: 76.17},
		{type: 'Acción', code: 'intr.ba', description: 'Compania Introductora de Buenos Aires Sociedad Anonima ', value: 78.6},
		{type: 'Acción', code: 'rep.ba', description: 'Repsol', value: 163.42},
		{type: 'Acción', code: 'long.ba', description: 'Longvie S.A.', value: 173.87},
		{type: 'Acción', code: 'auso.ba', description: 'Autopistas Del Sol SA ', value: 9.3},
		{type: 'Acción', code: 'carc.ba', description: 'Carboclor S.A. ', value: 290.12},
		{type: 'Acción', code: 'semi.ba', description: 'Molinos Juan Semino S.A.', value: 40.23},
		{type: 'Acción', code: 'rose.ba', description: 'Instituto Rosenbusch S.A.', value: 110.5},
		{type: 'Acción', code: 'estr.ba', description: 'Angel Estrada y Compania S.A.', value: 226.25},
		{type: 'Acción', code: 'colo.ba', description: 'Colorin Industria de Materiales Sinteticos S.A.', value: 262.56},
		{type: 'Acción', code: 'psur.ba', description: 'Petrolera del Conosur S.A. ', value: 219.53},
		{type: 'Acción', code: 'fipl.ba', description: 'Fiplasto S.A.', value: 163.57},
		{type: 'Acción', code: 'garo.ba', description: 'Garovaglio y Zorraquin S.A. ', value: 255.99},
		{type: 'Acción', code: 'agro.ba', description: 'Agrometal S.A.I. ', value: 232.07},
		{type: 'Acción', code: 'poll.ba', description: 'Polledo S.A.I.C. y F.', value: 116.75},
		{type: 'Acción', code: 'mori.ba', description: 'Morixe Hermanos S.A.C. e I.', value: 142.74},
		{type: 'Bono', code: 'bono.1', description: 'Bono ARS', currency: 'ARS', value: 100.00},
		{type: 'Bono', code: 'bono.2', description: 'Bono USD', currency: 'USD', value: 250.00},
		{type: 'Moneda Extranjera', code: 'dolar.oficial', description: 'Dólar Norteamericano (oficial)', value: 9},
		{type: 'Moneda Extranjera', code: 'dolar.blue', description: 'Dólar Norteamericano (mercado paralelo)', value: 12.5}
	],
	loadTable: function (symbols) {
		$("[name=asset-list]")[0].innerHTML = this.html(symbols);
	}
};

var portfolios = {
	data: [
			[
			{date: '2014-4-21', transactions: [
			{symbol: 'ypfd.ba', value: 286.5, quantity: 150, type: 'Inversión'},
			
			{symbol: 'ypfd.ba', value: 286.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 67, quantity: 500, type: 'Inversión'},
			
			{symbol: 'apbr.ba', value: 67, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'Inversión'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-22', transactions: [
			{symbol: 'ypfd.ba', value: 294, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-23', transactions: [
			{symbol: 'ypfd.ba', value: 290, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66.25, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-24', transactions: [
			{symbol: 'ypfd.ba', value: 290.25, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-25', transactions: [
			{symbol: 'ypfd.ba', value: 277, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 65.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-28', transactions: [
			{symbol: 'ypfd.ba', value: 280.25, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 69, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-29', transactions: [
			{symbol: 'ypfd.ba', value: 286.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 70.25, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-30', transactions: [
			{symbol: 'ypfd.ba', value: 284.2, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 69.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-1', transactions: [
			{symbol: 'ypfd.ba', value: 284.2, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 69.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-2', transactions: [
			{symbol: 'ypfd.ba', value: 284.2, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 69.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-5', transactions: [
			{symbol: 'ypfd.ba', value: 289.3, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 71.1, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-6', transactions: [
			{symbol: 'ypfd.ba', value: 278, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-7', transactions: [
			{symbol: 'ypfd.ba', value: 299, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-8', transactions: [
			{symbol: 'ypfd.ba', value: 306, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 72.15, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-9', transactions: [
			{symbol: 'ypfd.ba', value: 303, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 72.05, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-12', transactions: [
			{symbol: 'ypfd.ba', value: 306, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.75, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-13', transactions: [
			{symbol: 'ypfd.ba', value: 301, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-14', transactions: [
			{symbol: 'ypfd.ba', value: 305.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 76.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.08, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-15', transactions: [
			{symbol: 'ypfd.ba', value: 307, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 76, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.09, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-16', transactions: [
			{symbol: 'ypfd.ba', value: 304, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 77.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.1, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-19', transactions: [
			{symbol: 'ypfd.ba', value: 319.8, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.1, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-20', transactions: [
			{symbol: 'ypfd.ba', value: 321.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.1, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-21', transactions: [
			{symbol: 'ypfd.ba', value: 312, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-22', transactions: [
			{symbol: 'ypfd.ba', value: 316, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.6, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-23', transactions: [
			{symbol: 'ypfd.ba', value: 326, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-26', transactions: [
			{symbol: 'ypfd.ba', value: 333.1, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-27', transactions: [
			{symbol: 'ypfd.ba', value: 327.9, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-28', transactions: [
			{symbol: 'ypfd.ba', value: 333, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 82.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-29', transactions: [
			{symbol: 'ypfd.ba', value: 333, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79.95, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-30', transactions: [
			{symbol: 'ypfd.ba', value: 324.6, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 76.8, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-2', transactions: [
			{symbol: 'ypfd.ba', value: 333, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.13, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-3', transactions: [
			{symbol: 'ypfd.ba', value: 327, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.13, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-4', transactions: [
			{symbol: 'ypfd.ba', value: 329.1, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 72.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.14, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-5', transactions: [
			{symbol: 'ypfd.ba', value: 325.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 72.1, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.15, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-6', transactions: [
			{symbol: 'ypfd.ba', value: 325.3, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 78, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.17, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-9', transactions: [
			{symbol: 'ypfd.ba', value: 340, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.17, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-10', transactions: [
			{symbol: 'ypfd.ba', value: 350, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79.65, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.16, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-11', transactions: [
			{symbol: 'ypfd.ba', value: 353.9, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 82.45, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.17, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-12', transactions: [
			{symbol: 'ypfd.ba', value: 350, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81.7, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.16, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-13', transactions: [
			{symbol: 'ypfd.ba', value: 346.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 82.7, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-16', transactions: [
			{symbol: 'ypfd.ba', value: 303, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.6, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-17', transactions: [
			{symbol: 'ypfd.ba', value: 320.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 82.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.19, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-18', transactions: [
			{symbol: 'ypfd.ba', value: 338, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 84.4, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-19', transactions: [
			{symbol: 'ypfd.ba', value: 326, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.7, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-20', transactions: [
			{symbol: 'ypfd.ba', value: 326, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.7, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-23', transactions: [
			{symbol: 'ypfd.ba', value: 357, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-24', transactions: [
			{symbol: 'ypfd.ba', value: 351.05, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 77, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-25', transactions: [
			{symbol: 'ypfd.ba', value: 351.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.8, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-26', transactions: [
			{symbol: 'ypfd.ba', value: 341, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-27', transactions: [
			{symbol: 'ypfd.ba', value: 338.8, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.19, quantity: 3000, type: 'Inversión'},
			
			{symbol: 'dolar.oficial', value: 8.19, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-6-30', transactions: [
			{symbol: 'ypfd.ba', value: 333, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.19, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-1', transactions: [
			{symbol: 'ypfd.ba', value: 340, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.1, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.19, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-2', transactions: [
			{symbol: 'ypfd.ba', value: 347, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-3', transactions: [
			{symbol: 'ypfd.ba', value: 345.9, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-4', transactions: [
			{symbol: 'ypfd.ba', value: 345.45, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75.25, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-7', transactions: [
			{symbol: 'ypfd.ba', value: 344.8, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-8', transactions: [
			{symbol: 'ypfd.ba', value: 356.75, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-9', transactions: [
			{symbol: 'ypfd.ba', value: 356.75, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-10', transactions: [
			{symbol: 'ypfd.ba', value: 376.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75.7, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-11', transactions: [
			{symbol: 'ypfd.ba', value: 377, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-14', transactions: [
			{symbol: 'ypfd.ba', value: 378, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-15', transactions: [
			{symbol: 'ypfd.ba', value: 370.4, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-16', transactions: [
			{symbol: 'ypfd.ba', value: 366.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.45, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-17', transactions: [
			{symbol: 'ypfd.ba', value: 360, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-18', transactions: [
			{symbol: 'ypfd.ba', value: 373.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 83.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-21', transactions: [
			{symbol: 'ypfd.ba', value: 365, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 85.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-22', transactions: [
			{symbol: 'ypfd.ba', value: 365, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 85.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-23', transactions: [
			{symbol: 'ypfd.ba', value: 355, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 84.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-24', transactions: [
			{symbol: 'ypfd.ba', value: 364.2, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 83.4, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-25', transactions: [
			{symbol: 'ypfd.ba', value: 349.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 83.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.22, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-28', transactions: [
			{symbol: 'ypfd.ba', value: 346, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 85, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.22, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-29', transactions: [
			{symbol: 'ypfd.ba', value: 369, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 84.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.22, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-30', transactions: [
			{symbol: 'ypfd.ba', value: 392, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 84, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-31', transactions: [
			{symbol: 'ypfd.ba', value: 353, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-1', transactions: [
			{symbol: 'ypfd.ba', value: 358, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.22, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-4', transactions: [
			{symbol: 'ypfd.ba', value: 352.75, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 82.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.23, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-5', transactions: [
			{symbol: 'ypfd.ba', value: 346, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 84.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-6', transactions: [
			{symbol: 'ypfd.ba', value: 352, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 85.95, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-7', transactions: [
			{symbol: 'ypfd.ba', value: 351.9, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 85, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-8', transactions: [
			{symbol: 'ypfd.ba', value: 350, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 83.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-11', transactions: [
			{symbol: 'ypfd.ba', value: 347.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 87.6, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-12', transactions: [
			{symbol: 'ypfd.ba', value: 356, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 90, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-13', transactions: [
			{symbol: 'ypfd.ba', value: 360, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 88, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-14', transactions: [
			{symbol: 'ypfd.ba', value: 357, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 89.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-15', transactions: [
			{symbol: 'ypfd.ba', value: 376, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 96.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.27, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-18', transactions: [
			{symbol: 'ypfd.ba', value: 376, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 96.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.27, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-19', transactions: [
			{symbol: 'ypfd.ba', value: 387.75, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 101, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.27, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-20', transactions: [
			{symbol: 'ypfd.ba', value: 387.75, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 101, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.28, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-21', transactions: [
			{symbol: 'ypfd.ba', value: 393, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 108.75, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.34, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-22', transactions: [
			{symbol: 'ypfd.ba', value: 398, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 105.4, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.35, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-25', transactions: [
			{symbol: 'ypfd.ba', value: 412, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 111.05, quantity: 200, type: 'Capitalizado'},
			
			{symbol: 'apbr.ba', value: 111.05, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-26', transactions: [
			{symbol: 'ypfd.ba', value: 421, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 115, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-27', transactions: [
			{symbol: 'ypfd.ba', value: 430.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 124, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-28', transactions: [
			{symbol: 'ypfd.ba', value: 428.95, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 123.5, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-29', transactions: [
			{symbol: 'ypfd.ba', value: 422, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 127.1, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-1', transactions: [
			{symbol: 'ypfd.ba', value: 432, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 132.85, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-2', transactions: [
			{symbol: 'ypfd.ba', value: 438.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 135.2, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-3', transactions: [
			{symbol: 'ypfd.ba', value: 460.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 131.35, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-4', transactions: [
			{symbol: 'ypfd.ba', value: 441, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 122.5, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-5', transactions: [
			{symbol: 'ypfd.ba', value: 452, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 127.2, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-8', transactions: [
			{symbol: 'ypfd.ba', value: 458.25, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 122.15, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-9', transactions: [
			{symbol: 'ypfd.ba', value: 461.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 120.9, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-10', transactions: [
			{symbol: 'ypfd.ba', value: 468, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 116.5, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-11', transactions: [
			{symbol: 'ypfd.ba', value: 473, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 118.6, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-12', transactions: [
			{symbol: 'ypfd.ba', value: 476, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 110.6, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-15', transactions: [
			{symbol: 'ypfd.ba', value: 476.1, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 111.6, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-16', transactions: [
			{symbol: 'ypfd.ba', value: 504, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 118.9, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-17', transactions: [
			{symbol: 'ypfd.ba', value: 504, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 120.95, quantity: 200, type: 'Capitalizado'},
			
			{symbol: 'apbr.ba', value: 120.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-18', transactions: [
			{symbol: 'ypfd.ba', value: 503.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 118, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-19', transactions: [
			{symbol: 'ypfd.ba', value: 509, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 116.75, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-22', transactions: [
			{symbol: 'ypfd.ba', value: 533, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 120, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-23', transactions: [
			{symbol: 'ypfd.ba', value: 532, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 115.65, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-24', transactions: [
			{symbol: 'ypfd.ba', value: 536.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 117.4, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-25', transactions: [
			{symbol: 'ypfd.ba', value: 528.6, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 114, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-26', transactions: [
			{symbol: 'ypfd.ba', value: 545.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 121, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-29', transactions: [
			{symbol: 'ypfd.ba', value: 551, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 110.8, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-30', transactions: [
			{symbol: 'ypfd.ba', value: 558, quantity: 50, type: 'Capitalizado'},
			
			{symbol: 'ypfd.ba', value: 558, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 108, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-1', transactions: [
			{symbol: 'ypfd.ba', value: 503, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 97.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-2', transactions: [
			{symbol: 'ypfd.ba', value: 467.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 96, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-3', transactions: [
			{symbol: 'ypfd.ba', value: 506, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 104.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-6', transactions: [
			{symbol: 'ypfd.ba', value: 477, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 110, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-7', transactions: [
			{symbol: 'ypfd.ba', value: 462, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 117.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-8', transactions: [
			{symbol: 'ypfd.ba', value: 457, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 114, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.41, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-9', transactions: [
			{symbol: 'ypfd.ba', value: 425.35, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 113.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.41, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-10', transactions: [
			{symbol: 'ypfd.ba', value: 417, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 105.1, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.41, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-13', transactions: [
			{symbol: 'ypfd.ba', value: 417, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 105.1, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.41, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-14', transactions: [
			{symbol: 'ypfd.ba', value: 406, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 112.75, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.41, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-15', transactions: [
			{symbol: 'ypfd.ba', value: 400, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 102.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.42, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-16', transactions: [
			{symbol: 'ypfd.ba', value: 414, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 99.4, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.42, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-17', transactions: [
			{symbol: 'ypfd.ba', value: 430, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 103, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.42, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-20', transactions: [
			{symbol: 'ypfd.ba', value: 437.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 99, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.43, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-21', transactions: [
			{symbol: 'ypfd.ba', value: 448, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 91.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.43, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-22', transactions: [
			{symbol: 'ypfd.ba', value: 435.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 87, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.43, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-23', transactions: [
			{symbol: 'ypfd.ba', value: 419.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.43, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-24', transactions: [
			{symbol: 'ypfd.ba', value: 428, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 87, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.43, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-27', transactions: [
			{symbol: 'ypfd.ba', value: 420, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 76.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-28', transactions: [
			{symbol: 'ypfd.ba', value: 417, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 77.6, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-29', transactions: [
			{symbol: 'ypfd.ba', value: 413, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-30', transactions: [
			{symbol: 'ypfd.ba', value: 430, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75.75, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-31', transactions: [
			{symbol: 'ypfd.ba', value: 459.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 77.8, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-3', transactions: [
			{symbol: 'ypfd.ba', value: 471, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-4', transactions: [
			{symbol: 'ypfd.ba', value: 447, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-5', transactions: [
			{symbol: 'ypfd.ba', value: 444, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.4, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-6', transactions: [
			{symbol: 'ypfd.ba', value: 444, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.4, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-7', transactions: [
			{symbol: 'ypfd.ba', value: 435, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 69.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-10', transactions: [
			{symbol: 'ypfd.ba', value: 436, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-11', transactions: [
			{symbol: 'ypfd.ba', value: 430.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66.85, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-12', transactions: [
			{symbol: 'ypfd.ba', value: 416.8, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 65.3, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-13', transactions: [
			{symbol: 'ypfd.ba', value: 411, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 63.25, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-14', transactions: [
			{symbol: 'ypfd.ba', value: 400, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 61, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-17', transactions: [
			{symbol: 'ypfd.ba', value: 400, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 56.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-18', transactions: [
			{symbol: 'ypfd.ba', value: 393.05, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 57, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-19', transactions: [
			{symbol: 'ypfd.ba', value: 387, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 57, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-20', transactions: [
			{symbol: 'ypfd.ba', value: 401, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 58.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-21', transactions: [
			{symbol: 'ypfd.ba', value: 407.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-24', transactions: [
			{symbol: 'ypfd.ba', value: 407.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-25', transactions: [
			{symbol: 'ypfd.ba', value: 418, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 63.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-26', transactions: [
			{symbol: 'ypfd.ba', value: 418.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 64, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-27', transactions: [
			{symbol: 'ypfd.ba', value: 414, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 62.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-28', transactions: [
			{symbol: 'ypfd.ba', value: 396.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 57.6, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-1', transactions: [
			{symbol: 'ypfd.ba', value: 380, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 53.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-2', transactions: [
			{symbol: 'ypfd.ba', value: 369.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 54, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-3', transactions: [
			{symbol: 'ypfd.ba', value: 378, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 57, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-4', transactions: [
			{symbol: 'ypfd.ba', value: 372, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 53.65, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-5', transactions: [
			{symbol: 'ypfd.ba', value: 359, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 52.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-8', transactions: [
			{symbol: 'ypfd.ba', value: 359, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 52.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-9', transactions: [
			{symbol: 'ypfd.ba', value: 321, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 48.1, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-10', transactions: [
			{symbol: 'ypfd.ba', value: 297, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-11', transactions: [
			{symbol: 'ypfd.ba', value: 310, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.8, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-12', transactions: [
			{symbol: 'ypfd.ba', value: 287, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.15, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-15', transactions: [
			{symbol: 'ypfd.ba', value: 255, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 35, quantity: 150, type: 'Inversión'},
			
			{symbol: 'apbr.ba', value: 35, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-16', transactions: [
			{symbol: 'ypfd.ba', value: 267, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 37.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-17', transactions: [
			{symbol: 'ypfd.ba', value: 285, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-18', transactions: [
			{symbol: 'ypfd.ba', value: 277.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-19', transactions: [
			{symbol: 'ypfd.ba', value: 276.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-22', transactions: [
			{symbol: 'ypfd.ba', value: 287, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-23', transactions: [
			{symbol: 'ypfd.ba', value: 290, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-24', transactions: [
			{symbol: 'ypfd.ba', value: 290, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-25', transactions: [
			{symbol: 'ypfd.ba', value: 290, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-29', transactions: [
			{symbol: 'ypfd.ba', value: 303, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-30', transactions: [
			{symbol: 'ypfd.ba', value: 315, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-31', transactions: [
			{symbol: 'ypfd.ba', value: 315, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-1', transactions: [
			{symbol: 'ypfd.ba', value: 315, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-2', transactions: [
			{symbol: 'ypfd.ba', value: 321, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.3, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-5', transactions: [
			{symbol: 'ypfd.ba', value: 298.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 36.85, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.57, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-6', transactions: [
			{symbol: 'ypfd.ba', value: 297.25, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 36.35, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.58, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-7', transactions: [
			{symbol: 'ypfd.ba', value: 298.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.95, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.59, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-8', transactions: [
			{symbol: 'ypfd.ba', value: 298, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.61, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-9', transactions: [
			{symbol: 'ypfd.ba', value: 299, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-12', transactions: [
			{symbol: 'ypfd.ba', value: 288, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-13', transactions: [
			{symbol: 'ypfd.ba', value: 277, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.2, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-14', transactions: [
			{symbol: 'ypfd.ba', value: 288.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 42.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.62, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-15', transactions: [
			{symbol: 'ypfd.ba', value: 289, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.2, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-16', transactions: [
			{symbol: 'ypfd.ba', value: 297, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-19', transactions: [
			{symbol: 'ypfd.ba', value: 296, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-20', transactions: [
			{symbol: 'ypfd.ba', value: 290.1, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 42.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-21', transactions: [
			{symbol: 'ypfd.ba', value: 293.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.95, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-22', transactions: [
			{symbol: 'ypfd.ba', value: 301.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 46.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-23', transactions: [
			{symbol: 'ypfd.ba', value: 298, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 45.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-26', transactions: [
			{symbol: 'ypfd.ba', value: 299, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 45.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-27', transactions: [
			{symbol: 'ypfd.ba', value: 308, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 46.25, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-28', transactions: [
			{symbol: 'ypfd.ba', value: 297, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 42.05, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-29', transactions: [
			{symbol: 'ypfd.ba', value: 284.6, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-30', transactions: [
			{symbol: 'ypfd.ba', value: 289, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 37.75, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-2', transactions: [
			{symbol: 'ypfd.ba', value: 289, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39.2, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-3', transactions: [
			{symbol: 'ypfd.ba', value: 302, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-4', transactions: [
			{symbol: 'ypfd.ba', value: 299.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-5', transactions: [
			{symbol: 'ypfd.ba', value: 305, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-6', transactions: [
			{symbol: 'ypfd.ba', value: 306, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-9', transactions: [
			{symbol: 'ypfd.ba', value: 305.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-10', transactions: [
			{symbol: 'ypfd.ba', value: 303, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.65, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-11', transactions: [
			{symbol: 'ypfd.ba', value: 308, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-12', transactions: [
			{symbol: 'ypfd.ba', value: 317.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-13', transactions: [
			{symbol: 'ypfd.ba', value: 330, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-16', transactions: [
			{symbol: 'ypfd.ba', value: 330, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-17', transactions: [
			{symbol: 'ypfd.ba', value: 330, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-18', transactions: [
			{symbol: 'ypfd.ba', value: 328.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-19', transactions: [
			{symbol: 'ypfd.ba', value: 321.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-20', transactions: [
			{symbol: 'ypfd.ba', value: 314, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-23', transactions: [
			{symbol: 'ypfd.ba', value: 307, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.55, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.72, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-24', transactions: [
			{symbol: 'ypfd.ba', value: 304, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.3, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.72, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-25', transactions: [
			{symbol: 'ypfd.ba', value: 306.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.72, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-26', transactions: [
			{symbol: 'ypfd.ba', value: 296.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 37.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.72, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-27', transactions: [
			{symbol: 'ypfd.ba', value: 308, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-2', transactions: [
			{symbol: 'ypfd.ba', value: 305.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-3', transactions: [
			{symbol: 'ypfd.ba', value: 312, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-4', transactions: [
			{symbol: 'ypfd.ba', value: 315.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 37, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-5', transactions: [
			{symbol: 'ypfd.ba', value: 320, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 36.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-6', transactions: [
			{symbol: 'ypfd.ba', value: 310, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 35.55, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-9', transactions: [
			{symbol: 'ypfd.ba', value: 311, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 33.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.78, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-10', transactions: [
			{symbol: 'ypfd.ba', value: 305.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 31.75, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.78, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-11', transactions: [
			{symbol: 'ypfd.ba', value: 312, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 32.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.78, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-12', transactions: [
			{symbol: 'ypfd.ba', value: 319.05, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 31, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-13', transactions: [
			{symbol: 'ypfd.ba', value: 320, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 29.95, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-16', transactions: [
			{symbol: 'ypfd.ba', value: 335.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 31.2, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-17', transactions: [
			{symbol: 'ypfd.ba', value: 337.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 32.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-18', transactions: [
			{symbol: 'ypfd.ba', value: 347, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-19', transactions: [
			{symbol: 'ypfd.ba', value: 346.3, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 32.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-20', transactions: [
			{symbol: 'ypfd.ba', value: 355.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-23', transactions: [
			{symbol: 'ypfd.ba', value: 355.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-24', transactions: [
			{symbol: 'ypfd.ba', value: 355.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-25', transactions: [
			{symbol: 'ypfd.ba', value: 344.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 36.3, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-26', transactions: [
			{symbol: 'ypfd.ba', value: 330.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34.75, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-27', transactions: [
			{symbol: 'ypfd.ba', value: 334, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-30', transactions: [
			{symbol: 'ypfd.ba', value: 335.6, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 36.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-31', transactions: [
			{symbol: 'ypfd.ba', value: 331.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 37.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-4-1', transactions: [
			{symbol: 'ypfd.ba', value: 338, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-4-2', transactions: [
			{symbol: 'ypfd.ba', value: 338, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-4-3', transactions: [
			{symbol: 'ypfd.ba', value: 338, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-4-6', transactions: [
			{symbol: 'ypfd.ba', value: 356.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.85, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-4-7', transactions: [
			{symbol: 'ypfd.ba', value: 358.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 42, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.78, quantity: 5000, type: 'Capitalizado'},
			
			{symbol: 'dolar.oficial', value: 8.85, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-8', transactions: [
			{symbol: 'ypfd.ba', value: 356, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.2, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.85, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-9', transactions: [
			{symbol: 'ypfd.ba', value: 364, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.25, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.85, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-10', transactions: [
			{symbol: 'ypfd.ba', value: 372.75, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 45.45, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.87, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-13', transactions: [
			{symbol: 'ypfd.ba', value: 373, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 47.65, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.87, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-14', transactions: [
			{symbol: 'ypfd.ba', value: 375.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 49.65, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.88, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-15', transactions: [
			{symbol: 'ypfd.ba', value: 374.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 52.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.88, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-16', transactions: [
			{symbol: 'ypfd.ba', value: 374.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 52.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.88, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-17', transactions: [
			{symbol: 'ypfd.ba', value: 361.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 52.25, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.88, quantity: 4000, type: 'En cartera'}
			]},
		],
		[
			{date: '2014-4-21', transactions: [
			{symbol: 'apbr.ba', value: 67, quantity: 1000, type: 'Inversión'},
			
			{symbol: 'apbr.ba', value: 67, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'Inversión'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 286.5, quantity: 50, type: 'Inversión'},
			
			{symbol: 'ypfd.ba', value: 286.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-22', transactions: [
			{symbol: 'apbr.ba', value: 66, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 294, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-23', transactions: [
			{symbol: 'apbr.ba', value: 66.25, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-24', transactions: [
			{symbol: 'apbr.ba', value: 66.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290.25, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-25', transactions: [
			{symbol: 'apbr.ba', value: 65.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 277, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-28', transactions: [
			{symbol: 'apbr.ba', value: 69, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 280.25, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-29', transactions: [
			{symbol: 'apbr.ba', value: 70.25, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 286.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-30', transactions: [
			{symbol: 'apbr.ba', value: 69.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 284.2, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-1', transactions: [
			{symbol: 'apbr.ba', value: 69.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 284.2, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-2', transactions: [
			{symbol: 'apbr.ba', value: 69.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 284.2, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-5', transactions: [
			{symbol: 'apbr.ba', value: 71.1, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 289.3, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-6', transactions: [
			{symbol: 'apbr.ba', value: 74.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 278, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-7', transactions: [
			{symbol: 'apbr.ba', value: 74.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 299, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-8', transactions: [
			{symbol: 'apbr.ba', value: 72.15, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 306, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-9', transactions: [
			{symbol: 'apbr.ba', value: 72.05, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 303, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-12', transactions: [
			{symbol: 'apbr.ba', value: 73.75, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 306, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-13', transactions: [
			{symbol: 'apbr.ba', value: 75, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 301, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-14', transactions: [
			{symbol: 'apbr.ba', value: 76.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.08, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 305.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-15', transactions: [
			{symbol: 'apbr.ba', value: 76, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.09, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 307, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-16', transactions: [
			{symbol: 'apbr.ba', value: 77.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.1, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 304, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-19', transactions: [
			{symbol: 'apbr.ba', value: 81, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.1, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 319.8, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-20', transactions: [
			{symbol: 'apbr.ba', value: 80, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.1, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 321.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-21', transactions: [
			{symbol: 'apbr.ba', value: 81, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 312, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-22', transactions: [
			{symbol: 'apbr.ba', value: 80.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 316, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-23', transactions: [
			{symbol: 'apbr.ba', value: 80.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 326, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-26', transactions: [
			{symbol: 'apbr.ba', value: 81.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 333.1, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-27', transactions: [
			{symbol: 'apbr.ba', value: 81.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 327.9, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-28', transactions: [
			{symbol: 'apbr.ba', value: 82.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 333, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-29', transactions: [
			{symbol: 'apbr.ba', value: 79.95, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 333, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-30', transactions: [
			{symbol: 'apbr.ba', value: 76.8, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 324.6, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-2', transactions: [
			{symbol: 'apbr.ba', value: 74.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.13, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 333, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-3', transactions: [
			{symbol: 'apbr.ba', value: 74.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.13, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 327, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-4', transactions: [
			{symbol: 'apbr.ba', value: 72.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.14, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 329.1, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-5', transactions: [
			{symbol: 'apbr.ba', value: 72.1, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.15, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 325.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-6', transactions: [
			{symbol: 'apbr.ba', value: 78, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.17, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 325.3, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-9', transactions: [
			{symbol: 'apbr.ba', value: 80.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.17, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 340, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-10', transactions: [
			{symbol: 'apbr.ba', value: 79.65, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.16, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 350, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-11', transactions: [
			{symbol: 'apbr.ba', value: 82.45, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.17, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 353.9, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-12', transactions: [
			{symbol: 'apbr.ba', value: 81.7, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.16, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 350, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-13', transactions: [
			{symbol: 'apbr.ba', value: 82.7, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 346.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-16', transactions: [
			{symbol: 'apbr.ba', value: 80.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 303, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-17', transactions: [
			{symbol: 'apbr.ba', value: 82.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.19, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 320.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-18', transactions: [
			{symbol: 'apbr.ba', value: 84.4, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 338, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-19', transactions: [
			{symbol: 'apbr.ba', value: 80.7, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 326, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-20', transactions: [
			{symbol: 'apbr.ba', value: 80.7, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 326, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-23', transactions: [
			{symbol: 'apbr.ba', value: 79, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 357, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-24', transactions: [
			{symbol: 'apbr.ba', value: 77, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 351.05, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-25', transactions: [
			{symbol: 'apbr.ba', value: 74.8, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 351.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-26', transactions: [
			{symbol: 'apbr.ba', value: 75, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 341, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-27', transactions: [
			{symbol: 'apbr.ba', value: 75.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.19, quantity: 3000, type: 'Inversión'},
			
			{symbol: 'dolar.blue', value: 8.19, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 338.8, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-30', transactions: [
			{symbol: 'apbr.ba', value: 74.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.19, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 333, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-1', transactions: [
			{symbol: 'apbr.ba', value: 74.1, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.19, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 340, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-2', transactions: [
			{symbol: 'apbr.ba', value: 73.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 347, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-3', transactions: [
			{symbol: 'apbr.ba', value: 74.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 345.9, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-4', transactions: [
			{symbol: 'apbr.ba', value: 75.25, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 345.45, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-7', transactions: [
			{symbol: 'apbr.ba', value: 73.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 344.8, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-8', transactions: [
			{symbol: 'apbr.ba', value: 73.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 356.75, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-9', transactions: [
			{symbol: 'apbr.ba', value: 73.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 356.75, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-10', transactions: [
			{symbol: 'apbr.ba', value: 75.7, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 376.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-11', transactions: [
			{symbol: 'apbr.ba', value: 75, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 377, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-14', transactions: [
			{symbol: 'apbr.ba', value: 79.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 378, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-15', transactions: [
			{symbol: 'apbr.ba', value: 79.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 370.4, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-16', transactions: [
			{symbol: 'apbr.ba', value: 80.45, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 366.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-17', transactions: [
			{symbol: 'apbr.ba', value: 80, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 360, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-18', transactions: [
			{symbol: 'apbr.ba', value: 83.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 373.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-21', transactions: [
			{symbol: 'apbr.ba', value: 85.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 365, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-22', transactions: [
			{symbol: 'apbr.ba', value: 85.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 365, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-23', transactions: [
			{symbol: 'apbr.ba', value: 84.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 355, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-24', transactions: [
			{symbol: 'apbr.ba', value: 83.4, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 364.2, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-25', transactions: [
			{symbol: 'apbr.ba', value: 83.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.22, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 349.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-28', transactions: [
			{symbol: 'apbr.ba', value: 85, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.22, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 346, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-29', transactions: [
			{symbol: 'apbr.ba', value: 84.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.22, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 369, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-30', transactions: [
			{symbol: 'apbr.ba', value: 84, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 392, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-31', transactions: [
			{symbol: 'apbr.ba', value: 79.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 353, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-1', transactions: [
			{symbol: 'apbr.ba', value: 80.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.22, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 358, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-4', transactions: [
			{symbol: 'apbr.ba', value: 82.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.23, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 352.75, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-5', transactions: [
			{symbol: 'apbr.ba', value: 84.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 346, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-6', transactions: [
			{symbol: 'apbr.ba', value: 85.95, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 352, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-7', transactions: [
			{symbol: 'apbr.ba', value: 85, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 351.9, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-8', transactions: [
			{symbol: 'apbr.ba', value: 83.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 350, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-11', transactions: [
			{symbol: 'apbr.ba', value: 87.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 347.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-12', transactions: [
			{symbol: 'apbr.ba', value: 90, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 356, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-13', transactions: [
			{symbol: 'apbr.ba', value: 88, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 360, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-14', transactions: [
			{symbol: 'apbr.ba', value: 89.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 357, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-15', transactions: [
			{symbol: 'apbr.ba', value: 96.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.27, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 376, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-18', transactions: [
			{symbol: 'apbr.ba', value: 96.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.27, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 376, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-19', transactions: [
			{symbol: 'apbr.ba', value: 101, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.27, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 387.75, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-20', transactions: [
			{symbol: 'apbr.ba', value: 101, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.28, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 387.75, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-21', transactions: [
			{symbol: 'apbr.ba', value: 108.75, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.34, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 393, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-22', transactions: [
			{symbol: 'apbr.ba', value: 105.4, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.35, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 398, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-25', transactions: [
			{symbol: 'apbr.ba', value: 111.05, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 412, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-26', transactions: [
			{symbol: 'apbr.ba', value: 115, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 421, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-27', transactions: [
			{symbol: 'apbr.ba', value: 124, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 430.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-28', transactions: [
			{symbol: 'apbr.ba', value: 123.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 428.95, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-29', transactions: [
			{symbol: 'apbr.ba', value: 127.1, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 422, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-1', transactions: [
			{symbol: 'apbr.ba', value: 132.85, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 432, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-2', transactions: [
			{symbol: 'apbr.ba', value: 135.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 438.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-3', transactions: [
			{symbol: 'apbr.ba', value: 131.35, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 460.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-4', transactions: [
			{symbol: 'apbr.ba', value: 122.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 441, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-5', transactions: [
			{symbol: 'apbr.ba', value: 127.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 452, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-8', transactions: [
			{symbol: 'apbr.ba', value: 122.15, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 458.25, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-9', transactions: [
			{symbol: 'apbr.ba', value: 120.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 461.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-10', transactions: [
			{symbol: 'apbr.ba', value: 116.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 468, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-11', transactions: [
			{symbol: 'apbr.ba', value: 118.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 473, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-12', transactions: [
			{symbol: 'apbr.ba', value: 110.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 476, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-15', transactions: [
			{symbol: 'apbr.ba', value: 111.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 476.1, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-16', transactions: [
			{symbol: 'apbr.ba', value: 118.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 504, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-17', transactions: [
			{symbol: 'apbr.ba', value: 120.95, quantity: 200, type: 'Capitalizado'},
			
			{symbol: 'apbr.ba', value: 120.95, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 504, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-18', transactions: [
			{symbol: 'apbr.ba', value: 118, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 503.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-19', transactions: [
			{symbol: 'apbr.ba', value: 116.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 509, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-22', transactions: [
			{symbol: 'apbr.ba', value: 120, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 533, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-23', transactions: [
			{symbol: 'apbr.ba', value: 115.65, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 532, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-24', transactions: [
			{symbol: 'apbr.ba', value: 117.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 536.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-25', transactions: [
			{symbol: 'apbr.ba', value: 114, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 528.6, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-26', transactions: [
			{symbol: 'apbr.ba', value: 121, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 545.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-29', transactions: [
			{symbol: 'apbr.ba', value: 110.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 551, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-30', transactions: [
			{symbol: 'apbr.ba', value: 108, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 558, quantity: 20, type: 'Capitalizado'},
			
			{symbol: 'ypfd.ba', value: 558, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-1', transactions: [
			{symbol: 'apbr.ba', value: 97.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 503, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-2', transactions: [
			{symbol: 'apbr.ba', value: 96, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 467.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-3', transactions: [
			{symbol: 'apbr.ba', value: 104.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 506, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-6', transactions: [
			{symbol: 'apbr.ba', value: 110, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 477, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-7', transactions: [
			{symbol: 'apbr.ba', value: 117.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 462, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-8', transactions: [
			{symbol: 'apbr.ba', value: 114, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.41, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 457, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-9', transactions: [
			{symbol: 'apbr.ba', value: 113.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.41, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 425.35, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-10', transactions: [
			{symbol: 'apbr.ba', value: 105.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.41, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 417, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-13', transactions: [
			{symbol: 'apbr.ba', value: 105.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.41, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 417, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-14', transactions: [
			{symbol: 'apbr.ba', value: 112.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.41, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 406, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-15', transactions: [
			{symbol: 'apbr.ba', value: 102.9, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.42, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 400, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-16', transactions: [
			{symbol: 'apbr.ba', value: 99.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.42, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 414, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-17', transactions: [
			{symbol: 'apbr.ba', value: 103, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.42, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 430, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-20', transactions: [
			{symbol: 'apbr.ba', value: 99, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.43, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 437.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-21', transactions: [
			{symbol: 'apbr.ba', value: 91.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.43, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 448, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-22', transactions: [
			{symbol: 'apbr.ba', value: 87, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.43, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 435.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-23', transactions: [
			{symbol: 'apbr.ba', value: 81, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.43, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 419.95, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-24', transactions: [
			{symbol: 'apbr.ba', value: 87, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.43, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 428, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-27', transactions: [
			{symbol: 'apbr.ba', value: 76.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 420, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-28', transactions: [
			{symbol: 'apbr.ba', value: 77.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 417, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-29', transactions: [
			{symbol: 'apbr.ba', value: 73.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 413, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-30', transactions: [
			{symbol: 'apbr.ba', value: 75.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 430, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-31', transactions: [
			{symbol: 'apbr.ba', value: 77.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 459.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-3', transactions: [
			{symbol: 'apbr.ba', value: 75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 471, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-4', transactions: [
			{symbol: 'apbr.ba', value: 74.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 447, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-5', transactions: [
			{symbol: 'apbr.ba', value: 73.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 444, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-6', transactions: [
			{symbol: 'apbr.ba', value: 73.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 444, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-7', transactions: [
			{symbol: 'apbr.ba', value: 69.9, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 435, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-10', transactions: [
			{symbol: 'apbr.ba', value: 66.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 436, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-11', transactions: [
			{symbol: 'apbr.ba', value: 66.85, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 430.95, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-12', transactions: [
			{symbol: 'apbr.ba', value: 65.3, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 416.8, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-13', transactions: [
			{symbol: 'apbr.ba', value: 63.25, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 411, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-14', transactions: [
			{symbol: 'apbr.ba', value: 61, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 400, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-17', transactions: [
			{symbol: 'apbr.ba', value: 56.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 400, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-18', transactions: [
			{symbol: 'apbr.ba', value: 57, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 393.05, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-19', transactions: [
			{symbol: 'apbr.ba', value: 57, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 387, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-20', transactions: [
			{symbol: 'apbr.ba', value: 58.95, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 401, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-21', transactions: [
			{symbol: 'apbr.ba', value: 66, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 407.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-24', transactions: [
			{symbol: 'apbr.ba', value: 66, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 407.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-25', transactions: [
			{symbol: 'apbr.ba', value: 63.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 418, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-26', transactions: [
			{symbol: 'apbr.ba', value: 64, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 418.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-27', transactions: [
			{symbol: 'apbr.ba', value: 62.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 414, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-28', transactions: [
			{symbol: 'apbr.ba', value: 57.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 396.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-1', transactions: [
			{symbol: 'apbr.ba', value: 53.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 380, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-2', transactions: [
			{symbol: 'apbr.ba', value: 54, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 369.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-3', transactions: [
			{symbol: 'apbr.ba', value: 57, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 378, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-4', transactions: [
			{symbol: 'apbr.ba', value: 53.65, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 372, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-5', transactions: [
			{symbol: 'apbr.ba', value: 52.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 359, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-8', transactions: [
			{symbol: 'apbr.ba', value: 52.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 359, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-9', transactions: [
			{symbol: 'apbr.ba', value: 48.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 321, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-10', transactions: [
			{symbol: 'apbr.ba', value: 44.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 297, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-11', transactions: [
			{symbol: 'apbr.ba', value: 43.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 310, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-12', transactions: [
			{symbol: 'apbr.ba', value: 41.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 287, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-15', transactions: [
			{symbol: 'apbr.ba', value: 35, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 255, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-16', transactions: [
			{symbol: 'apbr.ba', value: 37.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 267, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-17', transactions: [
			{symbol: 'apbr.ba', value: 38.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 285, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-18', transactions: [
			{symbol: 'apbr.ba', value: 39.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 277.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-19', transactions: [
			{symbol: 'apbr.ba', value: 40.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 276.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-22', transactions: [
			{symbol: 'apbr.ba', value: 43.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 287, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-23', transactions: [
			{symbol: 'apbr.ba', value: 44.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-24', transactions: [
			{symbol: 'apbr.ba', value: 44.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-25', transactions: [
			{symbol: 'apbr.ba', value: 44.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-29', transactions: [
			{symbol: 'apbr.ba', value: 41.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 303, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-30', transactions: [
			{symbol: 'apbr.ba', value: 44.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 315, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-31', transactions: [
			{symbol: 'apbr.ba', value: 44.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 315, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-1', transactions: [
			{symbol: 'apbr.ba', value: 44.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 315, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-2', transactions: [
			{symbol: 'apbr.ba', value: 41.3, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 321, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-5', transactions: [
			{symbol: 'apbr.ba', value: 36.85, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.57, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 298.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-6', transactions: [
			{symbol: 'apbr.ba', value: 36.35, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.58, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 297.25, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-7', transactions: [
			{symbol: 'apbr.ba', value: 38.95, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.59, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 298.95, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-8', transactions: [
			{symbol: 'apbr.ba', value: 41.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.61, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 298, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-9', transactions: [
			{symbol: 'apbr.ba', value: 43.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 299, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-12', transactions: [
			{symbol: 'apbr.ba', value: 40.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 288, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-13', transactions: [
			{symbol: 'apbr.ba', value: 41.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 277, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-14', transactions: [
			{symbol: 'apbr.ba', value: 42.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.62, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 288.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-15', transactions: [
			{symbol: 'apbr.ba', value: 43.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 289, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-16', transactions: [
			{symbol: 'apbr.ba', value: 44.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 297, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-19', transactions: [
			{symbol: 'apbr.ba', value: 43, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 296, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-20', transactions: [
			{symbol: 'apbr.ba', value: 42.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290.1, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-21', transactions: [
			{symbol: 'apbr.ba', value: 44.95, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 293.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-22', transactions: [
			{symbol: 'apbr.ba', value: 46.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 301.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-23', transactions: [
			{symbol: 'apbr.ba', value: 45.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 298, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-26', transactions: [
			{symbol: 'apbr.ba', value: 45.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 299, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-27', transactions: [
			{symbol: 'apbr.ba', value: 46.25, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 308, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-28', transactions: [
			{symbol: 'apbr.ba', value: 42.05, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 297, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-29', transactions: [
			{symbol: 'apbr.ba', value: 39.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 284.6, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-30', transactions: [
			{symbol: 'apbr.ba', value: 37.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 289, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-2', transactions: [
			{symbol: 'apbr.ba', value: 39.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 289, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-3', transactions: [
			{symbol: 'apbr.ba', value: 43.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 302, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-4', transactions: [
			{symbol: 'apbr.ba', value: 43.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 299.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-5', transactions: [
			{symbol: 'apbr.ba', value: 43.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 305, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-6', transactions: [
			{symbol: 'apbr.ba', value: 40, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 306, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-9', transactions: [
			{symbol: 'apbr.ba', value: 41.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 305.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-10', transactions: [
			{symbol: 'apbr.ba', value: 38.65, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 303, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-11', transactions: [
			{symbol: 'apbr.ba', value: 39, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 308, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-12', transactions: [
			{symbol: 'apbr.ba', value: 40.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 317.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-13', transactions: [
			{symbol: 'apbr.ba', value: 41.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 330, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-16', transactions: [
			{symbol: 'apbr.ba', value: 41.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 330, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-17', transactions: [
			{symbol: 'apbr.ba', value: 41.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 330, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-18', transactions: [
			{symbol: 'apbr.ba', value: 41.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 328.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-19', transactions: [
			{symbol: 'apbr.ba', value: 40.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 321.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-20', transactions: [
			{symbol: 'apbr.ba', value: 40.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 314, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-23', transactions: [
			{symbol: 'apbr.ba', value: 38.55, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.72, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 307, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-24', transactions: [
			{symbol: 'apbr.ba', value: 40.3, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.72, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 304, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-25', transactions: [
			{symbol: 'apbr.ba', value: 38.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.72, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 306.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-26', transactions: [
			{symbol: 'apbr.ba', value: 37.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.72, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 296.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-27', transactions: [
			{symbol: 'apbr.ba', value: 39.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 308, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-2', transactions: [
			{symbol: 'apbr.ba', value: 38.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 305.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-3', transactions: [
			{symbol: 'apbr.ba', value: 38.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 312, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-4', transactions: [
			{symbol: 'apbr.ba', value: 37, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 315.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-5', transactions: [
			{symbol: 'apbr.ba', value: 36.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 320, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-6', transactions: [
			{symbol: 'apbr.ba', value: 35.55, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 310, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-9', transactions: [
			{symbol: 'apbr.ba', value: 33.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.78, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 311, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-10', transactions: [
			{symbol: 'apbr.ba', value: 31.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.78, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 305.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-11', transactions: [
			{symbol: 'apbr.ba', value: 32.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.78, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 312, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-12', transactions: [
			{symbol: 'apbr.ba', value: 31, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 319.05, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-13', transactions: [
			{symbol: 'apbr.ba', value: 29.95, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 320, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-16', transactions: [
			{symbol: 'apbr.ba', value: 31.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 335.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-17', transactions: [
			{symbol: 'apbr.ba', value: 32.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 337.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-18', transactions: [
			{symbol: 'apbr.ba', value: 34.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 347, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-19', transactions: [
			{symbol: 'apbr.ba', value: 32.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 346.3, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-20', transactions: [
			{symbol: 'apbr.ba', value: 34, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 355.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-23', transactions: [
			{symbol: 'apbr.ba', value: 34, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 355.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-24', transactions: [
			{symbol: 'apbr.ba', value: 34, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 355.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-25', transactions: [
			{symbol: 'apbr.ba', value: 36.3, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 344.95, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-26', transactions: [
			{symbol: 'apbr.ba', value: 34.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 330.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-27', transactions: [
			{symbol: 'apbr.ba', value: 34.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 334, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-30', transactions: [
			{symbol: 'apbr.ba', value: 36.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 335.6, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-31', transactions: [
			{symbol: 'apbr.ba', value: 37.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 331.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-1', transactions: [
			{symbol: 'apbr.ba', value: 39, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 338, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-2', transactions: [
			{symbol: 'apbr.ba', value: 39, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 338, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-3', transactions: [
			{symbol: 'apbr.ba', value: 39, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 338, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-6', transactions: [
			{symbol: 'apbr.ba', value: 41.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.85, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 356.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-7', transactions: [
			{symbol: 'apbr.ba', value: 42, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.78, quantity: 5000, type: 'Capitalizado'},
			
			{symbol: 'dolar.blue', value: 8.85, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 358.2, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-8', transactions: [
			{symbol: 'apbr.ba', value: 41.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.85, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 356, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-9', transactions: [
			{symbol: 'apbr.ba', value: 44.25, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.85, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 364, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-10', transactions: [
			{symbol: 'apbr.ba', value: 45.45, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.87, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 372.75, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-13', transactions: [
			{symbol: 'apbr.ba', value: 47.65, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.87, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 373, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-14', transactions: [
			{symbol: 'apbr.ba', value: 49.65, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.88, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 375.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-15', transactions: [
			{symbol: 'apbr.ba', value: 52.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.88, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 374.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-16', transactions: [
			{symbol: 'apbr.ba', value: 52.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.88, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 374.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-17', transactions: [
			{symbol: 'apbr.ba', value: 52.25, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.88, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 361.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-20', transactions: [
			{symbol: 'apbr.ba', value: 52.25, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.88, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 361.5, quantity: 30, type: 'En cartera'}
			]}
		],
		[
			{date: '2014-4-21', transactions: [
			{symbol: 'ypfd.ba', value: 286.5, quantity: 150, type: 'Inversión'},
			
			{symbol: 'ypfd.ba', value: 286.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 67, quantity: 500, type: 'Inversión'},
			
			{symbol: 'apbr.ba', value: 67, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'Inversión'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-22', transactions: [
			{symbol: 'ypfd.ba', value: 294, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-23', transactions: [
			{symbol: 'ypfd.ba', value: 290, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66.25, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-24', transactions: [
			{symbol: 'ypfd.ba', value: 290.25, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-25', transactions: [
			{symbol: 'ypfd.ba', value: 277, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 65.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-28', transactions: [
			{symbol: 'ypfd.ba', value: 280.25, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 69, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-29', transactions: [
			{symbol: 'ypfd.ba', value: 286.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 70.25, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-4-30', transactions: [
			{symbol: 'ypfd.ba', value: 284.2, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 69.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-1', transactions: [
			{symbol: 'ypfd.ba', value: 284.2, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 69.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-2', transactions: [
			{symbol: 'ypfd.ba', value: 284.2, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 69.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-5', transactions: [
			{symbol: 'ypfd.ba', value: 289.3, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 71.1, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-6', transactions: [
			{symbol: 'ypfd.ba', value: 278, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-7', transactions: [
			{symbol: 'ypfd.ba', value: 299, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-8', transactions: [
			{symbol: 'ypfd.ba', value: 306, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 72.15, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-9', transactions: [
			{symbol: 'ypfd.ba', value: 303, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 72.05, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-12', transactions: [
			{symbol: 'ypfd.ba', value: 306, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.75, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-13', transactions: [
			{symbol: 'ypfd.ba', value: 301, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.07, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-14', transactions: [
			{symbol: 'ypfd.ba', value: 305.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 76.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.08, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-15', transactions: [
			{symbol: 'ypfd.ba', value: 307, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 76, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.09, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-16', transactions: [
			{symbol: 'ypfd.ba', value: 304, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 77.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.1, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-19', transactions: [
			{symbol: 'ypfd.ba', value: 319.8, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.1, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-20', transactions: [
			{symbol: 'ypfd.ba', value: 321.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.1, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-21', transactions: [
			{symbol: 'ypfd.ba', value: 312, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-22', transactions: [
			{symbol: 'ypfd.ba', value: 316, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.6, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-23', transactions: [
			{symbol: 'ypfd.ba', value: 326, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-26', transactions: [
			{symbol: 'ypfd.ba', value: 333.1, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-27', transactions: [
			{symbol: 'ypfd.ba', value: 327.9, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-28', transactions: [
			{symbol: 'ypfd.ba', value: 333, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 82.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-29', transactions: [
			{symbol: 'ypfd.ba', value: 333, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79.95, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-5-30', transactions: [
			{symbol: 'ypfd.ba', value: 324.6, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 76.8, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.12, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-2', transactions: [
			{symbol: 'ypfd.ba', value: 333, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.13, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-3', transactions: [
			{symbol: 'ypfd.ba', value: 327, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.13, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-4', transactions: [
			{symbol: 'ypfd.ba', value: 329.1, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 72.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.14, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-5', transactions: [
			{symbol: 'ypfd.ba', value: 325.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 72.1, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.15, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-6', transactions: [
			{symbol: 'ypfd.ba', value: 325.3, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 78, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.17, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-9', transactions: [
			{symbol: 'ypfd.ba', value: 340, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.17, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-10', transactions: [
			{symbol: 'ypfd.ba', value: 350, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79.65, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.16, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-11', transactions: [
			{symbol: 'ypfd.ba', value: 353.9, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 82.45, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.17, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-12', transactions: [
			{symbol: 'ypfd.ba', value: 350, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81.7, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.16, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-13', transactions: [
			{symbol: 'ypfd.ba', value: 346.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 82.7, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-16', transactions: [
			{symbol: 'ypfd.ba', value: 303, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.6, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-17', transactions: [
			{symbol: 'ypfd.ba', value: 320.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 82.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.19, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-18', transactions: [
			{symbol: 'ypfd.ba', value: 338, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 84.4, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-19', transactions: [
			{symbol: 'ypfd.ba', value: 326, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.7, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-20', transactions: [
			{symbol: 'ypfd.ba', value: 326, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.7, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-23', transactions: [
			{symbol: 'ypfd.ba', value: 357, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-24', transactions: [
			{symbol: 'ypfd.ba', value: 351.05, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 77, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-25', transactions: [
			{symbol: 'ypfd.ba', value: 351.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.8, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-26', transactions: [
			{symbol: 'ypfd.ba', value: 341, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 2000, type: 'En cartera'}
			]},
			{date: '2014-6-27', transactions: [
			{symbol: 'ypfd.ba', value: 338.8, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.19, quantity: 3000, type: 'Inversión'},
			
			{symbol: 'dolar.oficial', value: 8.19, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-6-30', transactions: [
			{symbol: 'ypfd.ba', value: 333, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.19, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-1', transactions: [
			{symbol: 'ypfd.ba', value: 340, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.1, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.19, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-2', transactions: [
			{symbol: 'ypfd.ba', value: 347, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-3', transactions: [
			{symbol: 'ypfd.ba', value: 345.9, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-4', transactions: [
			{symbol: 'ypfd.ba', value: 345.45, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75.25, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-7', transactions: [
			{symbol: 'ypfd.ba', value: 344.8, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-8', transactions: [
			{symbol: 'ypfd.ba', value: 356.75, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-9', transactions: [
			{symbol: 'ypfd.ba', value: 356.75, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-10', transactions: [
			{symbol: 'ypfd.ba', value: 376.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75.7, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-11', transactions: [
			{symbol: 'ypfd.ba', value: 377, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-14', transactions: [
			{symbol: 'ypfd.ba', value: 378, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-15', transactions: [
			{symbol: 'ypfd.ba', value: 370.4, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-16', transactions: [
			{symbol: 'ypfd.ba', value: 366.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.45, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-17', transactions: [
			{symbol: 'ypfd.ba', value: 360, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-18', transactions: [
			{symbol: 'ypfd.ba', value: 373.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 83.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-21', transactions: [
			{symbol: 'ypfd.ba', value: 365, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 85.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-22', transactions: [
			{symbol: 'ypfd.ba', value: 365, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 85.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-23', transactions: [
			{symbol: 'ypfd.ba', value: 355, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 84.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-24', transactions: [
			{symbol: 'ypfd.ba', value: 364.2, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 83.4, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-25', transactions: [
			{symbol: 'ypfd.ba', value: 349.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 83.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.22, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-28', transactions: [
			{symbol: 'ypfd.ba', value: 346, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 85, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.22, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-29', transactions: [
			{symbol: 'ypfd.ba', value: 369, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 84.2, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.22, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-30', transactions: [
			{symbol: 'ypfd.ba', value: 392, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 84, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.2, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-7-31', transactions: [
			{symbol: 'ypfd.ba', value: 353, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 79.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.21, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-1', transactions: [
			{symbol: 'ypfd.ba', value: 358, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 80.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.22, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-4', transactions: [
			{symbol: 'ypfd.ba', value: 352.75, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 82.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.23, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-5', transactions: [
			{symbol: 'ypfd.ba', value: 346, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 84.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-6', transactions: [
			{symbol: 'ypfd.ba', value: 352, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 85.95, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-7', transactions: [
			{symbol: 'ypfd.ba', value: 351.9, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 85, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-8', transactions: [
			{symbol: 'ypfd.ba', value: 350, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 83.5, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-11', transactions: [
			{symbol: 'ypfd.ba', value: 347.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 87.6, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-12', transactions: [
			{symbol: 'ypfd.ba', value: 356, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 90, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-13', transactions: [
			{symbol: 'ypfd.ba', value: 360, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 88, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-14', transactions: [
			{symbol: 'ypfd.ba', value: 357, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 89.9, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.26, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-15', transactions: [
			{symbol: 'ypfd.ba', value: 376, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 96.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.27, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-18', transactions: [
			{symbol: 'ypfd.ba', value: 376, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 96.3, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.27, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-19', transactions: [
			{symbol: 'ypfd.ba', value: 387.75, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 101, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.27, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-20', transactions: [
			{symbol: 'ypfd.ba', value: 387.75, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 101, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.28, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-21', transactions: [
			{symbol: 'ypfd.ba', value: 393, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 108.75, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.34, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-22', transactions: [
			{symbol: 'ypfd.ba', value: 398, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 105.4, quantity: 500, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.35, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-25', transactions: [
			{symbol: 'ypfd.ba', value: 412, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 111.05, quantity: 200, type: 'Capitalizado'},
			
			{symbol: 'apbr.ba', value: 111.05, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-26', transactions: [
			{symbol: 'ypfd.ba', value: 421, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 115, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-27', transactions: [
			{symbol: 'ypfd.ba', value: 430.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 124, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-28', transactions: [
			{symbol: 'ypfd.ba', value: 428.95, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 123.5, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-8-29', transactions: [
			{symbol: 'ypfd.ba', value: 422, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 127.1, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-1', transactions: [
			{symbol: 'ypfd.ba', value: 432, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 132.85, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-2', transactions: [
			{symbol: 'ypfd.ba', value: 438.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 135.2, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-3', transactions: [
			{symbol: 'ypfd.ba', value: 460.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 131.35, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-4', transactions: [
			{symbol: 'ypfd.ba', value: 441, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 122.5, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-5', transactions: [
			{symbol: 'ypfd.ba', value: 452, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 127.2, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-8', transactions: [
			{symbol: 'ypfd.ba', value: 458.25, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 122.15, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-9', transactions: [
			{symbol: 'ypfd.ba', value: 461.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 120.9, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-10', transactions: [
			{symbol: 'ypfd.ba', value: 468, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 116.5, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-11', transactions: [
			{symbol: 'ypfd.ba', value: 473, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 118.6, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-12', transactions: [
			{symbol: 'ypfd.ba', value: 476, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 110.6, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-15', transactions: [
			{symbol: 'ypfd.ba', value: 476.1, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 111.6, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-16', transactions: [
			{symbol: 'ypfd.ba', value: 504, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 118.9, quantity: 300, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-17', transactions: [
			{symbol: 'ypfd.ba', value: 504, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 120.95, quantity: 200, type: 'Capitalizado'},
			
			{symbol: 'apbr.ba', value: 120.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-18', transactions: [
			{symbol: 'ypfd.ba', value: 503.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 118, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.37, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-19', transactions: [
			{symbol: 'ypfd.ba', value: 509, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 116.75, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-22', transactions: [
			{symbol: 'ypfd.ba', value: 533, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 120, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-23', transactions: [
			{symbol: 'ypfd.ba', value: 532, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 115.65, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-24', transactions: [
			{symbol: 'ypfd.ba', value: 536.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 117.4, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-25', transactions: [
			{symbol: 'ypfd.ba', value: 528.6, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 114, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-26', transactions: [
			{symbol: 'ypfd.ba', value: 545.5, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 121, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.38, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-29', transactions: [
			{symbol: 'ypfd.ba', value: 551, quantity: 150, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 110.8, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-9-30', transactions: [
			{symbol: 'ypfd.ba', value: 558, quantity: 50, type: 'Capitalizado'},
			
			{symbol: 'ypfd.ba', value: 558, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 108, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-1', transactions: [
			{symbol: 'ypfd.ba', value: 503, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 97.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-2', transactions: [
			{symbol: 'ypfd.ba', value: 467.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 96, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-3', transactions: [
			{symbol: 'ypfd.ba', value: 506, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 104.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-6', transactions: [
			{symbol: 'ypfd.ba', value: 477, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 110, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-7', transactions: [
			{symbol: 'ypfd.ba', value: 462, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 117.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.39, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-8', transactions: [
			{symbol: 'ypfd.ba', value: 457, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 114, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.41, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-9', transactions: [
			{symbol: 'ypfd.ba', value: 425.35, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 113.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.41, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-10', transactions: [
			{symbol: 'ypfd.ba', value: 417, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 105.1, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.41, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-13', transactions: [
			{symbol: 'ypfd.ba', value: 417, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 105.1, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.41, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-14', transactions: [
			{symbol: 'ypfd.ba', value: 406, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 112.75, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.41, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-15', transactions: [
			{symbol: 'ypfd.ba', value: 400, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 102.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.42, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-16', transactions: [
			{symbol: 'ypfd.ba', value: 414, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 99.4, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.42, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-17', transactions: [
			{symbol: 'ypfd.ba', value: 430, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 103, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.42, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-20', transactions: [
			{symbol: 'ypfd.ba', value: 437.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 99, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.43, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-21', transactions: [
			{symbol: 'ypfd.ba', value: 448, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 91.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.43, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-22', transactions: [
			{symbol: 'ypfd.ba', value: 435.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 87, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.43, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-23', transactions: [
			{symbol: 'ypfd.ba', value: 419.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 81, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.43, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-24', transactions: [
			{symbol: 'ypfd.ba', value: 428, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 87, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.43, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-27', transactions: [
			{symbol: 'ypfd.ba', value: 420, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 76.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-28', transactions: [
			{symbol: 'ypfd.ba', value: 417, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 77.6, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-29', transactions: [
			{symbol: 'ypfd.ba', value: 413, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-30', transactions: [
			{symbol: 'ypfd.ba', value: 430, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75.75, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-10-31', transactions: [
			{symbol: 'ypfd.ba', value: 459.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 77.8, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-3', transactions: [
			{symbol: 'ypfd.ba', value: 471, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 75, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-4', transactions: [
			{symbol: 'ypfd.ba', value: 447, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 74.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-5', transactions: [
			{symbol: 'ypfd.ba', value: 444, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.4, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-6', transactions: [
			{symbol: 'ypfd.ba', value: 444, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 73.4, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-7', transactions: [
			{symbol: 'ypfd.ba', value: 435, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 69.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-10', transactions: [
			{symbol: 'ypfd.ba', value: 436, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-11', transactions: [
			{symbol: 'ypfd.ba', value: 430.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66.85, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-12', transactions: [
			{symbol: 'ypfd.ba', value: 416.8, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 65.3, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-13', transactions: [
			{symbol: 'ypfd.ba', value: 411, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 63.25, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-14', transactions: [
			{symbol: 'ypfd.ba', value: 400, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 61, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-17', transactions: [
			{symbol: 'ypfd.ba', value: 400, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 56.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.44, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-18', transactions: [
			{symbol: 'ypfd.ba', value: 393.05, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 57, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-19', transactions: [
			{symbol: 'ypfd.ba', value: 387, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 57, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-20', transactions: [
			{symbol: 'ypfd.ba', value: 401, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 58.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-21', transactions: [
			{symbol: 'ypfd.ba', value: 407.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-24', transactions: [
			{symbol: 'ypfd.ba', value: 407.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 66, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-25', transactions: [
			{symbol: 'ypfd.ba', value: 418, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 63.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-26', transactions: [
			{symbol: 'ypfd.ba', value: 418.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 64, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-27', transactions: [
			{symbol: 'ypfd.ba', value: 414, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 62.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-11-28', transactions: [
			{symbol: 'ypfd.ba', value: 396.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 57.6, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-1', transactions: [
			{symbol: 'ypfd.ba', value: 380, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 53.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-2', transactions: [
			{symbol: 'ypfd.ba', value: 369.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 54, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-3', transactions: [
			{symbol: 'ypfd.ba', value: 378, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 57, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-4', transactions: [
			{symbol: 'ypfd.ba', value: 372, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 53.65, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-5', transactions: [
			{symbol: 'ypfd.ba', value: 359, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 52.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-8', transactions: [
			{symbol: 'ypfd.ba', value: 359, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 52.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-9', transactions: [
			{symbol: 'ypfd.ba', value: 321, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 48.1, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.45, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-10', transactions: [
			{symbol: 'ypfd.ba', value: 297, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-11', transactions: [
			{symbol: 'ypfd.ba', value: 310, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.8, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-12', transactions: [
			{symbol: 'ypfd.ba', value: 287, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.15, quantity: 100, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-15', transactions: [
			{symbol: 'ypfd.ba', value: 255, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 35, quantity: 150, type: 'Inversión'},
			
			{symbol: 'apbr.ba', value: 35, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-16', transactions: [
			{symbol: 'ypfd.ba', value: 267, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 37.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-17', transactions: [
			{symbol: 'ypfd.ba', value: 285, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.48, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-18', transactions: [
			{symbol: 'ypfd.ba', value: 277.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-19', transactions: [
			{symbol: 'ypfd.ba', value: 276.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-22', transactions: [
			{symbol: 'ypfd.ba', value: 287, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-23', transactions: [
			{symbol: 'ypfd.ba', value: 290, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-24', transactions: [
			{symbol: 'ypfd.ba', value: 290, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-25', transactions: [
			{symbol: 'ypfd.ba', value: 290, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-29', transactions: [
			{symbol: 'ypfd.ba', value: 303, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-30', transactions: [
			{symbol: 'ypfd.ba', value: 315, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2014-12-31', transactions: [
			{symbol: 'ypfd.ba', value: 315, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-1', transactions: [
			{symbol: 'ypfd.ba', value: 315, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-2', transactions: [
			{symbol: 'ypfd.ba', value: 321, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.3, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.49, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-5', transactions: [
			{symbol: 'ypfd.ba', value: 298.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 36.85, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.57, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-6', transactions: [
			{symbol: 'ypfd.ba', value: 297.25, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 36.35, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.58, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-7', transactions: [
			{symbol: 'ypfd.ba', value: 298.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.95, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.59, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-8', transactions: [
			{symbol: 'ypfd.ba', value: 298, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.61, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-9', transactions: [
			{symbol: 'ypfd.ba', value: 299, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-12', transactions: [
			{symbol: 'ypfd.ba', value: 288, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-13', transactions: [
			{symbol: 'ypfd.ba', value: 277, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.2, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-14', transactions: [
			{symbol: 'ypfd.ba', value: 288.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 42.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.62, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-15', transactions: [
			{symbol: 'ypfd.ba', value: 289, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.2, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-16', transactions: [
			{symbol: 'ypfd.ba', value: 297, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-19', transactions: [
			{symbol: 'ypfd.ba', value: 296, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-20', transactions: [
			{symbol: 'ypfd.ba', value: 290.1, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 42.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-21', transactions: [
			{symbol: 'ypfd.ba', value: 293.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.95, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-22', transactions: [
			{symbol: 'ypfd.ba', value: 301.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 46.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-23', transactions: [
			{symbol: 'ypfd.ba', value: 298, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 45.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-26', transactions: [
			{symbol: 'ypfd.ba', value: 299, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 45.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-27', transactions: [
			{symbol: 'ypfd.ba', value: 308, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 46.25, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-28', transactions: [
			{symbol: 'ypfd.ba', value: 297, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 42.05, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-29', transactions: [
			{symbol: 'ypfd.ba', value: 284.6, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-1-30', transactions: [
			{symbol: 'ypfd.ba', value: 289, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 37.75, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-2', transactions: [
			{symbol: 'ypfd.ba', value: 289, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39.2, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-3', transactions: [
			{symbol: 'ypfd.ba', value: 302, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-4', transactions: [
			{symbol: 'ypfd.ba', value: 299.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.8, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-5', transactions: [
			{symbol: 'ypfd.ba', value: 305, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 43.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-6', transactions: [
			{symbol: 'ypfd.ba', value: 306, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-9', transactions: [
			{symbol: 'ypfd.ba', value: 305.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-10', transactions: [
			{symbol: 'ypfd.ba', value: 303, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.65, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-11', transactions: [
			{symbol: 'ypfd.ba', value: 308, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-12', transactions: [
			{symbol: 'ypfd.ba', value: 317.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-13', transactions: [
			{symbol: 'ypfd.ba', value: 330, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-16', transactions: [
			{symbol: 'ypfd.ba', value: 330, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-17', transactions: [
			{symbol: 'ypfd.ba', value: 330, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-18', transactions: [
			{symbol: 'ypfd.ba', value: 328.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-19', transactions: [
			{symbol: 'ypfd.ba', value: 321.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-20', transactions: [
			{symbol: 'ypfd.ba', value: 314, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.63, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-23', transactions: [
			{symbol: 'ypfd.ba', value: 307, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.55, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.72, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-24', transactions: [
			{symbol: 'ypfd.ba', value: 304, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 40.3, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.72, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-25', transactions: [
			{symbol: 'ypfd.ba', value: 306.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.72, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-26', transactions: [
			{symbol: 'ypfd.ba', value: 296.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 37.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.72, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-2-27', transactions: [
			{symbol: 'ypfd.ba', value: 308, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-2', transactions: [
			{symbol: 'ypfd.ba', value: 305.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-3', transactions: [
			{symbol: 'ypfd.ba', value: 312, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 38.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-4', transactions: [
			{symbol: 'ypfd.ba', value: 315.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 37, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-5', transactions: [
			{symbol: 'ypfd.ba', value: 320, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 36.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-6', transactions: [
			{symbol: 'ypfd.ba', value: 310, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 35.55, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.75, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-9', transactions: [
			{symbol: 'ypfd.ba', value: 311, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 33.5, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.78, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-10', transactions: [
			{symbol: 'ypfd.ba', value: 305.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 31.75, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.78, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-11', transactions: [
			{symbol: 'ypfd.ba', value: 312, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 32.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.78, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-12', transactions: [
			{symbol: 'ypfd.ba', value: 319.05, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 31, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-13', transactions: [
			{symbol: 'ypfd.ba', value: 320, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 29.95, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-16', transactions: [
			{symbol: 'ypfd.ba', value: 335.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 31.2, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-17', transactions: [
			{symbol: 'ypfd.ba', value: 337.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 32.6, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-18', transactions: [
			{symbol: 'ypfd.ba', value: 347, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-19', transactions: [
			{symbol: 'ypfd.ba', value: 346.3, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 32.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-20', transactions: [
			{symbol: 'ypfd.ba', value: 355.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-23', transactions: [
			{symbol: 'ypfd.ba', value: 355.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-24', transactions: [
			{symbol: 'ypfd.ba', value: 355.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.8, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-25', transactions: [
			{symbol: 'ypfd.ba', value: 344.95, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 36.3, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-26', transactions: [
			{symbol: 'ypfd.ba', value: 330.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34.75, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-27', transactions: [
			{symbol: 'ypfd.ba', value: 334, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 34.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-30', transactions: [
			{symbol: 'ypfd.ba', value: 335.6, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 36.1, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-3-31', transactions: [
			{symbol: 'ypfd.ba', value: 331.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 37.15, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-4-1', transactions: [
			{symbol: 'ypfd.ba', value: 338, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-4-2', transactions: [
			{symbol: 'ypfd.ba', value: 338, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-4-3', transactions: [
			{symbol: 'ypfd.ba', value: 338, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 39, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.84, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-4-6', transactions: [
			{symbol: 'ypfd.ba', value: 356.9, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.4, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.85, quantity: 5000, type: 'En cartera'}
			]},
			{date: '2015-4-7', transactions: [
			{symbol: 'ypfd.ba', value: 358.2, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 42, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.78, quantity: 5000, type: 'Capitalizado'},
			
			{symbol: 'dolar.oficial', value: 8.85, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-8', transactions: [
			{symbol: 'ypfd.ba', value: 356, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 41.2, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.85, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-9', transactions: [
			{symbol: 'ypfd.ba', value: 364, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 44.25, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.85, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-10', transactions: [
			{symbol: 'ypfd.ba', value: 372.75, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 45.45, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.87, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-13', transactions: [
			{symbol: 'ypfd.ba', value: 373, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 47.65, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.87, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-14', transactions: [
			{symbol: 'ypfd.ba', value: 375.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 49.65, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.88, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-15', transactions: [
			{symbol: 'ypfd.ba', value: 374.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 52.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.88, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-16', transactions: [
			{symbol: 'ypfd.ba', value: 374.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 52.7, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.88, quantity: 4000, type: 'En cartera'}
			]},
			{date: '2015-4-17', transactions: [
			{symbol: 'ypfd.ba', value: 361.5, quantity: 100, type: 'En cartera'},
			
			{symbol: 'apbr.ba', value: 52.25, quantity: 250, type: 'En cartera'},
			
			{symbol: 'dolar.oficial', value: 8.88, quantity: 4000, type: 'En cartera'}
			]},
		],
		[
			{date: '2014-4-21', transactions: [
			{symbol: 'apbr.ba', value: 67, quantity: 1000, type: 'Inversión'},
			
			{symbol: 'apbr.ba', value: 67, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'Inversión'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 286.5, quantity: 50, type: 'Inversión'},
			
			{symbol: 'ypfd.ba', value: 286.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-22', transactions: [
			{symbol: 'apbr.ba', value: 66, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 294, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-23', transactions: [
			{symbol: 'apbr.ba', value: 66.25, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-24', transactions: [
			{symbol: 'apbr.ba', value: 66.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290.25, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-25', transactions: [
			{symbol: 'apbr.ba', value: 65.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 277, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-28', transactions: [
			{symbol: 'apbr.ba', value: 69, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 280.25, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-29', transactions: [
			{symbol: 'apbr.ba', value: 70.25, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 286.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-4-30', transactions: [
			{symbol: 'apbr.ba', value: 69.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 284.2, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-1', transactions: [
			{symbol: 'apbr.ba', value: 69.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 284.2, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-2', transactions: [
			{symbol: 'apbr.ba', value: 69.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 284.2, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-5', transactions: [
			{symbol: 'apbr.ba', value: 71.1, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 289.3, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-6', transactions: [
			{symbol: 'apbr.ba', value: 74.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 278, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-7', transactions: [
			{symbol: 'apbr.ba', value: 74.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 299, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-8', transactions: [
			{symbol: 'apbr.ba', value: 72.15, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 306, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-9', transactions: [
			{symbol: 'apbr.ba', value: 72.05, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 303, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-12', transactions: [
			{symbol: 'apbr.ba', value: 73.75, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 306, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-13', transactions: [
			{symbol: 'apbr.ba', value: 75, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.07, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 301, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-14', transactions: [
			{symbol: 'apbr.ba', value: 76.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.08, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 305.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-15', transactions: [
			{symbol: 'apbr.ba', value: 76, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.09, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 307, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-16', transactions: [
			{symbol: 'apbr.ba', value: 77.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.1, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 304, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-19', transactions: [
			{symbol: 'apbr.ba', value: 81, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.1, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 319.8, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-20', transactions: [
			{symbol: 'apbr.ba', value: 80, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.1, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 321.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-21', transactions: [
			{symbol: 'apbr.ba', value: 81, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 312, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-22', transactions: [
			{symbol: 'apbr.ba', value: 80.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 316, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-23', transactions: [
			{symbol: 'apbr.ba', value: 80.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 326, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-26', transactions: [
			{symbol: 'apbr.ba', value: 81.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 333.1, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-27', transactions: [
			{symbol: 'apbr.ba', value: 81.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 327.9, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-28', transactions: [
			{symbol: 'apbr.ba', value: 82.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 333, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-29', transactions: [
			{symbol: 'apbr.ba', value: 79.95, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 333, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-5-30', transactions: [
			{symbol: 'apbr.ba', value: 76.8, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.12, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 324.6, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-2', transactions: [
			{symbol: 'apbr.ba', value: 74.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.13, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 333, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-3', transactions: [
			{symbol: 'apbr.ba', value: 74.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.13, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 327, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-4', transactions: [
			{symbol: 'apbr.ba', value: 72.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.14, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 329.1, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-5', transactions: [
			{symbol: 'apbr.ba', value: 72.1, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.15, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 325.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-6', transactions: [
			{symbol: 'apbr.ba', value: 78, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.17, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 325.3, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-9', transactions: [
			{symbol: 'apbr.ba', value: 80.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.17, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 340, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-10', transactions: [
			{symbol: 'apbr.ba', value: 79.65, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.16, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 350, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-11', transactions: [
			{symbol: 'apbr.ba', value: 82.45, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.17, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 353.9, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-12', transactions: [
			{symbol: 'apbr.ba', value: 81.7, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.16, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 350, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-13', transactions: [
			{symbol: 'apbr.ba', value: 82.7, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 346.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-16', transactions: [
			{symbol: 'apbr.ba', value: 80.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 303, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-17', transactions: [
			{symbol: 'apbr.ba', value: 82.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.19, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 320.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-18', transactions: [
			{symbol: 'apbr.ba', value: 84.4, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 338, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-19', transactions: [
			{symbol: 'apbr.ba', value: 80.7, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 326, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-20', transactions: [
			{symbol: 'apbr.ba', value: 80.7, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 326, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-23', transactions: [
			{symbol: 'apbr.ba', value: 79, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 357, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-24', transactions: [
			{symbol: 'apbr.ba', value: 77, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 351.05, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-25', transactions: [
			{symbol: 'apbr.ba', value: 74.8, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 351.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-26', transactions: [
			{symbol: 'apbr.ba', value: 75, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 2000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 341, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-27', transactions: [
			{symbol: 'apbr.ba', value: 75.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.19, quantity: 3000, type: 'Inversión'},
			
			{symbol: 'dolar.blue', value: 8.19, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 338.8, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-6-30', transactions: [
			{symbol: 'apbr.ba', value: 74.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.19, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 333, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-1', transactions: [
			{symbol: 'apbr.ba', value: 74.1, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.19, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 340, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-2', transactions: [
			{symbol: 'apbr.ba', value: 73.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 347, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-3', transactions: [
			{symbol: 'apbr.ba', value: 74.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 345.9, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-4', transactions: [
			{symbol: 'apbr.ba', value: 75.25, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 345.45, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-7', transactions: [
			{symbol: 'apbr.ba', value: 73.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 344.8, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-8', transactions: [
			{symbol: 'apbr.ba', value: 73.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 356.75, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-9', transactions: [
			{symbol: 'apbr.ba', value: 73.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 356.75, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-10', transactions: [
			{symbol: 'apbr.ba', value: 75.7, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 376.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-11', transactions: [
			{symbol: 'apbr.ba', value: 75, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 377, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-14', transactions: [
			{symbol: 'apbr.ba', value: 79.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 378, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-15', transactions: [
			{symbol: 'apbr.ba', value: 79.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 370.4, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-16', transactions: [
			{symbol: 'apbr.ba', value: 80.45, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 366.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-17', transactions: [
			{symbol: 'apbr.ba', value: 80, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 360, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-18', transactions: [
			{symbol: 'apbr.ba', value: 83.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 373.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-21', transactions: [
			{symbol: 'apbr.ba', value: 85.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 365, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-22', transactions: [
			{symbol: 'apbr.ba', value: 85.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 365, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-23', transactions: [
			{symbol: 'apbr.ba', value: 84.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 355, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-24', transactions: [
			{symbol: 'apbr.ba', value: 83.4, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 364.2, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-25', transactions: [
			{symbol: 'apbr.ba', value: 83.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.22, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 349.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-28', transactions: [
			{symbol: 'apbr.ba', value: 85, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.22, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 346, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-29', transactions: [
			{symbol: 'apbr.ba', value: 84.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.22, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 369, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-30', transactions: [
			{symbol: 'apbr.ba', value: 84, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.2, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 392, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-7-31', transactions: [
			{symbol: 'apbr.ba', value: 79.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.21, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 353, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-1', transactions: [
			{symbol: 'apbr.ba', value: 80.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.22, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 358, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-4', transactions: [
			{symbol: 'apbr.ba', value: 82.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.23, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 352.75, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-5', transactions: [
			{symbol: 'apbr.ba', value: 84.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 346, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-6', transactions: [
			{symbol: 'apbr.ba', value: 85.95, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 352, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-7', transactions: [
			{symbol: 'apbr.ba', value: 85, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 351.9, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-8', transactions: [
			{symbol: 'apbr.ba', value: 83.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 350, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-11', transactions: [
			{symbol: 'apbr.ba', value: 87.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 347.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-12', transactions: [
			{symbol: 'apbr.ba', value: 90, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 356, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-13', transactions: [
			{symbol: 'apbr.ba', value: 88, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 360, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-14', transactions: [
			{symbol: 'apbr.ba', value: 89.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.26, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 357, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-15', transactions: [
			{symbol: 'apbr.ba', value: 96.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.27, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 376, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-18', transactions: [
			{symbol: 'apbr.ba', value: 96.3, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.27, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 376, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-19', transactions: [
			{symbol: 'apbr.ba', value: 101, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.27, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 387.75, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-20', transactions: [
			{symbol: 'apbr.ba', value: 101, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.28, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 387.75, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-21', transactions: [
			{symbol: 'apbr.ba', value: 108.75, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.34, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 393, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-22', transactions: [
			{symbol: 'apbr.ba', value: 105.4, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.35, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 398, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-25', transactions: [
			{symbol: 'apbr.ba', value: 111.05, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 412, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-26', transactions: [
			{symbol: 'apbr.ba', value: 115, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 421, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-27', transactions: [
			{symbol: 'apbr.ba', value: 124, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 430.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-28', transactions: [
			{symbol: 'apbr.ba', value: 123.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 428.95, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-8-29', transactions: [
			{symbol: 'apbr.ba', value: 127.1, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 422, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-1', transactions: [
			{symbol: 'apbr.ba', value: 132.85, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 432, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-2', transactions: [
			{symbol: 'apbr.ba', value: 135.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 438.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-3', transactions: [
			{symbol: 'apbr.ba', value: 131.35, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 460.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-4', transactions: [
			{symbol: 'apbr.ba', value: 122.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 441, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-5', transactions: [
			{symbol: 'apbr.ba', value: 127.2, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 452, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-8', transactions: [
			{symbol: 'apbr.ba', value: 122.15, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 458.25, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-9', transactions: [
			{symbol: 'apbr.ba', value: 120.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 461.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-10', transactions: [
			{symbol: 'apbr.ba', value: 116.5, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 468, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-11', transactions: [
			{symbol: 'apbr.ba', value: 118.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 473, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-12', transactions: [
			{symbol: 'apbr.ba', value: 110.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 476, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-15', transactions: [
			{symbol: 'apbr.ba', value: 111.6, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 476.1, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-16', transactions: [
			{symbol: 'apbr.ba', value: 118.9, quantity: 1000, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 504, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-17', transactions: [
			{symbol: 'apbr.ba', value: 120.95, quantity: 200, type: 'Capitalizado'},
			
			{symbol: 'apbr.ba', value: 120.95, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 504, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-18', transactions: [
			{symbol: 'apbr.ba', value: 118, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.37, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 503.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-19', transactions: [
			{symbol: 'apbr.ba', value: 116.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 509, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-22', transactions: [
			{symbol: 'apbr.ba', value: 120, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 533, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-23', transactions: [
			{symbol: 'apbr.ba', value: 115.65, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 532, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-24', transactions: [
			{symbol: 'apbr.ba', value: 117.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 536.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-25', transactions: [
			{symbol: 'apbr.ba', value: 114, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 528.6, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-26', transactions: [
			{symbol: 'apbr.ba', value: 121, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.38, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 545.5, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-29', transactions: [
			{symbol: 'apbr.ba', value: 110.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 551, quantity: 50, type: 'En cartera'}
			]},
			{date: '2014-9-30', transactions: [
			{symbol: 'apbr.ba', value: 108, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 558, quantity: 20, type: 'Capitalizado'},
			
			{symbol: 'ypfd.ba', value: 558, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-1', transactions: [
			{symbol: 'apbr.ba', value: 97.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 503, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-2', transactions: [
			{symbol: 'apbr.ba', value: 96, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 467.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-3', transactions: [
			{symbol: 'apbr.ba', value: 104.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 506, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-6', transactions: [
			{symbol: 'apbr.ba', value: 110, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 477, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-7', transactions: [
			{symbol: 'apbr.ba', value: 117.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.39, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 462, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-8', transactions: [
			{symbol: 'apbr.ba', value: 114, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.41, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 457, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-9', transactions: [
			{symbol: 'apbr.ba', value: 113.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.41, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 425.35, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-10', transactions: [
			{symbol: 'apbr.ba', value: 105.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.41, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 417, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-13', transactions: [
			{symbol: 'apbr.ba', value: 105.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.41, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 417, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-14', transactions: [
			{symbol: 'apbr.ba', value: 112.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.41, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 406, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-15', transactions: [
			{symbol: 'apbr.ba', value: 102.9, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.42, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 400, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-16', transactions: [
			{symbol: 'apbr.ba', value: 99.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.42, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 414, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-17', transactions: [
			{symbol: 'apbr.ba', value: 103, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.42, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 430, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-20', transactions: [
			{symbol: 'apbr.ba', value: 99, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.43, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 437.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-21', transactions: [
			{symbol: 'apbr.ba', value: 91.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.43, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 448, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-22', transactions: [
			{symbol: 'apbr.ba', value: 87, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.43, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 435.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-23', transactions: [
			{symbol: 'apbr.ba', value: 81, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.43, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 419.95, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-24', transactions: [
			{symbol: 'apbr.ba', value: 87, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.43, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 428, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-27', transactions: [
			{symbol: 'apbr.ba', value: 76.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 420, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-28', transactions: [
			{symbol: 'apbr.ba', value: 77.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 417, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-29', transactions: [
			{symbol: 'apbr.ba', value: 73.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 413, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-30', transactions: [
			{symbol: 'apbr.ba', value: 75.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 430, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-10-31', transactions: [
			{symbol: 'apbr.ba', value: 77.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 459.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-3', transactions: [
			{symbol: 'apbr.ba', value: 75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 471, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-4', transactions: [
			{symbol: 'apbr.ba', value: 74.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 447, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-5', transactions: [
			{symbol: 'apbr.ba', value: 73.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 444, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-6', transactions: [
			{symbol: 'apbr.ba', value: 73.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 444, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-7', transactions: [
			{symbol: 'apbr.ba', value: 69.9, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 435, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-10', transactions: [
			{symbol: 'apbr.ba', value: 66.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 436, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-11', transactions: [
			{symbol: 'apbr.ba', value: 66.85, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 430.95, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-12', transactions: [
			{symbol: 'apbr.ba', value: 65.3, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 416.8, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-13', transactions: [
			{symbol: 'apbr.ba', value: 63.25, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 411, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-14', transactions: [
			{symbol: 'apbr.ba', value: 61, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 400, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-17', transactions: [
			{symbol: 'apbr.ba', value: 56.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.44, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 400, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-18', transactions: [
			{symbol: 'apbr.ba', value: 57, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 393.05, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-19', transactions: [
			{symbol: 'apbr.ba', value: 57, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 387, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-20', transactions: [
			{symbol: 'apbr.ba', value: 58.95, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 401, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-21', transactions: [
			{symbol: 'apbr.ba', value: 66, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 407.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-24', transactions: [
			{symbol: 'apbr.ba', value: 66, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 407.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-25', transactions: [
			{symbol: 'apbr.ba', value: 63.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 418, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-26', transactions: [
			{symbol: 'apbr.ba', value: 64, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 418.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-27', transactions: [
			{symbol: 'apbr.ba', value: 62.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 414, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-11-28', transactions: [
			{symbol: 'apbr.ba', value: 57.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 396.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-1', transactions: [
			{symbol: 'apbr.ba', value: 53.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 380, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-2', transactions: [
			{symbol: 'apbr.ba', value: 54, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 369.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-3', transactions: [
			{symbol: 'apbr.ba', value: 57, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 378, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-4', transactions: [
			{symbol: 'apbr.ba', value: 53.65, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 372, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-5', transactions: [
			{symbol: 'apbr.ba', value: 52.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 359, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-8', transactions: [
			{symbol: 'apbr.ba', value: 52.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 359, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-9', transactions: [
			{symbol: 'apbr.ba', value: 48.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.45, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 321, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-10', transactions: [
			{symbol: 'apbr.ba', value: 44.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 297, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-11', transactions: [
			{symbol: 'apbr.ba', value: 43.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 310, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-12', transactions: [
			{symbol: 'apbr.ba', value: 41.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 287, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-15', transactions: [
			{symbol: 'apbr.ba', value: 35, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 255, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-16', transactions: [
			{symbol: 'apbr.ba', value: 37.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 267, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-17', transactions: [
			{symbol: 'apbr.ba', value: 38.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.48, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 285, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-18', transactions: [
			{symbol: 'apbr.ba', value: 39.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 277.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-19', transactions: [
			{symbol: 'apbr.ba', value: 40.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 276.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-22', transactions: [
			{symbol: 'apbr.ba', value: 43.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 287, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-23', transactions: [
			{symbol: 'apbr.ba', value: 44.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-24', transactions: [
			{symbol: 'apbr.ba', value: 44.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-25', transactions: [
			{symbol: 'apbr.ba', value: 44.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-29', transactions: [
			{symbol: 'apbr.ba', value: 41.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 303, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-30', transactions: [
			{symbol: 'apbr.ba', value: 44.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 315, quantity: 30, type: 'En cartera'}
			]},
			{date: '2014-12-31', transactions: [
			{symbol: 'apbr.ba', value: 44.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 315, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-1', transactions: [
			{symbol: 'apbr.ba', value: 44.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 315, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-2', transactions: [
			{symbol: 'apbr.ba', value: 41.3, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.49, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 321, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-5', transactions: [
			{symbol: 'apbr.ba', value: 36.85, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.57, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 298.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-6', transactions: [
			{symbol: 'apbr.ba', value: 36.35, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.58, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 297.25, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-7', transactions: [
			{symbol: 'apbr.ba', value: 38.95, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.59, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 298.95, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-8', transactions: [
			{symbol: 'apbr.ba', value: 41.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.61, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 298, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-9', transactions: [
			{symbol: 'apbr.ba', value: 43.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 299, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-12', transactions: [
			{symbol: 'apbr.ba', value: 40.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 288, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-13', transactions: [
			{symbol: 'apbr.ba', value: 41.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 277, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-14', transactions: [
			{symbol: 'apbr.ba', value: 42.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.62, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 288.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-15', transactions: [
			{symbol: 'apbr.ba', value: 43.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 289, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-16', transactions: [
			{symbol: 'apbr.ba', value: 44.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 297, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-19', transactions: [
			{symbol: 'apbr.ba', value: 43, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 296, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-20', transactions: [
			{symbol: 'apbr.ba', value: 42.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 290.1, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-21', transactions: [
			{symbol: 'apbr.ba', value: 44.95, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 293.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-22', transactions: [
			{symbol: 'apbr.ba', value: 46.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 301.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-23', transactions: [
			{symbol: 'apbr.ba', value: 45.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 298, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-26', transactions: [
			{symbol: 'apbr.ba', value: 45.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 299, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-27', transactions: [
			{symbol: 'apbr.ba', value: 46.25, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 308, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-28', transactions: [
			{symbol: 'apbr.ba', value: 42.05, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 297, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-29', transactions: [
			{symbol: 'apbr.ba', value: 39.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 284.6, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-1-30', transactions: [
			{symbol: 'apbr.ba', value: 37.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 289, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-2', transactions: [
			{symbol: 'apbr.ba', value: 39.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 289, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-3', transactions: [
			{symbol: 'apbr.ba', value: 43.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 302, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-4', transactions: [
			{symbol: 'apbr.ba', value: 43.8, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 299.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-5', transactions: [
			{symbol: 'apbr.ba', value: 43.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 305, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-6', transactions: [
			{symbol: 'apbr.ba', value: 40, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 306, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-9', transactions: [
			{symbol: 'apbr.ba', value: 41.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 305.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-10', transactions: [
			{symbol: 'apbr.ba', value: 38.65, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 303, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-11', transactions: [
			{symbol: 'apbr.ba', value: 39, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 308, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-12', transactions: [
			{symbol: 'apbr.ba', value: 40.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 317.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-13', transactions: [
			{symbol: 'apbr.ba', value: 41.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 330, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-16', transactions: [
			{symbol: 'apbr.ba', value: 41.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 330, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-17', transactions: [
			{symbol: 'apbr.ba', value: 41.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 330, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-18', transactions: [
			{symbol: 'apbr.ba', value: 41.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 328.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-19', transactions: [
			{symbol: 'apbr.ba', value: 40.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 321.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-20', transactions: [
			{symbol: 'apbr.ba', value: 40.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.63, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 314, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-23', transactions: [
			{symbol: 'apbr.ba', value: 38.55, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.72, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 307, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-24', transactions: [
			{symbol: 'apbr.ba', value: 40.3, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.72, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 304, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-25', transactions: [
			{symbol: 'apbr.ba', value: 38.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.72, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 306.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-26', transactions: [
			{symbol: 'apbr.ba', value: 37.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.72, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 296.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-2-27', transactions: [
			{symbol: 'apbr.ba', value: 39.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 308, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-2', transactions: [
			{symbol: 'apbr.ba', value: 38.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 305.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-3', transactions: [
			{symbol: 'apbr.ba', value: 38.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 312, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-4', transactions: [
			{symbol: 'apbr.ba', value: 37, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 315.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-5', transactions: [
			{symbol: 'apbr.ba', value: 36.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 320, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-6', transactions: [
			{symbol: 'apbr.ba', value: 35.55, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.75, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 310, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-9', transactions: [
			{symbol: 'apbr.ba', value: 33.5, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.78, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 311, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-10', transactions: [
			{symbol: 'apbr.ba', value: 31.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.78, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 305.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-11', transactions: [
			{symbol: 'apbr.ba', value: 32.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.78, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 312, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-12', transactions: [
			{symbol: 'apbr.ba', value: 31, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 319.05, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-13', transactions: [
			{symbol: 'apbr.ba', value: 29.95, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 320, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-16', transactions: [
			{symbol: 'apbr.ba', value: 31.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 335.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-17', transactions: [
			{symbol: 'apbr.ba', value: 32.6, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 337.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-18', transactions: [
			{symbol: 'apbr.ba', value: 34.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 347, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-19', transactions: [
			{symbol: 'apbr.ba', value: 32.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 346.3, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-20', transactions: [
			{symbol: 'apbr.ba', value: 34, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 355.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-23', transactions: [
			{symbol: 'apbr.ba', value: 34, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 355.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-24', transactions: [
			{symbol: 'apbr.ba', value: 34, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.8, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 355.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-25', transactions: [
			{symbol: 'apbr.ba', value: 36.3, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 344.95, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-26', transactions: [
			{symbol: 'apbr.ba', value: 34.75, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 330.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-27', transactions: [
			{symbol: 'apbr.ba', value: 34.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 334, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-30', transactions: [
			{symbol: 'apbr.ba', value: 36.1, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 335.6, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-3-31', transactions: [
			{symbol: 'apbr.ba', value: 37.15, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 331.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-1', transactions: [
			{symbol: 'apbr.ba', value: 39, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 338, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-2', transactions: [
			{symbol: 'apbr.ba', value: 39, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 338, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-3', transactions: [
			{symbol: 'apbr.ba', value: 39, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.84, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 338, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-6', transactions: [
			{symbol: 'apbr.ba', value: 41.4, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.85, quantity: 5000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 356.9, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-7', transactions: [
			{symbol: 'apbr.ba', value: 42, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.78, quantity: 5000, type: 'Capitalizado'},
			
			{symbol: 'dolar.blue', value: 8.85, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 358.2, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-8', transactions: [
			{symbol: 'apbr.ba', value: 41.2, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.85, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 356, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-9', transactions: [
			{symbol: 'apbr.ba', value: 44.25, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.85, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 364, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-10', transactions: [
			{symbol: 'apbr.ba', value: 45.45, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.87, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 372.75, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-13', transactions: [
			{symbol: 'apbr.ba', value: 47.65, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.87, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 373, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-14', transactions: [
			{symbol: 'apbr.ba', value: 49.65, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.88, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 375.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-15', transactions: [
			{symbol: 'apbr.ba', value: 52.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.88, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 374.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-16', transactions: [
			{symbol: 'apbr.ba', value: 52.7, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.88, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 374.5, quantity: 30, type: 'En cartera'}
			]},
			{date: '2015-4-17', transactions: [
			{symbol: 'apbr.ba', value: 52.25, quantity: 800, type: 'En cartera'},
			
			{symbol: 'dolar.blue', value: 8.88, quantity: 4000, type: 'En cartera'},
			
			{symbol: 'ypfd.ba', value: 361.5, quantity: 30, type: 'En cartera'}
			]}
		]
	],

	transactionsValueInPortfolio: function(t, symbols) {
		value = 0;
		for (txs in t) {
			tx = t[txs];
			value += tx.type == 'En cartera' && symbols.indexOf(tx.symbol) != -1 ? tx.value * tx.quantity : 0;
		}
		return value
	},

	maxDate: function (a) {
		maxDateValue = NaN;
		for (dates in a) {
			date = new Date(a[dates].date.split('-') )
			if(!maxDateValue || date > new Date(maxDateValue.split('-') ) ) {maxDateValue = a[dates].date };
		};
		return maxDateValue;
	},

	portfolioValue: function(p, date, symbols) {
		txs = this.data[p].filter(function (x) {return new Date(x.date.split('-') ).getTime() <= new Date(date.split('-') ).getTime();} );
		maxDateValue = this.maxDate(txs);
		return this.transactionsValueInPortfolio(txs.filter(function (x) {return x.date == maxDateValue; } )[0].transactions, symbols );
	},

	symbolsInPortfolio: function (p) {
		symbolsInPortfolio = [];
		for (x in this.data[p]) {
			for (tx in this.data[p][x].transactions) {
				if (symbolsInPortfolio.indexOf(this.data[p][x].transactions[tx].symbol) == -1) {symbolsInPortfolio.push(this.data[p][x].transactions[tx].symbol); };
			};
		};		
		return symbolsInPortfolio;
	},

	portfolioMinValue: function (p, dateFrom, dateTo, symbols) {
		minValue = 0;
		filteredData = this.data[p].filter(function (x) {return new Date(x.date.split('-') ).getTime() >= new Date(dateFrom.split('-') ).getTime() && new Date(x.date.split('-') ).getTime() <= new Date(dateTo.split('-') ).getTime();} );
		for (x in filteredData) {
			value = this.portfolioValue(p, filteredData[x].date, symbols);
			minValue == 0 || value < minValue ? minValue = value : minValue = minValue;
		};
		return minValue;
	},

	portfolioMaxValue: function (p, dateFrom, dateTo, symbols) {
		maxValue = 0;
		filteredData = this.data[p].filter(function (x) {return new Date(x.date.split('-') ).getTime() >= new Date(dateFrom.split('-') ).getTime() && new Date(x.date.split('-') ).getTime() <= new Date(dateTo.split('-') ).getTime();} );
		for (x in filteredData) {
			value = this.portfolioValue(p, filteredData[x].date, symbols);
			value > maxValue ? maxValue = value : maxValue = maxValue;
		};
		return maxValue;
	},

	portfolioMinDate: function (p) {
		minDate = '2100-12-31';
		data = this.data[p];
		for (x in data) {
			date = data[x].date;
			minDate == '2100-12-31' || new Date(date.split('-') ).getTime() < new Date(minDate.split('-') ).getTime() ? minDate = date : minDate = minDate;
		};
		return minDate;
	},

	portfolioMaxDate: function (p) {
		maxDate = '1900-01-01';
		data = this.data[p];
		for (x in data) {
			date = data[x].date;
			maxDate == '1900-01-01' || new Date(date.split('-') ).getTime() > new Date(maxDate.split('-') ).getTime() ? maxDate = date : maxDate = maxDate;
		};
		return maxDate;
	},

	transactionsValueInvestments: function(t, symbols) {
		value = 0;
		for (txs in t) {
			tx = t[txs];
			value += tx.type == 'Inversión' && symbols.indexOf(tx.symbol) != -1 ? tx.value * tx.quantity : 0;
		}
		return value
	},

	portfolioInvestment: function(p, date, symbols) {
		txs = this.data[p].filter(function (i) {return new Date(i.date.split('-') ).getTime() == new Date(date.split('-') ).getTime();} );
		return this.transactionsValueInvestments(txs[0].transactions, symbols);
	},

	portfolioAccumInvestment: function(p, date, symbols) {
		accumInvestments = 0;
		filteredData = this.data[p].filter(function (x) {return new Date(x.date.split('-') ).getTime() <= new Date(date.split('-') ).getTime() ;} );
		for (x in filteredData) {
			accumInvestments += this.portfolioInvestment(p, filteredData[x].date, symbols);
		}
		return accumInvestments;
	},

	transactionsValueCapitalization: function(t, symbols) {
		value = 0;
		for (txs in t) {
			tx = t[txs];
			value += tx.type == 'Capitalizado' && symbols.indexOf(tx.symbol) != -1 ? tx.value * tx.quantity : 0;
		}
		return value
	},

	portfolioCapitalization: function(p, date, symbols) {
		txs = this.data[p].filter(function (i) {return new Date(i.date.split('-') ).getTime() == new Date(date.split('-') ).getTime();} );
		return this.transactionsValueCapitalization(txs[0].transactions, symbols);
	},

	portfolioAccumCapitalization: function(p, date, symbols) {
		accumCapitalization = 0;
		filteredData = this.data[p].filter(function (x) {return new Date(x.date.split('-') ).getTime() <= new Date(date.split('-') ).getTime() ;} );
		for (x in filteredData) {
			accumCapitalization += this.portfolioCapitalization(p, filteredData[x].date, symbols);
		}
		return accumCapitalization;
	},

	chartData: function (p, dateFrom, dateTo, symbols) {
		chartDataValue = [];
		filteredData = this.data[p].filter(function (x) {return new Date(x.date.split('-') ).getTime() >= new Date(dateFrom.split('-') ).getTime() && new Date(x.date.split('-') ).getTime() <= new Date(dateTo.split('-') ).getTime();} );
		for (x in filteredData) {
			dateValue = filteredData[x].date;
			chartDataValue.push({date: dateValue, value: this.portfolioValue(p, dateValue, symbols), investment: this.portfolioInvestment(p, dateValue, symbols), capitalization: this.portfolioCapitalization(p, dateValue, symbols) } );
		};
		return chartDataValue;
	}
};

var loadLines = function(portfolio, startDate, endDate, symbols) {
	minValue = portfolios.portfolioMinValue(portfolio, startDate, endDate, symbols);
	maxValue = portfolios.portfolioMaxValue(portfolio, startDate, endDate, symbols);
	document.getElementById('line-chart').innerHTML = '';

	data = portfolios.chartData(portfolio, startDate, endDate, symbols);

	var line = new Morris.Line({
		element: 'line-chart',
		resize: true,
		data: data,
		xkey: 'date',
		ykeys: ['value'],
		labels: ['Value'],
		lineColors:['gray'],
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
		ymin: minValue - (maxValue / 4),
		yLabelFormat: function (y) {return Math.round(y);},
		events: $.map(data.filter(function (x) {return x.investment > 0 || x.capitalization > 0; } ), function (x) {return x.date; } ),
		eventStrokeWidth: 2,
		eventLineColors: $.map(data.filter(function (x) {return x.investment > 0 || x.capitalization > 0; } ), function (x) {return x.investment > 0 ? '#8B0000' : '#228B22'; } )
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

	p = $("#portfolio-drop-down")[0].value;
	selectedSymbols = $.map($("[type=checkbox]").filter(":checked"), (function (x) {return x.name; } ) );

	startDate = $('#date-range').val().split(' - ')[0].split('/')[2] + '-' + $('#date-range').val().split(' - ')[0].split('/')[1] + '-' + $('#date-range').val().split(' - ')[0].split('/')[0];
	endDate = $('#date-range').val().split(' - ')[1].split('/')[2] + '-' + $('#date-range').val().split(' - ')[1].split('/')[1] + '-' + $('#date-range').val().split(' - ')[1].split('/')[0];
	loadLines(p, startDate, endDate, selectedSymbols );

	$('#investments')[0].innerHTML = addThousondSeparator(Math.round(portfolios.portfolioAccumInvestment(p, endDate, selectedSymbols) ), '.');
	$('#capitalization')[0].innerHTML = addThousondSeparator(Math.round(portfolios.portfolioAccumCapitalization(p, endDate, selectedSymbols ) ), '.');
	$('#in-portfolio')[0].innerHTML = addThousondSeparator(Math.round(portfolios.portfolioValue(p, endDate, selectedSymbols ) ), '.');
	$('#total')[0].innerHTML = addThousondSeparator(Math.round(portfolios.portfolioAccumCapitalization(p, endDate, selectedSymbols ) ) + Math.round(portfolios.portfolioValue(p, endDate, selectedSymbols ) ), '.');
	$('#performance')[0].innerHTML = new String(Math.round(1000 * (portfolios.portfolioAccumCapitalization(p, endDate, selectedSymbols ) + portfolios.portfolioValue(p, endDate, selectedSymbols ) - portfolios.portfolioAccumInvestment(p, endDate, selectedSymbols ) ) / portfolios.portfolioAccumInvestment(p, endDate, selectedSymbols ) ) / 10, '.').toString().replace('.', ',');

	$.map(portfolios.symbolsInPortfolio(p), function (x) {$('#investment-' + x.replace('.', '-') )[0].innerHTML = addThousondSeparator(Math.round(portfolios.portfolioAccumInvestment(p, endDate, [x] ) ), '.') + ' ARS'; } );
	$.map(portfolios.symbolsInPortfolio(p), function (x) {$('#capitalized-' + x.replace('.', '-') )[0].innerHTML = addThousondSeparator(Math.round(portfolios.portfolioAccumCapitalization(p, endDate, [x] ) ), '.') + ' ARS'; } );
	$.map(portfolios.symbolsInPortfolio(p), function (x) {$('#in-portfolio-' + x.replace('.', '-') )[0].innerHTML = addThousondSeparator(Math.round(portfolios.portfolioValue(p, endDate, [x] ) ), '.') + ' ARS'; } );
	$.map(portfolios.symbolsInPortfolio(p), function (x) {$('#total-' + x.replace('.', '-') )[0].innerHTML = addThousondSeparator(Math.round(portfolios.portfolioAccumCapitalization(p, endDate, [x] ) ) + Math.round(portfolios.portfolioValue(p, endDate, [x] ) ), '.') + ' ARS'; } );
	$.map(portfolios.symbolsInPortfolio(p), function (x) {$('#performance-' + x.replace('.', '-') )[0].innerHTML = new String(Math.round(1000 * (portfolios.portfolioAccumCapitalization(p, endDate, [x] ) + portfolios.portfolioValue(p, endDate, [x] ) - portfolios.portfolioAccumInvestment(p, endDate, [x] ) ) / portfolios.portfolioAccumInvestment(p, endDate, [x] ) ) / 10, '.').toString().replace('.', ',') + ' %'; } );

	$('#line-chart-title')[0].innerHTML = 'Cierres diarios (' + $('#date-range').val() + ')'
	$('#asset-table-title')[0].innerHTML = 'Cierres diarios (' + $('#date-range').val().split(' - ')[1] + ')'
};

var portfolioChange = function () {

	startDate = new Date(portfolios.portfolioMinDate($("#portfolio-drop-down")[0].value).split('-') );
	strStartDate = startDate.getDate() + '/' + (startDate.getMonth() + 1) + '/' + startDate.getFullYear();

	endDate = new Date(portfolios.portfolioMaxDate($("#portfolio-drop-down")[0].value).split('-') );
	strEndDate = endDate.getDate() + '/' + (endDate.getMonth() + 1) + '/' + endDate.getFullYear();

	$('#date-range').daterangepicker( {
		startDate: strStartDate,
		endDate: strEndDate,
		minDate: strStartDate,
		maxDate: strEndDate
	} );
	$('#date-range').val(strStartDate + ' - ' + strEndDate);

	assets.loadTable(portfolios.symbolsInPortfolio($("#portfolio-drop-down")[0].value) );
	reloadLines();
};