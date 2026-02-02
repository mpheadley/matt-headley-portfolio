"use client";                                                                                                                   
                                                                                                                                  
  import { useState } from "react";                                                                                               
  import { Mail, MapPin, Send, Loader2, CheckCircle } from "lucide-react";                                                        
  import { Button } from "@/components/ui/button";                                                                                
  import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";                                                            
                                                                                                                                  
  export function Contact() {                                                                                                     
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");                                       
    const [errorMessage, setErrorMessage] = useState("");                                                                         
                                                                                                                                  
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {                                                            
      e.preventDefault();                                                                                                         
      setStatus("loading");                                                                                                       
      setErrorMessage("");                                                                                                        
                                                                                                                                  
      const form = e.currentTarget;                                                                                               
      const formData = new FormData(form);                                                                                        
                                                                                                                                  
      try {                                                                                                                       
        const response = await fetch("https://formspree.io/f/mjgopwwl", {                                                         
          method: "POST",                                                                                                         
          body: formData,                                                                                                         
          headers: {                                                                                                              
            Accept: "application/json",                                                                                           
          },                                                                                                                      
        });                                                                                                                       
                                                                                                                                  
        if (response.ok) {                                                                                                        
          setStatus("success");                                                                                                   
          form.reset();                                                                                                           
        } else {                                                                                                                  
          setStatus("error");                                                                                                     
          setErrorMessage("Something went wrong. Please try again.");                                                             
        }                                                                                                                         
      } catch {                                                                                                                   
        setStatus("error");                                                                                                       
        setErrorMessage("Something went wrong. Please try again.");                                                               
      }                                                                                                                           
    }                                                                                                                             
                                                                                                                                  
    return (                                                                                                                      
      <section id="contact" className="py-24 md:py-32 bg-card/50">                                                                
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">                                                      
          <AnimateOnScroll animation="fade-up">                                                                                   
            <p className="text-primary font-mono text-sm mb-4">Let's talk</p>                                                     
          </AnimateOnScroll>                                                                                                      
                                                                                                                                  
          <AnimateOnScroll animation="fade-up" delay={100}>                                                                       
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">                                                  
              Get In Touch                                                                                                        
            </h2>                                                                                                                 
          </AnimateOnScroll>                                                                                                      
                                                                                                                                  
          <AnimateOnScroll animation="fade-up" delay={200}>                                                                       
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">                                                   
              If you need a clear, low-stress website for your business or                                                        
              organization, reach out. I'm happy to talk through what you need                                                    
              and see if I can help.                                                                                              
            </p>                                                                                                                  
          </AnimateOnScroll>                                                                                                      
                                                                                                                                  
          <AnimateOnScroll animation="fade-up" delay={300}>                                                                       
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">                                   
              <div className="flex items-center gap-2 text-muted-foreground">                                                     
                <Mail size={20} className="text-primary" />                                                                       
                <span>mpheadley@gmail.com</span>                                                                                  
              </div>                                                                                                              
              <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />                                                  
              <div className="flex items-center gap-2 text-muted-foreground">                                                     
                <MapPin size={20} className="text-primary" />                                                                     
                <span>Jacksonville, AL</span>                                                                                     
              </div>                                                                                                              
            </div>                                                                                                                
          </AnimateOnScroll>                                                                                                      
                                                                                                                                  
          <AnimateOnScroll animation="fade-up" delay={400}>                                                                       
            {status === "success" ? (                                                                                             
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">                                 
                <CheckCircle size={48} className="text-primary mx-auto mb-4" />                                                   
                <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>                                     
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>                      
              </div>                                                                                                              
            ) : (                                                                                                                 
              <form onSubmit={handleSubmit} className="space-y-6 text-left">                                                      
                <div>                                                                                                             
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">                               
                    Name                                                                                                          
                  </label>                                                                                                        
                  <input                                                                                                          
                    type="text"                                                                                                   
                    id="name"                                                                                                     
                    name="name"                                                                                                   
                    required                                                                                                      
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2     
  focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"                   
                    placeholder="Your name"                                                                                       
                  />                                                                                                              
                </div>                                                                                                            
                                                                                                                                  
                <div>                                                                                                             
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">                              
                    Email                                                                                                         
                  </label>                                                                                                        
                  <input                                                                                                          
                    type="email"                                                                                                  
                    id="email"                                                                                                    
                    name="email"                                                                                                  
                    required                                                                                                      
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2     
  focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"                   
                    placeholder="your@email.com"                                                                                  
                  />                                                                                                              
                </div>                                                                                                            
                                                                                                                                  
                <div>                                                                                                             
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">                            
                    Message                                                                                                       
                  </label>                                                                                                        
                  <textarea                                                                                                       
                    id="message"                                                                                                  
                    name="message"                                                                                                
                    required                                                                                                      
                    rows={5}                                                                                                      
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2     
  focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground resize-none"       
                    placeholder="Tell me about your project..."                                                                   
                  />                                                                                                              
                </div>                                                                                                            
                                                                                                                                  
                {status === "error" && (                                                                                          
                  <p className="text-red-500 text-sm">{errorMessage}</p>                                                          
                )}                                                                                                                
                                                                                                                                  
                <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>                               
                  {status === "loading" ? (                                                                                       
                    <>                                                                                                            
                      <Loader2 size={18} className="animate-spin" />                                                              
                      Sending...                                                                                                  
                    </>                                                                                                           
                  ) : (                                                                                                           
                    <>                                                                                                            
                      <Send size={18} />                                                                                          
                      Send Message                                                                                                
                    </>                                                                                                           
                  )}                                                                                                              
                </Button>                                                                                                         
              </form>                                                                                                             
            )}                                                                                                                    
          </AnimateOnScroll>                                                                                                      
        </div>                                                                                                                    
      </section>                                                                                                                  
    );                                                                                                                            
  }
