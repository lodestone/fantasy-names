function generator$real$normans(type) {﻿
	var nm1 = ["Âbréhan", "Âdam", "Èrthu", "Élyie", "Étienne", "Êdouard", "Abelard", "Abelart", "Achard", "Adrian", "Adrien", "Ailmar", "Ailmer", "Aimé", "Aimablle", "Alan", "Albèrt", "Albé", "Albéric", "Albert", "Albrei", "Albreid", "Albri", "Alcide", "Alcine", "Alexandre", "Alfonce", "Alfred", "Almire", "Amalri", "Anchetil", "Andrâ", "André", "Anketil", "Anquetil", "Anscher", "Anschetil", "Anselme", "Ansfrei ", "Ansfreid", "Ansger", "Ansketil", "Ansquetil", "Anthoine", "Arnald", "Arnalt", "Arnold", "Arnolt", "Arnost", "Arnulf", "Arsène", "Arthur", "Artus", "Aubîn", "Aubert", "Auguinare", "Avenel", "Bèrnabé", "Bénoni", "Bênardin", "Bêtinet", "Baldewin", "Baldri", "Balduin", "Baldwin", "Baptiste", "Barnabé", "Barthélémy", "Batistin", "Bazile", "Benjamîn", "Benouét", "Berenger", "Bernard", "Bernart", "Bertin", "Bertram", "Blaise", "Boamund", "Boamunt", "Boemund", "Boemunt", "Bon", "Bouonot", "Cénéric", "César", "Charles", "Charlot", "Chinot", "Claude", "Cliément", "Cllément", "Clovis", "Colas", "Constant", "Croque", "Croques", "Dâlpheusse", "Dâvi", "Dénin", "Désiré", "Dannié", "Danyel", "David", "Delphin", "Denis", "Dgibèrt", "Dgilliaume", "Droge", "Droges", "Drogue", "Drogues", "Durant", "Edelmir", "Elysée", "Emery", "Emory", "Engelger", "Engelmar", "Engenulf", "Engerand", "Engerant", "Erchembald", "Erchembalt", "Erchenger", "Erkembald", "Erkembalt", "Erkenger", "Ernegis", "Ernest", "Ernulf", "Esteven", "Estienne", "Etienne", "Eude", "Eudes", "Eustace", "Everard", "Everart", "Evroult", "Félix", "Firmin", "Fllipin", "Fllocé", "Frédéris", "Frédo", "Fréton", "François", "Françot", "Françouais", "Franc", "Fraunçouès", "Fulbert", "Fulcher", "Fulke", "Fulkes", "Fulque", "Fulques", "Génotin", "Gérold", "Gabriel", "Galbert", "Galchelin", "Galdin", "Galeran", "Gallien", "Galter", "Garin", "Garinfrei", "Garinfreid", "Gefrei", "Gefreid", "Gentian", "Georges", "Gerald", "Geralt", "Gerard", "Gerart", "German", "Gerveis", "Gilbert", "Gilebert", "Gilles", "Gislebert", "Gllâome", "Gobald", "Gobalt", "Godebald", "Godebalt", "Godfreid", "Gofrei", "Gofreid", "Gozelin", "Gozelme", "Grimald", "Grimalt", "Grimold", "Grimolt", "Guérôme", "Gui", "Guian", "Guid", "Guide", "Guides", "Guidmund", "Guidmunt", "Guie", "Guies", "Guilbert", "Guillaume", "Guillelme ", "Guimund", "Guimunt", "Guinebald", "Guinebalt", "Guis", "Guiz", "Gunduin", "Gundulf", "Gundwin", "Guustave", "Guuste", "Guy", "Hébèrt", "Hame", "Hamelin", "Hames", "Harald", "Haralt", "Harold", "Harolt", "Hasculf", "Helies", "Helinand", "Helinant", "Henri", "Herbert", "Herculles", "Herfast", "Herluin", "Herman", "Hilbert", "Hippolyte", "Hubèrt", "Hubert", "Hug", "Hugbert", "Hugue", "Hugues", "Hunfrei", "Hunfreid", "Hyacynthe", "Isaac", "Isembart", "Isidore", "Ive", "Ivelin", "Ives", "Jâcob", "Jâosé", "Jônas", "Jacques", "Jaques", "Jean", "Jeaun", "Jehans", "Jerome", "Jeustin", "Jimce", "Jordans", "Josué", "Jozelin", "Jozelme", "Jules", "Julien", "Léan", "Léonche", "Laïesse", "Lambert", "Laud", "Laurens", "Laurent", "Lexaundre", "Lexis", "Louis", "Louothains", "Luc", "Ludovi", "Médée", "Médéric", "Mabire", "Malger", "Mar", "Marc", "Marin", "Martîn", "Martin", "Matchi", "Mathurin", "Maurice", "Miché", "Michi", "Mile", "Miles", "Moïse", "Napoliyoun", "Nic'lesse", "Nicolas", "Nicole", "Niel", "Noel", "Noré", "Norman", "Noué", "Ode", "Odes", "Oliver", "Olivyi", "Olympe", "Onésipe", "Ortaire", "Osbern", "Osbert", "Osmund", "Osmunt", "Ouesslé", "Pâolin", "Ph'lippe", "Pièrre", "Piérin", "Pierre", "Pierrot", "Piteur", "Pllacide", "Polydor", "Pomponne", "Prudent", "Pyire", "Quentin", "Rémin", "Réné", "Radulf", "Raimbald", "Raimbalt", "Raimund", "Raimunt", "Rainald", "Rainalt", "Rainbald", "Rainbalt", "Rainer", "Rainfrei", "Rainfreid", "Rainulf", "Ranulf", "Raoul", "Rasiphe", "Raulf", "Raven", "René", "Richard", "Richart", "Richer", "Roald", "Roalt", "Robèrt", "Robert", "Rodald", "Rodalt", "Rodbert", "Rodger", "Rodulf", "Roger", "Rollon", "Romain", "Romoald", "Romoalt", "Rotbert", "Rotger", "Rou", "Roulf", "Sarle", "Sarles", "Seinfrei", "Seinfreid", "Serle", "Serles", "Simon", "Simun", "Sosthène", "Tancrède", "Tancrei", "Tancreid", "Tedbald", "Tedbalt", "Tedri", "Teduin", "Tedwin", "Teobald", "Teobalt", "Terri", "Théodore", "Thimothée", "Thiophile", "Thiry", "Thomas", "Thonmas", "Tiebald", "Tiebalt", "Tierri", "Timothée", "Touénot", "Turald", "Turalt", "Turbern", "Turbert", "Turchetil", "Turchil", "Turgis", "Turketil", "Turold", "Turolt", "Turstin", "Turulf", "Ugène", "Urse", "Urses", "Valentîn", "Valeri", "Victorin", "Vincent", "Walbert", "Walchelin", "Waldin", "Waleran", "Waleri", "Walkelin", "Walter", "Wandrille", "Warin", "Warinfrei", "Warinfreid", "Wid", "Wide", "Wides", "Widmund", "Widmunt", "Wies", "Willelme", "Wimund", "Wimunt", "Winebald", "Winebalt", "Wis", "Wiz", "Zéphyr"];
	var nm2 = ["Élîzabé", "Êve", "Aaline", "Aaliz", "Ade", "Adele", "Adeline", "Adeliz", "Adelize", "Adile", "Agate", "Agathe", "Agnes", "Agnez", "Albrei", "Albreide", "Aliénor", "Almaïde", "Alzina", "Ambre", "Amfrei", "Amfreide", "Amfrie", "Amiere", "Anfrei", "Anfreide", "Anfrie", "Anne", "Anthoinette", "Antoinette", "Aonène", "Arlette", "Aspasie", "Aungèle", "Aungélina", "Aveline", "Azelma", "Barbe", "Batilde", "Beatriz", "Bellé", "Berrie", "Berte", "Berthe", "Berthille", "Bilehelde", "Bilehende", "Bilelde", "Bilende", "Bonne", "Brunhilde", "Cécire", "Cédulie", "Célène", "Carolène", "Cat'linne", "Cath'rinne", "Catherine", "Cathrène", "Charlotte", "Chimâne", "Chinote", "Claude", "Claudile", "Cllâodène", "Cllémentène", "Coline", "Coralie", "Cyrille", "Délaïde", "Damate", "Damete", "Denise", "Diane", "Dorothée", "Dunelme", "Edelène", "Edelmire", "Elphège", "Elyzée", "Emélie", "Emme", "Emmeline", "Ephrasie", "Eremberge", "Eremburge", "Ermeline", "Ernestène", "Esile", "Estèr", "Eulalie", "Euphrosène", "Ezilda", "Félicitaé", "Féréolle", "Fleurie", "Fleurine", "Flieur", "Fllavie", "Florence", "Florymonde", "Françoise", "Fraunchoun", "Fredesende", "Fresende", "Gélique", "Génie", "Gabyelle", "Geneviève", "Gerberge", "Gisele", "Gisle", "Godehilde", "Godhilde", "Gozeline", "Grâce", "Guéânne", "Gueuve", "Guiâné", "Guinâte", "Guiromène", "Gunnore", "Guustène", "Hélène", "Haueise", "Hauise", "Haweise", "Hawise", "Heliarde", "Helisende", "Heloise", "Henriette", "Herleve", "Hièrru", "Hildeburge", "Hildegarde", "Housse", "Isabé", "Isabeau", "Isabel", "Isabelle", "Jânotte", "Jacotte", "Jacquelle", "Janine", "Jasmîn", "Jeanne", "Jeannetounette", "Jehanne", "Jeulie", "Jeustène", "Joséphène", "Jouaie", "Jozeline", "Judit", "Judith", "Juliette", "Katherine", "Lèane", "Léne", "Léonne", "Léontine", "Lîsabé", "Lîzabé", "Launde", "Laurente", "Lezeline", "Lina", "Lioûnie", "Lisa", "Lisabé", "Lliocadie", "Lonôre", "Louise", "Louiseu", "Lucette", "Lucie", "Lucque", "Mélanîn", "Mélie", "Mélina", "Mélonie", "Méraïyeu", "Mêlie", "Mêrrienne", "Mabile", "Mabille", "Madallaine", "Madeleine", "Malde", "Manoun", "Margerie", "Margot", "Marguerite", "Margueritte", "Maria", "Marie-Madelène", "Marotène", "Marotte", "Marthe", "Mathide", "Mathie", "Mathilde", "Matilde", "Mauricette", "Merleberge", "Modeste", "Mollé", "Muriel", "Nânette", "Nâonoun", "Naïse", "Nancy", "Nathalée", "Nathalie", "Norène", "Odoline", "Olympe", "Ophélie", "Ouinneteur", "Pâcienche", "Pâolène", "Pérotène", "Palmyre", "Pavot", "Philiberthe", "Philomène", "Placite", "Pllagie", "Râché", "Rénâée", "Raîne", "Rachel", "Raimburge", "Rainburge", "Roese", "Rohese", "Rousalie", "Sébire", "Séraphène", "Saundrène", "Seinfreide", "Seinfrie", "Sibille", "Sibylle", "Sidonnie", "Simone", "Sophie", "Soucique", "Stèr", "Suzanne", "Suzette", "Suzonne", "Suzoun", "Torène", "Touènette", "Ursule", "Victoère", "Victoire", "Victorène", "Violâte", "Vonette", "Weuve", "Younette", "Yvanne", "Zélie", "Zénaïde", "Zoé"];
	var nm3 = ["Amond", "Anzeray", "Archer", "Argent", "Asselin", "Auber", "Aubert", "Aucourte", "Auffrye", "Auvray", "Avery", "Bailleul", "Banister", "Baro", "Baskerville", "Basnage", "Basset", "Baudry", "Baujot", "Bauldry", "Bauquemare", "Beauchamp", "Beaumont", "Becdelièvre", "Bellamy", "Benoist", "Bernard", "Bigot", "Blampied", "Blancbaston", "Boisivon", "Boislevesque", "Boivin", "Bonenffant", "Bonner", "Bonshoms", "Bordel", "Bouchard", "Boucher", "Brèvedent", "Bretel", "Brinon", "Bryan", "Bullen", "Bunker", "Burce", "Burcy", "Burgoyne", "Burguet", "Burke", "Busquent", "Butcher", "Caillot", "Caradas", "Carpenter", "Carter", "Cavelier", "Centsols", "Challenge", "Chamberlain", "Chambers", "Chamborne", "Champernon", "Champernoun", "Champnon", "Chancellor", "Charles", "Condon", "Corbett", "Cornely", "Courtenay", "Cruise", "D'Arcy", "D'Onston", "Damours", "Darrell", "Daubney", "Daugherty", "De Felius", "De Fry", "De Gascur", "De Marisco", "De Quincey", "Delaney", "Deschamps", "Desmares", "Destain", "Devere", "Devereux", "Disney", "Dorsey", "Draper", "Droullin", "Drury", "Du Buisson", "Du Gouey", "Du Moucel", "Du Perron", "Du Thuict", "Dubosc", "Dufay", "Dufour", "Duhamel", "Dumont", "Duquesne", "Durerie", "Durjardin", "Duval", "Dyel", "Enfield", "Erquemboure", "Eude", "Faucon", "Feu", "Fitz", "Fortescue", "Garin", "Gascoignes", "Geary", "Gillain", "Godart", "Godefroy", "Godfrey", "Gomboult", "Gouel", "Grant", "Granville", "Grimoult", "Grouchet", "Groulart", "Guéribout", "Guiffart", "Guyot", "Hédiart", "Hackert", "Hacket", "Hackett", "Haket", "Halkett", "Hallé", "Hall", "Halley", "Harcourt", "Haskett", "Heuzé", "Hirons", "Hue", "Ilbert", "Ingram", "Ingrams", "Irons", "Isobel", "Jordan", "Jubert", "La Vache", "La Verrier", "Labbé", "Lallement", "Lamar", "Lamarr", "Large", "Le Barge", "Le Blanc", "Le Chandelier", "Le Clerc", "Le Conte", "Le Cordier", "Le Cornu", "Le Doulcet", "Le Goix", "Le Grant", "Le Gras", "Le Jumel", "Le Lieur", "Le Maistre", "Le Marchant", "Le Marinier", "Le Masson", "Le Paulmier", "Le Pelletier", "Le Pesant", "Le Prévost", "Le Roux", "Le Seigneur", "Le Sueur", "Le Tellier", "Leavitt", "Lefebvre", "Lever", "Levett", "Lhuillier", "Louet", "Louis", "Lovell", "Lowell", "Luci", "Lyon", "Lyons", "Maignart", "Major", "Malet", "Mallory", "Mandeville", "Margas", "Mariage", "Martel", "Mayeux", "Maynet", "Mayoh", "Mayor", "Mesnage", "Montagu", "Montgomery", "Morris", "Mortimer", "Mottershead", "Mustel", "Neville", "Olivier", "Osment", "Osmond", "Osmont", "Péricard", "Paixdecoeur", "Pane", "Papon", "Paschal", "Pasquier", "Patris", "Percy", "Petremol", "Pippery", "Pithou", "Pomeroy", "Postel", "Puchot", "Quesnel", "Quièvremont", "Quincarnon", "Quincy", "Radcliffe", "Rahal", "Raoullin", "Rassent", "Restault", "Rivière", "Rocque", "Roger", "Romé", "Roussel", "Roy", "Royall", "Ruiz", "Russell", "Ryal", "Ryall", "Séguier", "Saint Claire", "Sayre", "Seymour", "Sidney", "Sinclair", "Spencer", "St Clair", "St Leger", "Taillefer", "Taillepied", "Talbot", "Taney", "Terrell", "Theroulde", "Thibault", "Thiboust", "Thomas", "Thorel", "Tirel", "Tourmente", "Tournebulle", "Toustain", "Tracey", "Tulles", "Varley", "Vastel", "Vavasour", "Vere", "Verley", "Vernon", "Vincent", "Vipond", "Voisin", "Wallace", "Warren", "West", "Wyvill", "Ygou", "Zouch", "d'Albert", "d'Amboise", "d'Ambray", "d'Arques", "d'Athenous", "de Bellehache", "de Bellemare", "de Bellièvre", "de Bethencourt", "de Blays", "de Bourgueville", "de Cahaihnes", "de Calmesnil", "de Caulmont", "de Challon", "de Chefderue", "de Civille", "de Cormeilles", "de Courseilles", "de Croismare", "de Faicterau", "de Grieu", "de Hanivel", "de Hattes", "de La Champagne", "de La Hay", "de La Mare", "de La Noue", "de La Place", "de La Porte", "de La Reue", "de La Roche", "de Lacy", "de Lampérière", "de Lombelon", "de Lorraine", "de Malhortye", "de Maromme", "de Mesniel", "de Mesnildo", "de Monchy", "de Monluc", "de Montchrestien", "de Montfault", "de Montgomery", "de Moustiers", "de Moy", "de Pardieu", "de Pinchemont", "de Recusson", "de Rely", "de Roncherolles", "de Saussay", "de Seguzzo", "de Servian", "de Seyssel", "de Valles", "de Vandes", "de Vere", "de Villy", "de Viuepont", "de Voil", "de Vymont", "l'Argent"];


	i = Math.floor(Math.random() * 10); {
		if (type === 1) {
			rnd = Math.floor(Math.random() * nm2.length);
			rnd2 = Math.floor(Math.random() * nm3.length);
			names = nm2[rnd] + " " + nm3[rnd2];
		} else {
			rnd = Math.floor(Math.random() * nm1.length);
			rnd2 = Math.floor(Math.random() * nm3.length);
			names = nm1[rnd] + " " + nm3[rnd2];
		}
		return names;
	}

}