const tasteMap = [
	{
		slug: 'kvx',
		name: 'KVX',
		normal: { fill: '#dddbca' },
		children: [
			{
				slug: 'gyumolcsos',
				name: 'Gyümölcsös',
				normal: { fill: '#ED1C24' },
				children: [
					{
						slug: 'bogyos-gyumolcs',
						name: 'Bogyós gyümölcs',
						normal: { fill: '#ED1C24' },
						children: [
							{
								slug: 'szeder',
								name: 'Szeder',
								normal: { fill: '#0B0A1A' }
							},
							{
								slug: 'malna',
								name: 'Málna',
								normal: { fill: '#E22F86' }
							},
							{
								slug: 'afonya',
								name: 'Áfonya',
								normal: { fill: '#6569AB' }
							},
							{
								slug: 'eper',
								name: 'Eper',
								normal: { fill: '#EE2C3C' }
							}
						]
					},
					{
						slug: 'aszalt-gyumolcs',
						name: 'Aszalt gyümölcs',
						normal: { fill: '#D4444F' },
						children: [
							{
								slug: 'mazsola',
								name: 'Mazsola',
								normal: { fill: '#9E2478' }
							},
							{
								slug: 'szilva',
								name: 'Szilva',
								normal: { fill: '#85558E' }
							}
						]
					},
					{
						slug: 'egyeb-gyumolcs',
						name: 'Egyéb gyümölcs',
						normal: { fill: '#F26649' },
						children: [
							{
								slug: 'kokuszdio',
								name: 'Kókuszdió',
								normal: { fill: '#E18D2A' }
							},
							{
								slug: 'cseresznye',
								name: 'Cseresznye',
								normal: { fill: '#E41556' }
							},
							{
								slug: 'granatalma',
								name: 'Gránátalma',
								normal: { fill: '#EF405C' }
							},
							{
								slug: 'ananasz',
								name: 'Ananász',
								normal: { fill: '#F99D1C' }
							},
							{
								slug: 'szolo',
								name: 'Szőlő',
								normal: { fill: '#76A62E' }
							},
							{
								slug: 'alma',
								name: 'Alma',
								normal: { fill: '#6CC071' }
							},
							{
								slug: 'oszibarack',
								name: 'Őszibarack',
								normal: { fill: '#F17F51' }
							},
							{
								slug: 'korte',
								name: 'Körte',
								normal: { fill: '#B2A920' }
							}
						]
					},
					{
						slug: 'citrus',
						name: 'Citrus',
						normal: { fill: '#D9B811' },
						children: [
							{
								slug: 'grapefruit',
								name: 'Grapefruit',
								normal: { fill: '#F15B61' }
							},
							{
								slug: 'narancs',
								name: 'Narancs',
								normal: { fill: '#F47920' }
							},
							{
								slug: 'citrom',
								name: 'Citrom',
								normal: { fill: '#D9A404' }
							},
							{
								slug: 'lime',
								name: 'Lime',
								normal: { fill: '#73A626' }
							}
						]
					}
				]
			},
			{
				slug: 'savanyu-erjesztett',
				name: 'Savanyú / Erjesztett',
				normal: { fill: '#E6AC00' },
				children: [
					{
						slug: 'savanyu',
						name: 'Savanyú',
						normal: { fill: '#BFB413' },
						children: [
							{
								slug: 'savanyu-aromak',
								name: 'Savanyú aromák',
								normal: { fill: '#C0BC1E' }
							},
							{
								slug: 'ecetsav',
								name: 'Ecetsav',
								normal: { fill: '#9EC38A' }
							},
							{
								slug: 'vajsav',
								name: 'Vajsav',
								normal: { fill: '#D9B752' }
							},
							{
								slug: 'izovajsav',
								name: 'Izovajsav',
								normal: { fill: '#72C059' }
							},
							{
								slug: 'citromsav',
								name: 'Citromsav',
								normal: { fill: '#F2B705' }
							},
							{
								slug: 'almasav',
								name: 'Almasav',
								normal: { fill: '#B4C425' }
							}
						]
					},
					{
						slug: 'alkohol',
						name: 'Alkohol',
						normal: { fill: '#B0A017' },
						children: [
							{
								slug: 'boros',
								name: 'Boros',
								normal: { fill: '#A50870' }
							},
							{
								slug: 'whisky',
								name: 'Whisky',
								normal: { fill: '#B03B53' }
							},
							{
								slug: 'erjesztett',
								name: 'Erjesztett',
								normal: { fill: '#D3A809' }
							},
							{
								slug: 'tulerett',
								name: 'Túlérett',
								normal: { fill: '#7E702A' }
							}
						]
					}
				]
			},
			{
				slug: 'zold',
				name: 'Zöld',
				normal: { fill: '#007E3B' },
				children: [
					{
						slug: 'olivaolaj',
						name: 'Olívaolaj',
						normal: { fill: '#A0AF28' }
					},
					{
						slug: 'nyers',
						name: 'Nyers',
						normal: { fill: '#6B8B39' }
					},
					{
						slug: 'vegetativ',
						name: 'Vegetatív',
						normal: { fill: '#07B152' },
						children: [
							{
								slug: 'eretlen',
								name: 'Éretlen',
								normal: { fill: '#A8C846' }
							},
							{
								slug: 'zoldborsohuvely',
								name: 'Zöldborsóhüvely',
								normal: { fill: '#4AB349' }
							},
							{
								slug: 'friss',
								name: 'Friss',
								normal: { fill: '#00AC6F' }
							},
							{
								slug: 'sotetzold',
								name: 'Sötétzöld',
								normal: { fill: '#00603D' }
							},
							{
								slug: 'vegetativ',
								name: 'Vegetatív',
								normal: { fill: '#00B26B' }
							},
							{
								slug: 'szenaszeru',
								name: 'Szénaszerű',
								normal: { fill: '#9F9F23' }
							},
							{
								slug: 'fuszeres',
								name: 'Fűszeres',
								normal: { fill: '#7BC258' }
							}
						]
					},
					{
						slug: 'babos',
						name: 'Babos',
						normal: { fill: '#6F9E94' }
					}
				]
			},
			{
				slug: 'egyeb',
				name: 'Egyéb',
				normal: { fill: '#00A5CF' },
				children: [
					{
						slug: 'papiros-dohos',
						name: 'Papíros / Dohos',
						normal: { fill: '#9CBBCA' },
						children: [
							{
								slug: 'allott',
								name: 'Állott',
								normal: { fill: '#667D6B' }
							},
							{
								slug: 'karton',
								name: 'Karton',
								normal: { fill: '#BF8F65' }
							},
							{
								slug: 'papiros',
								name: 'Papíros',
								normal: { fill: '#8C8C8C' }
							},
							{
								slug: 'fas',
								name: 'Fás',
								normal: { fill: '#725C27' }
							},
							{
								slug: 'peneszes-nedves',
								name: 'Penészes / Nedves',
								normal: { fill: '#A1AC74' }
							},
							{
								slug: 'dohos-poros',
								name: 'Dohos / Poros',
								normal: { fill: '#CBA76A' }
							},
							{
								slug: 'dohos-foldes',
								name: 'Dohos / Földes',
								normal: { fill: '#CA8078' }
							},
							{
								slug: 'allatias',
								name: 'Állatias',
								normal: { fill: '#E77C87' }
							}
						]
					},
					{
						slug: 'kemiai',
						name: 'Kémiai',
						normal: { fill: '#63C4DA' },
						children: [
							{
								slug: 'keseru',
								name: 'Keserű',
								normal: { fill: '#70C9BF' }
							},
							{
								slug: 'sos',
								name: 'Sós',
								normal: { fill: '#C8C4B5' }
							},
							{
								slug: 'gyogyszeres',
								name: 'Gyógyszeres',
								normal: { fill: '#62A8C2' }
							},
							{
								slug: 'koolajos',
								name: 'Kőolajos',
								normal: { fill: '#00A9BF' }
							},
							{
								slug: 'budosborz-szagu',
								name: 'Büdösborz szagú',
								normal: { fill: '#5E8295' }
							},
							{
								slug: 'gumi',
								name: 'Gumi',
								normal: { fill: '#001732' }
							}
						]
					}
				]
			},
			{
				slug: 'porkolt',
				name: 'Pörkölt',
				normal: { fill: '#D33928' },
				children: [
					{
						slug: 'pipadohany',
						name: 'Pipadohány',
						normal: { fill: '#A49663' }
					},
					{
						slug: 'dohany',
						name: 'Dohány',
						normal: { fill: '#CEB380' }
					},
					{
						slug: 'egett',
						name: 'Égett',
						normal: { fill: '#B6804D' },
						children: [
							{
								slug: 'csipos',
								name: 'Csípős',
								normal: { fill: '#AFA068' }
							},
							{
								slug: 'hamus',
								name: 'Hamus',
								normal: { fill: '#93A792' }
							},
							{
								slug: 'fustos',
								name: 'Füstös',
								normal: { fill: '#A87E34' }
							},
							{
								slug: 'barna-porkolt',
								name: 'Barna, Pörkölt',
								normal: { fill: '#835622' }
							}
						]
					},
					{
						slug: 'gabona',
						name: 'Gabona',
						normal: { fill: '#D97E4A' },
						children: [
							{
								slug: 'szemes-gabona',
								name: 'Szemes gabona',
								normal: { fill: '#CEA387' }
							},
							{
								slug: 'malata',
								name: 'Maláta',
								normal: { fill: '#E89965' }
							}
						]
					}
				]
			},
			{
				slug: 'fuszerek',
				name: 'Fűszerek',
				normal: { fill: '#B81242' },
				children: [
					{
						slug: 'csipos',
						name: 'Csípős',
						normal: { fill: '#724764' }
					},
					{
						slug: 'bors',
						name: 'Bors',
						normal: { fill: '#DC1A32' }
					},
					{
						slug: 'barna-fuszer',
						name: 'Barna fűszer',
						normal: { fill: '#BC404C' },
						children: [
							{
								slug: 'anizs',
								name: 'Ánizs',
								normal: { fill: '#C79E1C' }
							},
							{
								slug: 'szerecsendio',
								name: 'Szerecsendió',
								normal: { fill: '#A61B19' }
							},
							{
								slug: 'fahej',
								name: 'Fahéj',
								normal: { fill: '#E5922F' }
							},
							{
								slug: 'szegfuszeg',
								name: 'Szegfűszeg',
								normal: { fill: '#8C5C51' }
							}
						]
					}
				]
			},
			{
				slug: 'diofelek',
				name: 'Diófélék',
				normal: { fill: '#9A7B79' },
				children: [
					{
						slug: 'diofelek',
						name: 'Diófélék',
						normal: { fill: '#B69287' },
						children: [
							{
								slug: 'foldimogyoro',
								name: 'Földimogyoró',
								normal: { fill: '#E4B50A' }
							},
							{
								slug: 'mogyoro',
								name: 'Mogyoró',
								normal: { fill: '#935F22' }
							},
							{
								slug: 'mandula',
								name: 'Mandula',
								normal: { fill: '#D9A99C' }
							}
						]
					},
					{
						slug: 'kakao',
						name: 'Kakaó',
						normal: { fill: '#B37122' },
						children: [
							{
								slug: 'csokolade',
								name: 'Csokoládé',
								normal: { fill: '#6B2820' }
							},
							{
								slug: 'etcsokolade',
								name: 'Étcsokoládé',
								normal: { fill: '#4A281E' }
							}
						]
					}
				]
			},
			{
				slug: 'edes',
				name: 'Édes',
				normal: { fill: '#CD7B90' },
				children: [
					{
						slug: 'barna-cukor',
						name: 'Barna cukor',
						normal: { fill: '#CD7B90' },
						children: [
							{
								slug: 'melasz',
								name: 'Melasz',
								normal: { fill: '#230009' }
							},
							{
								slug: 'juharszirup',
								name: 'Juharszirup',
								normal: { fill: '#D85E25' }
							},
							{
								slug: 'karamellizalt',
								name: 'Karamellizált',
								normal: { fill: '#DEA127' }
							},
							{
								slug: 'mez',
								name: 'Méz',
								normal: { fill: '#F47D29' }
							}
						]
					},
					{
						slug: 'vanilia',
						name: 'Vanília',
						normal: { fill: '#A68776' }
					},
					{
						slug: 'vanillin',
						name: 'Vanillin',
						normal: { fill: '#F37F87' }
					},
					{
						slug: 'atfogo-edesseg',
						name: 'Átfogó édesség',
						normal: { fill: '#DB6F79' }
					},
					{
						slug: 'edes-aromak',
						name: 'Édes aromák',
						normal: { fill: '#CC3E6C' }
					}
				]
			},
			{
				slug: 'viragos',
				name: 'Virágos',
				normal: { fill: '#EC008C' },
				children: [
					{
						slug: 'fekete-tea',
						name: 'Fekete tea',
						normal: { fill: '#AD667C' }
					},
					{
						slug: 'viragos',
						name: 'Virágos',
						normal: { fill: '#EF4D8F' },
						children: [
							{
								slug: 'kamilla',
								name: 'Kamilla',
								normal: { fill: '#FCAF26' }
							},
							{
								slug: 'rozsa',
								name: 'Rózsa',
								normal: { fill: '#E374A5' }
							},
							{
								slug: 'jazmin',
								name: 'Jázmin',
								normal: { fill: '#A0A676' }
							}
						]
					}
				]
			}
		]
	}
]

export default tasteMap
