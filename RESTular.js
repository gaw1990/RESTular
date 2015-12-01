function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function singularize(string) {
  var stringEnd = string.length - 1

  if (plurals[string]) {
    return plurals[string]
  }  else if (string.substr((stringEnd - 2), stringEnd) === "ies") {
    return (string.substr(0, stringEnd - 2) + "y")
  } else if (string.substr((stringEnd - 2), stringEnd) === "ses") {
    return string.substr(0, stringEnd - 1) 
  } else if (string.substr(stringEnd) === "s") {
    return string.substr(0, (stringEnd))
  } else {
    return string
  }
}

$(document).ready(function() {
	$(".submission-box").on("keyup", function() {
    $(".golden-text").text($(this).val().toLowerCase())
		$(".g-text-singular").text(capitalizeFirstLetter(singularize($(this).val())))
	});
});

$(document).ready(function(){
   $('tr.route').mouseover(function(){
      $(this).addClass('hover');
   });
        
   $('tr.route').mouseout(function(){
      $(this).removeClass('hover');
   });
});

$(document).ready(function(){
	$(".route").on("click", function() {
		$(this).next().toggle()
	});
});








var plurals = {
  'addenda': 'addendum',
  'aircraft': 'aircraft',
  'algae': 'alga',
  'alumnae': 'alumna',
  'alumni': 'alumnus',
  'amoebae': 'amoeba',
  'analyses': 'analysis',
  'antennae': 'antenna',
  'antitheses': 'antithesis',
  'apices': 'apex',
  'appendices': 'appendix',
  'axes': 'axis',
  'bacilli': 'bacillus',
  'bacteria': 'bacterium',
  'barracks': 'barracks',
  'bases': 'basis',
  'beaux': 'beau',
  'bison': 'bison',
  'bureaus': 'bureau',
  'cacti': 'cactus',
  'calves': 'calf',
  'children': 'child',
  'châteaus': 'château',
  'cherubim': 'cherub',
  'codices': 'codex',
  'concerti': 'concerto',
  'corpora': 'corpus',
  'crises': 'crisis',
  'criteria': 'criterion',
  'curricula': 'curriculum',
  'data': 'datum',
  'deer': 'deer',
  'diagnoses': 'diagnosis',
  'dice': 'die',
  'dwarfs': 'dwarf',
  'echoes': 'echo',
  'elves': 'elf',
  'elk': 'elk',
  'ellipses': 'ellipsis',
  'embargoes': 'embargo',
  'emphases': 'emphasis',
  'errata': 'erratum',
  'faux pas': 'faux pas',
  'fezes': 'fez',
  'fish': 'fish',
  'foci': 'focus',
  'feet': 'foot',
  'formulae': 'formula',
  'fungi': 'fungus',
  'gallows': 'gallows',
  'genera': 'genus',
  'geese': 'goose',
  'graffiti': 'graffito',
  'grouse': 'grouse',
  'halves': 'half',
  'heroes': 'hero',
  'hooves': 'hoof',
  'hypotheses': 'hypothesis',
  'indices': 'index',
  'knives': 'knife',
  'larvae': 'larva',
  'leaves': 'leaf',
  'libretti': 'libretto',
  'lives': 'life',
  'loaves': 'loaf',
  'loci': 'locus',
  'lice': 'louse',
  'men': 'man',
  'matrices': 'matrix',
  'means': 'means',
  'media': 'medium',
  'memoranda': 'memorandum',
  'minutiae': 'minutia',
  'moose': 'moose',
  'mice': 'mouse',
  'nebulae': 'nebula',
  'neuroses': 'neurosis',
  'news': 'news',
  'nuclei': 'nucleus',
  'oases': 'oasis',
  'offspring': 'offspring',
  'opera': 'opus',
  'ova': 'ovum',
  'oxen': 'ox',
  'paralyses': 'paralysis',
  'parentheses': 'parenthesis',
  'phenomena': 'phenomenon',
  'phyla': 'phylum',
  'potatoes': 'potato',
  'prognoses': 'prognosis',
  'quizzes': 'quiz',
  'radii': 'radius',
  'referenda': 'referendum',
  'salmon': 'salmon',
  'scarves': 'scarf',
  'selves': 'self',
  'series': 'series',
  'sheep': 'sheep',
  'shelves': 'shelf',
  'shrimp': 'shrimp',
  'species': 'species',
  'stimuli': 'stimulus',
  'strata': 'stratum',
  'swine': 'swine',
  'syllabi': 'syllabus',
  'symposia': 'symposium',
  'synopses': 'synopsis',
  'syntheses': 'synthesis',
  'tableaus': 'tableau',
  'those': 'that',
  'theses': 'thesis',
  'thieves': 'thief',
  'tomatoes': 'tomato',
  'teeth': 'tooth',
  'trout': 'trout',
  'tuna': 'tuna',
  'vertebrae': 'vertebra',
  'vertices': 'vertex',
  'vetoes': 'veto',
  'vitae': 'vita',
  'vortices': 'vortex',
  'wharves': 'wharf',
  'wives': 'wife',
  'wolves': 'wolf',
  'women': 'woman' 
}


