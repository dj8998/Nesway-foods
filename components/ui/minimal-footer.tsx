import {
	InstagramIcon,
	LinkedinIcon,
} from 'lucide-react';

export function MinimalFooter() {
	const year = new Date().getFullYear();

	const company = [
		{
			title: 'About Us',
			href: '/about',
		},
		{
			title: 'Careers',
			href: '/contact',
		},
		{
			title: 'Services',
			href: '/services',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	];

	const products = [
		{
			title: 'Silken Tofu',
			href: '/products/silken-tofu',
		},
		{
			title: 'Hummus',
			href: '/products/hummus',
		},
		{
			title: 'Guacamole',
			href: '/products/guacamole',
		},
		{
			title: 'Mocktails',
			href: '/products/mocktails',
		},
		{
			title: 'Jackfruit',
			href: '/products/jackfruit',
		},
	];

	const socialLinks = [
		{
			icon: <InstagramIcon className="size-4" />,
			link: 'https://www.instagram.com/neswayfoods/',
		},
		{
			icon: <LinkedinIcon className="size-4" />,
			link: 'https://www.linkedin.com/company/nesway-foods',
		},
	];
	return (
		<footer className="relative" style={{backgroundColor: '#EBAFB4'}}>
			<div className="mx-auto max-w-4xl md:border-x">
				<div className="bg-border absolute inset-x-0 h-px w-full" />
				<div className="grid max-w-4xl grid-cols-6 gap-6 p-4">
					<div className="col-span-6 flex flex-col gap-5 md:col-span-4">
						<p className="text-muted-foreground max-w-sm font-mono text-sm text-balance">
							Feeding the future with smarter, cleaner, and better food solutions for people and the planet.
						</p>
						<div className="flex gap-2">
							{socialLinks.map((item, i) => (
								<a
									key={i}
									className="hover:bg-accent rounded-md border p-1.5"
									target="_blank"
									href={item.link}
								>
									{item.icon}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-muted-foreground mb-1 text-xs">
							Products
						</span>
						<div className="flex flex-col gap-1">
							{products.map(({ href, title }, i) => (
								<a
									key={i}
									className={`w-max py-1 text-sm duration-200 hover:underline`}
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
					<div className="col-span-3 w-full md:col-span-1">
						<span className="text-muted-foreground mb-1 text-xs">Company</span>
						<div className="flex flex-col gap-1">
							{company.map(({ href, title }, i) => (
								<a
									key={i}
									className={`w-max py-1 text-sm duration-200 hover:underline`}
									href={href}
								>
									{title}
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="bg-border absolute inset-x-0 h-px w-full" />
				<div className="flex max-w-4xl flex-col justify-between gap-2 pt-2 pb-5">
					<p className="text-muted-foreground text-center font-thin">
						© <a href="/" className="hover:underline">Nesway Foods</a>. All rights
						reserved {year}
					</p>
				</div>
			</div>
		</footer>
	);
}
