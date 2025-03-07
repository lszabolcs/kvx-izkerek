const avxBlend = [
	{
		name: 'AVX Good Morning Blend',
		roast: 'S',
		notes: ['csokolade']
	},
	{
		name: 'AVX Bronze',
		roast: 'S',
		notes: ['etcsokolade', 'mogyoro', 'kakao'],
		desc: 'Étcsokoládé, pörkölt mogyoró és kakaó.'
	},
	{
		name: 'Automata Blend 70/30',
		roast: 'S',
		notes: ['kakao', 'etcsokolade'],
	},
	{
		name: 'La Dolce Vita 80/20-as Blend',
		roast: 'S',
		notes: ['etcsokolade', 'kakao'],
	},
	{
		name: 'AVX Silver',
		roast: 'KS',
		notes: ['mogyoro', 'diofelek', 'kakao', 'narancs']
	},
	{
		name: 'AVX Espresso',
		roast: 'KS',
		notes: ['etcsokolade', 'narancs', 'kakao'],
		desc: 'Étcsokoládé, vérnarancs és kakaó.'
	},
	{
		name: 'AVX Gold',
		roast: 'KS',
		notes: ['mogyoro', 'csokolade', 'gyumolcsos']
	},
	{
		name: 'AVX 100% Arabica Blend',
		roast: 'KS',
		notes: ['csokolade']
	},
	{
		name: 'Béla papa kedvence Blend',
		roast: 'KS',
		notes: ['csokolade', 'mogyoro', 'ananasz', 'eper']
	},
	{
		name: 'AVX Choco & Orange Blend',
		roast: 'KV',
		notes: ['etcsokolade', 'narancs']
	},
	{
		name: 'Bécsi Keringő Limited Edition Blend',
		roast: 'KV',
		notes: ['gyumolcsos'],
		desc: 'Csonthéjas gyümölcsök.'
	}
]

const brasil = [
	{
		name: 'Brazil Bom Dia Signature',
		roast: 'KS',
		notes: ['cseresznye', 'csokolade', 'mogyoro', 'mazsola', 'karamellizalt']
	},
	{
		name: 'Brazil Carbonic Natural Koffeinmentes',
		roast: 'KS',
		notes: ['etcsokolade', 'kakao', 'mez']
	},
	{
		name: 'Brazil Fazenda Da Lagoa CO2 Footprint Natural Specialty 84p',
		roast: 'KV',
		notes: ['etcsokolade', 'diofelek']
	},
	{
		name: 'Brazil Fazenda Dona Nenem Specialty 84p',
		roast: 'KV',
		notes: ['edes', 'savanyu'],
		desc: 'Ez a kávé édes, telt testű, enyhe savú és nagyon jól kiegyensúlyozott.'
	},
	{
		name: 'Brazil Fazenda do Lobo Mundo Novo Anaerobic Specialty 86p',
		roast: 'KV',
		notes: ['etcsokolade', 'diofelek']
	},
	{
		name: 'Brazil Fazenda Rainha Yellow Bourbon Specialty 86p',
		roast: 'KS',
		notes: ['fekete-tea', 'diofelek', 'mogyoro'],
		desc: 'Tea, dió, mogyoró vaj.'
	},
	{
		name: 'Brazil Fazenda Rainha Yellow Bourbon Specialty 86p',
		roast: 'KV',
		notes: ['fekete-tea', 'diofelek', 'mogyoro'],
		desc: 'Tea, dió, mogyoró vaj.'
	},
	{
		name: 'Brazil Fazenda Sertao Yellow Bourbon Specialty 84p',
		roast: 'KS',
		notes: ['edes', 'egyeb-gyumolcs', 'csokolade'],
		desc: 'Jó édesség, sima test, leníz gyümölcsök és csokoládé.'
	},
	{
		name: 'Brazil Santos',
		roast: 'KS',
		notes: ['diofelek', 'kakao', 'etcsokolade']
	},
	{
		name: 'Brazil Santos',
		roast: 'S',
		notes: ['diofelek', 'kakao', 'etcsokolade']
	},
	{
		name: 'Brazil Santos CO2 Koffeinmentes',
		roast: 'KS',
		notes: ['etcsokolade', 'kakao', 'mez']
	},
	{
		name: 'Brazil natural Obata Fazenda da Lagoa Specialty 84p',
		roast: 'KS',
		notes: ['etcsokolade', 'diofelek']
	},
	{
		name: 'Brazil Mogiana Scr 17/18 fine cup',
		roast: 'KS',
		notes: ['edes', 'savanyu', 'csokolade', 'diofelek', 'gyumolcsos'],
		desc: 'Enyhén édes illatú, enyhe savakkal, telt és kerek testtel rendelkezik, csokoládé, dió és gyümölcs ízekkel.'
	}
]

const columbia = [
	{
		name: 'Colombia Carbonic Natural Koffeinmentes',
		roast: 'KS',
		notes: ['etcsokolade', 'kakao', 'mez', 'narancs']
	},
	{
		name: 'Colombia Excelso CO2 Koffeinmentes',
		roast: 'KS',
		notes: ['etcsokolade', 'kakao', 'mez', 'narancs']
	},
	{
		name: 'Colombia Geisha Cinnamon Cauca Excelso EP Finca El Paraiso',
		roast: 'V',
		notes: ['fekete-tea', 'edes'],
		desc: 'Zöld tea. Ez a kávé almasavú, közepesen édes, intenzív, telt testű.'
	},
	{
		name: 'Colombia Geisha Lychee Cauca Excelso EP Finca El Paraiso.',
		roast: 'V',
		notes: ['egyeb-gyumolcs'],
		desc: 'Trópusi licsi'
	},
	{
		name: 'Colombia Supremo Sofia',
		roast: 'KS',
		notes: ['csokolade', 'grapefruit']
	}
]

const costaRica = [
	{
		name: 'Costa Rica Palmichal Micromill Honey Natural',
		roast: 'KS',
		notes: ['oszibarack', 'citrus'],
		desc: 'őszibarack, mandaran gyümölcs ízek.'
	},
	{
		name: 'Costa Rica SHB EP Washed',
		roast: 'KS',
		notes: ['piritott', 'diofelek', 'citrus', 'bors'],
		desc: 'Pörkölt gesztenye, citrusos savassággal és némi borsos fűszerességgel kiegészítve.'
	}
]

const elSalvador = [
	{
		name: 'El Salvador Apaneca Pacamara washed Specialty 85p',
		roast: 'KS',
		notes: ['csokolade', 'diofelek']
	},
	{
		name: 'El Salvador Los Naranjos Valley Red Bourbon natural Specialty 87p',
		roast: 'KS',
		notes: ['aszalt-gyumolcs', 'kakao']
	},
]

const etiopia = [
	{
		name: 'Ethiopia Sidamo Aleta Wondo',
		roast: 'V',
		notes: ['fekete-tea', 'citrom'],
		desc: 'Citromos fekete teára hasonlít. Közepesen testes kávé.'
	},
	{
		name: 'Ethiopia Sidamo GR1 Shantawene Bombe natural',
		roast: 'V',
		notes: ['gyumolcsos', 'viragos', 'oszibarack', 'fekete-tea'],
		desc: 'Komplex, gyümölcsös. A florális ízjegyek dominálnak, némi őszibarak, fekete tea.'
	},
	{
		name: 'Ethiopia washed Limu',
		roast: 'V',
		notes: ['gyumolcsos', 'viragos', 'narancs'],
		desc: 'Komplex, gyümölcsös. A florális ízjegyek dominálnak, némi narancsos savassággal és nugátos ízzel.'
	},
	{
		name: 'Ethiopia washed Yirgacheffe',
		roast: 'V',
		notes: ['gyumolcsos', 'viragos', 'narancs'],
		desc: 'Komplex, gyümölcsös. A florális ízjegyek dominálnak, némi narancsos savassággal és nugátos ízzel.'
	},
	{
		name: 'Ethiopia washed Yirgacheffe Kochere',
		roast: 'V',
		notes: ['gyumolcsos', 'viragos', 'narancs'],
		desc: 'Komplex, gyümölcsös. A florális ízjegyek dominálnak, némi narancsos savassággal és nugátos ízzel.'
	}
]

const guatemala = [
	{
		name: 'Guatemala SHB EP Catuai Finca El Gigante Specialty 84p',
		roast: 'KS',
		notes: ['egyeb-gyumolcs'],
		desc: 'maracuja és keksz'
	},
	{
		name: 'Guatemala SHB EP Specialty 84p',
		roast: 'KS',
		notes: ['fekete-tea', 'aszalt-gyumolcs'],
	}
]

const honduras = [
	{
		name: 'Honduras Cauful Organic Specialty 82p',
		roast: 'KS',
		notes: ['csokolade', 'edes', 'citrus', 'gyogynoveny'],
		desc: 'Tejcsokoládé, édes briós, citrusfélék, vajas és gyógynövényes; sima test.'
	},
	{
		name: 'Honduras Pacamara Hacienda Montecristo Specialty 86p',
		roast: 'KS',
		notes: ['csokolade', 'diofelek', 'egyeb-gyumolcs', 'citrom'],
		desc: 'Íze csokoládé, dió és trópusi gyümölcs. Citromsav, sima test.'
	}
]

const india = [
	{
		name: 'India Robusta Cherry AA',
		roast: 'S',
		notes: ['fuszerek', 'etcsokolade', 'magvak']
	},
	{
		name: 'India Monsooned Malabar AA',
		roast: 'KS',
		notes: ['fuszerek', 'dohany']
	},
]

const kenya = [
	{
		name: 'Kenya AA Plus',
		roast: 'V',
		notes: ['citrom', 'egyeb-gyumolcs', 'afonya'],
		desc: 'Érett citrom, kajszibarack és áfonya.'
	}
]

const nicaragua = [
	{
		name: 'Nicaragua SHG El Limoncillo Estate Specialty-84p',
		roast: 'KS',
		notes: ['egyeb-gyumolcs', 'alkohol', 'narancs'],
		desc: 'Passiógyümölcs ízei, rum, és narancshéj.'
	}
]

const tanzania = [
	{
		name: 'Tanzania Ngila Estate Peak Season Special Kent Specialty 88p',
		roast: 'KV',
		notes: ['grapefruit', 'citrus', 'fekete-tea']
	},
	{
		name: 'Tanzania Mwankumbi Specialty 87p',
		roast: 'KV',
		notes: ['citrus', 'cseresznye', 'csokolade', 'karamellizalt', 'melasz'],
		desc: 'Mandarin, fekete cseresznye, csokoládé szirup, karamell, melasz; élénk savasság, selymes test.'
	},
]

const panama = [
	{
		name: 'Panama El Hortigal Estate Specialty-88p',
		roast: 'KV',
		notes: ['gyumolcsos'],
		desc: 'Csonthéjas gyümölcsök.'
	}
]

const peru = [
	{
		name: 'Peru Cemcavir Geisha Finca Mariposa',
		roast: 'V',
		notes: ['cseresznye'],
		desc: 'Keksz, cseresznye.'
	},
	{
		name: 'Peru Cemcavir Geisha Finca La Esperanza',
		roast: 'KV',
		notes: ['csokolade', 'cseresznye', 'aszalt-gyumolcs', 'alkohol'],
		desc: 'Csokoládé, cseresznye, szárított gyümölcsök és rum.'
	},
	{
		name: 'Peru Cemcavir Geisha Anaerobic',
		roast: 'V',
		notes: ['csokolade', 'cseresznye', 'aszalt-gyumolcs', 'alkohol'],
		desc: 'Csokoládé, cseresznye, szárított gyümölcsök és rum.'
	}
]

const coffeeList = [
	...avxBlend,
	...brasil,
	...columbia,
	...costaRica,
	...elSalvador,
	...etiopia,
	...guatemala,
	...honduras,
	...india,
	...kenya,
	...nicaragua,
	...tanzania,
	...panama,
	...peru,
	{
		name: 'PNG Washed Arabica Korofeigu Grade',
		roast: 'KS',
		notes: ['karamellizalt', 'vanilia', 'csokolade']
	},
	{
		name: 'Indonesia Toraja Kalossi Gr.1',
		roast: 'KS',
		notes: ['gyumolcsos', 'csokolade']
	},
	{
		name: 'Ecuador Vilcabamba Especial de Apecael',
		roast: 'KV',
		notes: ['gyumolcsos'],
		desc: 'csonthéjas gyömölcsök'
	},
	{
		name: 'Rwanda washed Sake Womens Coffee Specialty 86p',
		roast: 'KV',
		notes: ['fuszerek', 'citrus'],
		desc: 'Fűszernövények, mandarin'
	}
]

const sortByName = (a, b) => {
	const nameA = a.name.toUpperCase()
  	const nameB = b.name.toUpperCase()
	if (nameA < nameB) return -1
	if (nameA > nameB) return 1
	return 0
}

export { sortByName }

export default coffeeList