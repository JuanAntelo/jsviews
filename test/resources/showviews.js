function viewsAndBindings() {
	var key,
		res = "",
		topViews = "",
		bindings = "";

	for (key in _jsv.views) {
		if (_jsv.views[key]) {
			res += key + " ";
		}
	}

	res = res.slice(2); // Remove view 0

	res = res ? "Views: " + res + "\n" : "";

	for (key in _jsv.views[0].views) {
		if (_jsv.views[key]) {
			topViews += key + " ";
		}
	}

	res = res + (topViews ? "Top Views: " + topViews : "");

	for (var key in _jsv.bindings) {
		if (_jsv.bindings[key]) {
			bindings += key + " ";
		}
	}

	res = res + (bindings ? "Bindings: " + bindings : "");

	$("#views").html(res);
	return res;
}
