// Import required libraries and components
import { motion } from 'framer-motion' // For smooth animations and transitions
import { useState } from 'react' // For managing component state
import { 
  // Navigation and form icons for login/registration
  Leaf, 
  Truck, 
  ShoppingCart, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  CheckCircle,
  User,
  Lock,
  Mail,
  Phone,
  Building
} from 'lucide-react' // Icon library for consistent UI elements

// Main LoginPage Component - Handles authentication for all three user portals
const LoginPage = () => {
  // State management for form and portal selection
  const [activeTab, setActiveTab] = useState<'farmer' | 'service' | 'buyer'>('farmer') // Currently selected portal tab
  const [isLogin, setIsLogin] = useState(true) // Toggle between login and registration forms
  const [showPassword, setShowPassword] = useState(false) // Controls password visibility toggle
  const [formData, setFormData] = useState({
    email: '', // User email address
    password: '', // User password
    name: '', // User full name (for registration)
    phone: '', // User phone number (for registration)
    organization: '' // Organization name (for service providers)
  })

  const portalConfig = {
    farmer: {
      title: "Farmer Portal",
      subtitle: "Manage your harvest, connect with service providers, and sell your crops",
      icon: <Leaf className="w-8 h-8 text-primary-600" />,
      color: "from-green-500 to-emerald-600",
      features: ["Post harvest requirements", "Manage crop listings", "View service offers", "Connect with buyers"]
    },
    service: {
      title: "Service Provider Portal",
      subtitle: "Offer vehicles, manpower, and agricultural services to farmers",
      icon: <Truck className="w-8 h-8 text-primary-600" />,
      color: "from-blue-500 to-cyan-600",
      features: ["Post service details", "Bid on requirements", "Manage bookings", "Track earnings"]
    },
    buyer: {
      title: "Buyer Portal",
      subtitle: "Browse fresh harvest, negotiate prices, and secure quality produce",
      icon: <ShoppingCart className="w-8 h-8 text-primary-600" />,
      color: "from-orange-500 to-red-600",
      features: ["Browse crop listings", "Make offers", "Negotiate deals", "Track purchases"]
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Demo login credentials for Farmer Portal
    if (isLogin && activeTab === 'farmer' && formData.email === 'farmer@demo.com' && formData.password === 'demo123') {
      // Redirect to farmer dashboard
      window.location.href = '/farmer-dashboard'
      return
    }
    
    // Demo login credentials for Service Provider Portal
    if (isLogin && activeTab === 'service' && formData.email === 'service@demo.com' && formData.password === 'demo123') {
      // Redirect to service provider dashboard
      window.location.href = '/service-provider-dashboard'
      return
    }
    
    // Demo login credentials for Buyer Portal
    if (isLogin && activeTab === 'buyer' && formData.email === 'buyer@demo.com' && formData.password === 'demo123') {
      // Redirect to buyer dashboard
      window.location.href = '/buyer-dashboard'
      return
    }
    
    // Handle other form submissions
    console.log('Form submitted:', { portal: activeTab, type: isLogin ? 'login' : 'register', data: formData })
  }

  const currentPortal = portalConfig[activeTab]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">FarmConnect</span>
            </motion.div>
            
            <motion.a 
              href="/"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Portal Selection & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Welcome to <span className="text-primary-600">FarmConnect</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose your portal and start your agricultural journey today
              </p>
            </div>

            {/* Portal Selection Tabs */}
            <div className="space-y-4">
              {(['farmer', 'service', 'buyer'] as const).map((portal) => (
                <motion.button
                  key={portal}
                  onClick={() => setActiveTab(portal)}
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    activeTab === portal
                      ? 'border-primary-500 bg-primary-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${portalConfig[portal].color} rounded-xl flex items-center justify-center`}>
                      {portalConfig[portal].icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {portalConfig[portal].title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {portalConfig[portal].subtitle}
                      </p>
                    </div>
                    {activeTab === portal && (
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Portal Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                {currentPortal.icon}
                <span className="ml-2">Key Features</span>
              </h3>
              <ul className="space-y-2">
                {currentPortal.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Side - Login/Register Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            {/* Form Header */}
            <div className="text-center mb-8">
              <div className={`w-20 h-20 bg-gradient-to-r ${currentPortal.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                {currentPortal.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {currentPortal.title}
              </h2>
              <p className="text-gray-600">
                {isLogin ? 'Sign in to your account' : 'Create your account'}
              </p>
            </div>

            {/* Toggle Login/Register */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
                  isLogin
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
                  !isLogin
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  {activeTab === 'service' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                          placeholder="Enter organization name"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-4 focus:ring-primary-200"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            {/* Demo Credentials Hint */}
            {isLogin && activeTab === 'farmer' && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Demo Credentials:</strong><br />
                  Email: <code className="bg-blue-100 px-2 py-1 rounded">farmer@demo.com</code><br />
                  Password: <code className="bg-blue-100 px-2 py-1 rounded">demo123</code>
                </p>
              </div>
            )}

            {isLogin && activeTab === 'service' && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Demo Credentials:</strong><br />
                  Email: <code className="bg-blue-100 px-2 py-1 rounded">service@demo.com</code><br />
                  Password: <code className="bg-blue-100 px-2 py-1 rounded">demo123</code>
                </p>
              </div>
            )}

            {isLogin && activeTab === 'buyer' && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Demo Credentials:</strong><br />
                  Email: <code className="bg-blue-100 px-2 py-1 rounded">buyer@demo.com</code><br />
                  Password: <code className="bg-blue-100 px-2 py-1 rounded">demo123</code>
                </p>
              </div>
            )}

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  {isLogin ? 'Sign up here' : 'Sign in here'}
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
