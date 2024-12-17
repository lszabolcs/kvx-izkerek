const tasteMap = [
	{
		name: 'Fruity',
		normal: { fill: '#ED1C24' },
		children: [{
			name: 'Berry',
			normal: { fill: '#ED1C24' },
			children: [{
				name: 'Blackberry',
				normal: { fill: '#0B0A1A' }
			}, {
				name: 'Raspberry',
				normal: { fill: '#E22F86' }
			}, {
				name: 'Blueberry',
				normal: { fill: '#6569AB' }
			}, {
				name: 'Strawberry',
				normal: { fill: '#EE2C3C' }
			}]
		}, {
			name: 'Dried Fruit',
			normal: { fill: '#D4444F' },
			children: [{
				name: 'Raisin',
				normal: { fill: '#9E2478' }
			}, {
				name: 'Prune',
				normal: { fill: '#85558E' }
			}]
		}, {
			name: 'Other Fruit',
			normal: { fill: '#F26649' },
			children: [{
				name: 'Coconut',
				normal: { fill: '#E18D2A' }
			}, {
				name: 'Cherry',
				normal: { fill: '#E41556' }
			}, {
				name: 'Pomegranate',
				normal: { fill: '#EF405C' }
			}, {
				name: 'Pineapple',
				normal: { fill: '#F99D1C' }
			}, {
				name: 'Grape',
				normal: { fill: '#76A62E' }
			}, {
				name: 'Apple',
				normal: { fill: '#6CC071' }
			}, {
				name: 'Peach',
				normal: { fill: '#F17F51' }
			}, {
				name: 'Pear',
				normal: { fill: '#B2A920' }
			}]
		}, {
			name: 'Citrus',
			normal: { fill: '#D9B811' },
			children: [{
				name: 'Grapefruit',
				normal: { fill: '#F15B61' }
			}, {
				name: 'Orange',
				normal: { fill: '#F47920' }
			}, {
				name: 'Lemon',
				normal: { fill: '#D9A404' }
			}, {
				name: 'Lime',
				normal: { fill: '#73A626' }
			}]
		}]
	}, {
		name: 'Sour / Fermented',
		normal: { fill: '#E6AC00' },
		children: [{
			name: 'Sour',
			normal: { fill: '#BFB413' },
			children: [{
				name: 'Sour aromatics',
				normal: { fill: '#C0BC1E' }
			}, {
				name: 'Acetic Acid',
				normal: { fill: '#9EC38A' }
			}, {
				name: 'Butyric Acid',
				normal: { fill: '#D9B752' }
			}, {
				name: 'Isovaleric Acid',
				normal: { fill: '#72C059' }
			}, {
				name: 'Citric Acid',
				normal: { fill: '#F2B705' }
			}, {
				name: 'Malic Acid',
				normal: { fill: '#B4C425' }
			}]
		}, {
			name: 'Alcohol',
			normal: { fill: '#B0A017' },
			children: [{
				name: 'Winey',
				normal: { fill: '#A50870' }
			}, {
				name: 'Whiskey',
				normal: { fill: '#B03B53' }
			}, {
				name: 'Fermented',
				normal: { fill: '#D3A809' }
			}, {
				name: 'Overripe',
				normal: { fill: '#7E702A' }
			}]
		}]
	}, {
		name: 'Green',
		normal: { fill: '#007E3B' },
		children: [{
			name: 'Olive Oil',
			normal: { fill: '#A0AF28' }
		}, {
			name: 'Raw',
			normal: { fill: '#6B8B39' }
		}, {
			name: 'Vegetative',
			normal: { fill: '#07B152' },
			children: [{
				name: 'Under-ripe',
				normal: { fill: '#A8C846' }
			}, {
				name: 'Peapod',
				normal: { fill: '#4AB349' }
			}, {
				name: 'Fresh',
				normal: { fill: '#00AC6F' }
			}, {
				name: 'Dark green',
				normal: { fill: '#00603D' }
			}, {
				name: 'Vegetative',
				normal: { fill: '#00B26B' }
			}, {
				name: 'Hay-like',
				normal: { fill: '#9F9F23' }
			}, {
				name: 'Herb-like',
				normal: { fill: '#7BC258' }
			}]
		}, {
			name: 'Beany',
			normal: { fill: '#6F9E94' }
		}]
	}, {
		name: 'Other',
		normal: { fill: '#00A5CF' },
		children: [{
			name: 'Papery / Musty',
			normal: { fill: '#9CBBCA' },
			children: [{
				name: 'Stale',
				normal: { fill: '#667D6B' }
			}, {
				name: 'Cardboard',
				normal: { fill: '#BF8F65' }
			}, {
				name: 'Papery',
				normal: { fill: '#8C8C8C' }
			}, {
				name: 'Woody',
				normal: { fill: '#725C27' }
			}, {
				name: 'Moldy / Damp',
				normal: { fill: '#A1AC74' }
			}, {
				name: 'Musty / Dusty',
				normal: { fill: '#CBA76A' }
			}, {
				name: 'Musty / Earthy',
				normal: { fill: '#CA8078' }
			}, {
				name: 'Animalic',
				normal: { fill: '#E77C87' }
			}]
		}, {
			name: 'Chemical',
			normal: { fill: '#63C4DA' },
			children: [{
				name: 'Bitter',
				normal: { fill: '#70C9BF' }
			}, {
				name: 'Salty',
				normal: { fill: '#C8C4B5' }
			}, {
				name: 'Medicinal',
				normal: { fill: '#62A8C2' }
			}, {
				name: 'Petroleum',
				normal: { fill: '#00A9BF' }
			}, {
				name: 'Skunky',
				normal: { fill: '#5E8295' }
			}, {
				name: 'Rubber',
				normal: { fill: '#001732' }
			}]
		}]
	}, {
		name: 'Roasted',
		normal: { fill: '#D33928' },
		children: [{
			name: 'Pipe Tobacco',
			normal: { fill: '#A49663' }
		}, {
			name: 'Tobacco',
			normal: { fill: '#CEB380' }
		}, {
			name: 'Burnt',
			normal: { fill: '#B6804D' },
			children: [{
				name: 'Acrid',
				normal: { fill: '#AFA068' }
			}, {
				name: 'Ashy',
				normal: { fill: '#93A792' }
			}, {
				name: 'Smoky',
				normal: { fill: '#A87E34' }
			}, {
				name: 'Brown, Roast',
				normal: { fill: '#835622' }
			}]
		}, {
			name: 'Cereal',
			normal: { fill: '#D97E4A' },
			children: [{
				name: 'Grain',
				normal: { fill: '#CEA387' }
			}, {
				name: 'Malt',
				normal: { fill: '#E89965' }
			}]
		}]
	}, {
		name: 'Spices',
		normal: { fill: '#B81242' },
		children: [{
			name: 'Pungent',
			normal: { fill: '#724764' }
		}, {
			name: 'Pepper',
			normal: { fill: '#DC1A32' }
		}, {
			name: 'Brown Spice',
			normal: { fill: '#BC404C' },
			children: [{
				name: 'Anise',
				normal: { fill: '#C79E1C' }
			}, {
				name: 'Nutmeg',
				normal: { fill: '#A61B19' }
			}, {
				name: 'Cinnamon',
				normal: { fill: '#E5922F' }
			}, {
				name: 'Clove',
				normal: { fill: '#8C5C51' }
			}]
		}]
	}, {
		name: 'Nutty',
		normal: { fill: '#9A7B79' },
		children: [{
			name: 'Nutty',
			normal: { fill: '#B69287' },
			children: [{
				name: 'Peanut',
				normal: { fill: '#E4B50A' }
			}, {
				name: 'Hazelnut',
				normal: { fill: '#935F22' }
			}, {
				name: 'Almond',
				normal: { fill: '#D9A99C' }
			}]
		}, {
			name: 'Cocoa',
			normal: { fill: '#B37122' },
			children: [{
				name: 'Chocolate',
				normal: { fill: '#6B2820' }
			}, {
				name: 'Dark Chocolate',
				normal: { fill: '#4A281E' }
			}]
		}]
	}, {
		name: 'Sweet',
		normal: { fill: '#CD7B90' },
		children: [{
			name: 'Brown Sugar',
			normal: { fill: '#CD7B90' },
			children: [{
				name: 'Molasses',
				normal: { fill: '#230009' }
			}, {
				name: 'Maple Syrup',
				normal: { fill: '#D85E25' }
			}, {
				name: 'Caramelized',
				normal: { fill: '#DEA127' }
			}, {
				name: 'Honey',
				normal: { fill: '#F47D29' }
			}]
		}, {
			name: 'Vanilla',
			normal: { fill: '#A68776' }
		}, {
			name: 'Vanillin',
			normal: { fill: '#F37F87' }
		}, {
			name: 'Overall Sweet',
			normal: { fill: '#DB6F79' }
		}, {
			name: 'Sweet Aromatics',
			normal: { fill: '#CC3E6C' }
		}]
	}, {
		name: 'Floral',
		normal: { fill: '#EC008C' },
		children: [{
			name: 'Black Tea',
			normal: { fill: '#AD667C' }
		}, {
			name: 'Floral',
			normal: { fill: '#EF4D8F' },
			children: [{
				name: 'Chamomile',
				normal: { fill: '#FCAF26' }
			}, {
				name: 'Rose',
				normal: { fill: '#E374A5' }
			}, {
				name: 'Jasmine',
				normal: { fill: '#A0A676' }
			}]
		}]
	}
]

export default tasteMap
