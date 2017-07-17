// JavaScript Document
function configurationSettings() {
	this.baseServerUrl = "http://apps.csdila.ie.unimelb.edu.au/uadi-service";
	this.basePortalUrl = ""; // should include the last '/'
	
	this.geographicBoundaryOntologyURI = "http://csdila.unimelb.edu.au/ontologies/f/geoBoundaries.owl";
	
	// APIs
	this.portal_list_indicators_grouped_alphabetically = this.baseServerUrl + "/portal/indicator/list/alphabet";
	this.portal_list_indicators_by_year = this.baseServerUrl + "/portal/indicator/list/year";
	this.portal_list_indicators_alphabetically_topN = this.baseServerUrl + "/portal/indicator/list/alphabet/topn";
	this.portal_list_themes_with_indicatorCount = this.baseServerUrl + "/portal/theme/listwithindicators";
	this.portal_list_indicators_for_theme_category = this.baseServerUrl + "/portal/indicator/theme/list";
	this.portal_list_indicators_for_publisher = this.baseServerUrl + "/portal/indicator/list/publisher";
	this.portal_getSearchResults = this.baseServerUrl + "/portal/search";
	this.portal_list_indicators_topN  = this.baseServerUrl + "/portal/indicator/list";
	this.portal_increment_indicator_visit = this.baseServerUrl + "/portal/indicator/visit/increment";
	this.portal_getIndicatorInfo = this.baseServerUrl + "/portal/indicator/get";
	this.portal_getIndicatorInputsMetadata = this.baseServerUrl + "/portal/indicator/inputs/list";
	this.portal_getIndicatorToolMetadata = this.baseServerUrl + "/portal/indicator/tool/getinfo";
	this.portal_getIndicator_RatingValue = this.baseServerUrl + "/portal/indicator/rate/get";
	this.portal_Indicator_vote = this.baseServerUrl + "/portal/indicator/rate/add";
	this.portal_indicator_listComments = this.baseServerUrl + "/portal/indicator/comment/list";
	this.portal_indicator_addComment = this.baseServerUrl + "/portal/indicator/comment/add";
	this.portal_indicator_getOutputs = this.baseServerUrl + "/portal/indicator/outputs/list";
	
	this.getListOfGeographicBoundaries = this.baseServerUrl + "/Ontology/API/ListSubClasses?ontformat=RDF/XML&withreasoning=1&includecomments=1&onturi=http://csdila.unimelb.edu.au/ontologies/f/geoBoundaries.owl&namespace=http://csdila.unimelb.edu.au/ontologies/geoboundary%23&conuri=FormalGeographicBoundary";
	
	this.getListOfGeographicBoundariesInstances = this.baseServerUrl + "/Ontology/API/ListInstancesOfConcept?ontformat=RDF/XML&withreasoning=1&includeSubClasses=1&includecomments=1&onturi=http://csdila.unimelb.edu.au/ontologies/f/geoBoundaries.owl&namespace=http://csdila.unimelb.edu.au/ontologies/geoboundary%23&";
	
	this.portal_list_indicators_by_geoboundary = this.baseServerUrl + "/portal/indicator/geo/list";
	this.portal_list_top5_most_visited_indicators = this.baseServerUrl + "/portal/indicator/visit/listMostNVisited?n=5";
	
	// PORTAL PAGES
	this.indicatordetailsPage = this.basePortalUrl + "indicator-details.html";
	this.browseByPublisherPage = this.basePortalUrl + "browse-by-publisher.html";
	this.browseByGeographicReferencePage = this.basePortalUrl + "browse-by-GeoRef.html";
	this.browseByKeywordPage = this.basePortalUrl + "browse-by-Keyword.html";
	this.browseByYearPage = this.basePortalUrl + "browse-by-Year.html";
	this.browseByAlphabetCharPage = this.basePortalUrl + "browse-by-alphabetchar.html";
	this.browseByThemeDetails = this.basePortalUrl + "browse-by-theme-details.html";
	this.indicatordetailspage = this.basePortalUrl + "indicator-details.html";
	this.browseByGeoDetails = this.basePortalUrl + "browse-by-geo-details.html";
	this.searchResults = this.basePortalUrl + "search-results.html";
}
