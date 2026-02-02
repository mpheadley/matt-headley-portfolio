"use client";                                                                                                               
                                                                                                                              
  import Image from "next/image";                                                                                             
  import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";                                                        
                                                                                                                              
  export function About() {                                                                                                   
    return (                                                                                                                  
      <section id="about" className="py-24 md:py-32 bg-card/50">                                                              
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">                                                              
          {/* Section Header */}                                                                                              
          <AnimateOnScroll animation="fade-up">                                                                               
            <div className="flex items-center gap-4 mb-12">                                                                   
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">                                                 
                About Me                                                                                                      
              </h2>                                                                                                           
              <div className="flex-1 h-px bg-border" />                                                                       
            </div>                                                                                                            
          </AnimateOnScroll>                                                                                                  
                                                                                                                              
          {/* Top row: Text + Headshot */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-12 items-center mb-12">
            {/* Text Content */}
            <AnimateOnScroll animation="fade-right" className="md:col-span-2 order-2 md:order-1">
              <div className="text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Hi, I'm Matt.</strong> I build websites for small businesses, churches, and community groups in Jacksonville, Alabama, and beyond—sites that look great, work on phones, and simplify workflows. I have a BA in Music from JSU and an M.Div from Northern Seminary, and I've worked as a pastor and small business owner. You work directly with me, whether locally in Calhoun County or remotely. Outside of work, I enjoy family time, gardening, and coffee.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Headshot */}
            <AnimateOnScroll animation="fade-up" className="order-1 md:order-2 w-full">
              <div className="relative group max-w-64 mx-auto">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-card shadow-lg transition-all duration-300 group-hover:shadow-primary/25 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <Image
                    src="/images/headshot-matt.jpg"
                    alt="Matt Headley"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>                                                                                                              
                                                                                                                              
          {/* Family Photo - wider, below */}                                                                                 
          <AnimateOnScroll animation="fade-up">                                                                               
            <div className="relative group max-w-2xl mx-auto">                                                                
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-card shadow-lg transition-all duration-300  
  group-hover:shadow-primary/25 group-hover:shadow-2xl group-hover:-translate-y-2">                                           
                <Image                                                                                                        
                  src="/images/headley-family.jpg"                                                                            
                  alt="The Headley family"                                                                                    
                  fill                                                                                                        
                  className="object-cover"                                                                                    
                />                                                                                                            
              </div>                                                                                                          
            </div>                                                                                                            
          </AnimateOnScroll>                                                                                                  
        </div>                                                                                                                
      </section>                                                                                                              
    );                                                                                                                        
  }
