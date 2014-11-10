// JavaScript Document
 // ensure the web page (DOM) has loaded
      document.addEventListener("DOMContentLoaded", function () {

         // Create a popcorn instance by calling Popcorn("#id-of-my-video")
         var pop = Popcorn("#emi")
		   
           	
		 // play the video
  		pop.play();
	 
		 
		 // add a Timeline
		pop.timeline({ pauseOnLinkClicked: true,
        start: 0,
        target: "timeline",
        title: "Happy test",
        text: "Un test pour Valentine.",
        innerHTML: "<a href='http://en.wikipedia.org'>plus info sur Happy</a>",
        direction: "up"
      })
	  .timeline ({
		start: 15,
        target: "timeline",
        title: "Photos associées",
        text: "Les photos du même vidéo faites par les autres.",
        innerHTML: "<div id='mesPhotos'><img src='img01.png' width='100'><img src='img02.png' width='100'><img src='img03.png' width='100'></div>",
        direction: "up"
	  })
		.timeline ({
		start: 30,
        target: "timeline",
        title: "Regardez sous la vid&eacute;o...",
        text: "Vous trouverez &eacute;galement d'autres informations li&eacute;es aux protagonistes du film.",
        innerHTML: "",
        direction: "up"
      })
	  
	  
	  .timeline({
        start: 74,
        target: "timeline",
        title: "L'&eacute;tat des lieux en 2010-2011.",
        text: "Le rapport RSF est un classement annuel r&eacute;alis&eacute; par l'association 'Reporter sans Fontiere' sur l'&eacute;tat de la libert&eacute; de la presse dans 178 pays &agrave; travers le monde. ",
        innerHTML: "<a href='http://fr.rsf.org/press-freedom-index-2010,1034.html' target='blank'>D&eacute;couvrez le rapport 2010 de RSF sur la libert&eacute; de la presse dans le monde</a>" ,
        direction: "up"
      })
	  
	   .timeline({
        start: 96,
        target: "timeline",
        title: "Jean-Fran&ccedil;ois Julliard",
        text: "Jean-Fran&ccedil;ois Julliard a &eacute;t&eacute; Secr&eacute;taire g&eacute;n&eacute;ral de l'association Reporters sans fronti&egrave;res de 2008 a 2011. Il est devenu Directeur g&eacute;n&eacute;ral de Greenpeace France depuis d&eacute;cembre 2011.",
        innerHTML: "<a href='http://tempsreel.nouvelobs.com/societe/20111212.OBS6507/jean-francois-julliard-prend-la-tete-de-greenpeace.html' target='blank'>Lire l'article du Nouvel Observateur.</a>" ,
        direction: "up"
      })
	  
	    .timeline({
        start: 98,
        target: "timeline",
        title: "La France retrogad&eacute;e",
        text: "En 8ans, la France a perdu 33 places au classement RSF. Elle se retrouve d&eacute;sormais derriere la Papouasie Nouvelle Guin&eacute;e",
        innerHTML: "" ,
        direction: "up"
      })
	  
	  
	  .timeline({
        start: 106,
        target: "timeline",
        title: "La r&eacute;forme de l'audiovisuel public",
        text: "Adopt&eacute;e en 2009, cette r&eacute;forme apporte de profonds changements au fonctionnement du service public t&eacute;l&eacute;vis&eacute;.",
        innerHTML: "<a href='http://www.scam.fr/Dossiers/audiovisuel/audiovisuel.html' target='blank'>Lisez le dossier de la SCAM a ce sujet.</a>" ,
        direction: "up"
      })
	  
	   .timeline({
        start: 140,
        target: "timeline",
        title: "Le secret D&eacute;fense en France",
        text: "Les Information classifi&eacute;e en France b&eacute;n&eacute;ficient comme partout ailleurs d'une qualification juridique particuliere. Violer le secret d&eacute;fense est passible de 100.000 euros d'amende et de 7ans d'emprisonement.",
        innerHTML: "<a href='http://www.sgdn.gouv.fr/site_rubrique124.html' target='blank'>Rappel du Secret D&eacute;fense en France.</a>" ,
        direction: "up"
      })
	  
	  .timeline({
        start: 153,
        target: "timeline",
        title: "G.Dasqui&eacute; a &eacute;t&eacute; mis en examen",
        text: "Sp&eacute;cialiste des questions de d&eacute;fense et des services secrets, le journaliste Guillaume Dasqui&eacute; a &eacute;t&eacute; mis en examen dans la nuit de jeudi &agrave; vendredi pour 'compromission du secret de la d&eacute;fense'...",
        innerHTML: "<a href='http://www.rue89.com/2007/12/06/le-journaliste-guillaume-dasquie-a-ete-mis-en-examen' target='blank'>Lire la suite du papier publi&eacute; en 2007 sur Rue 89</a>" ,
        direction: "up"
      })
	  
	  .timeline({
        start: 153,
        target: "timeline",
        title: "Les Fran&ccedil;ais en savaient long",
        text: "Le papier en question sur le Monde.fr",
        innerHTML: "<a href='http://www.lemonde.fr/societe/article/2007/04/16/ce-que-les-services-francais-savaient-de-ben-laden-en-2000_896448_3224.html' target='blank'>Lire '11 septembre 2001 : les Fran&ccedil;ais en savaient long'</a>" ,
        direction: "up"
      })
	  
	  
	  
	   .timeline({
        start: 240,
        target: "timeline",
        title: "La protection des sources",
        text: "La protection des sources est essentielle dans un travail d'investigation afin d'assurer aux sources protection contre d'&eacute;ventuelles repr&eacute;sailles. La loi du 4 janvier 2010, renforce en th&eacute;orie le dispositif.",
        innerHTML: "<a href='http://www.assemblee-nationale.fr/13/dossiers/protection_secret_sources_journalistes.asp' target='blank'>Lire le rapport parlementaire &agrave; ce sujet.</a> et <a href='http://www.lexpress.fr/actualite/media-people/media/protection-des-sources-des-medias-le-oui-mais-de-dati_501812.html'>l'analyse de l'Express a ce sujet</a>",
        direction: "up"
      })
	  
	    .timeline({
        start: 275,
        target: "timeline",
        title: "Le Monde surveill&eacute;",
        text: "Des journalistes du 'Monde' ont bien fait l'objet d'un fliquage caract&eacute;ris&eacute; de la part de la Direction Centrale du Renseignement Int&eacute;rieur (DCRI).",
        innerHTML: "<a href='http://www.snj.fr/spip.php?rubrique62' target='blank'>Lire le communiqu&eacute; du Syndicat National des Journalistes.</a> ",
        direction: "up"
      })
	  
	    .timeline({
        start: 288,
        target: "timeline",
        title: "Respectons les regles!",
        text: "Il y a une loi sur la protection des sources , il faut la respecter. Sylvie Kauffmann, directrice de la r&eacute;daction du Monde, explique les raisons qui ont pouss&eacute; le quotidien &agrave; porter plainte contre X pour 'violation du secret des sources' dans l'affaire Woerth-Bettencourt.",
        innerHTML: "<a href='http://www.lemonde.fr/societe/video/2010/09/13/il-y-a-une-loi-sur-la-protection-des-sources-il-faut-la-respecter_1410689_3224.html' target='blank'>Voir la vid&eacute;o!</a> ",
        direction: "up"
      })
	  
	  .timeline({
        start: 311,
        target: "timeline",
        title: "Gerard Davet cambriol&eacute;",
        text: "FAIT-DIVERS - Un ordinateur portable et un GPS ont &eacute;t&eacute; d&eacute;rob&eacute;s...",
        innerHTML: "<a href='http://www.20minutes.fr/societe/612337-societe-le-journaliste-monde-gerard-davet-cambriole-domicile' target='blank'>Lire l'info sur 20 minutes.</a> ",
        direction: "up"
      })
	  
	   .timeline({
        start: 341,
        target: "timeline",
        title: "L'affaire des Fadettes",
        text: "La police a constitu&eacute; 700 pages de dossier avec les factures t&eacute;l&eacute;phoniques d&eacute;taill&eacute;es de journalistes du Monde, afin d'identifier leurs sources dans l'enquête sur Liliane Bettencourt.",
        innerHTML: "<a href='http://www.lemonde.fr/societe/article/2011/12/06/affaire-des-fadettes-courroye-a-bien-viole-le-secret-des-sources_1613976_3224.html' target='blank'>Le rappel du Monde.fr.</a> ",
        direction: "up"
      })
	  
	     .timeline({
        start: 367,
        target: "timeline",
        title: "Les medias et le pouvoir",
        text: " Les m&eacute;dias sont-ils effectivement un facteur d'influence politique ? ",
        innerHTML: "<a href='http://www.senat.fr/europe/dossiers/conference_presidents/rapport_swaelen_lahaye94.pdf' target='blank'>T&eacute;l&eacute;chargez le rapport du S&eacute;nat de 1994 sur les m&eacute;dias et le pouvoir.</a> ",
        direction: "up"
      })
	  
	     .timeline({
        start: 393,
        target: "timeline",
        title: "La video 'Off' de Sarkozy",
        text: "En 2008, Augustin Scalbert, journaliste &agrave; Rue89, sort une video 'off' ou l'on d&eacute;couvre Nicolas Sarkozy dictant son agenda &agrave; un journaliste de France3. Scalbert sera mis en examen quelque temps plus tard.",
        innerHTML: "<a href='http://www.rue89.com/2008/06/30/les-images-de-sarkozy-en-off-avant-son-interview-sur-france-3' target='blank'>Voir la video complete sur Rue89</a> et d&eacute;couvrez la suite <a href='http://www.liberation.fr/medias/0101640886-propos-hors-antenne-de-sarkozy-un-journaliste-de-rue89-mis-en-examen' target='blank'>de l'histoire sur Liberation.fr</a>  ",
        direction: "up"
      })
		   
		 .timeline({
        start: 407,
        target: "timeline",
        title: "Le pr&eacute;sentateur de France 3",
        text: "La voix que l'on entends et qui reponds &agrave; Nicolas Sarkozy est celle de Paul Nahon.",
        innerHTML: "<a href='http://fr.wikipedia.org/wiki/Paul_Nahon' target='blank'>Lisez sa fiche Wikipedia</a>",
        direction: "up"
      })
	  
	   .timeline({
        start: 431,
        target: "timeline",
        title: "La nomination contest&eacute;e",
        text: "Les PDGs de France T&eacute;l&eacute;vision et de Radio France ne seront plus nomm&eacute; par le Conseil sup&eacute;rieur de l'audiovisuel (CSA), mais en conseil des ministres, apr&egrave;s avis du CSA et accord des commissions des affaires culturelle du Parlement",
        innerHTML: "<a href='http://www.lefigaro.fr/medias/2008/12/04/04002-20081204ARTFIG00585-nomination-du-pdg-de-france-tv-feu-vert-des-deputes-.php' target='blank'>La suite sur le Figaro.fr</a>",
        direction: "up"
      })
	  
	  .timeline({
        start: 451,
        target: "timeline",
        title: "Un sale go&ucirc;t d'ORTF",
        text: "D&eacute;sormais, c'est Nicolas Sarkozy qui nommera le patron de France T&eacute;l&eacute;visions. Une marche arri&egrave;re ph&eacute;nom&eacute;nale dans l'audiovisuel public fran&ccedil;ais...",
        innerHTML: "<a href='http://www.liberation.fr/medias/0101303324-un-sale-gout-d-ortf' target='blank'>Raphael Garrigos et Isabelle Roberts analysent la d&eacute;cision sur Lib&eacute;ration.</a>",
        direction: "up"
      })
	  
	   .timeline({
        start: 533,
        target: "timeline",
        title: "Indic malgr&eacute; lui'",
        text: "En d&eacute;tail, l'histoire d'Olivier Laban Mattei...",
        innerHTML: "<a href='http://www.liberation.fr/medias/0101545909-corse-un-photographe-indic-malgre-lui' target='blank'>Suite...</a>",
        direction: "up"
      })
	  
	     .timeline({
        start: 685,
        target: "timeline",
        title: "Le cas des violences polici&egrave;res",
        text: "La loi autorise la police &agrave; faire emploi de la force dans certaines situations (arrestations, &eacute;vasions, flagrants d&eacute;lits, etc.). Le terme de 'violence polici&egrave;re' est cependant utilis&eacute; par la plupart des m&eacute;dias pour d&eacute;signer des violences dites 'ill&eacute;gitimes', c'est-&agrave;-dire qu'elles ne sont pas n&eacute;cessaires ou encore qu'elles sont exag&eacute;r&eacute;es.",
        innerHTML: "<a href='http://fr.wikipedia.org/wiki/Violence_polici%C3%A8re' target='blank'>Suite...</a>",
        direction: "up"
      })
	     
		  .timeline({
        start: 740,
        target: "timeline",
        title: "Une r&eacute;flexion s'organise",
        text: "J&eacute;rome Bouvier a cr&eacute;&eacute; les assises du journalisme ou chaque ann&eacute;es la profession se r&eacute;unit et pour r&eacute;fl&eacute;chir aux nouvelles pratiques du journalisme.",
        innerHTML: "<a href='http://www.assisesdujournalisme.com' target='blank'>Le site www.assisesdujournalisme.com</a>",
        direction: "up"
      })
	  
	    .timeline({
        start: 777,
        target: "timeline",
        title: "Des liens compliqu&eacute;s",
        text: "Xavier Bertrand a violemment pris &agrave; parti Nicolas Totet du Courrier Picard. L'incident n'a dur&eacute; qu'une poign&eacute;e de minutes, mais r&eacute;v&egrave;le les liens complexes qu'entretient la presse locale avec la mairie de Saint-Quentin.",
        innerHTML: "<a href='http://www.lexpress.fr/actualite/politique/la-mauvaise-presse-de-xavier-bertrand-a-saint-quentin_843543.html' target='blank'>Lire la suite sur l'Express</a>",
        direction: "up"
      })
		 
		 .timeline({
        start: 880,
        target: "timeline",
        title: "Un probl&egrave;me de contenu",
        text: "Selon l'&eacute;tude du Centre national pour le d&eacute;veloppement de l'information pr&eacute;sent&eacute;e au Congr&egrave;s de la presse fran&ccedil;aise, la crise de la presse est surtout li&eacute;e au traitement journalistique de l'actualit&eacute;.",
        innerHTML: "<a href='http://www.lefigaro.fr/medias/2008/11/20/04002-20081120ARTFIG00522-crise-de-la-presse-un-probleme-de-contenu-.php' target='blank'>Un apercu de la crise en 2008</a> et le papier <a href='http://blogs.mediapart.fr/blog/fatarella/251011/les-maux-de-la-presse' target='blank'> Les Maux de la presse</a>",
        direction: "up"
      })
	  
	  .timeline({
        start: 910,
        target: "timeline",
        title: "Internet ne les a pas 'tuer'",
        text: "<bold>A savoir: </bold>la presse n'est pas - contrairement &agrave; ce qu'elle pr&eacute;tends - victime du succ&eacute;s d'internet. Depuis la fin de la seconde guerre Mondiale, elle ne cesse de perdre des lecteurs, avant m&ecirc;me que le Minitel ou la Tv ne soit invent&eacute;e.",
        innerHTML: "<a href='http://www.erwanngaucher.com/19122011Le-web-m39a-tuer-Le-gros-mensonge-de-la-presse-papier,1.media?a=769' target='blank'>L'analyse d'Erwan Gaucher</a>",
        direction: "up"
      })
		 
		 .timeline({
        start: 984,
        target: "timeline",
        title: "Serge Dassault vire Morel",
        text: "Georges Malbrunot aurait m&eacute;content&eacute; Serge Dassault avec un article sur les tractations autour de la vente d'armes entre Isra&euml;l et les &Eacute;mirats dont Dassault &eacute;tait l'un des acteurs. En repr&eacute;sailles, le propri&eacute;taire du Figaro remplace son directeur g&eacute;n&eacute;ral.",
        innerHTML: "<a href='http://www.alterinfo.net/La-derniere-idee-saine-de-Dassault-virer-le-directeur-general-du-groupe-Le-Figaro_a54357.html' target='blank'>Les coulisses</a>",
        direction: "up"
      })
	  
	   .timeline({
        start: 1029,
        target: "timeline",
        title: "L'affaire 'DSK' et le PS",
        text: "Des r&eacute;dactions 'convoqu&eacute;es' en secret dans de grands restaurants parisiens. Un candidat qui se d&eacute;clare devant des journalistes dont il r&eacute;clame le soutien…",
        innerHTML: "<a href='http://www.atlantico.fr/decryptage/dsk-primaire-socialiste-107908.html' target='blank'>Atlantico revient sur les coulisses m&eacute;dia de l'affaire.</a>",
        direction: "up"
      })
	  
	  .timeline({
        start: 1081,
        target: "timeline",
        title: "Qui poss&egrave;de les m&eacute;dias en France?",
        text: "Le site participatif AgoraVox propose un paysage de la propri&eacute;t&eacute; des titres de presse et des instituts de sondage en France.",
        innerHTML: "<a href='http://www.agoravox.fr/actualites/medias/article/qui-possede-les-medias-72443' target='blank'>Lire le papier sur AgoraVox.</a>",
        direction: "up"
      })
	  
	    .timeline({
        start: 1148,
        target: "timeline",
        title: "Un mod&egrave;le &eacute;conomique en crise",
        text: "Le site du S&eacute;nat, d&eacute;cortique dans le d&eacute;tail le mod&egrave;le &eacute;conomique de la presse fran&ccedil;aise et pose la question : 'Jusqu'ou aider la presse'? L'institut Montaigne lui propose des solutions dans un rapport sur la presse.",
        innerHTML: "<a href='http://www.senat.fr/rap/r03-406/r03-4063.html' target='blank'>Lire le rapport du S&eacute;nat</a> et celui <a href='http://www.institutmontaigne.org/comment-sauver-la-presse-quotidienne-2456.html'> de l'institut Montaigne </a> ",
        direction: "up"
      })
	  
	    .timeline({
        start: 1220,
        target: "timeline",
        title: "La d&eacute;gradation des Piges",
        text: "Int&eacute;ressante &eacute;tude comparative des pratiques d'emploi et de travail, subordination et droits sociaux : analyse comparative Intermittents et Pigistes",
        innerHTML: "<a href='http://www.cip-idf.org/article.php3?id_article=5806' target='blank'>&Agrave; t&eacute;l&eacute;charger!</a>",
        direction: "up"
      })
	  
	  .timeline({
        start: 1320,
        target: "timeline",
        title: "Les Fran&ccedil;ais et la Presse",
        text: "Dans un autre registre, la relation des fran&ccedil;ais &agrave; la presse et l'information reste dans l'ensemble assez complexe",
        innerHTML: "<a href='http://www.evolution-emarketing.fr/emarketing_ecommerce/2011/03/lexperience-lexpress-les-francais-et-l-information.html' target='blank'>A lire sur le blog 'Evolution e-marketing'</a>",
        direction: "up"
      })
	  
	  .timeline({
        start: 1367,
        target: "timeline",
        title: "Et en 2012 alors?",
        text: "La suite se d&eacute;roule peut etre sur Internet. 2012 ne sera pas une ann&eacute;e comme les autres dans le paysage digital Fran&ccedil;ais. Pr&eacute;sidentielles obligent, les desks num&eacute;riques vont eux aussi chauffer et le journalisme en ligne tiendra l&agrave; l'occasion de se faire enfin une vraie place aupr&egrave;s des a&icirc;n&eacute;s...",
        innerHTML: "<a href='http://owni.fr/2011/04/13/2012-tournant-du-journalisme-web/' target='blank'>La suite sur OWNI.fr</a>",
        direction: "up"
      });
	  
	  
      }, false);