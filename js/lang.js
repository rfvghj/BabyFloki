$(function() {
	if (get_cache('com_lang') == null) {
		chooseLang('en');
	} else {
		chooseLang(get_cache('com_lang'));
	}

	if (navigator.userAgent.indexOf('Mobile') > -1) {
		setInterval(function() {
			multipleSplats(5);
		}, 2000);
	}
});

function loadProperties(lang) {
	$.i18n.properties({
		name: 'com',
		path: '/js/I18n/',
		mode: 'map',
		language: lang,
		callback: function() {
			$("[data-locale]").each(function() {
				$(this).html($.i18n.prop($(this).data("locale")));
			});
		}
	});
}

function chooseLang(lang) {
	loadProperties(lang);
	set_cache('com_lang', lang);
}

function set_cache(key, value) {
	if (key == '') return false;
	localStorage.setItem(key, value);
}

function get_cache(key) {
	return localStorage.getItem(key);
}

function toCWhite() {
	var lang = get_cache('com_lang');
	var url = "https://chinaom.net/C-ECO%20WhitePaper%20_CN.pdf";
	if (lang == "en") {
		url = "https://chinaom.net/C-ECO%20WhitePaper%20_EN.pdf";
	}
	window.open(url);
}

function toCPaper() {
	var lang = get_cache('com_lang');
	var url = "https://chinaom.net/C-CHAIN%20%20Whitepaper_CN.pdf";
	if (lang == "en") {
		url = "https://chinaom.net/C-CHAIN%20%20Whitepaper_EN.pdf";
	}
	window.open(url);
}
