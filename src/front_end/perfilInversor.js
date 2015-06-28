try {
	if (parameters.profile == 'perfil1') {
		var invProfile = {
			code: 'perfil1',
			name: 'Perfil 1',
			description: 'Esta es la descripción del perfil 1. Más texto. Más texto. Más texto.\nMás texto. Más texto. Más texto. Más texto.',
			moneyRange: [25000, 30000],
			performance: 80,
			term: 18
		};
	} else {
		var invProfile = {
			code: 'perfil2',
			name: 'Perfil 2',
			description: 'Texto Texto Texto Texto Esta es la descripción del perfil 2. Más texto. Más texto. Más texto.\nMás texto. Más texto. Más texto. Más texto.',
			moneyRange: [120000, 160000],
			performance: 110,
			term: 24
		};
	};

	$('#buttons-row')[0].innerHTML = $('#buttons-row')[0].innerHTML + '<div class="col-md-3 col-xs-6"><br><br><br><button id="save-button" class="btn btn-block btn-danger" title="Click para eliminar perfil" data-toggle="modal" data-target="#deleteProfileModal">Eliminar Perfil</button></div> \
		<div class="modal fade" id="deleteProfileModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> \
			<div class="modal-dialog" role="document"> \
				<div class="modal-content"> \
					<div class="modal-header"> \
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
						<h4 class="modal-title" id="myModalLabel">Confirmar borrado de ' + invProfile.name + '</h4> \
					</div> \
					<div class="modal-body"> \
						¿Confirma que desea borrar su perfil de Inversor?<br><br><label>' + invProfile.name + '</label><br><br>' + invProfile.description + ' \
					</div> \
					<div class="modal-footer"> \
						<button type="button" class="btn btn-default" data-dismiss="modal">No</button> \
						<button type="button" class="btn btn-primary" onclick="deleteProfile();" data-dismiss="modal">Sí</button> \
					</div> \
				</div> \
			</div> \
		</div>'

} catch(err) {
	var invProfile = {
		code: '',
		name: '',
		description: '',
		moneyRange: [10000, 20000],
		performance: 50,
		term: 12
	};
};

var allowSaving = function() {
	if (!$("#name-textbox")[0].value) {
		$("#save-button").attr('class', $("#save-button").attr('class').includes(' disabled') ? $("#save-button").attr('class') : $("#save-button").attr('class') + ' disabled');
		$("#save-button").attr('title', 'El nombre del perfil deben ser ingresados antes de guardar');
	} else {
		$("#save-button").attr('class', $("#save-button").attr('class').includes(' disabled') ? $("#save-button").attr('class').replace(' disabled', '') : $("#save-button").attr('class') );
		$("#save-button").attr('title', 'Click para guardar');
	}
};

$('#name-textbox')[0].value = invProfile.name;
$('#description-textbox')[0].value = invProfile.description;

$("#money-range-slider").ionRangeSlider({
	type: "double",
	grid: true,
	min: 1000,
	max: 200000,
	from: invProfile.moneyRange[0],
	to: invProfile.moneyRange[1],
	step: 1000,
	prefix: "$",
	onChange: function () {
		allowSaving();
	}
});

$("#performance-slider").ionRangeSlider({
	grid: true,
	min: 10,
	max: 150,
	step: 5,
	from: invProfile.performance,
	postfix: "%",
	onChange: function () {
		allowSaving();
	}
});

$("#term-slider").ionRangeSlider({
	grid: true,
	min: 2,
	max: 24,
	step: 1,
	from: invProfile.term,
	postfix: " meses",
	onChange: function () {
		allowSaving();
	}
});

$("#save-button").attr('class', $("#save-button").attr('class').includes(' disabled') ? $("#save-button").attr('class') : $("#save-button").attr('class') + ' disabled');
$("#save-button").attr('title', 'El nombre del perfil deben ser ingresados antes de guardar');

var deleteProfile = function() {
	//Ajax to delete profile invProfile.code
	window.location.href = 'perfilInversor.html';
};

var saveProfile = function() {
	code = invProfile.code;
	name = $('#name-textbox')[0].value;
	description = $('#description-textbox')[0].value;
	moneyFrom = $('#money-range-slider').attr('value').split(';')[0];
	moneyFrom = $('#money-range-slider').attr('value').split(';')[1];
	performance = $('#performance-slider').attr('value');
	term = $('#term-slider').attr('value');
	if (invProfile.code != '') {
		//Ajax to save changes to profile invProfile.code
		window.location.href = 'perfilInversor.html?profile=' + invProfile.code;
	} else {
		//Ajax to save new profile
		window.location.href = 'perfilInversor.html';
	};
};

var setSaveButtonModalBody = function() {
	replace = new Array();
	replace['%OverwriteString%'] = invProfile.code != '' ? '<br>El pefil ' + invProfile.name + ' será sobrescrito con la siguiente información:' : '';
	replace['%ProfileName%'] = $('#name-textbox')[0].value;
	replace['%ProfileDescription%'] = !$('#description-textbox')[0].value ? '' : '<br><br>' + $('#description-textbox')[0].value;
	replace['%ProfileInvestmentRange%'] = '$' + $('#money-range-slider').attr('value').split(';')[0] + ' - $' + $('#money-range-slider').attr('value').split(';')[1];
	replace['%ProfilePerformance%'] = $('#performance-slider').attr('value') + '%';
	replace['%ProfileTerm%'] = $('#term-slider').attr('value') + ' meses';
	for (r in replace) {$('#save-button-modal-body')[0].innerHTML = $('#save-button-modal-body')[0].innerHTML.replace(r, replace[r] );}
};

var clearSaveButtonModalBody = function() {
	$('#save-button-modal-body')[0].innerHTML = '¿Confirma que desea guardar su perfil de Inversor?%OverwriteString%<br><br><label>%ProfileName%</label>%ProfileDescription%<br><br>Inversión: %ProfileInvestmentRange%<br><br>Rendimiento deseado: %ProfilePerformance%<br><br>Plazo: %ProfileTerm%';
};