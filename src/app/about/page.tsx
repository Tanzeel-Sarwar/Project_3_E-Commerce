import Image from "next/image"

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-14">
            <h1 className="text-4xl font-medium text-center mb-10">About DriveHub | CarCraze</h1>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <Image
                        src="/images/image 1.jpg"
                        alt="Our story"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-light mb-4">Our Story</h2>
                    <p className="mb-4">
                        At <b>DriveHub</b>, we&#39;re passionate about all things automotive. Whether you&#39;re a car enthusiast, a casual driver, or just looking for expert advice, we &#39; re here to fuel your love for cars. From in-depth reviews and buying guides to the latest trends and tips, we provide the resources you need to make informed decisions and enjoy the ride.
                    </p>
                    <p className='mb-4'>
                        DriveHub isn&#39;t just a website &hyphen; it&#39;s a community for people who share a common passion for cars. Join us as we explore everything from performance machines to everyday rides, and connect with fellow drivers along the way.
                    </p>
                    <p>
                        Welcome to <b>DriveHub</b> &hyphen; your ultimate car destination.
                    </p>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-2xl font-light mb-4 text-center">Our Commitment</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-gray-400 rounded-full p-6 inline-block mb-4">
                            <Image
                                src="/images/commit1.png"
                                alt="Expert Insights"
                                width={64}
                                height={64}
                            />
                        </div>
                        <h3 className="text-xl mb-2">Expert Insights</h3>
                        <p className='font-light text-sm'>Providing accurate and reliable car advice.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-gray-400 rounded-full p-6 inline-block mb-4">
                            <Image
                                src="/images/commit2.png"
                                alt="Community-Driven"
                                width={64}
                                height={64}
                            />
                        </div>
                        <h3 className="text-xl mb-2">Community-Driven</h3>
                        <p className='font-light text-sm'>Connecting car lovers from around the world.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-gray-400 rounded-full p-6 inline-block mb-4">
                            <Image
                                src="/images/commit3.png"
                                alt="Innovation Focused"
                                width={64}
                                height={64}
                            />
                        </div>
                        <h3 className="text-xl mb-2">Innovation Focused</h3>
                        <p className='font-light text-sm'>Keeping you ahead with the latest automotive tech.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

