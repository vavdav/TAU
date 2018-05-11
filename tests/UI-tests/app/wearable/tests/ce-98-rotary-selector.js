/* global tau */
(function () {
	var page = document.getElementById("98-rotary-selector-page-ce"),
		selector = document.getElementById("98-rotary-selector-ce"),
		selectorComponent;

	/**
	 * pagebeforeshow event handler
	 * Do preparatory works and adds event listeners
	 */
	page.addEventListener("pagebeforeshow", function () {
		selectorComponent = tau.widget.Selector(selector);
		selectorComponent._changeLayer(1);
		selectorComponent.changeItem(13);
	});
}());