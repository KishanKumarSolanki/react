import React from 'react'
import './About.css';

const About = () => {
  return (
    <>
   
                {/* Header Section */}
                <header className=" text-black text-center py-5 px-4">
                    <h1 className="display-4 fw-bold">
                        About Happy Toys
                    </h1>
                    <p className="mt-3 lead fw-light">
                        Where Imagination Comes to Play!
                    </p>
                </header>

                {/* Main Content Section */}
                <main className="p-4 p-md-5">
                    {/* Our Story Section */}
                    <section className="mb-5">
                        <h2 className="fs-2 fw-bold text-gray-800 mb-4 border-bottom border-info pb-2">
                            Our Story
                        </h2>
                        <p className="text-secondary lh-base fs-5">
                            Welcome to Happy Toys, your ultimate destination for high-quality, fun, and educational toys that spark joy and ignite creativity in children of all ages. We believe that play is not just a pastime; it's a fundamental part of a child's development, a way for them to explore the world, learn new skills, and express themselves. Happy Toys was born out of a simple idea: to create a curated online store that offers a wide range of toys that are not only entertaining but also safe, durable, and beneficial for a child's growth.
                        </p>
                    </section>

                    {/* Our Philosophy Section */}
                    <section className="mb-5">
                        <h2 className="fs-2 fw-bold text-gray-800 mb-4 border-bottom border-info pb-2">
                            Our Philosophy: Play with Purpose
                        </h2>
                        <p className="text-secondary lh-base fs-5 mb-4">
                            At Happy Toys, we are guided by a simple philosophy: **Play with Purpose.** We carefully select each item in our collection to ensure it contributes to a child's development in a meaningful way. From classic wooden blocks that enhance fine motor skills to STEM kits that introduce scientific concepts, our toys are designed to:
                        </p>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            {/* Cards for philosophy points */}
                            <div className="col">
                                <div className="card h-100 border-0 bg-light-subtle rounded-3 shadow">
                                    <div className="card-body p-4">
                                        <h3 className="fw-bold fs-5 text-primary mb-2">Foster Creativity</h3>
                                        <p className="text-secondary">
                                            We offer a wide variety of arts and crafts, building sets, and imaginative play toys that encourage children to think outside the box and create their own stories and worlds.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 bg-light-subtle rounded-3 shadow">
                                    <div className="card-body p-4">
                                        <h3 className="fw-bold fs-5 text-primary mb-2">Encourage Learning</h3>
                                        <p className="text-secondary">
                                            Our educational toys make learning fun! We have a great selection of puzzles, board games, and kits that teach everything from basic math and reading to coding and engineering.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 bg-light-subtle rounded-3 shadow">
                                    <div className="card-body p-4">
                                        <h3 className="fw-bold fs-5 text-primary mb-2">Promote Social Skills</h3>
                                        <p className="text-secondary">
                                            Many of our games and toys are perfect for group play, helping children learn to share, cooperate, and communicate with others.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 bg-light-subtle rounded-3 shadow">
                                    <div className="card-body p-4">
                                        <h3 className="fw-bold fs-5 text-primary mb-2">Inspire Adventure</h3>
                                        <p className="text-secondary">
                                            We carry a range of outdoor and active play toys that encourage kids to get outside, explore nature, and stay active and healthy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Commitment Section */}
                    <section className="mb-5">
                        <h2 className="fs-2 fw-bold text-gray-800 mb-4 border-bottom border-info pb-2">
                            Our Commitment to You
                        </h2>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                            <div className="col">
                                <div className="card h-100 border-0 bg-success-subtle rounded-3 p-4 text-center">
                                    <span className="fs-1 text-success mb-2 d-block">✓</span>
                                    <h3 className="fw-bold fs-6 text-gray-800">Quality & Safety</h3>
                                    <p className="text-secondary">Only the highest quality, non-toxic, and safe toys.</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 bg-success-subtle rounded-3 p-4 text-center">
                                    <span className="fs-1 text-success mb-2 d-block">✓</span>
                                    <h3 className="fw-bold fs-6 text-gray-800">Fast & Reliable Shipping</h3>
                                    <p className="text-secondary">We ensure your order arrives quickly and in perfect condition.</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 bg-success-subtle rounded-3 p-4 text-center">
                                    <span className="fs-1 text-success mb-2 d-block">✓</span>
                                    <h3 className="fw-bold fs-6 text-gray-800">Exceptional Customer Service</h3>
                                    <p className="text-secondary">Our friendly team is always here to assist you.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className=" text-black text-center py-4 px-4 rounded-bottom-3">
                    <p className="fs-5 fw-semibold mb-1">Happy Playing!</p>
                    <p className="fs-6 mt-2">
                        Thank you for choosing Happy Toys. We are honored to be a part of your family's playtime.
                    </p>
                </footer>
            
    </>
  )
}

export default About