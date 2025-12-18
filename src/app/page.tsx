"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardCarouselSplit from '@/components/sections/hero/HeroBillboardCarouselSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardEleven from '@/components/sections/testimonial/TestimonialCardEleven';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeTitles"
      background="animatedAurora"
      cardStyle="noise"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="minimal"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Portfolio", id: "portfolio" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Joule Ventures"
          bottomLeftText="Atlanta, USA"
          bottomRightText="hello@jouleventures.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarouselSplit
          title="Investing in Tomorrow's Innovators"
          buttons={[
            { text: "Meet Our Portfolio", href: "#portfolio" },
            { text: "For Founders", href: "#contact" }
          ]}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023347858-1o8q0eru.jpg", imageAlt: "Startup office workspace" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023349190-nu7ud96y.jpg", imageAlt: "Tech founders meeting" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023349967-tb01udpw.jpg", imageAlt: "Team collaboration" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023350565-hxbgv0sw.jpg", imageAlt: "Investment discussion" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023351364-efz6pd7i.jpg", imageAlt: "Entrepreneurs working" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023352329-yiltetoy.jpg", imageAlt: "Pitch presentation" }
          ]}
          ariaLabel="Joule Ventures hero section"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Joule Ventures"
          description={[
            "Joule Ventures backs bold founders building the future from Atlanta and beyond. We are a venture capital firm dedicated to supporting American and Israeli entrepreneurs who are reshaping industries with innovative technology.",
            "We believe in backing exceptional founders early, providing not just capital but strategic guidance, operational expertise, and access to our network of investors and industry leaders. Our focus is on companies that demonstrate vision, resilience, and the potential to scale globally.",
            "Based in Atlanta, we serve as a bridge between innovation ecosystems, connecting talented founders with resources and mentorship needed to transform their visions into market-leading companies."
          ]}
          buttons={[
            { text: "Explore Investment Thesis", href: "#services" }
          ]}
          showBorder={false}
          useInvertedBackground="noInvert"
          ariaLabel="About Joule Ventures"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSeven
          title="What We Bring to Founders"
          description="Beyond capital, we provide the resources and expertise to accelerate growth"
          tag="Founder Support"
          features={[
            {
              id: 1,
              title: "Strategic Capital",
              description: "Flexible funding designed to fuel growth at every stage, from seed through growth rounds",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023347858-1o8q0eru.jpg",
              imageAlt: "Strategic capital and funding"
            },
            {
              id: 2,
              title: "Operational Expertise",
              description: "Access to our team of experienced operators who have built and scaled companies",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023349190-nu7ud96y.jpg",
              imageAlt: "Operational guidance"
            },
            {
              id: 3,
              title: "Global Network",
              description: "Connections across US and Israeli tech ecosystems, plus international markets",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023349967-tb01udpw.jpg",
              imageAlt: "Global network connections"
            },
            {
              id: 4,
              title: "Go-to-Market Support",
              description: "Hands-on assistance with product strategy, customer acquisition, and market expansion",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023350565-hxbgv0sw.jpg",
              imageAlt: "Market strategy support"
            }
          ]}
          animationType="slide-up"
          textboxLayout="split"
          useInvertedBackground="noInvert"
          ariaLabel="Joule Ventures founder support features"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          title="Meet Our Investment Partners"
          description="Experienced operators and investors committed to founder success"
          tag="Leadership"
          members={[
            {
              id: "1",
              name: "David Chen",
              role: "Managing Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023353177-x007p4y2.jpg",
              imageAlt: "David Chen"
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "Partner, Operations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023353900-o04q0x4h.png",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "3",
              name: "Michael Reeves",
              role: "Partner, Technology",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023354752-gjjr0vdq.jpg",
              imageAlt: "Michael Reeves"
            },
            {
              id: "4",
              name: "Rachel Goldman",
              role: "Senior Investment Associate",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023355890-zgk959iq.jpg",
              imageAlt: "Rachel Goldman"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Joule Ventures investment team"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEleven
          title="What Our Founders Say"
          description="Real stories from entrepreneurs we've partnered with"
          tag="Founder Stories"
          textboxLayout="split"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              nameTitle: "Lisa Patel, CEO of TechFlow AI",
              quote: "Joule Ventures didn't just provide funding. They connected us with the right people, helped us refine our go-to-market strategy, and believed in our vision when others were skeptical.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023356976-yyjinbgj.jpg",
              imageAlt: "Lisa Patel"
            },
            {
              id: "2",
              nameTitle: "Yair Rosenblum, Founder of DataSecure",
              quote: "As an Israeli founder, finding investors who understood our market was challenging. Joule's network between US and Israeli markets was invaluable to our expansion.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023357752-def7r0u4.jpg",
              imageAlt: "Yair Rosenblum"
            },
            {
              id: "3",
              nameTitle: "James Torres, CEO of GrowthStack",
              quote: "The operational support from their team transformed how we approached scaling. They were true partners, not just capital providers.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023358398-z3catnek.jpg",
              imageAlt: "James Torres"
            },
            {
              id: "4",
              nameTitle: "Maya Krishnan, Founder of CloudNine",
              quote: "Working with Joule Ventures was a game-changer. Their expertise in B2B SaaS sales and customer retention strategies directly contributed to our 3x growth.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023359005-rwk7nwzp.jpg",
              imageAlt: "Maya Krishnan"
            },
            {
              id: "5",
              nameTitle: "Noah Shapiro, Co-founder of SecureLink",
              quote: "Beyond the capital, what impressed me most was their genuine commitment to founder well-being and long-term value creation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023359884-1whrkjgh.jpg",
              imageAlt: "Noah Shapiro"
            },
            {
              id: "6",
              nameTitle: "Leah Bergman, CEO of InnovateLabs",
              quote: "Joule understood our unique challenges as an Israeli-founded company scaling in America. Their guidance through Series A was crucial to our success.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023360622-x537dek0.jpg",
              imageAlt: "Leah Bergman"
            }
          ]}
          ariaLabel="Founder testimonials"
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Our founders are building with and supported by the world's leading companies"
          tag="Partner Ecosystem"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023361472-98vls5rd.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023362086-om1est8a.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023362865-fdkftllo.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023363910-hlig65bv.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023364922-4jkokt78.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023365787-n1wzb3ow.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1766023366485-4pr4yjpr.jpg"
          ]}
          speed={40}
          showCard={true}
          ariaLabel="Partner logos"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about partnering with Joule Ventures"
          tag="Help"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What stage do you typically invest in?",
              content: "We focus on seed and Series A companies with compelling founders and clear market opportunities. However, we evaluate exceptional opportunities at any stage if they meet our criteria for founder quality and market potential."
            },
            {
              id: "2",
              title: "What is your typical check size?",
              content: "Our typical initial investment ranges from $500K to $3M, depending on the stage and opportunity. We're flexible and willing to adjust based on the needs and opportunity of the company."
            },
            {
              id: "3",
              title: "Do you focus on specific industries?",
              content: "We're particularly interested in B2B SaaS, cybersecurity, AI/ML, fintech, and deeptech companies. However, we remain open to exceptional founders and ideas across any sector."
            },
            {
              id: "4",
              title: "What's your investment thesis?",
              content: "We believe in backing exceptional founders who combine vision with resilience. We focus on businesses with clear paths to scale, defensible technology, and the potential for significant market impact."
            },
            {
              id: "5",
              title: "How involved are you with portfolio companies?",
              content: "We take an active role post-investment. Our team is hands-on with operational support, strategic guidance, and network introductions. We see ourselves as true partners in your journey."
            },
            {
              id: "6",
              title: "Do you work with Israeli founders?",
              content: "Absolutely! We actively seek Israeli founders and have deep connections in the Israeli tech ecosystem. Our dual-market approach helps Israeli founders scale globally."
            },
            {
              id: "7",
              title: "What support do you provide beyond capital?",
              content: "We provide operational expertise, go-to-market strategy, customer introductions, talent acquisition support, and access to our investor network. We're here to help you scale faster."
            },
            {
              id: "8",
              title: "How do I apply for funding?",
              content: "You can reach out to us directly at hello@jouleventures.com with your pitch deck and a brief description of your company. We aim to respond to all founder inquiries within two weeks."
            }
          ]}
          ariaLabel="Frequently asked questions"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to disrupt your industry?"
          animationType="background-highlight"
          inputPlaceholder="your@email.com"
          buttonText="Get in Touch"
          useInvertedBackground="noInvert"
          ariaLabel="Contact Joule Ventures"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Joule Ventures"
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}