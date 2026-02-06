
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Phone, Lock, Unlock, Info, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CreativeContact = () => {
  const [showDecoded, setShowDecoded] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  
  // Base64 encoded contact info
  const encodedEmail = "MjM2ODU2NTZAC3R1Lm1tdS5hYy51aw==";
  const encodedPhone = "KzQ0IDczOTMxMjE1Njc=";
  
  const decodedEmail = "23685656@stu.mmu.ac.uk";
  const decodedPhone = "+44 7393121567";

  const handleReveal = () => {
    setShowDecoded(!showDecoded);
    if (!showDecoded) {
      setShowEducation(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white border-2 border-neutral-900 rounded-none shadow-none">
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Header Section */}
            <motion.div 
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs uppercase tracking-[0.4em] text-neutral-600">
                Secure Contact
              </div>
              <div className="flex items-center justify-center gap-3">
                <Shield className="h-6 w-6 text-neutral-900" />
                <h3 className="text-2xl font-semibold text-neutral-900 uppercase tracking-wide">
                  Secure Contact Information
                </h3>
                <Shield className="h-6 w-6 text-neutral-900" />
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                My contact details are encoded using <strong>Base64</strong> - a common encoding method used in cybersecurity. 
                Click below to decode and learn about digital security practices!
              </p>
            </motion.div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              {/* Email */}
              <motion.div 
                className="group bg-white transition-all duration-300 p-6 border-2 border-neutral-900"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-neutral-100 border-2 border-neutral-900">
                    <Mail className="h-5 w-5 text-neutral-900" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-neutral-900 mb-1 uppercase tracking-wide">Email Address</div>
                    <div className={`font-mono text-sm p-3 border-2 transition-all duration-500 ${
                      showDecoded 
                        ? "bg-white border-neutral-900 text-neutral-900" 
                        : "bg-neutral-50 border-neutral-900 text-neutral-600"
                    }`}>
                      <span className="select-all break-all">
                        {showDecoded ? decodedEmail : encodedEmail}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Phone */}
              <motion.div 
                className="group bg-white transition-all duration-300 p-6 border-2 border-neutral-900"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-neutral-100 border-2 border-neutral-900">
                    <Phone className="h-5 w-5 text-neutral-900" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-neutral-900 mb-1 uppercase tracking-wide">Phone Number</div>
                    <div className={`font-mono text-sm p-3 border-2 transition-all duration-500 ${
                      showDecoded 
                        ? "bg-white border-neutral-900 text-neutral-900" 
                        : "bg-neutral-50 border-neutral-900 text-neutral-600"
                    }`}>
                      <span className="select-all break-all">
                        {showDecoded ? decodedPhone : encodedPhone}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Action Button */}
            <div className="flex justify-center pt-4">
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleReveal}
                  className={`font-semibold px-8 py-3 rounded-none border-2 border-neutral-900 transition-all duration-300 ${
                    showDecoded
                      ? "bg-neutral-900 text-white hover:bg-black"
                      : "bg-white text-neutral-900 hover:bg-neutral-900 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {showDecoded ? (
                      <>
                        <Lock className="h-4 w-4" />
                        Hide Information
                      </>
                    ) : (
                      <>
                        <Unlock className="h-4 w-4" />
                        Decode & Reveal
                      </>
                    )}
                  </div>
                </Button>
              </motion.div>
            </div>
            
            {/* Status Indicator */}
            <div className="text-center">
              <div className={`inline-flex items-center gap-2 px-4 py-2 border-2 border-neutral-900 text-sm font-semibold uppercase tracking-wide ${
                showDecoded 
                  ? "bg-white text-neutral-900" 
                  : "bg-neutral-50 text-neutral-700"
              }`}>
                {showDecoded ? (
                  <>
                    <Eye className="h-4 w-4" />
                    Information Decoded
                  </>
                ) : (
                  <>
                    <EyeOff className="h-4 w-4" />
                    Information Encoded
                  </>
                )}
              </div>
            </div>
            
            {/* Educational Content */}
            <AnimatePresence>
              {showEducation && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border-2 border-neutral-900 p-6"
                >
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-neutral-900 mt-0.5 flex-shrink-0" />
                    <div className="space-y-4">
                      <h4 className="font-semibold text-neutral-900 uppercase tracking-wide">
                        What You Just Learned About Digital Security
                      </h4>
                      
                      <div className="space-y-3 text-sm text-neutral-800">
                        <div>
                          <strong>Base64 Encoding:</strong> This isn't encryption, but encoding - a way to represent data in a different format. 
                          It converts text into a string of letters, numbers, and symbols that looks scrambled but can be easily decoded.
                        </div>
                        
                        <div>
                          <strong>Why This Matters:</strong> In cybersecurity, we use various methods to protect information. 
                          While Base64 isn't secure by itself, it demonstrates how data can be transformed and is often used 
                          in secure communications protocols like HTTPS.
                        </div>
                        
                        <div>
                          <strong>Real-World Application:</strong> Email systems use Base64 to encode attachments, 
                          and web developers use it to embed images directly in code. It's everywhere in digital communication!
                        </div>
                        
                        <div className="bg-neutral-50 p-3 border-l-4 border-neutral-900">
                          <strong>Security Tip:</strong> Never rely on encoding alone for sensitive data. 
                          Always use proper encryption (like AES) and secure protocols (like TLS) for real protection.
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Privacy Note */}
            {!showDecoded && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-neutral-50 border-2 border-neutral-900 p-4"
              >
                <p className="text-neutral-800 text-sm text-center">
                  <strong>Privacy by Design:</strong> Contact information is encoded to demonstrate security concepts 
                  while protecting against automated scrapers and bots.
                </p>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreativeContact;
