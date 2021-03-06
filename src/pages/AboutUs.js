import { motion } from "framer-motion";
import React from 'react';


const AboutUs = () => {
    return (
        <motion.section className="text-gray-600 body-font bg-gray-250"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container mx-auto flex-col px-5 py-4 md:flex-col items-center">
                <div className='mx-20 my-5'>
                    <h4 className="text-black font-bold">WHO ARE WE?</h4>
                    <p className="text-black font-serif mt-2 text-sm italic font-light">HeeBee is a café solely dedicated to coffee and everything that relates to it. After a lot of hardwork and effort, we finally found the coffee beans that make for excellent coffee that we serve you. We have a unique menu which has a special section of "HeeBee Specials"- The coffees in that section are the only one of their kind in the town.</p>
                </div>
                <div className='mx-20 my-5'>
                    <h4 className="text-black font-bold">WHAT MAKES US DIFFERENT?</h4>
                    <p className="text-black font-serif mt-2 text-sm italic font-light">Our dedication solely towards coffee is what makes us different. HeeBee believes in loyalty to quality and consistency. There will never be a day that you would taste our coffee and think it tasted different the other day. Our taste is constant because we never compromise with the quality of raw material used.</p>
                </div>
                <div className='mx-20 my-5'>
                    <h4 className="text-black font-bold">WHAT IS THE STORY BEHIND?</h4>
                    <p className="text-black font-serif mt-2 text-sm italic font-light">The owners of HeeBee Nitigya Soni and Gavish Batra are die-hard coffee lovers. They always preferred making their own coffee rather than buying it from the famous coffee shops in town. Because of their passion for coffee, they were the permanent hosts of any get-together. Their coffee was so popular among their group that their friends started inviting non-mutual friends to their place for coffee. That is when everyone suggested them to open their own café. They pondered over the idea for a while and started research on coffee and thus opened a café that is serving you best coffee in town.</p>
                </div>
                <div className='mx-20 my-5'>
                    <h4 className="text-black font-bold">WHY 'HEEBEE'?</h4>
                    <p className="text-black font-serif mt-2 text-sm italic font-light">HeeBee is a result of the past two years of research, experimenting, and tasting. The owners admit that coming up with a name was a difficult and easy process at the same time. They had been thinking of a name that is striking and matched their moto of café. One day after pondering over a name for a month, they were sitting in a park, when they observed a beehive. They both started discussing over how bees were solely dedicated to one thing all their life- producing honey and how the cells of a beehive were all intact and connected without a single space in between them. It was then it struck both of them to include bee in their name as it would go with the moto of consistency, quality, and loyalty. So Bee was included and Hee just tagged along.<br /><br />In owners' words 'We are loyal like a bee but towards coffee. We are intact as a beehive because we take our customers, employees, and everyone connected to us along because we are who we are only because of them.</p>
                </div>
            </div>
        </motion.section>
    )
}

export default AboutUs;