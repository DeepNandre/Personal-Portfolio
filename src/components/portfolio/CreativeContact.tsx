
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
      <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Header Section */}
            <motion.div 
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Secure Contact Information
                </h3>
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                My contact details are encoded using <strong>Base64</strong> - a common encoding method used in cybersecurity. 
                Click below to decode and learn about digital security practices!
              </p>
            </motion.div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              {/* Email */}
              <motion.div 
                className="group bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-6 rounded-lg border border-gray-100"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-700 mb-1">Email Address</div>
                    <div className={`font-mono text-sm p-3 rounded-md border transition-all duration-500 ${
                      showDecoded 
                        ? "bg-green-50 border-green-200 text-green-800" 
                        : "bg-gray-100 border-gray-200 text-gray-500"
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
                className="group bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-6 rounded-lg border border-gray-100"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <Phone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-700 mb-1">Phone Number</div>
                    <div className={`font-mono text-sm p-3 rounded-md border transition-all duration-500 ${
                      showDecoded 
                        ? "bg-green-50 border-green-200 text-green-800" 
                        : "bg-gray-100 border-gray-200 text-gray-500"
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
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={handleReveal}
                  className={`font-medium px-8 py-3 rounded-lg transition-all duration-300 ${
                    showDecoded
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
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
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                showDecoded 
                  ? "bg-green-100 text-green-800" 
                  : "bg-gray-100 text-gray-600"
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
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="space-y-4">
                      <h4 className="font-semibold text-blue-900">
                        🔐 What You Just Learned About Digital Security:
                      </h4>
                      
                      <div className="space-y-3 text-sm text-blue-800">
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
                        
                        <div className="bg-white/50 p-3 rounded border-l-4 border-blue-400">
                          <strong>💡 Security Tip:</strong> Never rely on encoding alone for sensitive data. 
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
                className="bg-gray-50 border border-gray-200 p-4 rounded-lg"
              >
                <p className="text-gray-700 text-sm text-center">
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
