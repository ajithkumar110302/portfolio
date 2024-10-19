import React from 'react'
import { BlockCard } from './ui/BlockCard'

const Skills = () => {
  return (
    <section
      id="skills"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h1 className="heading">
          My <span className="text-purple">skills</span>
        </h1>
      </div>
      <BlockCard />
    </section>
)
}

export default Skills