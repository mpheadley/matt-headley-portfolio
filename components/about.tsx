⏺ "use client";                                                                                                               
                                                                                                                              
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
          <div className="grid md:grid-cols-3 gap-12 items-center mb-12">                                                     
            {/* Text Content */}                                                                                              
            <AnimateOnScroll animation="fade-right" className="md:col-span-2">                                                
              <div className="space-y-4 text-muted-foreground leading-relaxed">                                               
                <p>                                                                                                           
                  Hi, I'm Matt. I live in Jacksonville, Alabama, and build websites for small businesses, community groups,   
                  and churches—sites that look good, work on phones, and solve real communication and workflow problems.      
                </p>                                                                                                          
                <p>                                                                                                           
                  I focus on practical solutions: managing bookings, inquiries, and updates without friction.                 
                  You work directly with me, whether locally in Calhoun County or remotely.                                   
                </p>                                                                                                          
                <p>                                                                                                           
                  I studied at Jacksonville State University and Northern Seminary and previously worked as a pastor,         
                  which gives me perspective on community-oriented organizations.                                             
                  I enjoy helping clients bring their ideas online in a way that's clear, simple, and effective.              
                </p>                                                                                                          
                <p>                                                                                                           
                  Whether you need a simple website or a few interactive features,                                            
                  my goal is to make your online presence clear, practical, and                                               
                  stress-free—so you can focus on what matters most.                                                          
                </p>                                                                                                          
              </div>                                                                                                          
            </AnimateOnScroll>                                                                                                
                                                                                                                              
            {/* Headshot */}                                                                                                  
            <AnimateOnScroll animation="fade-left">                                                                           
              <div className="relative group max-w-64 mx-auto">                                                               
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-card shadow-lg transition-all duration-300
   group-hover:shadow-primary/25 group-hover:shadow-2xl group-hover:-translate-y-2">                                          
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
