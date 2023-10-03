import {Container} from "@/components/shared/Container";

const products = [
    {
        name: 'Football Tickets',
        color: 'Natural',
        price: '$75',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/159515/football-american-football-runner-player-159515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
        name: 'Electronics',
        color: 'Natural',
        price: '$75',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1600',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
        name: 'Books - Used Like New',
        color: 'Natural',
        price: '$75',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=1600',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    {
        name: 'Taylor Swift Concert Ticket',
        color: 'Natural',
        price: '$75',
        href: '#',
        imageSrc: 'https://images.pexels.com/photos/17286885/pexels-photo-17286885/free-photo-of-a-woman-recording-a-concert.jpeg?auto=compress&cs=tinysrgb&w=1600',
        imageAlt: 'Hand stitched, orange leather long wallet.',
    },
    // More products...
]

export default function Trending() {
    return (
        <Container>
            <div className="mx-auto max-w-2xl px-2 py-16 sm:px-6 lg:max-w-7xl lg:px-8 border-t-[1.5px] mt-6">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending categories</h2>
                    <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                        See all trending categories
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                    {products.map((product, productIndex) => (
                        <div key={productIndex} className="group relative">
                            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">
                                <a href={product.href}>
                                    <span className="absolute inset-0" />
                                    {product.name}
                                </a>
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-sm md:hidden">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Shop the collection
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </Container>
    )
}
