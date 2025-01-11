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
		name: 'Bécsi Keringő Limited Edition Blend',
		roast: 'KV',
		notes: ['gyumolcsos'],
		desc: 'csonthéjas gyümölcsök'
	}
]

const brasil = [
	{
		name: 'Brazil Santos',
		roast: 'S',
		notes: ['diofelek', 'kakao', 'etcsokolade']
	},
	{
		name: 'Brazil Fazenda Rainha Yellow Bourbon Specialty 86p',
		roast: 'KS',
		notes: ['fekete-tea', 'diofelek', 'mogyoro'],
		desc: 'Tea, dió, mogyoró vaj'
	},
	{
		name: 'Brazil Santos',
		roast: 'KS',
		notes: ['diofelek', 'kakao', 'etcsokolade']
	},
	{
		name: 'Brazil natural Obata Fazenda da Lagoa Specialty 84p',
		roast: 'KS',
		notes: ['etcsokolade', 'diofelek']
	},
	{
		name: 'Brazil Carbonic Natural Koffeinmentes',
		roast: 'KS',
		notes: ['etcsokolade', 'kakao', 'mez']
	},
	{
		name: 'Brazil Fazenda Rainha Yellow Bourbon Specialty 86p',
		roast: 'KV',
		notes: ['fekete-tea', 'diofelek', 'mogyoro'],
		desc: 'Tea, dió, mogyoró vaj'
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
		name: 'Colombia Geisha Lychee Cauca Excelso EP Finca El Paraiso',
		roast: 'V',
		notes: ['egyeb-gyumolcs'],
		desc: 'Trópusi licsi'
	},
]

const etiopia = [
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
	}
]

const nicaragua = [
	{
		name: 'Nicaragua SHG El Limoncillo Estate Specialty-84p',
		roast: 'KS',
		notes: ['egyeb-gyumolcs', 'alkohol', 'narancs'],
		desc: 'passiógyümölcs ízei, rum, és narancshéj'
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
		desc: 'mandarin, fekete cseresznye, csokoládé szirup, karamell, melasz; élénk savasság, selymes test'
	},
]

const coffeeList = [
	...avxBlend,
	...brasil,
	...columbia,
	...etiopia,
	...nicaragua,
	...tanzania,
	{
		name: 'PNG Washed Arabica Korofeigu Grade',
		roast: 'KS',
		notes: ['karamellizalt', 'vanilia', 'csokolade']
	},
	{
		name: 'India Monsooned Malabar AA',
		roast: 'KS',
		notes: ['fuszerek', 'dohany']
	},
	{
		name: 'Indonesia Toraja Kalossi Gr.1',
		roast: 'KS',
		notes: ['gyumolcsos', 'csokolade']
	},
	{
		name: 'Costa Rica Palmichal Micromill Honey Natural',
		roast: 'KS',
		notes: ['oszibarack', 'citrus'],
		desc: 'őszibarack, mandaran gyümölcs ízek'
	},
	{
		name: 'Ecuador Vilcabamba Especial de Apecael',
		roast: 'KV',
		notes: ['gyumolcsos'],
		desc: 'csonthéjas gyömölcsök'
	},
	{
		name: 'Guatemala SHB EP Specialty 84p',
		roast: 'KS',
		notes: ['fekete-tea', 'aszalt-gyumolcs'],
	},
	{
		name: 'Peru Cemcavir Geisha Finca Mariposa',
		roast: 'V',
		notes: ['cseresznye'],
		desc: 'Keksz, cseresznye'
	},
	{
		name: 'Rwanda washed Sake Womens Coffee Specialty 86p',
		roast: 'KV',
		notes: ['fuszerek', 'citrus'],
		desc: 'Fűszernövények, mandarin'
	},
	{
		name: 'El Salvador Los Naranjos Valley Red Bourbon natural Specialty 87p',
		roast: 'KS',
		notes: ['aszalt-gyumolcs', 'kakao']
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