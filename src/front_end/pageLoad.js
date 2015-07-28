if ( (document.cookie.search('MEMBER=') > -1) && (document.cookie.search('MEMBER=;') == -1) && (document.cookie.search('MEMBER=') + 'MEMBER='.length < document.cookie.length) ) {
	memberStr = document.cookie.substr(document.cookie.search('MEMBER=') + 'MEMBER='.length, 1000);
	userId = memberStr .substr(0, memberStr .search(';') > - 1 ? memberStr .search(';') : memberStr .length);

	var user

	$.ajax(
		{url: 'http://localhost:8080/users/' + userId,
		dataType: 'json',
		method: 'GET',
		async: false,
		xhrFields: {withCredentials: true},
		success: function(data) {
				user = data
			},
		error: function (a, b, c) {
				document.cookie = 'MEMBER='
				document.cookie = 'JSESSIONID=';
				if (window.location.href.search('home.html') == - 1) {window.location.href = 'home.html?redirect=' + replaceAll(replaceAll(replaceAll(window.location.href, ' ', '%20'),'=', '%3D'), '&', '%26');};
			}
		}
	);

	var logOut = function() {
		document.cookie = 'MEMBER=';
		document.cookie = 'JSESSIONID=';
		try {
			$.ajax(
				{url: 'http//:localhost:8080/logout',
				dataType: 'json',
				method: 'POST',
				xhrFields: {withCredentials: true},
				contentType: 'application/json',
				error: function (a, b, c) {return;}
				}
			);
		} catch (err) {
			//do nothing
		} finally {
			window.location.href = 'home.html'
		};
	};
} else {
	if (window.location.href.search('home.html') == - 1) {window.location.href = 'home.html?redirect=' + replaceAll(replaceAll(replaceAll(window.location.href, ' ', '%20'),'=', '%3D'), '&', '%26');};
	var logIn = function(mail, pass) {
		$.ajax(
			{url: 'http://localhost:8080/login',
			dataType: 'json',
			method: 'POST',
			xhrFields: {withCredentials: true},
			contentType: 'application/json',
			data: '{"mail":"' + mail + '", "password":"' + pass + '"}',
			success: function (data) {
					document.cookie="MEMBER=" + data.id.toString()
					try {
						window.location.href = parameters.redirect
					} catch(err) {
						window.location.href = 'index.html'
					};
				},
			error: function (a, b, c) {
					$('#log-in-error-label').attr('class', 'label label-danger');
					$('#pass-textbox')[0].value = '';
				}
			}
		);
	};

	var allowLogIn = function () {
	};
}

userId = ''

var replacements = []

if (user) {
	replacements.push({replaceThis: '%userId%', replaceFor: user.id});
	replacements.push({replaceThis: '%userName%', replaceFor: user.username});

	var userPortfoliosHTML = ''
	$.each(user.portfolios, function (i, p) {userPortfoliosHTML += '<li><a href="portfolio.html?portfolio=' + p.id + '"><i class="fa fa-circle-o"></i> ' + p.name + '</a></li>';})
	replacements.push({replaceThis: '%userPortfolios%', replaceFor: userPortfoliosHTML});
	replacements.push({replaceThis: '%userInvestmentProfiles%', replaceFor: ''});

	userComboHTML = '\
				  <!-- User Account: style can be found in dropdown.less -->\
				  <li class="dropdown user user-menu">\
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">\
					  <img src="dist/img/%userId%.png" class="user-image" alt="User Image"/>\
					  <span class="hidden-xs">%userName%</span>\
					</a>\
					<ul class="dropdown-menu">\
					  <!-- User image -->\
					  <li class="user-header">\
						<img src="dist/img/%userId%.png" class="img-circle" alt="User Image" />\
						<p>\
						  %userName%\
						</p>\
					  </li>\
					  <!-- Menu Footer-->\
					  <li class="user-footer">\
						<div class="pull-left">\
						  <a href="#" class="btn btn-default btn-flat">Perfil</a>\
						</div>\
						<div class="pull-right">\
						  <a class="btn btn-default btn-flat" onclick="logOut();">Cerrar Sesión</a>\
						</div>\
					  </li>';

	userPanelHTML = '<!-- Sidebar user panel -->\
			  <div class="user-panel">\
				<div class="pull-left image">\
				  <img src="dist/img/%userId%.png" class="img-circle" alt="User Image" />\
				</div>\
				<div class="pull-left info">\
				  <p>%userName%</p>\
				</div>\
			  </div>';

	userSidebarContentHTML = '<li class="active treeview">\
				  <a href="#">\
					<i class="fa fa-line-chart"></i> <span> Porfolios</span> <i class="fa fa-angle-left pull-right"></i>\
				  </a>\
				  <ul class="treeview-menu">\
					%userPortfolios%\
					<li><a href="portfolio.html"><i class="fa fa-plus"></i> Crear Nuevo Porfolio</a></li>\
				  </ul>\
				</li>\
				<li class="active treeview">\
				  <a href="#">\
					<i class="fa fa-files-o"></i> <span> Mis Perfiles de Inversor</span> <i class="fa fa-angle-left pull-right"></i>\
				  </a>\
				  <ul class="treeview-menu">\
					<!--<li><a href="perfilInversor.html?profile=perfil1"><i class="fa fa-circle-o"></i> Perfil 1</a></li>-->\
					%userInvestmentProfiles%\
					<li><a href="perfilInversor.html"><i class="fa fa-plus"></i> Crear Nuevo Perfil</a></li>\
				  </ul>\
				</li>';
} else {
	userComboHTML = '\
				  <!-- User Account: style can be found in dropdown.less -->\
				  <li class="dropdown user user-menu">\
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">\
					  <span class="hidden-xs"><b>Log In</b></span>\
					</a>\
					<ul id="log-in-menu" class="dropdown-menu">\
					  <!-- User image -->\
					  <li class="user-header">\
						<p>Mail</p>\
						<input id="mail-textbox" type="text" class="form-control" placeholder="Mail ..." onchange="allowLogIn();" onkeyup="allowLogIn();"/>\
						<p>Password</p>\
						<input id="pass-textbox" type="password" class="form-control" placeholder="Password ..." onchange="allowLogIn();" onkeyup="allowLogIn();"/><br>\
						<span id="log-in-error-label" class="label label-danger invisible">Error de log in</span>\
					  </li>\
					  <!-- Menu Footer-->\
					  <li class="user-footer">\
						<div class="pull-right">\
						  <a class="btn btn-default btn-flat" onclick="logIn(mail = $(\'#mail-textbox\')[0].value, password = $(\'#pass-textbox\')[0].value);">Aceptar</a>\
						</div>\
					  </li>'

	userPanelHTML = '';
	userSidebarContentHTML = '';
};

var headerContent = '\
			  <a href="index.html" class="logoOficial">\
				<b id="a1">Invert</b><b>AR</b>\
			  </a>\
			<!-- Header Navbar: style can be found in header.less -->\
			<nav class="navbar navbar-static-top" role="navigation">\
			  <!-- Sidebar toggle button-->\
			  <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">\
				<span class="sr-only">Toggle navigation</span>\
			  </a>\
			  <a class="logo">\
				<b>%pageName%</b>\
			  </a>\
			  <div class="navbar-custom-menu">\
				<ul class="nav navbar-nav">'
				+ userComboHTML + '\
					</ul>\
				  </li>\
				</ul>\
			  </div>\
			</nav>';



var sideBarContent = '\
			<!-- sidebar: style can be found in sidebar.less -->\
			<section class="sidebar">'
			+ userPanelHTML + '\
			  <!-- search form -->\
			  <form method="get" class="sidebar-form">\
				<div class="input-group">\
				  <input type="text" name="search" id="search-textbox" placeholder="Buscar..." onkeypress="event.keyCode == 13 ? $(\'#search-textbox\')[0].value != \'\' ? window.location.href = \'catalogo.html?search=\' + $(\'#search-textbox\')[0].value : a = 1 : a = 1;"/>\
				  <span class="input-group-btn">\
					<button id="search-btn" class="btn btn-flat"><i class="fa fa-search" onclick="$(\'#search-textbox\')[0].value != \'\' ? window.location.href = \'catalogo.html?search=\' + $(\'#search-textbox\')[0].value : a = 1;"></i></button>\
				  </span>\
				</div>\
			  </form>\
			  <!-- /.search form -->\
			  <!-- sidebar menu: : style can be found in sidebar.less -->\
			  <ul class="sidebar-menu">\
				<li class="header"></li>\
				<li>\
				  <a href="index.html?">\
					<i class="fa fa-home"></i> <span> Inicio</span>\
					<!-- Notificaciones <small class="label pull-right bg-red">3</small>-->\
				  </a>\
				</li>'
				+ userSidebarContentHTML + '\
				<li>\
				  <a href="catalogo.html">\
					<i class="fa fa-table"></i> <span> Catálogo de Activos</span>\
					<!-- Notificaciones <small class="label pull-right bg-red">3</small>-->\
				  </a>\
				</li>\
				<li>\
				  <a href="aprende.html">\
					<i class="fa fa-edit"></i> <span> Aprendé como invertir</span>\
					<!-- Notificaciones <small class="label pull-right bg-red">3</small>-->\
				  </a>\
				</li>\
			  </ul>\
			</section>\
			<!-- /.sidebar -->'

$.each(replacements, function (i, r) {headerContent = replaceAll(headerContent, r.replaceThis, r.replaceFor); sideBarContent = replaceAll(sideBarContent, r.replaceThis, r.replaceFor);});

$('header')[0].innerHTML = headerContent;
$('aside')[0].innerHTML = sideBarContent;

if (!user) {
	$('#log-in-menu').on('click', function () {
		return false;
	})
};