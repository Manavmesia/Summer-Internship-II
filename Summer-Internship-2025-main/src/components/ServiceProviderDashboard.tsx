// Import required libraries and components
import { motion } from 'framer-motion' // For smooth animations and transitions
import { useState } from 'react' // For managing component state
import { 
  // Navigation and UI icons for service provider dashboard
  Truck, Users, ShoppingCart, BarChart3, Calendar, MapPin, DollarSign,
  TrendingUp, AlertCircle, CheckCircle, Clock, Star, Settings, LogOut, Plus,
  Search, Filter, Eye, MessageSquare, FileText, Download, Upload, Crop,
  Warehouse, Car, UserCheck, Bell, Home, Menu, User, Shield, Wrench,
  Briefcase, Award, TrendingDown
} from 'lucide-react' // Icon library for consistent UI elements

const ServiceProviderDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showSignOutConfirm, setShowSignOutConfirm] = useState(false)

  const handleSignOut = () => {
    setShowSignOutConfirm(true)
  }

  const confirmSignOut = () => {
    window.location.href = '/'
  }

  const dashboardStats = [
    { title: "Active Jobs", value: "8", change: "+3", icon: <Briefcase className="w-6 h-6" />, color: "text-blue-600", bgColor: "bg-blue-100" },
    { title: "Completed Jobs", value: "24", change: "+5", icon: <CheckCircle className="w-6 h-6" />, color: "text-green-600", bgColor: "bg-green-100" },
    { title: "Pending Bids", value: "12", change: "+2", icon: <Clock className="w-6 h-6" />, color: "text-orange-600", bgColor: "bg-orange-100" },
    { title: "Total Earnings", value: "$18,750", change: "+22%", icon: <DollarSign className="w-6 h-6" />, color: "text-purple-600", bgColor: "bg-purple-100" }
  ]

  const recentActivities = [
    { type: "job", message: "Wheat transport job completed", time: "1 hour ago", status: "success" },
    { type: "bid", message: "New bid submitted for corn harvest", time: "3 hours ago", status: "pending" },
    { type: "payment", message: "Payment received for rice transport", time: "1 day ago", status: "success" },
    { type: "request", message: "New service request from Farmer John", time: "2 days ago", status: "pending" }
  ]

  const serviceListings = [
    { id: 1, type: "Vehicle", name: "Truck Transport", description: "Heavy-duty truck for crop transport", rate: "$150/day", status: "active", image: "🚛" },
    { id: 2, type: "Manpower", name: "Harvesting Crew", description: "Experienced farm workers", rate: "$25/hour", status: "active", image: "👷" },
    { id: 3, type: "Equipment", name: "Tractor Rental", description: "Modern tractor for plowing", rate: "$200/day", status: "active", image: "🚜" },
    { id: 4, type: "Vehicle", name: "Pickup Truck", description: "Small truck for local deliveries", rate: "$80/day", status: "inactive", image: "🚚" }
  ]

  const jobRequests = [
    { id: 1, farmer: "John Farmer", type: "Vehicle", description: "Need truck for wheat transport", location: "Field A", duration: "2 days", budget: "$300", status: "pending" },
    { id: 2, farmer: "Sarah Smith", type: "Manpower", description: "Harvesting crew needed", location: "Field B", duration: "1 week", budget: "$1,200", status: "active" },
    { id: 3, farmer: "Mike Johnson", type: "Equipment", description: "Tractor rental for plowing", location: "Field C", duration: "3 days", budget: "$600", status: "completed" }
  ]

  const bids = [
    { id: 1, job: "Wheat Transport", farmer: "John Farmer", bidAmount: "$280", originalBudget: "$300", status: "pending" },
    { id: 2, job: "Harvesting Crew", farmer: "Sarah Smith", bidAmount: "$1,150", originalBudget: "$1,200", status: "accepted" },
    { id: 3, job: "Tractor Rental", farmer: "Mike Johnson", bidAmount: "$580", originalBudget: "$600", status: "rejected" }
  ]

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Service Pro! 🚛</h1>
            <p className="text-blue-100 text-lg">Here's what's happening with your services today</p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <p className="text-blue-100">Today's Date</p>
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
        {/* Earnings Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Earnings Trend</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">This Month</span>
              <span className="text-2xl font-bold text-green-600">$18,750</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: '78%' }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">+22% from last month</span>
              <span className="text-green-600 font-medium">$3,400 increase</span>
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
              Add New Service
            </button>
            <button className="w-full btn-outline text-left py-3 px-4">
              <Search className="w-4 h-4 mr-2 inline" />
              Browse Jobs
            </button>
            <button className="w-full btn-outline text-left py-3 px-4">
              <FileText className="w-4 h-4 mr-2 inline" />
              Generate Report
            </button>
          </div>
        </motion.div>

        {/* Job Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white"
        >
          <h3 className="text-lg font-semibold mb-4">Job Opportunities</h3>
          <div className="text-center">
            <div className="text-4xl mb-2">💼</div>
            <div className="text-2xl font-bold mb-1">15 New Jobs</div>
            <div className="text-green-100">Available in your area</div>
            <div className="mt-4 text-sm text-green-100">
              <p>High Priority: 3</p>
              <p>Medium Priority: 8</p>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Success Rate</span>
              <span className="font-medium text-green-600">94%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Rating</span>
              <span className="font-medium text-yellow-600">4.8/5.0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Response Time</span>
              <span className="font-medium text-blue-600">2.3 hrs</span>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">Updated 1 hour ago</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  const renderServices = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Services</h2>
          <p className="text-gray-600">Manage your service offerings and availability</p>
        </div>
        <button className="btn-primary inline-flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add New Service
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceListings.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{service.image}</div>
              <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium">{service.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rate:</span>
                <span className="font-medium text-green-600">{service.rate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  service.status === 'active' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {service.status}
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

  const renderJobs = () => (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Job Requests</h2>
          <p className="text-gray-600">Browse and bid on farmer service requests</p>
        </div>
        <button className="btn-primary inline-flex items-center">
          <Search className="w-4 h-4 mr-2" />
          Browse More Jobs
        </button>
      </div>

      <div className="space-y-4">
        {jobRequests.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    {job.type === 'Vehicle' ? <Truck className="w-5 h-5 text-blue-600" /> :
                     job.type === 'Manpower' ? <Users className="w-5 h-5 text-blue-600" /> :
                     <Wrench className="w-5 h-5 text-blue-600" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.type} Request</h3>
                    <p className="text-sm text-gray-600">{job.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Farmer:</span>
                    <p className="font-medium">{job.farmer}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Location:</span>
                    <p className="font-medium">{job.location}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Budget:</span>
                    <p className="font-medium text-green-600">{job.budget}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Status:</span>
                    <p className={`font-medium ${
                      job.status === 'active' ? 'text-green-600' :
                      job.status === 'pending' ? 'text-yellow-600' :
                      'text-gray-600'
                    }`}>{job.status}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button className="btn-outline text-sm py-2 px-4">View Details</button>
                <button className="btn-primary text-sm py-2 px-4">Submit Bid</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderBids = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">My Bids</h2>
        <p className="text-gray-600">Track the status of your submitted bids</p>
      </div>

      <div className="space-y-4">
        {bids.map((bid) => (
          <motion.div
            key={bid.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{bid.job} - {bid.farmer}</h3>
                    <p className="text-sm text-gray-600">Bid Amount: {bid.bidAmount}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Your Bid:</span>
                    <p className="font-medium text-green-600">{bid.bidAmount}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Original Budget:</span>
                    <p className="font-medium">{bid.originalBudget}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Status:</span>
                    <p className={`font-medium ${
                      bid.status === 'accepted' ? 'text-green-600' :
                      bid.status === 'rejected' ? 'text-red-600' :
                      'text-yellow-600'
                    }`}>{bid.status}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Submitted:</span>
                    <p className="font-medium">2 days ago</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <button className="btn-outline text-sm py-2 px-4">View Details</button>
                {bid.status === 'pending' && (
                  <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                    Withdraw Bid
                  </button>
                )}
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
      case 'services': return renderServices()
      case 'jobs': return renderJobs()
      case 'bids': return renderBids()
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">FarmConnect</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">Service Pro</span>
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
                  { id: 'services', name: 'My Services', icon: <Wrench className="w-5 h-5" /> },
                  { id: 'jobs', name: 'Job Requests', icon: <Briefcase className="w-5 h-5" /> },
                  { id: 'bids', name: 'My Bids', icon: <FileText className="w-5 h-5" /> },
                  { id: 'reports', name: 'Reports', icon: <BarChart3 className="w-5 h-5" /> },
                  { id: 'profile', name: 'Profile', icon: <User className="w-5 h-5" /> }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-900'
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

export default ServiceProviderDashboard
