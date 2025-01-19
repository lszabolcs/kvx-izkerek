import React from 'react'

import { Github, AtSign, Facebook } from 'lucide-react'

const Footer = () => {
	const renderLink = (href, content) => (
		<a
			href={href}
			className="font-bold hover:underline"
			target="_blank"
			rel="noreferrer">
			{content}
		</a>
	)

	return (
		<footer className="max-w-screen-xl mx-auto mt-10 px-5 pb-5">
			<div className="text-sm border-t pt-5 sm:flex gap-2">
				<div className="flex-1 space-y-2">
					<p>
						Készítette:<br/>
						<span className="font-bold">Locsmándi Szabolcs</span>
					</p>
					<p>
						Email:<br/>
						{renderLink('mailto:locsmandi.szabolcs@gmail.com', (
							<>
								<AtSign className="inline-block mr-2 w-4 h-4"/>
								<span>locsmandi.szabolcs@gmail.com</span>
							</>
						))}
					</p>
					<p>
						Forráskód:<br/>
						{renderLink('https://github.com/lszabolcs/kvx-izkerek', (
							<>
								<Github className="inline-block mr-2 w-4 h-4"/>
								<span>github.com/lszabolcs/kvx-izkerek</span>
							</>
						))}
					</p>
				</div>
				<div className="flex-1 space-y-2">
					<p>
						Adatok forrása:<br/>
						{renderLink('https://www.avxcafe.hu/', 'AVX Kávé')}<br/>
						{renderLink('https://sca.coffee/research/coffee-tasters-flavor-wheel', 'The Coffee Taster\'s Flavor Wheel')}
					</p>
					<p>
						Kávé rendelés csoport:<br/>
						{renderLink('https://www.facebook.com/groups/5324832737623094', (
							<>
								<Facebook className="inline-block mr-2 w-4 h-4"/>
								<span>AVX kávé vásárlói közösség</span>
							</>
						))}
					</p>
					<p>
						Kávés csoport:<br/>
						{renderLink('https://www.facebook.com/groups/423671354643501', (
							<>
								<Facebook className="inline-block mr-2 w-4 h-4"/>
								<span>KVX</span>
							</>
						))}
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
