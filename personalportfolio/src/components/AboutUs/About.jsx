import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://kit8.net/wp-content/uploads/edd/2022/04/software_developer_preview.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Meet Yash Raj, a talented MERN (MongoDB, Express.js, React, Node.js) Developer.
                        </h2>
                        <p className="mt-6 text-gray-600">
                            With a passion for crafting seamless and innovative web applications. With a keen eye for detail and a knack for problem-solving, Yash thrives in the dynamic world of full-stack development. Armed with expertise in building robust back-end systems using Node.js and Express.js, Yash seamlessly integrates databases, ensuring optimal performance and scalability. On the front end, Yash brings creativity to life with React, creating engaging user interfaces that captivate and delight users. Always up-to-date with the latest industry trends.
                        </p>
                        <p className="mt-4 text-gray-600">
                            I am continously increasing my productivity and problem solving skills by solving questions on leetcode and learning DSA.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}