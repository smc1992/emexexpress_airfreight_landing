"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define form data interface
interface FormData {
  service?: string;
  originCountry?: string;
  destinationCountry?: string;
  originAirport?: string;
  destinationAirport?: string;
  shippingDate?: string;
  grossWeight?: string;
  numberOfPieces?: string;
  packageType?: string;
  commodity?: string;
  additionalDetails?: string;
  fullName?: string;
  company?: string;
  email?: string;
  phoneNumber?: string;
  phonePrefix?: string;
  country?: string;
}

// Step components
const Step1ServiceSelection = ({ 
  formData, 
  updateFormData, 
  nextStep 
}: { 
  formData: FormData; 
  updateFormData: (data: Partial<FormData>) => void; 
  nextStep: () => void;
}) => {
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  
  const handleServiceChange = (service: string) => {
    updateFormData({ service });
    setShowValidationMessage(false);
  };

  const validateAndContinue = () => {
    if (!formData.service) {
      setShowValidationMessage(true);
      return;
    }
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="step-content"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Required</h3>
      <p className="text-gray-800 mb-4">Select an option</p>
      
      <div className="flex flex-col space-y-3">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="service"
            className="form-radio h-5 w-5 text-[#FF6700]"
            checked={formData.service === "Airport to Airport"}
            onChange={() => handleServiceChange("Airport to Airport")}
          />
          <span className="ml-2 text-gray-800">Airport to Airport</span>
        </label>
        
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="service"
            className="form-radio h-5 w-5 text-[#FF6700]"
            checked={formData.service === "Airport to Door"}
            onChange={() => handleServiceChange("Airport to Door")}
          />
          <span className="ml-2 text-gray-800">Airport to Door</span>
        </label>
        
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="service"
            className="form-radio h-5 w-5 text-[#FF6700]"
            checked={formData.service === "Door to Airport"}
            onChange={() => handleServiceChange("Door to Airport")}
          />
          <span className="ml-2 text-gray-800">Door to Airport</span>
        </label>
        
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="service"
            className="form-radio h-5 w-5 text-[#FF6700]"
            checked={formData.service === "Door to Door: all inc."}
            onChange={() => handleServiceChange("Door to Door: all inc.")}
          />
          <span className="ml-2 text-gray-800">Door to Door: all inc.</span>
        </label>
      </div>
      
      {showValidationMessage && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          Please select a service type to continue.
        </div>
      )}
      
      <div className="mt-8">
        <motion.button
          type="button"
          onClick={validateAndContinue}
          className="w-full bg-[#FF6700] hover:bg-[#E05D00] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          whileHover={{ scale: 1.02, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
          whileTap={{ scale: 0.98 }}
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
};

const Step2RouteInformation = ({ 
  formData, 
  updateFormData, 
  nextStep, 
  prevStep 
}: { 
  formData: FormData; 
  updateFormData: (data: Partial<FormData>) => void; 
  nextStep: () => void;
  prevStep: () => void;
}) => {
  const [errors, setErrors] = useState({
    originCountry: false,
    destinationCountry: false,
    originAirport: false,
    destinationAirport: false
  });
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [destinationSearch, setDestinationSearch] = useState('');
  
  // European origin countries
  const originCountries = [
    'Germany',
    'Netherlands', 
    'Belgium',
    'France',
    'Poland',
    'Luxembourg',
    'Spain'
  ];
  
  // Worldwide destination countries
  const allCountries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia', 'Australia',
    'Austria', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Belize', 'Benin',
    'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
    'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic',
    'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba',
    'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador',
    'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland',
    'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala',
    'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India',
    'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan',
    'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon',
    'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar',
    'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
    'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique',
    'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger',
    'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama',
    'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
    'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
    'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
    'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
    'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
    'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga',
    'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
    'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
    'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];
  
  // Filter countries based on search
  const filteredCountries = allCountries.filter(country => 
    country.toLowerCase().includes(destinationSearch.toLowerCase())
  );
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
    
    // Reset error for this field when user types
    if (name in errors && errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
      setShowValidationMessage(false);
    }
  };
  
  const validateAndContinue = () => {
    const newErrors = {
      originCountry: !formData.originCountry,
      destinationCountry: !formData.destinationCountry,
      originAirport: !formData.originAirport,
      destinationAirport: !formData.destinationAirport
    };
    
    setErrors(newErrors);
    
    if (newErrors.originCountry || newErrors.destinationCountry || 
        newErrors.originAirport || newErrors.destinationAirport) {
      setShowValidationMessage(true);
      return;
    }
    
    // All validation passed
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="step-content"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Route Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="originCountry" className="block text-sm font-medium text-gray-800 mb-1">
            Origin Country *
          </label>
          <select
            id="originCountry"
            name="originCountry"
            value={formData.originCountry || ''}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.originCountry ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
            required
          >
            <option value="">Select origin country</option>
            {originCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.originCountry && (
            <p className="text-red-500 text-sm mt-1">Please select the origin country</p>
          )}
        </div>
        
        <div>
          <label htmlFor="destinationCountry" className="block text-sm font-medium text-gray-800 mb-1">
            Destination Country *
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search destination country..."
              value={destinationSearch}
              onChange={(e) => {
                setDestinationSearch(e.target.value);
                if (!e.target.value) {
                  updateFormData({ destinationCountry: '' });
                }
              }}
              className={`w-full px-4 py-2 border ${errors.destinationCountry ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
            />
            {destinationSearch && filteredCountries.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredCountries.slice(0, 10).map((country) => (
                  <div
                    key={country}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                    style={{
                      color: '#374151'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.backgroundColor = '#f3f4f6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#374151';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                    onClick={() => {
                      updateFormData({ destinationCountry: country });
                      setDestinationSearch(country);
                      if (errors.destinationCountry) {
                        setErrors(prev => ({ ...prev, destinationCountry: false }));
                        setShowValidationMessage(false);
                      }
                    }}
                  >
                    {country}
                  </div>
                ))}
              </div>
            )}
            <input
              type="hidden"
              name="destinationCountry"
              value={formData.destinationCountry || ''}
            />
          </div>
          {formData.destinationCountry && (
            <p className="text-sm text-gray-600 mt-1">Selected: {formData.destinationCountry}</p>
          )}
          {errors.destinationCountry && (
            <p className="text-red-500 text-sm mt-1">Please select the destination country</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label htmlFor="originAirport" className="block text-sm font-medium text-gray-800 mb-1">
            Origin Airport (or 3 letters code) *
          </label>
          <input
            type="text"
            id="originAirport"
            name="originAirport"
            value={formData.originAirport || ''}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.originAirport ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
            required
          />
          {errors.originAirport && (
            <p className="text-red-500 text-sm mt-1">Please enter the origin airport</p>
          )}
        </div>
        
        <div>
          <label htmlFor="destinationAirport" className="block text-sm font-medium text-gray-800 mb-1">
            Destination Airport (or 3 letters code) *
          </label>
          <input
            type="text"
            id="destinationAirport"
            name="destinationAirport"
            value={formData.destinationAirport || ''}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.destinationAirport ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
            required
          />
          {errors.destinationAirport && (
            <p className="text-red-500 text-sm mt-1">Please enter the destination airport</p>
          )}
        </div>
      </div>
      
      {showValidationMessage && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          Please fill in all required fields to continue.
        </div>
      )}
      
      <div className="flex justify-between space-x-4">
        <motion.button
          type="button"
          onClick={prevStep}
          className="w-1/2 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Back
        </motion.button>
        
        <motion.button
          type="button"
          onClick={validateAndContinue}
          className="w-1/2 bg-[#FF6700] hover:bg-[#E05D00] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          whileHover={{ scale: 1.02, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
          whileTap={{ scale: 0.98 }}
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
};

const Step3ShipmentDetails = ({ formData, updateFormData, nextStep, prevStep }: { formData: any, updateFormData: (data: any) => void, nextStep: () => void, prevStep: () => void }) => {
  const [errors, setErrors] = useState({
    shippingDate: false,
    grossWeight: false,
    packageType: false
  });
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
    
    // Reset error for this field when user types
    if (name in errors && errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
      setShowValidationMessage(false);
    }
  };
  
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ shippingDate: e.target.value });
    if (errors.shippingDate) {
      setErrors(prev => ({ ...prev, shippingDate: false }));
      setShowValidationMessage(false);
    }
  };
  
  const validateAndContinue = () => {
    const newErrors = {
      shippingDate: !formData.shippingDate,
      grossWeight: !formData.grossWeight,
      packageType: !formData.packageType
    };
    
    setErrors(newErrors);
    
    if (newErrors.shippingDate || newErrors.grossWeight || newErrors.packageType) {
      setShowValidationMessage(true);
      return;
    }
    
    // All validation passed
    setShowValidationMessage(false);
    nextStep();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="step-content"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Shipment Details</h3>
      
      <div className="mb-6">
        <label htmlFor="shippingDate" className="block text-sm font-medium text-gray-800 mb-1">
          Shipping Date *
        </label>
        <input
          type="date"
          id="shippingDate"
          name="shippingDate"
          value={formData.shippingDate || ''}
          onChange={handleDateChange}
          className={`w-full px-4 py-2 border ${errors.shippingDate ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
          required
        />
        {errors.shippingDate && (
          <p className="text-red-500 text-sm mt-1">Please select a shipping date</p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label htmlFor="grossWeight" className="block text-sm font-medium text-gray-800 mb-1">
            Gross Weight Kg *
          </label>
          <input
            type="text"
            id="grossWeight"
            name="grossWeight"
            value={formData.grossWeight || ''}
            onChange={handleChange}
            placeholder="min 45 Kg"
            className={`w-full px-4 py-2 border ${errors.grossWeight ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
            required
          />
          {errors.grossWeight && (
            <p className="text-red-500 text-sm mt-1">Please enter the gross weight</p>
          )}
        </div>
        
        <div>
          <label htmlFor="numberOfPieces" className="block text-sm font-medium text-gray-800 mb-1">
            No. of pcs.
          </label>
          <input
            type="number"
            id="numberOfPieces"
            name="numberOfPieces"
            value={formData.numberOfPieces || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300"
          />
        </div>
        
        <div>
          <label htmlFor="packageType" className="block text-sm font-medium text-gray-800 mb-1">
            Package type *
          </label>
          <select
            id="packageType"
            name="packageType"
            value={formData.packageType || ''}
            onChange={handleChange}
            className={`w-full px-4 py-2 border ${errors.packageType ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
            required
          >
            <option value="">Select type</option>
            <option value="Box">Box</option>
            <option value="Pallet">Pallet</option>
            <option value="Crate">Crate</option>
            <option value="Drum">Drum</option>
            <option value="Other">Other</option>
          </select>
          {errors.packageType && (
            <p className="text-red-500 text-sm mt-1">Please select a package type</p>
          )}
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="commodity" className="block text-sm font-medium text-gray-800 mb-1">
          Commodity
        </label>
        <input
          type="text"
          id="commodity"
          name="commodity"
          value={formData.commodity || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-800 mb-1">
          If multiple pcs, list pcs, weights, dimensions & Loading address here
        </label>
        <textarea
          id="additionalDetails"
          name="additionalDetails"
          rows={3}
          value={formData.additionalDetails || ''}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300"
        ></textarea>
      </div>
      
      {showValidationMessage && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          Please fill in all required fields to continue.
        </div>
      )}
      
      <div className="flex justify-between space-x-4">
        <motion.button
          type="button"
          onClick={prevStep}
          className="w-1/2 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Back
        </motion.button>
        
        <motion.button
          type="button"
          onClick={validateAndContinue}
          className="w-1/2 bg-[#FF6700] hover:bg-[#E05D00] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          whileHover={{ scale: 1.02, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
          whileTap={{ scale: 0.98 }}
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
};

const Step4CustomerDetails = ({ 
  formData, 
  updateFormData, 
  submitForm, 
  prevStep 
}: { 
  formData: FormData; 
  updateFormData: (data: Partial<FormData>) => void; 
  submitForm: () => void;
  prevStep: () => void;
}) => {
  const [errors, setErrors] = useState({
    fullName: false,
    company: false,
    email: false,
    phoneNumber: false,
    country: false
  });
  const [showValidationMessage, setShowValidationMessage] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
    
    // Reset error for this field when user types
    if (name in errors && errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
      setShowValidationMessage(false);
    }
  };
  
  const validateAndSubmit = () => {
    const newErrors = {
      fullName: !formData.fullName,
      company: !formData.company,
      email: !formData.email,
      phoneNumber: !formData.phoneNumber,
      country: !formData.country
    };
    
    setErrors(newErrors);
    
    if (newErrors.fullName || newErrors.company || newErrors.email || 
        newErrors.phoneNumber || newErrors.country) {
      setShowValidationMessage(true);
      return;
    }
    
    // All validation passed
    submitForm();
  };
  
  const canSubmit = formData.fullName && formData.company && formData.email && formData.phoneNumber && formData.country;

  // Liste der Länder mit Vorwahl
  const countries = [
    { name: "Afghanistan", code: "AF", prefix: "+93" },
    { name: "Albania", code: "AL", prefix: "+355" },
    { name: "Algeria", code: "DZ", prefix: "+213" },
    { name: "Andorra", code: "AD", prefix: "+376" },
    { name: "Angola", code: "AO", prefix: "+244" },
    { name: "Argentina", code: "AR", prefix: "+54" },
    { name: "Armenia", code: "AM", prefix: "+374" },
    { name: "Australia", code: "AU", prefix: "+61" },
    { name: "Austria", code: "AT", prefix: "+43" },
    { name: "Azerbaijan", code: "AZ", prefix: "+994" },
    { name: "Bahrain", code: "BH", prefix: "+973" },
    { name: "Bangladesh", code: "BD", prefix: "+880" },
    { name: "Belarus", code: "BY", prefix: "+375" },
    { name: "Belgium", code: "BE", prefix: "+32" },
    { name: "Brazil", code: "BR", prefix: "+55" },
    { name: "Bulgaria", code: "BG", prefix: "+359" },
    { name: "Canada", code: "CA", prefix: "+1" },
    { name: "China", code: "CN", prefix: "+86" },
    { name: "Colombia", code: "CO", prefix: "+57" },
    { name: "Croatia", code: "HR", prefix: "+385" },
    { name: "Cyprus", code: "CY", prefix: "+357" },
    { name: "Czech Republic", code: "CZ", prefix: "+420" },
    { name: "Denmark", code: "DK", prefix: "+45" },
    { name: "Egypt", code: "EG", prefix: "+20" },
    { name: "Estonia", code: "EE", prefix: "+372" },
    { name: "Finland", code: "FI", prefix: "+358" },
    { name: "France", code: "FR", prefix: "+33" },
    { name: "Germany", code: "DE", prefix: "+49" },
    { name: "Greece", code: "GR", prefix: "+30" },
    { name: "Hong Kong", code: "HK", prefix: "+852" },
    { name: "Hungary", code: "HU", prefix: "+36" },
    { name: "India", code: "IN", prefix: "+91" },
    { name: "Indonesia", code: "ID", prefix: "+62" },
    { name: "Iran", code: "IR", prefix: "+98" },
    { name: "Iraq", code: "IQ", prefix: "+964" },
    { name: "Ireland", code: "IE", prefix: "+353" },
    { name: "Israel", code: "IL", prefix: "+972" },
    { name: "Italy", code: "IT", prefix: "+39" },
    { name: "Japan", code: "JP", prefix: "+81" },
    { name: "Jordan", code: "JO", prefix: "+962" },
    { name: "Kenya", code: "KE", prefix: "+254" },
    { name: "Kuwait", code: "KW", prefix: "+965" },
    { name: "Latvia", code: "LV", prefix: "+371" },
    { name: "Lebanon", code: "LB", prefix: "+961" },
    { name: "Lithuania", code: "LT", prefix: "+370" },
    { name: "Luxembourg", code: "LU", prefix: "+352" },
    { name: "Malaysia", code: "MY", prefix: "+60" },
    { name: "Mexico", code: "MX", prefix: "+52" },
    { name: "Morocco", code: "MA", prefix: "+212" },
    { name: "Netherlands", code: "NL", prefix: "+31" },
    { name: "New Zealand", code: "NZ", prefix: "+64" },
    { name: "Nigeria", code: "NG", prefix: "+234" },
    { name: "Norway", code: "NO", prefix: "+47" },
    { name: "Pakistan", code: "PK", prefix: "+92" },
    { name: "Peru", code: "PE", prefix: "+51" },
    { name: "Philippines", code: "PH", prefix: "+63" },
    { name: "Poland", code: "PL", prefix: "+48" },
    { name: "Portugal", code: "PT", prefix: "+351" },
    { name: "Qatar", code: "QA", prefix: "+974" },
    { name: "Romania", code: "RO", prefix: "+40" },
    { name: "Russia", code: "RU", prefix: "+7" },
    { name: "Saudi Arabia", code: "SA", prefix: "+966" },
    { name: "Serbia", code: "RS", prefix: "+381" },
    { name: "Singapore", code: "SG", prefix: "+65" },
    { name: "Slovakia", code: "SK", prefix: "+421" },
    { name: "Slovenia", code: "SI", prefix: "+386" },
    { name: "South Africa", code: "ZA", prefix: "+27" },
    { name: "South Korea", code: "KR", prefix: "+82" },
    { name: "Spain", code: "ES", prefix: "+34" },
    { name: "Sweden", code: "SE", prefix: "+46" },
    { name: "Switzerland", code: "CH", prefix: "+41" },
    { name: "Taiwan", code: "TW", prefix: "+886" },
    { name: "Thailand", code: "TH", prefix: "+66" },
    { name: "Turkey", code: "TR", prefix: "+90" },
    { name: "Ukraine", code: "UA", prefix: "+380" },
    { name: "United Arab Emirates", code: "AE", prefix: "+971" },
    { name: "United Kingdom", code: "GB", prefix: "+44" },
    { name: "United States", code: "US", prefix: "+1" },
    { name: "Vietnam", code: "VN", prefix: "+84" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="step-content"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Customer Details</h3>
      
      <div className="mb-6">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-800 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName || ''}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
          required
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">Please enter your full name</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="company" className="block text-sm font-medium text-gray-800 mb-1">
          Company Name *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company || ''}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.company ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
          required
        />
        {errors.company && (
          <p className="text-red-500 text-sm mt-1">Please enter your company name</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
          required
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="country" className="block text-sm font-medium text-gray-800 mb-1">
          Country *
        </label>
        <select
          id="country"
          name="country"
          value={formData.country || ''}
          onChange={handleChange}
          className={`w-full px-4 py-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
          required
        >
          <option value="">Select country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">Please select your country</p>
        )}
      </div>
      
      <div className="mb-8">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-800 mb-1">
          Phone Number *
        </label>
        <div className="flex">
          <select
            id="phonePrefix"
            name="phonePrefix"
            value={formData.phonePrefix || ''}
            onChange={handleChange}
            className="w-1/4 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300"
            required
          >
            <option value="">Prefix</option>
            {countries.map((country) => (
              <option key={country.code} value={country.prefix}>
                {country.prefix} ({country.name})
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber || ''}
            onChange={handleChange}
            className={`w-3/4 px-4 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-r-lg focus:ring-2 focus:ring-[#FF6700] focus:border-[#FF6700] transition-all duration-300`}
            required
          />
        </div>
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">Please enter your phone number</p>
        )}
      </div>
      
      {showValidationMessage && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          Please fill in all required fields to continue.
        </div>
      )}
      
      <div className="flex justify-between space-x-4">
        <motion.button
          type="button"
          onClick={prevStep}
          className="w-1/2 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Back
        </motion.button>
        
        <motion.button
          type="button"
          onClick={validateAndSubmit}
          className="w-1/2 bg-[#FF6700] hover:bg-[#E05D00] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
          whileHover={{ scale: 1.02, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
          whileTap={{ scale: 0.98 }}
        >
          Submit Request
        </motion.button>
      </div>
    </motion.div>
  );
};

import Link from 'next/link';

const SuccessStep = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        className="mb-6 mx-auto"
      >
        <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
      <p className="text-gray-800 mb-8">
        Your request has been submitted successfully. One of our experts will contact you shortly.
      </p>
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/">
          <span className="inline-flex items-center bg-[#FF6700] hover:bg-[#E05D00] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

// Progress bar component
const ProgressBar = ({ currentStep, totalSteps }: { currentStep: number, totalSteps: number }) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-800">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm font-medium text-gray-800">{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2.5">
        <motion.div
          className="bg-[#FF6700] h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
};

// Main form component
export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [progress, setProgress] = useState(25);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const totalSteps = 4;
  
    const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };
  
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
    setProgress((prevProgress) => Math.min(prevProgress + 25, 100));
  };
  
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
    setProgress((prevProgress) => Math.max(prevProgress - 25, 25));
  };
  
  const submitForm = async () => {
    try {
      // Send form data to our API endpoint for email notification
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email notification');
      }

      console.log('Form submitted with data:', formData);
      
      // Redirect to thank-you page
      window.location.href = '/thank-you';
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };
  
  return (
    <div className="w-full max-w-2xl mx-auto">
      {!isSubmitted ? (
        <>
          <ProgressBar currentStep={step} totalSteps={totalSteps} />
          
          <form onSubmit={submitForm}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <Step1ServiceSelection 
                  key="step1"
                  formData={formData} 
                  updateFormData={updateFormData} 
                  nextStep={nextStep} 
                />
              )}
              
              {step === 2 && (
                <Step2RouteInformation 
                  key="step2"
                  formData={formData} 
                  updateFormData={updateFormData} 
                  nextStep={nextStep} 
                  prevStep={prevStep} 
                />
              )}
              
              {step === 3 && (
                <Step3ShipmentDetails 
                  key="step3"
                  formData={formData} 
                  updateFormData={updateFormData} 
                  nextStep={nextStep} 
                  prevStep={prevStep} 
                />
              )}
              
              {step === 4 && (
                <Step4CustomerDetails 
                  key="step4"
                  formData={formData} 
                  updateFormData={updateFormData} 
                  submitForm={submitForm} 
                  prevStep={prevStep} 
                />
              )}
            </AnimatePresence>
          </form>
        </>
      ) : (
        <SuccessStep />
      )}
    </div>
  );
}
