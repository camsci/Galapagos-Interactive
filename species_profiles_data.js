// ----------
// Hold all of the data about the different plants and animals here
// ---------
var index_data = {
	
	// the cactus object
	prickly_cactus : {
		nice_name        : "Prickly Cactus",
		latin_name       : "Opuntia echios",
		habitat          : "The prickly pear cactus is suited to the dry lowlands of the Galapagos Islands as they <b>store water<\/b> in their thick, fleshy stems. Their <b>prickly needles<\/b> protect them against some predators and help to reduce water loss due to their low surface area.",
		food             : "Like all plants, the prickly pear cactus gains all the energy it needs from the sun. The sun's energy helps plants to turn carbon dioxide and water into oxygen and sugar, a process called <b>photosynthesis<\/b>. All plants are known as producers.",
		predators        : "Despite their sharp spikes, the pricky pear cactus is eaten by a wide range of animals. these include giant tortoises, <b>land iguanas<\/b> and some insects.",
		image_path       : "new_images/prickly_cactus.jpg",
		type_image_path  : "images/species_profiles/producer.png",
		type_description : "PRODUCER"
	},
	
	// the flying_fish object
	flying_fish : {
		nice_name        : "Flying Fish",
		latin_name       : "Exocoetus volitans",
		habitat          : "Found in tropical and warm subtropical waters, flying fish spend the majority of their time close to the surface of the water. When under thread from predators, flying fish will propel themselves out of the water and glide for up to 100m.",
		food             : "Flying fish feed on a variety of small organisms including krill and <b>plankton<\/b>",
		predators        : "Flying fish are predated upon by seabirds such as the <b>blue-footed booby<\/b>.",
		image_path       : "new_images/flying_fish.jpg",
		type_image_path  : "images/species_profiles/primary_consumer.png",
		type_description : "PRIMARY CONSUMER"
	},
	
	// the vampire finch object
	vampire_finch : {
		nice_name        : "Vampire Finch",
		latin_name       : "Geospiza difficilis septentrionalis",
		habitat          : "A type of sharp-beaked ground finch, the vampire finch is found on the northern most islands of Wolf and Darwin where it is very dry.",
		food             : "The vampire finch has evolved an unusal diet, drinking the <b>blood of sea birds<\/b> such as the <b>blue-footed booby<\/b>.",
		predators        : "The main predator of all Galapagos finches is the <b>Galapagos hawk<\/b> but they may also be hunted by owls and <b>snakes<\/b>.",
		image_path       : "new_images/vampire_finch.jpg",
		type_image_path  : "images/species_profiles/secondary_consumer.png",
		type_description : "SECONDARY CONSUMER"
	},
	
	// the land iguana object
	land_iguana : {
		nice_name        : "Galapagos Land Iguana",
		latin_name       : "Conolophus subcristatus",
		habitat          : "Land iguanas live in the dry areas of the islands. In the morning they bask in the sunshine to warm up however when it has become too hot they move into the shade of rocks, trees or cacti. At night they sleep in burrows dug into the ground to conserve their body heat.",
		food             : "Land iguanas are primarily <b>herbivores<\/b>, feeding on low-growing pants and shrubs such as the <b>prickly pear cactus<\/b>, but some will also eat insects.",
		predators        : "Land iguanas are predated on by <b>hawks<\/b>, herons and <b>snakes<\/b>.",
		image_path       : "new_images/land_iguana.jpg",
		type_image_path  : "images/species_profiles/primary_consumer.png",
		type_description : "PRIMARY CONSUMER"
	},
	
	// the banded snake object
	banded_snake : {
		nice_name        : "Galapagos Snake",
		latin_name       : "Antillophis slevini",
		habitat          : "There are 4 species of Galapagos snakes and they are found in the coastal and arid zones of the islands.",
		food             : "Galapagos banded snakes are constrictors and are only mildly poisonous. They feed on lava lizards, geckos, locusts, <b>young land iguanas<\/b> and rice rats.",
		predators        : "The Galapagos banded snake is predated on primarily by the Galapagos hawk, but also by owls and some herons.",
		image_path       : "new_images/banded_snake.jpg",
		type_image_path  : "images/species_profiles/secondary_consumer.png",
		type_description : "SECONDARY CONSUMER"
	},
	
	// the hawk object
	hawk : {
		nice_name        : "Galapagos Hawk",
		latin_name       : "Buteo Galapagoensis",
		habitat          : "The Galapagos hawk is found on almost all of the islands and can be found in all zones, although it primarily nests in the arid zone.",
		food             : "Both a <b>predator<\/b> and a <b>scavenger<\/b>, the Galapagos hawk feeds on <b>young iguanas<\/b>, lizards, <b>small birds<\/b>, rats, some insects and carrion such as dead sea lions.",
		predators        : "As an <b>apex predator<\/b>, the Galapagos hawk sits at the top of the food chain and has no natural predators.",
		image_path       : "new_images/hawk.jpg",
		type_image_path  : "images/species_profiles/apex_predator.png",
		type_description : "APEX PREDATOR"
	},
	
	// the green sea lettuce object
	green_sea_lettuce : {
		nice_name        : "Green Sea Lettuce",
		latin_name       : "Ulva Lobata",
		habitat          : "Green sea lettuce is a type of green algae (seaweed) which grows in the coastal marine waters of the Galapagos Islands.",
		food             : "Most types of algae get their energy from the same source that plants do: the sun. The suns energy helps algae to turn dissolved carbon dioxide and water into oxygen and sugar, a process called <b>photosynthesis<\/b>. Like plants, this seaweed is a <b>producer<\/b>.",
		predators        : "With very little defence, green sea lettuce is eaten by many <b>marine herbivores<\/b>. These include crabs, marine snails, herbivorous fish such as <b>razor surgeonfish<\/b> and the famous <b>marine iguana<\/b>.",
		image_path       : "new_images/green_sea_lettuce.jpg",
		type_image_path  : "images/species_profiles/producer.png",
		type_description : "PRODUCER"
	},
	
	// the razor surgeonfish object
	razor_surgeonfish : {
		nice_name        : "Razor Surgeonfish",
		latin_name       : "Prionurus laticlavius",
		habitat          : "Razor surgeonfish inhabit coral reefs and rocky coastlines in the eastern central Pacific Ocean.",
		food             : "Surgeonfish are <b>herbivores<\/b>, eating algae such as <b>green sea lettuce<\/b>.",
		predators        : "Growing up to 45cm long, razor surgeonfish are hunted by large predatory fish such as the <b>bacalao grouper<\/b> and sharks.",
		image_path       : "new_images/razor_surgeonfish.jpg",
		type_image_path  : "images/species_profiles/primary_consumer.png",
		type_description : "PRIMARY CONSUMER"
	},
	
	// the bacalao grouper object
	bacalao_grouper : {
		nice_name        : "Bacalao Grouper",
		latin_name       : "Mycteroperca olfax",
		habitat          : "As juveniles, bacalao grouper inhabit shallow lagoons, coral reefs and mangroves. As adults they tend to live slightly deeper and can often be seen near underwater rock walls.",
		food             : "The bacalao grouper is primarily a <b>piscivore<\/b>, feeding on smaller fish such as the <b>razor surgeonfish<\/b> but also feeds on shrimps and crabs.",
		predators        : "As a relatively large (1m in length) predatory fish, the bacalao groupers have few predators but may be eaten by <b>sharks<\/b>.",
		image_path       : "new_images/bacalao_grouper.jpg",
		type_image_path  : "images/species_profiles/secondary_consumer.png",
		type_description : "SECONDARY CONSUMER"
	},
	
	// the shark object
	shark : {
		nice_name        : "Galapagos Shark",
		latin_name       : "Carcharhinus galapagensis",
		habitat          : "Galapagos sharks typically gather around oceanic islands in clear waters which have strong currents. They are usually found on coral reefs and rock walls down to a depth of 280m.",
		food             : "As a large predatory fish, the Galapagos shark feeds on bony fish such as the <b>bacalao grouper<\/b>, squid, octopus, <b>marine iguanas<\/b> and occasionally sea lions.",
		predators        : "As an <b>apex predator<\/b>, the Galapagos shark is top of the marine food chain however when small, they may be predated on by members of their own species or other sharks.",
		image_path       : "new_images/shark.jpg",
		type_image_path  : "images/species_profiles/apex_predator.png",
		type_description : "APEX PREDATOR"
	},
	
	// the blue-footed booby object
	blue_footed_booby : {
		nice_name        : "Blue-footed Booby",
		latin_name       : "Sula nebouxii",
		habitat          : "This seabird is widespread amoung the islands, nesting on rocky coastlines and spending a lot of time hunting in groups in the coastal waters.",
		food             : "The blue-footed booby is primarily a piscivore, feeding on small fish such as <b>flying fish<\/b>, but will occasionally feed on squid.",
		predators        : "Blue-footed boobies have few predators but the <b>Galapagos hawk<\/b> targets them as chicks. Adults on the islands of Wolf and Darwin may also get 'predated' on by <b>vampire finches<\/b>, although this does not normally result in the death of the booby.",
		image_path       : "new_images/blue_footed_booby.jpg",
		type_image_path  : "images/species_profiles/secondary_consumer.png",
		type_description : "SECONDARY CONSUMER"
	},
	
	// the plankton object
	plankton : {
		nice_name        : "Plankton",
		latin_name       : "",
		habitat          : "Plankton are microscopic organisms which live in the water column. They are too tiny to control where they go so are carried along in the direction of the currents.",
		food             : "Plankton is made up of both algae and animals. The algae gets energy from the sun in the same way as other alga and plants do (it is a <b>producer<\/b>).",
		predators        : "Plankton is eaten by lots of different animals, from the samll (shrimps, corals, marine snails) to the medium (lobsters, <b>fish<\/b>, anemones) to the very large (whale sharks, whales)!",
		image_path       : "new_images/plankton.jpg",
		type_image_path  : "images/species_profiles/producer.png",
		type_description : "PRODUCER"
	},
	
	// the marine iguana object
	marine_iguana : {
		nice_name        : "Marine Iguana",
		latin_name       : "Amblyrhynchus cristatus",
		habitat          : "Marine iguanas are generally found in the coastal areas of the islands. As the only sea-going lizard in the world, they are often found basking on the lava rocks to increase their body temperature after a cool swim in the ocean.",
		food             : "Marine iguanas graze on seaweed including the <b>green sea lettuce<\/b> growing on the coastal rocks, sometimes diving several metres to find their food.",
		predators        : "Young marine iguanas are preyed on by <b>Galapagos hawks<\/b> and may be caught by sharks when they venture off the coast. Galapagos sea lions often chase them in the water and fling them around if they catch them - this is a form of play and it is not thought that they eat them.",
		image_path       : "new_images/marine_iguana.jpg",
		type_image_path  : "images/species_profiles/primary_consumer.png",
		type_description : "PRIMARY CONSUMER"
	}
	
};