const avxBlends = [
	{
		name: 'AVX Good Morning Blend',
		roast: 'S',
		notes: ['csokolade']
	},
	{
		name: 'AVX Silver',
		roast: 'KS',
		notes: ['mogyoro', 'diofelek', 'kakao', 'narancs']
	},
	{
		name: 'Bécsi Keringő Limited Edition Blend',
		roast: 'KV',
		notes: ['gyumolcsos'],
		desc: 'csonthéjas gyümölcsök'
	}
]

const brasils = [
	{
		name: 'Brazil Fazenda Rainha Yellow Bourbon Specialty 86p',
		roast: 'KV',
		notes: ['fekete-tea', 'diofelek', 'mogyoro'],
		desc: 'Tea, dió, mogyoró vaj'
	},
	{
		name: 'Brazil Fazenda Rainha Yellow Bourbon Specialty 86p',
		roast: 'KS',
		notes: ['fekete-tea', 'diofelek', 'mogyoro'],
		desc: 'Tea, dió, mogyoró vaj'
	},
	{
		name: 'Brazil Santos',
		roast: 'S',
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
	}
]

const coffeeList = [
	...avxBlends,
	...brasils,
	{
		name: 'Ethiopia washed Limu',
		roast: 'V',
		notes: ['gyumolcsos', 'viragos', 'narancs'],
		desc: 'Komplex, gyümölcsös. A florális ízjegyek dominálnak, némi narancsos savassággal és nugátos ízzel.'
	},
	{
		name: 'PNG Washed Arabica Korofeigu Grade',
		roast: 'KS',
		notes: ['karamellizalt', 'vanilia', 'csokolade']
	},
	{
		name: 'Colombia Geisha Lychee Cauca Excelso EP Finca El Paraiso',
		roast: 'V',
		notes: ['egyeb-gyumolcs'],
		desc: 'Trópusi licsi'
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
		name: 'Colombia Excelso CO2 Koffeinmentes',
		roast: 'KS',
		notes: ['etcsokolade', 'kakao', 'mez', 'narancs']
	},
	{
		name: 'Colombia Carbonic Natural Koffeinmentes',
		roast: 'KS',
		notes: ['etcsokolade', 'kakao', 'mez', 'narancs']
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
		name: 'Tanzania Ngila Estate Peak Season Special Kent Specialty 88p',
		roast: 'KV',
		notes: ['grapefruit', 'citrus', 'fekete-tea']
	},
	{
		name: 'El Salvador Los Naranjos Valley Red Bourbon natural Specialty 87p',
		roast: 'KS',
		notes: ['aszalt-gyumolcs', 'kakao']
	}
]

export default coffeeList