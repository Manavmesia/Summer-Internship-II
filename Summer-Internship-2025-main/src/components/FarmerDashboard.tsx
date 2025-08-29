// Import required libraries and components
import { motion } from 'framer-motion' // For smooth animations and transitions
import { useState } from 'react' // For managing component state
import { 
  // Navigation and UI icons for farmer dashboard
  Leaf, Truck, Users, ShoppingCart, BarChart3, Calendar, MapPin, DollarSign,
  TrendingUp, AlertCircle, CheckCircle, Clock, Star, Settings, LogOut, Plus,
  Search, Filter, Eye, MessageSquare, FileText, Download, Upload, Crop,
  Warehouse, Car, UserCheck, Bell, Home, Menu, User, Shield
} from 'lucide-react' // Icon library for consistent UI elements

// Main Farmer Dashboard Component - Provides comprehensive interface for crop farmers
const FarmerDashboard = () => {
  // State management for dashboard functionality
  const [activeTab, setActiveTab] = useState('overview') // Controls which section is currently displayed
  const [sidebarOpen, setSidebarOpen] = useState(false) // Controls mobile sidebar visibility
  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false) // Controls sign out confirmation modal

  // Function to show sign out confirmation modal
  const handleSignOut = () => {
    setShowSignOutConfirm(true) // Opens the confirmation dialog
  }

  // Function to confirm sign out and redirect to home page
  const confirmSignOut = () => {
    window.location.href = '/' // Redirects user back to homepage
  }

  // Dashboard statistics data - Key metrics displayed in the overview section
  const dashboardStats = [
    { title: "Total Crops", value: "12", change: "+2", icon: <Crop className="w-6 h-6" />, color: "text-green-600", bgColor: "bg-green-100" }, // Shows total number of crops planted
    { title: "Active Listings", value: "8", change: "+1", icon: <ShoppingCart className="w-6 h-6" />, color: "text-blue-600", bgColor: "bg-blue-100" }, // Shows crops currently for sale
    { title: "Service Requests", value: "5", change: "+3", icon: <Truck className="w-6 h-6" />, color: "text-orange-600", bgColor: "bg-orange-100" }, // Shows pending service requests
    { title: "Total Revenue", value: "$12,450", change: "+15%", icon: <DollarSign className="w-6 h-6" />, color: "text-purple-600", bgColor: "bg-purple-100" } // Shows total earnings from crop sales
  ]

  // Recent activities data - Shows farmer's latest actions and farm activities
  const recentActivities = [
    { type: "crop", message: "Wheat harvest completed", time: "2 hours ago", status: "success" }, // Successful crop harvest
    { type: "service", message: "New vehicle request posted", time: "4 hours ago", status: "pending" }, // Service request creation
    { type: "sale", message: "Rice crop sold for $2,400", time: "1 day ago", status: "success" }, // Successful crop sale
    { type: "offer", message: "Received offer for corn crop", time: "2 days ago", status: "pending" } // Pending buyer offer
  ]

  // Crop listings data - Shows farmer's available and sold crops
  const cropListings = [
    { id: 1, name: "Wheat", quantity: "500 kg", price: "$1.20/kg", status: "active", image: "🌾" }, // Active wheat listing
    { id: 2, name: "Rice", quantity: "300 kg", price: "$1.80/kg", status: "active", image: "🍚" }, // Active rice listing
    { id: 3, name: "Corn", quantity: "400 kg", price: "$0.90/kg", status: "pending", image: "🌽" }, // Pending corn listing
    { id: 4, name: "Soybeans", quantity: "200 kg", price: "$2.10/kg", status: "sold", image: "🫘" } // Sold soybeans
  ]

  // Service requests data - Shows farmer's requests for vehicles, manpower, and equipment
  const serviceRequests = [
    { id: 1, type: "Vehicle", description: "Need truck for wheat transport", location: "Field A", duration: "2 days", status: "pending" }, // Vehicle request
    { id: 2, type: "Manpower", description: "Harvesting crew needed", location: "Field B", duration: "1 week", status: "active" }, // Manpower request
    { id: 3, type: "Equipment", description: "Tractor rental for plowing", location: "Field C", duration: "3 days", status: "completed" } // Equipment request
  ]

  // Buyer offers data - Shows offers received from buyers for farmer's crops
  const offers = [
    { id: 1, crop: "Wheat", buyer: "AgroCorp Ltd", price: "$1.25/kg", quantity: "500 kg", status: "pending" }, // Pending wheat offer
    { id: 2, crop: "Rice", buyer: "Fresh Foods Co", price: "$1.85/kg", quantity: "300 kg", status: "accepted" }, // Accepted rice offer
    { id: 3, crop: "Corn", buyer: "Local Market", price: "$0.95/kg", quantity: "400 kg", status: "rejected" } // Rejected corn offer
  ]

  // Renders the main overview section with dashboard statistics and key information
  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section - Hero banner with greeting and current date */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-primary-100 text-lg">Here's what's happening with your farm today</p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-primary-100">Today's Date</p>
              <p className="text-2xl font-bold">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-green-600 font-medium">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">This Month</span>
              <span className="text-2xl font-bold text-green-600">$12,450</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">+15% from last month</span>
              <span className="text-green-600 font-medium">$1,650 increase</span>
            </div>
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                {activity.status === 'success' ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <Clock className="w-4 h-4 text-yellow-600" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions and Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full btn-primary text-left py-3 px-4">
              <Plus className="w-4 h-4 mr-2 inline" />
              Add New Crop
            </button>
            <button className="w-full btn-outline text-left py-3 px-4">
              <Truck className="w-4 h-4 mr-2 inline" />
              Request Service
            </button>
            <button className="w-full btn-outline text-left py-3 px-4">
              <FileText className="w-4 h-4 mr-2 inline" />
              Generate Report
            </button>
          </div>
        </motion.div>

        {/* Weather Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white"
        >
          <h3 className="text-lg font-semibold mb-4">Weather Forecast</h3>
          <div className="text-center">
            <div className="text-4xl mb-2">☀️</div>
            <div className="text-2xl font-bold mb-1">72°F</div>
            <div className="text-blue-100">Sunny • Perfect for harvesting</div>
            <div className="mt-4 text-sm text-blue-100">
              <p>Humidity: 45%</p>
              <p>Wind: 8 mph</p>
            </div>
          </div>
        </motion.div>

        {/* Market Prices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Prices</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Wheat</span>
              <span className="font-medium text-green-600">$1.20/kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Rice</span>
              <span className="font-medium text-green-600">$1.80/kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Corn</span>
              <span className="font-medium text-green-600">$0.90/kg</span>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">Prices updated 2 hours ago</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  const renderCrops = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Crops</h2>
          <p className="text-gray-600">Manage your crop listings and sales</p>
        </div>
        <button className="btn-primary inline-flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add New Crop
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cropListings.map((crop) => (
          <motion.div
            key={crop.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{crop.image}</div>
              <h3 className="text-lg font-semibold text-gray-900">{crop.name}</h3>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Quantity:</span>
                <span className="font-medium">{crop.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-medium text-green-600">{crop.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  crop.status === 'active' ? 'bg-green-100 text-green-800' :
                  crop.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {crop.status}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 btn-outline text-sm py-2">Edit</button>
              <button className="flex-1 btn-primary text-sm py-2">View Details</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderServices = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Service Requests</h2>
          <p className="text-gray-600">Manage your harvest service requirements</p>
        </div>
        <button className="btn-primary inline-flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          New Request
        </button>
      </div>

      <div className="space-y-4">
        {serviceRequests.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    {service.type === 'Vehicle' ? <Truck className="w-5 h-5 text-primary-600" /> :
                     service.type === 'Manpower' ? <Users className="w-5 h-5 text-primary-600" /> :
                     <Crop className="w-5 h-5 text-primary-600" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{service.type} Request</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Location:</span>
                    <p className="font-medium">{service.location}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <p className="font-medium">{service.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Status:</span>
                    <p className={`font-medium ${
                      service.status === 'active' ? 'text-green-600' :
                      service.status === 'pending' ? 'text-yellow-600' :
                      'text-gray-600'
                    }`}>{service.status}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Offers:</span>
                    <p className="font-medium">3 received</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button className="btn-outline text-sm py-2 px-4">View Offers</button>
                <button className="btn-primary text-sm py-2 px-4">Edit</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview()
      case 'crops': return renderCrops()
      case 'services': return renderServices()
      default: return renderOverview()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">FarmConnect</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="relative group">
                <div className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">John Farmer</span>
                </div>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </button>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button 
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="h-full flex flex-col">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {[
                  { id: 'overview', name: 'Overview', icon: <Home className="w-5 h-5" /> },
                  { id: 'crops', name: 'My Crops', icon: <Crop className="w-5 h-5" /> },
                  { id: 'services', name: 'Service Requests', icon: <Truck className="w-5 h-5" /> },
                  { id: 'offers', name: 'Received Offers', icon: <ShoppingCart className="w-5 h-5" /> },
                  { id: 'reports', name: 'Reports', icon: <BarChart3 className="w-5 h-5" /> },
                  { id: 'profile', name: 'Profile', icon: <User className="w-5 h-5" /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary-100 text-primary-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <button 
                onClick={handleSignOut}
                className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                <LogOut className="w-5 h-5 mr-3" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 lg:ml-0">
          <main className="py-6 px-4 sm:px-6 lg:px-8">
            {renderContent()}
          </main>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sign Out Confirmation Modal */}
      {showSignOutConfirm && (
        <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-75 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogOut className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sign Out</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to sign out? You'll be redirected to the home page.</p>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowSignOutConfirm(false)}
                  className="flex-1 btn-outline py-2"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmSignOut}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default FarmerDashboard
