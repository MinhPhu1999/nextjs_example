import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about" as="/about-us">
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href="/post/first">
						<a>First Post</a>
					</Link>
				</li>
				<li>
					<Link href="/post/second">
						<a>Second Post</a>
					</Link>
				</li>
			</ul>
		</header>
	);
}
