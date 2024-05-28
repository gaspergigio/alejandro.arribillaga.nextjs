import React from 'react'

export default function Testimonials() {
  return (
    <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-evenly lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
      <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl">Testimonials</p>
      <div className="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1">
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {`"Alejandro is an excellent professional, both technically and in terms of soft skills. I had the opportunity
            to work with him for a couple of years where I could realize that in addition to having great technical
            skills, he always has a complete picture of the product or solution that he is working on. He is passionate
            about technology and this keeps him in constant training and willing to help other team members or people in
            charge at any time."`}
          </p>
          <p className="text-xs mt-2 text-zinc-500">
            <span className="block text-xs">Damian Galletini</span>
            <span className="block text-xs">
              Enterprise Cloud Architect | Software Architecture | Technology Consultant
            </span>
          </p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {`"I've had the privilege of working alongside Alejandro, and I am consistently impressed by his dedication to
            excellence. He brings a deep passion for front-end development, particularly in React, and consistently
            delivers high-quality work. Alejandro proactively seeks new challenges and learning opportunities, which
            greatly benefits our team's success. His collaborative nature and strong communication skills make him a
            valuable asset to any project. In summary, Alejandro is a skilled front-end engineer with a proactive
            attitude and a collaborative spirit. It's been a pleasure working with him."`}
          </p>
          <p className="text-xs mt-2 text-zinc-500">
            <span className="block text-xs">Tatevik Harutyunyan</span>
            <span className="block text-xs"> Principal QA Engineer at Scalio</span>
          </p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {`"Alejandro is an excellent professional, with knowledge in many technologies and a good quality criterion. I
            was fortunate to work with him on several projects and achieve great challenges. He is a results-oriented
            person, capable of working in a team and leading it. He has a comprehensive vision of the products and
            projects that allows him to understand the business needs and requirements, schedule them, and deliver
            products with great professionalism."`}
          </p>
          <p className="text-xs mt-2 text-zinc-500">
            <span className="block text-xs">Gerardo Boiero Rovera</span>
            <span className="block text-xs"> Project Manager / Scrum Master</span>
          </p>
        </div>
      </div>
    </div>
  )
}
