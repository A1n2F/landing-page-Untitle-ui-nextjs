import { GridContainer } from "../GridContainer";
import { ItemFeature } from "./Item-feature";

import { FiBarChart2, FiCommand, FiMail, FiMessageCircle, FiSmile, FiZap } from "react-icons/fi"

export function SectionFeatures() {
    return (
        <section className="py-16 xl:py-24">
            <GridContainer>
                <div className="text-center mb-16">
                    <small className="block text-base text-[#6941C6] font-semibold mb-3">
                        Features
                    </small>

                    <h2 className="text-center text-3xl xl:text-4xl text-gray-900 tracking-tighter-[-0.72px] font-semibold mb-5">
                        Analytics that feels like it’s from the future
                    </h2>

                    <p className="text-lg/relaxed xl:text-xl/6 text-gray-600 max-w-3xl mx-auto">
                        Powerful, self-serve product and growth analytics to help you convert, engage, 
                        and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-8 gap-y-12 xl:gap-y-16">
                    <ItemFeature
                        icon={<FiMail size={24} className="text-[#7F56D9]" />}
                        title="Share team inboxes"
                        text="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
                    />

                    <ItemFeature
                        icon={<FiZap size={24} className="text-[#7F56D9]" />}
                        title="Deliver instant answers"
                        text="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
                    />

                    <ItemFeature
                        icon={<FiBarChart2 size={24} className="text-[#7F56D9]" />}
                        title="Manage your team with reports"
                        text="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
                    />

                    <ItemFeature
                        icon={<FiSmile size={24} className="text-[#7F56D9]" />}
                        title="Connect with customers"
                        text="Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
                    />

                    <ItemFeature
                        icon={<FiCommand size={24} className="text-[#7F56D9]" />}
                        title="Connect the tools you already use"
                        text="Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
                    />

                    <ItemFeature
                        icon={<FiMessageCircle size={24} className="text-[#7F56D9]" />}
                        title="Our people make the difference"
                        text="We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
                    />
                </div>
            </GridContainer>
        </section>
    )
}
